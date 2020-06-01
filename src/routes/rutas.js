const express = require('express');
const tabla = require('../models/tabla');
const router = express.Router();

var message = "";

router.get('/', async(req, res) => {
    const d = await tabla.find();
    console.log(d);
    res.render('index', { message: message });
});

router.post('/datos', async(req, res) => {

    if (req.body.email != "") {
        const { email, password } = req.body;
        const db = new tabla({ email, password });
        await db.save();
    }

    message = "Error con el correo o contraseña";
    res.redirect('/');

});

module.exports = router;