import Note from "../../models/note.js";
const editNote = async (req, res) => {
    const id = req.params.id;
    const { title, body } = req.body;
    const userId= req.body.userId;
    try {
        const note = await Note.findOne({ userId, title });
        if (!note) {
            await Note.findByIdAndUpdate(id, { title, body }, { new: true });
            res.status(201).send({
                success: true,
                message: "Note edited"
            })
        }else if(note.id===id){
            await Note.findByIdAndUpdate(id, { title, body }, { new: true });
            res.status(201).send({
                success: true,
                message: "Note edited"
            })
        } 
        else {
            res.status(400).send({
                success: false,
                message: "Unable to delete: duplicate title"
            })
        }

    } catch (err) {
        console.log('err :>> ', err);
        res.status(400).send({
            success: false,
            message: "Unable to edit note"
        })
    }
}
export default editNote;