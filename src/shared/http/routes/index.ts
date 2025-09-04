import { Router } from "express";
import { roulesRoutes } from "@roles/http/routes/roles.routes";

const routes = Router()

routes.use('/roles', roulesRoutes)

export { routes }
