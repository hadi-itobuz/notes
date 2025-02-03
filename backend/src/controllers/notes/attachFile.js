import multer from "multer"
import path from "path";
import Note from "../../models/note.js";

const storage = multer.diskStorage({
    destination: './uploads',
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({
    storage: storage,
    limits: { fileSize: 1000000 } // Limit file size to 1MB
});

const attachFile = async (req, res) => {
    try {
        if (!req.file) return res.status(400).send('No file uploaded.');

        const note = await Note.findById(req.params.id);
        note.fileName = req.file.filename;
        note.save();
        res.status(200).send(`File uploaded successfully: ${req.file.filename}`);
    } catch (err) {
        console.log('err :>> ', err);
        res.status(500).send({
            success: false,
            messsage: "Unable to attach file"
        })
    }

}

export { attachFile, upload };