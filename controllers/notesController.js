const Note = require('../models/note')
const fetchNotes = async (req,res) => { 
    // find notes
    const notes = await Note.find();
    // respond with them 
    res.json({notes: notes});
}

const fetchNote = async (req,res) => { 
    // get id off the url
    const noteId = req.params.id; 
    // find the note using that id 
    const note = await Note.findById(noteId);
    res.json({note: note})
}

const createNote = async (req, res) => { 
    // get the send in data off request body 
    const title = req.body.title; 
    const body = req.body.body;

    // create a note with it 
    const note = await Note.create({
        title:title, 
        body:body,
    }); 

    // respond with a new note 
     res.json({note: note});
}

const updateNote = async (req, res) => { 
    // get id off url 
    const noteId = req.params.id;
    // get data off request body 
     const title = req.body.title; 
     const body = req.body.body; 
    // find an update record 
    await Note.findByIdAndUpdate(noteId, {
    title, 
    body, 
    })

    const note = await Note.findById(noteId); 
    res.json({note: note})
}

const deleteNote = async (req, res) => { 
    // get id off url 
    const noteId = req.params.id;
    // delete record
    await Note.deleteOne({ _id: noteId })
//    respond
    res.json({success: 'record deleted'})
}

module.exports = {
    fetchNotes: fetchNotes, 
    fetchNote: fetchNote, 
    createNote: createNote,
     updateNote: updateNote, 
     deleteNote:deleteNote,
    };