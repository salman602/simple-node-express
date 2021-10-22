const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());

app.use(express.json())

const members = [
    { id: 0, name: 'Sayedul Haque', email: 'sayedul@haque.com' },
    { id: 1, name: 'Saleha Akter', email: 'saleha@akter.com' },
    { id: 2, name: 'Salman Rahman', email: 'salman@rahman.com' },
    { id: 3, name: 'Shahriar Rahman', email: 'shahriar@rahman.com' },
    { id: 4, name: 'Sahidur Rahman', email: 'sahidur@rahman.com' },
    { id: 5, name: 'Sabiha Rahman', email: 'sabiha@rahman.com' }
];

app.get('/', (req, res) => {
    res.send('I am practising node js and express js')
})

app.get('/members', (req, res) => {
    const search = req.query.search;
    if (search) {
        const searchResult = members.filter(member => member.name.toLowerCase().includes(search));
        res.send(searchResult);
    }
    else {
        res.send(members)
    }
})

app.post('/members', (req, res) => {
    const newMember = req.body;
    newMember.id = members.length;
    members.push(newMember);
    // console.log('hitting the post ', req.body)
    res.json(newMember)
})

app.get('/members/:id', (req, res) => {
    const id = req.params.id;
    const member = members[id];
    res.send(member)
})

app.listen(port, () => {
    console.log(`Listening from port no: ${port}`)
})