    const express = require('express');
    const app = express();
    const port = 3000; // Or any desired port

    // Serve static files (HTML, CSS, images, JS) from a 'public' directory
    app.use(express.static('public'));

    // Define a route for the homepage
    app.get('/', (req, res) => {
      res.sendFile(__dirname + '/public/index.html'); // Send the main HTML file
    });

    // Start the server
    app.listen(port, () => {
      console.log(`Server listening at http://localhost:${port}`);
    });