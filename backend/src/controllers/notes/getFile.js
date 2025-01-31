import path from "path";
import * as url from 'url';
import Note from "../../models/note.js";
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
const getFile = async (req, res) => {

    const note = await Note.findById(req.params.id);
    console.log('note.fileName :>> ', note.fileName);
    const options = {
        root: path.join(__dirname, '../../../uploads')
    };
    const fileName = note.fileName;
    res.sendFile(fileName, options, function (err) {
        if (err) {
            console.error('Error sending file:', err);
        } 
    });
}
export default getFile;