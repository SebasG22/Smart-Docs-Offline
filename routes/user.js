const express = require("express");
var router = express.Router();
const User = require("./../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

router.get('/', function (req, res, next) {
    User.find().then(function (users) {
        res.send(users);
    });
});

router.post('/registerUser', function (req, res, next) {
    var user = new User({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        role: req.body.role,
        company: req.body.company,
        cellphone: req.body.cellphone,
        password: bcrypt.hashSync(req.body.password, 10),
        username: req.body.username,
        email: req.body.email,
    });

    user.save(function (err, result) {
        if (err) {
            return res.status(500).json({
                title: 'An error ocurred',
                error: err
            })
        }

        res.status(201).json({
            message: 'User was saved',
            obj: result
        })
    })
});

router.post('/signin', function (req, res, next) {
    User.findOne({ username: req.body.username }, function (err, user) {
        if (err) {
            return res.status(500).json({
                title: 'An error ocurred',
                error: err
            });
        }

        if (!user) {
            return res.status(500).json({
                title: 'Loging Failed',
                error: { message: 'Invalid login credentials' }
            });
        }
        if (!bcrypt.compareSync(req.body.password, user.password)) {
            return res.status(500).json({
                title: 'Loging Failed',
                error: { message: 'Invalid login credentials' }
            });
        }
        var token = jwt.sign({ user: user }, 'secret', { expiresIn: 7200 });
        res.status(200).json({
            message: "Sucessfully signin",
            token: token,
            user: user
        });
    });
});

router.delete('/:id', function (req, res, next) {
    Site.findById(req.params.id, function (err, template) {
        if (err) {
            return res.status(500).json({
                title: 'An error ocurred',
                error: err
            });
        }

        if (!template) {
            return res.status(500).json({
                title: 'No Site Founded',
                error: { message: "Site not found" }
            });
        }

        template.remove(function (err, result) {
            if (err) {
                return res.status(500).json({
                    title: 'An error ocurred',
                    error: err
                });
            }
            res.status(201).json({
                message: 'The site was deleted',
                obj: result
            });
        })
    });
});

module.exports = router;