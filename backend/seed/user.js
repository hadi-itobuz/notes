import User from "../src/models/user.js";
import bcrypt from "bcryptjs";
const genrateUser = async (num) => {
    for (let i = 0; i < num; i++) {
        const name = `User${i}`;
        const email = `${i}user@itobuz.com`
        const password = `User@123${i}`
        const user = new User({ name, email, password: bcrypt.hashSync(password, 10), isVerified: true });
        await user.save();
    }
}
export default genrateUser;