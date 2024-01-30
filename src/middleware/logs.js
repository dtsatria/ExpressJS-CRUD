const logRequest = (req, res, next) => {
    console.log('Terjadi HIT API', req.path);
    next();
};


module.exports = logRequest;