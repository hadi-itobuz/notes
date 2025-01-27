import jwt from 'jsonwebtoken';
function generateToken(id) {
    const payload = {id};
    const secret = process.env.SECRET_KEY;
    const options = { expiresIn: '1h' };
    return jwt.sign(payload, secret, options);
}
export default generateToken;