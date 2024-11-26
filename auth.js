const jwt = require('jsonwebtoken');
const JWT_SECRET ="sanyamisking"

function auth(req,res,next){

    const token = req.headers.token;

    if(token){
        const response = jwt.verify(token,JWT_SECRET);
        console.log(response)
        if(response){
        req.id = response.id
        next();
        }else{
            res.status(401).send("Unauthorized User");
        }
        
    }else{
        res.status(401).send("Unauthorized User");
    }
}


module.exports={auth,JWT_SECRET};