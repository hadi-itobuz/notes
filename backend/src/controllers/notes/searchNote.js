import Note from "../../models/note.js";
import User from "../../models/user.js"
const searchNote = async (req, res) => {
    try {
        const { userId } = req.body;
        const searchText=req.query.searchText;
        if(searchText){
            const notes = await Note.find({
                userId,
                '$or': [
                    { 'title': { '$regex': `${searchText}`, '$options': 'i' } },
                    { 'body': { '$regex': `${searchText}`, '$options': 'i' } }
                ]
            })
            res.status(200).send({
                success: true,
                message: `${notes.length} notes found`,
                notes
            });
        }else res.status(500).send({
            success: false,
            message: "Unable to search notes"
        })
        
    } catch (err) {
        res.status(500).send({
            success: false,
            message: "Unable to search notes"
        })
    }
}
export default searchNote;