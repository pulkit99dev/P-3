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
        return res.redirect('back');
    };
    User.findOne({email: req.body.email}, function(err, user){
        if(err){console.log(`Error inn finding email`); return};
    if(!user){
        User.create(req.body, function(err, user){
            if(err){console.log(`Error while creating user`); return}
        return res.redirect('/user/login');
        });
    }else{
        return res.redirect('back');
    };
    }
    );
}

//log-in session
module.exports.create_session= function(req, res){
        User.findOne({email: req.body.email}, function(err, user){
            if(err){console.log(`Error in finding user`);
            return;
        }
        if(user){
            if(user.password != req.body.password){
                return res.redirect('back');
            };
            res.cookie('user_id', user.id);
            return res.redirect('/user/profile')
        }else{
            return res.redirect('back');
        }
    })
    }