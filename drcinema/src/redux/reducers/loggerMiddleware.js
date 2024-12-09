import { Middleware } from 'redux';

// Custom Logger Middleware
const loggerMiddleware: Middleware = (storeAPI) => (next) => (action) => {
    console.log('Dispatching Action:', action);
    const result = next(action); // Pass the action to the next middleware/reducer
    console.log('Next State:', storeAPI.getState());
    return result; // Return the result (useful for async actions)
};

export default loggerMiddleware;
