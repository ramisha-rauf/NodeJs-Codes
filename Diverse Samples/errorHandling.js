// *******ERROR HANDLING********
server.use((err,req,res,next)=>{
    //custom error handling
 res.status(err.status || 500).json({
     error:{
         message: err.message || "Internal server error"
     }
 })
})

// Missing Field Error 
server.post('/users',(req,res)=>{
    const { name, email, password } = req.body;
    //check for missing field
if(!name){
   return res.status(500).json({error:'Missing field : Name is required'})
}
if(!email){
    return res.status(500).json({error:'Missing field : Email is required'})
}
if(!password){
    return res.status(500).json({error:'Missing field : Password is required'})
}
})

//const { isValidObjectId } = require("mongoose");

// Unique Field Error 
server.post('/api/users',(req,res)=>{
    const { name, email, password } = req.body;
    //check if email already exists
const existingUser = findUserByEmail(email);
if(existingUser){
   return res.status(500).json({error:'Unique field error : Email already exists'})
}
})

//error-middleware is used to handle validation error,badrequest error, notfound error

//Custom API Error
class NotFoundError extends Error{
    constructor(message,statusCode){
        super(message);
        this.statusCode = statusCode;
        this.name = this.constructor.name;
    }
}
//express route handler for retreiving user details
server.post('api/users/:id',(req,res)=>{
    const id= req.params.id;
    //simulating user not found scenario
if(!isValidUserId(id)){
    const error = new UserNotFoundError('User not found', 404);
    res.status(error.statusCode).json({error: error.message})
}
}) 

// Bad Request Error 
class BadRequestError extends Error{
    constructor(message){
        super(message);
        this.name = 'BadRequestError';
        this.statusCode= 400;
    }
}
//express route handler for retreiving user details
server.post('api/users',(req,res)=>{
    const { name, email, password } = req.body;
    //simulating user not found scenario
if(!name || !email || !password){
    throw new BadRequestError('Missing required fields');
}
})

//class not found error
class NotFoundError extends Error{
    constructor(message){
        super(message);
        this.statusCode = 404;
        this.name = 'NotFoundError';
    }
}
//express route handler for retreiving user details
server.post('api/users/:id',(req,res)=>{
    const id= req.params.id;
    const user = findUserById(id);
    //simulating user not found scenario
if(!user){
    throw new NotFoundError('User not found');
}
})