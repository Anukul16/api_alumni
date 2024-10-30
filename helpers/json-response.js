module.exports = Object.freeze({
    error: (message,extra=[]) => {
        return {'status': 'error', 'message': message,'extras':extra}
    },
    warning: (message,extra=[]) => {
        return {'status': 'warning', 'message': message,'extras':extra}
    },
    success: (message,extra=[]) => {
        return {'status': 'success', 'message': message,'extras':extra}
    }
});
