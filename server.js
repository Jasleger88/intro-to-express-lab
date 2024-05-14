// Number 1

const express = require('express')
const app = express()
const port = 3000

app.get('/greetings/:username', (req, res) => {
    const username = req.params.username;
    res.send(`Hello, ${req.params.username}!`);
});
//Number 2
app.get('/roll/:number', (req, res) => {
    const number = parseInt(req.params.number)
    if (isNaN(number)) {
        return res.send("You need to give a number")
    } else {
        const randomNumber = Math.floor(Math.random() * number + 1)
        return res.send(`My random number is; ${randomNumber}`)
    }
});

//Number 3

const collectibles = [
    { name: 'shiny ball', price: 5.95 },
    { name: 'autographed picture of a dog', price: 10 },
    { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
];

app.get('/collectibiles/:index_parameter', (req, res) => {
    const index = parseInt(req.params.index_parameter);
    if (index < 0 || index >= collectibles.length || isNaN(index)) {
    return res.send('This item is not yet in stock. Check back soon!');
}
const collectible = collectibles[index];

const responseMessage= `So you want the ${collectible.name}? For ${collectible.price}, it can be yours!`;
res.send(responseMessage);
});

// Number 4

const shoes = [
    { name: "Birkenstocks", price: 50, type: "sandal" },
    { name: "Air Jordans", price: 500, type: "sneaker" },
    { name: "Air Mahomeses", price: 501, type: "sneaker" },
    { name: "Utility Boots", price: 20, type: "boot" },
    { name: "Velcro Sandals", price: 15, type: "sandal" },
    { name: "Jet Boots", price: 1000, type: "boot" },
    { name: "Fifty-Inch Heels", price: 175, type: "heel" }
];

app.get('/shoes', (req, res)=> {
    const minPrice = parseInt(req.query['min-price']);
    const maxPrice = parseInt(req.query['max-price']);
    const shoeType = req.query.type;

    let filteredShoes = shoes.filter(shoe => {
        if (minPrice && shoe.price < minPrice) return false;
        if (maxPrice && shoe.price > maxPrice) return false;
        if (shoeType && shoe.type !== shoeType) return false;
        return true;
    });
res.json(filteredShoes)
    });

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})



