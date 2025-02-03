import Note from "../../models/note.js";
const getSorted = async (req, res) => {
    try {
        const { userId } = req.body;
        let { page, sortBy } = req.body;
        const fields = ["title", "body", "createdOn"];
        if (!page) page = 1;
        if (!sortBy) sortBy = "title";
        if (page <= 0) res.status(400).send({ success: false, message: "Invalid page count" })
        else if (!fields.includes(sortBy)) res.status(400).send({ success: false, message: "Invalid sortBy field" })
        else {
            const notes = await Note.find({ userId }, null).skip(page * 4 - 4).limit(4).sort({ [sortBy]: 1 });
            res.status(200).send({
                success: true,
                notes
            })
        }
    } catch (err) {
        console.log('err :>> ', err);

        res.status(500).send({
            success: false,
            message: "Unable to sort message"
        })
    }
}
export default getSorted;