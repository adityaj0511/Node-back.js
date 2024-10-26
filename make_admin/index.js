const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const { logger } = require('./middlewares/logger'); 
const { auth } = require('./middlewares/auth');     
const { addID } = require('./middlewares/addID');   

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(logger);

let db = JSON.parse(fs.readFileSync('./db.json'));

app.use('/add/hero', addID);


app.post('/add/hero', (req, res) => {
    const newHero = req.body;
    db.heroes.push(newHero);
    fs.writeFileSync('./db.json', JSON.stringify(db, null, 2));
    res.status(200).json(db.heroes);
});

app.get('/heroes', (req, res) => {
    res.status(200).json(db.heroes);
});

app.patch('/update/villain/:hero_id', auth, (req, res) => {
    const heroId = parseInt(req.params.hero_id);
    const hero = db.heroes.find(h => h.id === heroId);
    if (!hero) return res.status(404).json({ message: "Hero not found" });

    hero.villains.push(req.body);
    fs.writeFileSync('./db.json', JSON.stringify(db, null, 2));
    res.status(200).json(hero);
});

app.delete('/delete/hero/:hero_id', auth, (req, res) => {
    const heroId = parseInt(req.params.hero_id);
    db.heroes = db.heroes.filter(h => h.id !== heroId);
    fs.writeFileSync('./db.json', JSON.stringify(db, null, 2));
    res.status(200).json(db.heroes);
});

app.listen(PORT, () => {
    console.log(`Server is running on:${PORT}`);
});
