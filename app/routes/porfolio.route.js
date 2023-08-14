//Load the Portfolio
module.exports = function (app){
    //load controller
    var portfolio = require('../controllers/porfolio.controller');

    //method to render index
    app.get('/', function (req, res) {
        //display Home page
        res.render('index');
    });
}