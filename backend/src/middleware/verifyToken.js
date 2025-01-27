import jwt from "jsonwebtoken"

const verifyToken = (req, res, next, token) => {//this isn't a middleware
    jwt.verify(token, process.env.SECRET_KEY, function (err, decoded) {
        if (err) {
            res.status(400).send({
                message: "Email verification failed, possibly the link is invalid or expired",
                success: false
            });
        }
        else {
            req.body.userId = decoded.id;//
            next();
        }
    });
}

const extractToken = (req) => {
    if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
        return req.headers.authorization.split(' ')[1];
    } else if (req.query && req.query.token) {
        return req.query.token;
    }
    return null;
}

const verifyRegistrationToken = (req, res, next) => {
    const { token } = req.params;
    verifyToken(req, res, next, token);
}

const verifyAcessToken = (req, res, next) => {
    const token = extractToken(req);
    verifyToken(req, res, next, token);
}

export { verifyRegistrationToken, verifyAcessToken };