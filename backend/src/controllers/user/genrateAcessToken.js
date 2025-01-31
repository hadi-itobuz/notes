import generateToken from "../../helper/genrateToken.js";
//validity of refresh token was checked in middleware
const genrateAcessToken = (req, res) => {
    try {
        res.status(200).send({
            success: true,
            message: "acess token genrated sucessfully",
            accessToken: generateToken('accessToken', req.body.userId, '1h'),
        })
    } catch (err) {
        console.log('err :>> ', err);
        res.status(500).send({
            success: false,
            message: " can't create access token",
        })
    }
}
export default genrateAcessToken;