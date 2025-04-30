const express = require('express');
const app = express();
const port = 3000;


app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => res.render('home'));
app.get('/download', (req, res) => res.render('download'));
app.get('/how-to-use', (req, res) => res.render('how-to-use'));
app.get('/about', (req, res) => res.render('about'));

const PORT = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on http://localhost:${port}`));





