const keys = require('../config/keys');
var paystack = require('paystack')(keys.payStackSecKey);
const requireLogin = require('../middlewares/requireLogin');


module.exports = app =>{
    app.post('/api/stripe/', requireLogin, async (req, res)=>{
        
        paystack.transaction.verify(req.body.reference, function(err,body){
            console.log(body);
        });
        req.user.credits += 5;
        const user = await req.user.save();
        res.send(user);

    })
}