import Note from "../../models/note.js";
const getNotes = async (req, res) => {
    try {
        const { userId } = req.body;
        let { pageNumber, notePerPage, sortBy, order, searchText } = req.body;
        const fields = ["title", "body", "createdOn"];

        if (!searchText) searchText = "";//no serch text by default
        if (!pageNumber) pageNumber = 1;//first page
        if (!sortBy) sortBy = "title";
        if (!notePerPage) notePerPage = 4;//4 notes per page
        if (!order || (order != 1 && order != -1)) order = 1;//ascending order
        if (pageNumber <= 0) res.status(400).send({ success: false, message: "Invalid page count" })
        else if (!fields.includes(sortBy)) res.status(400).send({ success: false, message: "Invalid sortBy field" })
        else {
            const notes = await Note.find({
                userId,
                '$or': [
                    { 'title': { '$regex': `${searchText}`, '$options': 'i' } },//searching title
                    { 'body': { '$regex': `${searchText}`, '$options': 'i' } }//serching body
                ]
            }).skip(notePerPage * (pageNumber - 1)).limit(notePerPage).sort({ [sortBy]: order });//pagenation and sorting

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
export default getNotes;