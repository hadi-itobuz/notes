import Note from "../src/models/note.js";
import User from "../src/models/user.js";
import { faker } from '@faker-js/faker';
const genrateNote =async (num) => {
    const users = await User.find({});
    const l = users.length;
    console.log('l :>> ', l);
    for (let index = 0; index < num; index++) {
        const userId = users[Math.floor(Math.random()*l)]._id;
        const title = faker.science.chemicalElement().name;
        const body = faker.lorem.lines({ min: 1, max: 5 });
        const note = new Note({ userId, title, body });
        await note.save();
    }
}
export default genrateNote;