let User = require('../model/user_schema');

module.exports.signup = function(req, res){
    return res.render('sign-up', {
        title: 'Sign-up'
    })
}

module.exports.login = function(req, res){
    return res.render('login', {
        title: 'Login Page'
    })
}

module.exports.create = function(req, res){

    if(req.body.password != req.body.confirm_password){
        return('back');
    };
    User.findOne({email: req.body.email}, function(err, user){
        if(err){console.log(`Error inn finding email`); return};
    if(!user){
        User.create(req.body, function(err, user){
            if(err){console.log(`Error while creating user`);
        return res.redirect('/user/sign-up')};

        });
    }else{
        return res.redirect('back');
    };
    }
    );
}