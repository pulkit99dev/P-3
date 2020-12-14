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