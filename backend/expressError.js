// Basic error handler
class ExpressError extends Error {
    constructor(message, status) {
        super();
        this.message = message;
        this.status = status;
    }
}

// 404 error handler
class NotFoundError extends ExpressError {
    constructor(message = 'Not Found') {
        super(message, 404);
    }
}

module.exports = { ExpressError, NotFoundError };