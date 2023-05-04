const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;
const categories = require('./data/categories.json');
const blogs = require('./data/blogs.json');
const foods = require('./data/foods.json');
const recipes = require('./data/recipes.json');

app.use(cors());

app.get('/', (req, res) => {
    res.send('Master chef is running')
});

app.get('/categories', (req, res) => {
    res.send(categories);
});

app.get("/categories/:id", (req, res) => {
  const id = req.params.id;
  const selectedCategories = categories.find((n) => n._id === id);
  res.send(selectedCategories);
});

app.get('/blogs', (req, res) => {
    res.send(blogs);
})
app.get('/foods', (req, res) => {
    res.send(foods);
})
app.get('/recipes', (req, res) => {
    res.send(recipes);
})

app.listen(port, () => {
    console.log(`Master chef is listening on port : ${port}`)
})

