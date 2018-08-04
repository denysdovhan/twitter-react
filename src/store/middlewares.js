import { createLogger } from 'redux-logger';
import { routerMiddleware as createRouterMiddleware } from 'connected-react-router';
import history from '../utils/history';

export const loggerMiddleware = createLogger({ collapsed: true });
export const routerMiddleware = createRouterMiddleware(history);

const middlewares = [routerMiddleware];

if (process.env.NODE_ENV !== 'production') {
  // Use `push` and `unshift` to add more middlewares for development
  middlewares.unshift(loggerMiddleware);
}

export default middlewares;
