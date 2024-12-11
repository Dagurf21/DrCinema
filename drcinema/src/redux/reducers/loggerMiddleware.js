import { Middleware } from 'redux';

// Custom Logger Middleware
const loggerMiddleware: Middleware = (storeAPI) => (next) => (action) => {
    const result = next(action); // Pass the action to the next middleware/reducer
    return result; // Return the result (useful for async actions)
};

export default loggerMiddleware;
