import Note from "./Note";
import NotesContainerHeader from "./NoteContainerHeader";
const notes = [
    {
        "_id": "679cc4d64e26daccdbbc7d6a",
        "userId": "679cc4d54e26daccdbbc7d57",
        "title": "Lead",
        "body": "Bos ustilo curso desidero canto.\nAeternus cuppedia defluo.\nVarius viscus ventosus aeneus tibi.",
        "createdOn": "2025-01-31T12:40:54.240Z",
        "__v": 0
    },
    {
        "_id": "679cc4d64e26daccdbbc7d72",
        "userId": "679cc4d54e26daccdbbc7d57",
        "title": "Aluminium",
        "body": "Varius sordeo coruscus suffragium tolero calculus.\nVirga pax charisma deinde ara censura ustilo asper soleo taedium.\nToties audio eius aduro.\nCuriositas solum coepi amita appono delectatio tantum auctor tergiversatio.",
        "createdOn": "2025-01-31T12:40:54.244Z",
        "__v": 0
    },
    {
        "_id": "679cc4d64e26daccdbbc7d8a",
        "userId": "679cc4d54e26daccdbbc7d57",
        "title": "Promethium",
        "body": "Caute toties deleniti ademptio tricesimus sapiente.",
        "createdOn": "2025-01-31T12:40:54.257Z",
        "__v": 0
    },
    {
        "_id": "679cc4d64e26daccdbbc7d98",
        "userId": "679cc4d54e26daccdbbc7d57",
        "title": "Tantalum",
        "body": "Cicuta impedit tredecim audentia carcer creta necessitatibus delego brevis cimentarius.\nCuius cur credo arbor demo.\nVomer sumo apparatus uberrime causa quasi.",
        "createdOn": "2025-01-31T12:40:54.267Z",
        "__v": 0
    },
    {
        "_id": "679cc4d64e26daccdbbc7dae",
        "userId": "679cc4d54e26daccdbbc7d57",
        "title": "Flerovium",
        "body": "Caelum cena reiciendis arcesso depono cervus voluptatibus cruentus.\nQuos cura circumvenio paens cubo sumptus demo solutio custodia nobis.\nAlo acidus cavus ullam aeger.",
        "createdOn": "2025-01-31T12:40:54.279Z",
        "__v": 0
    },
    {
        "_id": "679cc53a2fdd944accb1f782",
        "userId": "679cc4d54e26daccdbbc7d57",
        "title": "use2 2",
        "body": "user 2",
        "createdOn": "2025-01-31T12:42:34.323Z",
        "__v": 0
    }
]
const NotesContainer = () => {
    return (

        <div className="container p-3">
            <h1>NOTES...</h1>
            <NotesContainerHeader />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {notes.map(note => (<Note key={note._id} note={note} />))}
            </div>
        </div>
    )
}
export default NotesContainer;