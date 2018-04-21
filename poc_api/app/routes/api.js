var User   = require('../models/user');
var jwt    = require('jsonwebtoken');
var secret = 'harrypotter';
module.exports = function(router){
    //User registration
    router.post('/user',function(req,res){

        var user = new User();
        user.fullname = req.body.fullname;
        user.username = req.body.username;
        user.password = req.body.password;
        user.save(function(err){
            if(req.body.username == null || req.body.username == '' || req.body.fullname == null || req.body.fullname == '' || req.body.password == null || req.body.password == ''){
                res.send('Ensure fullname, username, password is provided');
            }else{
                if(err){
                    res.send('Username already exists');
                }else{
                    res.send('User registered successfully');
                }
            }
        });
    });
    //user login route
    router.post('/login', function(req, res){
        User.findOne({username: req.body.username}).select('fullname username password').exec(function(err, user){
            if(err) throw err;
            if(!user){
                res.json({success: false, message: 'Could not Authenticate'})
            }else if(user){
                var valid = user.comparePassword(req.body.password)
                if (!valid){
                    res.json({success: false, message: 'Could not Authenticate'});
                }else{
                    var token = jwt.sign( {fullname:user.fullname,username: user.username}, secret, {expiresIn: '1h'})
                    res.json({success: true, message: 'User Authenticated', token: token});
                }
            }

        });
    });

    return router;
}