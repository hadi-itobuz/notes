import User from "../../models/user.js";
import bcrypt from "bcryptjs";
const changePassword = async (req, res) => {
    const { userId, oldPassword, newPassword } = req.body;
    console.log('userId :>> ', userId);
    const user=await User.findById(userId);
    console.log('user.password :>> ', user.password);
    if(bcrypt.compareSync(oldPassword,user.password)){
        user.password=bcrypt.hashSync(newPassword)
        await user.save();
        res.status(200).send({
            success:true,
            message: "Password changed success fully"
        })
    }else{
        res.status(400).send({
            success:true,
            message: "Can't change password"
        })
    }
}
export default changePassword;