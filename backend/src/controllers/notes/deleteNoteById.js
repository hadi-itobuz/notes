import Note from "../../models/note.js";
const deleteById = async (req, res) => {
    const id = req.params.id;
    const userId=req.body.userId;
    try {
        const note = await Note.findOneAndDelete({ _id: id, userId });
        if (note) {
            res.status(200).send({
                success: true,
                message: "Note deleted sucess fully"
            })
        } else {
            res.status(404).send({
                success: false,
                message: "Note not found"
            })
        }
    } catch (err) {
        console.log('err :>> ', err);
        res.status(500).send({
            success: false,
            message: "Coudn't delete note"
        })
    }
}
export default deleteById;