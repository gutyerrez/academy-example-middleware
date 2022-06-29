import { Router as ServerRouter } from 'express'

import { VersionController } from 'Controllers/VersionController'
import { AuthenticationMiddleware } from 'Middlewares/AuthenticationMiddleware'

const Router = ServerRouter()

Router.get('/', AuthenticationMiddleware.handle, VersionController.index)

export { Router }