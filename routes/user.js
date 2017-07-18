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
        fullname: req.body.fullname,
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

/**
 * Method: Login Route to acces to the application
 * @param {Object} Request - Request Object contains data about the user request like username and password
 * @param {Object} Response - Using the obejct you can send a response to the user
 * @param {function} next - Callback to continue with the next line
 * First go to the user database and find the user, if the user doens't exist send a 500 error code.
 * If the user exist, compare the password with the hash saved on the database. If the password doesnt match, send a 500 error code.
 * If the password match, generate a token a send to the user using 200 success code.
 * The user properties like region, project, username, email and more.
 * This properties will be use on the front end side.
 * @author Sebastian Guevara <outs.sebastian.velasquez@huawei.com>
 * @since Attach properties project and region to the user. 
 * @version 1.0.0
 * date 07/17/2017 DD-MM-YYYY
 */
router.post('/signin', function (req, res, next) {
    console.log("Request",req);
    console.log("username: " + req.body.username);
    User.findOne({ username: req.body.username }, function (err, user) {
        //res.setHeader('Content-Type', 'application/json');

        if (err) {
            return res.status(500).json({
                title: 'An error ocurred',
                error: err
            });
        }

        if (!user) {
            return res.status(500).json({
                title: 'Loging Failed',
                error: { message: 'Invalid login credentials - U' }
            });
        }
        if (!bcrypt.compareSync(req.body.password, user.password)) {
            return res.status(500).json({
                title: 'Loging Failed',
                error: { message: 'Invalid login credentials - P' }
            });
        }
        var token = jwt.sign({ user: user._id }, 'SDLHW', { expiresIn: 7200 });
        console.log("Completed User: ", user);
        console.log("Region : ",JSON.stringify(user.region));
        res.status(200).json({
            message: "Sucessfully signin",
            token: token,
            user: {
                userId: user._id,
                fullname: user.fullname,
                role: user.role,
                company: user.company,
                cellphone: user.cellphone,
                username: user.username,
                email: user.email,
                region: JSON.stringify(user.region),
                project: JSON.stringify(user.project)
            }
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