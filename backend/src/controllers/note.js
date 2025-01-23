import Note from "../models/note.js";

//function to add new note
const addNote = async (req, res) => {
    const { userId, title, body } = req.body;
    try {
        const note = new Note({ userId, title, body });
        await note.save();
        res.status(200).send({
            success: true,
            message: "New note Created"
        })
    } catch (err) {
        console.log('err :>> ', err);
        res.status(400).send({
            success: false,
            message: "Unable to create note"
        })
    }
}
//function to get all notes
const getAll = async (req, res) => {
    const { userId } = req.body;
    try {
        const notes = await Note.find({ userId: userId });
        res.status(200).send({
            success: true,
            message: "Notes retrived",
            notes
        })
    } catch (err) {
        console.log('err :>> ', err);
        res.status(500).send({
            success: false,
            message: "Unable to get notes"
        })
    }
}
//search note

const getById=async (req,res)=>{
    const {id}=req.body;
    try{
        const note=await Note.findById(id);
        console.log('note :>> ', note);
        if(note){
            res.status(200).send({
                success:true,
                note
            })
        }else{
            res.status(404).send({
                success:false,
                message:"Note not found"
            })
        }
    }catch(err){
        res.status(500).send({
            success:false,
            message:"Can't get note"
        })
    }
}

const deleteById=async (req,res)=>{
    const {id}=req.body;
    try{
        const note=await Note.findByIdAndDelete(id);
        console.log('note :>> ', note);
        if(note){
            res.status(200).send({
                success:true,
                message:"Note deleted sucess fully"
            })
        }else{
            res.status(404).send({
                success:false,
                message:"Note not found"
            })
        }

    }catch(err){
        res.status(500).send({
            success:false,
            message:"Can't delete note"
        })
    }
}

export { addNote, getAll ,getById, deleteById};