const { getUserbyNamePwdAsync } = require("../services/userServices");

function passwordCheck(req, res) {
    getUserbyNamePwdAsync(req.body.username, req.body.password)
    .then(result => {
            console.log("Login result here ", result[0])
            if (!result[0].username) {
                const res = "Invalid username or password" + result; 
                res.status(403).json({
                   message: res,
                 });
                 return;
           }
        res.send(result);
        res.redirect('/home');
    })
}

module.exports = {
    passwordCheck
};