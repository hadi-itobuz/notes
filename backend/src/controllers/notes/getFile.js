import path from "path";
import * as url from 'url';
import Note from "../../models/note.js";
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
const getFile = async (req, res) => {
    try {
        const note = await Note.findById(req.params.id);//geting note
        const options = {
            root: path.join(__dirname, '../../../uploads')
        };
        const fileName = note.fileName;//file name from note
        res.sendFile(fileName, options, function (err) {
            if (err) {
                console.error('Error sending file:', err);
            }
        });
    } catch (err) {
        console.log('err :>> ', err);
        res.status(500).send({
            success:false,
            message:"Unable to het file"
        })
    }

}
export default getFile;