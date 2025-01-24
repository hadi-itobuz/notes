import jwt from "jsonwebtoken"

const verifyToken = (req, res, next) => {
    const { token } = req.params;
    jwt.verify(token, process.env.SECRET_KEY, function (err, decoded) {
        if (err) {
            res.status(400).send({
                message: "Email verification failed, possibly the link is invalid or expired",
                success: false
            });
        }
        else {
            next();
        }
    });
}
export default verifyToken;