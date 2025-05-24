let express = require('express');
const app = express();
app.use(express.static(__dirname + '/public'));

// route to handle POST requests on /api/notes
app.post('/api/notes', (req, res) => {
  const noteData = req.body;
  
  // create a new Node.js instance and log the data to the console
  const logger = require('./logger');
  logger.log(`Received ${noteData.title} as a new note`);
  
  // send the response back to the client with the note data
  res.json({ id: Math.random(), title: noteData.title });
});

// start the server on port 3000
app.listen(3000, () => console.log('Server is running on http://localhost:3000'));
