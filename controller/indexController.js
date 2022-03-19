const data = require('../util/database_config');

exports.homepage = (req,res,next)=>{
    res.render('index.ejs',{
        title:'Home Page',
        Name : '',
        isLoggedIn : ''
    });
};

exports.SigninPage = (req,res,next)=>{
    res.render('SignIn.ejs',{
        title:'Sign In',
        Name : '',
        isLoggedIn : ''
    });
};

exports.SigninPost = (req,res,next)=>{
    // const email = req.body.email;
    // const password = req.body.password;

    data.collection('users').findOne(req.body)
    .then((results)=>{
            console.log(results);
            req.session.CurrentUser = results._id;
            req.session.CurrentUserName = results.name;
            console.log(req.session.CurrentUser + " " +req.session.CurrentUserName);
            console.log("Loggin Succesfull");
        res.render('index.ejs',{
            title :' Home Page',
            isLoggedIn :  req.session.CurrentUser,
            Name : req.session.CurrentUserName
        })
        
    }).catch((error)=>{ 
        console.log('Registration Failed');
    });
};
exports.SignUpPage = (req,res,next)=>{
    res.render('SignUp.ejs',{
        title:'Sign Up',
        Name : '',
        isLoggedIn : ''
    });
};

exports.SignUpPost = (req,res,next)=>{
    data.collection('users').insertOne(req.body)
    .then((result)=>{
        console.log('Registration Succesfull');
        res.redirect('/sign-in');
    }).catch((error)=>{ 
        console.log('Registration Failed');
    });
};
exports.SignOutPage = (req,res,next)=>{
    req.session.CurrentUser = null;
    req.session.destroy();
    res.redirect('/');
};