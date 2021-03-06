// eslint-disable-next-line
/// <reference path="express-prometheus-middleware.d.ts"/>

import * as Sentry from '@sentry/node'

import './env'

import express from 'express'
import cors from 'cors'
import path from 'path'
import bodyParser from 'body-parser'
import swaggerUi from 'swagger-ui-express'
import prometheusMiddleware from 'express-prometheus-middleware'

import data from './swagger.json'

import { expressLogger } from './shared/logger'
import { RegisterRoutes } from './routes/routes'

const app = express()

Sentry.init({ dsn: process.env.SENTRY_DSN })

// Middleware (order is important)
app.use(cors())
app.use(Sentry.Handlers.requestHandler())
app.use(expressLogger)
app.use(bodyParser.json({ limit: '10mb' }))

// Analytics Metrics
if (process.env.NODE_ENV !== 'test') {
  app.use(
    prometheusMiddleware({
      metricsPath:            '/metrics',
      collectDefaultMetrics:  true,
      requestDurationBuckets: [0.1, 0.5, 1, 1.5]
    })
  )
}

// Swagger Docs
if (process.env.ENVIRONMENT !== 'prod') {
  app.use('/v1/api/swagger', express.static(path.join(__dirname, './swagger.json')))
  app.use('/v1/api-docs', swaggerUi.serve)
  app.get('/v1/api-docs', swaggerUi.setup(data))
}

// Routes
RegisterRoutes(app)

// The error handler must be before any other error middleware and after all controllers
app.use(Sentry.Handlers.errorHandler())

// Server React App
if (process.env.ENVIRONMENT !== 'local') {
  app.use(express.static(path.join(__dirname, './public')))
  app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, './public', 'index.html'))
  })
}

export default app
