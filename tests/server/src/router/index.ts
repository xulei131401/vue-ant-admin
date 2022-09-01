import Router from 'koa-router';
import AppRoutes from './routes';
// router
const router = new Router();
AppRoutes.forEach((route) => router[route.method](route.path, route.action));

export default router;
