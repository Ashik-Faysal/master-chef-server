const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;
const categories = require('./data/categories.json');
const blogs = require('./data/blogs.json')

app.use(cors());

app.get('/', (req, res) => {
    res.send('Master chef is running')
});

app.get('/categories', (req, res) => {
    res.send(categories);
});
app.get('/blogs', (req, res) => {
    res.send(blogs);
})

app.listen(port, () => {
    console.log(`Master chef is listening on port : ${port}`)
})

