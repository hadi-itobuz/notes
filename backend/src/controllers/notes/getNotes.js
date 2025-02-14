import Note from "../../models/note.js";
const getNotes = async (req, res) => {
    try {
        const { userId } = req.body;
        let { pageNumber, notePerPage, sortBy, order, searchText } = req.body;
        const fields = ["title", "body", "createdOn", "modifiedOn"];

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
            }).skip(notePerPage * (pageNumber - 1)).limit(notePerPage).collation({ locale: "en" }).sort({ [sortBy]: order });//pagenation and sorting
            const noteCount= await Note.countDocuments({userId});
            res.status(200).send({
                success: true,
                notes, noteCount,
                pageCount : Math.ceil(noteCount/notePerPage)
            });
        }
    } catch (err) {
        console.log('err :>> ', err);

        res.status(500).send({
            success: false,
            message: "unable to get notes"
        });
    }
}
export default getNotes;