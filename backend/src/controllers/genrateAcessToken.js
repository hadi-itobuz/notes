import generateToken from "../helper/genrateToken.js";
const genrateAcessToken = (req, res) => {
    try {
        res.status(200).send({
            success: true,
            message: "acess token genrated sucessfully",
            accessToken: generateToken('accessToken', req.body.userId, '45m'),
        })
    } catch (err) {
        res.status(500).send({
            success: false,
            message: " can't create access token",
        })
    }
}
export default genrateAcessToken;