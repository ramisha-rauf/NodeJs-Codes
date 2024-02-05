const express = require('express')
const passport = require('passport')
const passportJWT = require('passport-jwt')
const jwt = require('jsonwebtoken')

const server = express()
const secretKey = 'your_secretkey'
server.use(express.json());
server.use(passport.initialize())

const JWTstrategy = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;

const users = [
    {id:1 , username: 'admin' , password: 'password'},
    {id:1 , username: 'user' , password: 'password'}
]

passport.use(new JWTstrategy({
    jwtFromRequest:ExtractJWT.fromAuthHeaderAsBearerToken(),
    secret0rkey: secretKey
}, (jwtPayLoad,done) =>{
           const users = users.find((u) => u.id === jwtPayLoad.sub)
    if (user){
        return done(null,user)
    }
    else{
        return done(null,false)
    }
}))

server.post('/login',(req,res)=>{
    const {username,password} = req.body
    const user = users.find((u) => u.username === username && u.password === password)
    if(user){
        const payload = {sub: user.id, user: user.username}
        const token = jwt.sign(payload,secretKey)
        res.json({token: token})
    }else{
        res.status(401).json({message: 'Authentication failed'})
    }
})

server.get('/protected',passport.authenticate('jwt',{session: false}, (req,res)=>{
    res.json({message: 'Protectec route accessed successfully'})
}))

server.listen(3000,()=>{
    console.log('Server started')
})
