require('dotenv').config()
const express = require('express')
const server = express()
server.use(express.json())
const jwt = require('jsonwebtoken')
const { authenticate } = require('passport')

let refreshTokens =[]

const posts =[
    {
        username: 'Ramisha',
        title: 'Post 1'
    },
    {
        username: 'Ahtisham',
        title: 'Post 2'
    }
]

server.get('/posts',authenticateToken,(req,res)=>{
    res.json(posts)
})

server.get('/post',authenticateToken,(req,res)=>{
    res.json(posts.filter(post => post.username === req.body.username))
})

//use refresh token to obtain new access token
server.post('/token',(req,res)=>{
    const refreshToken = req.body.token
    if(refreshToken == null) return res.sendStatus(401)
    if(!refreshTokens.includes(refreshToken)) return res.sendStatus(403)
    jwt.verify(token,process.env.REFRESH_TOKEN_SECRET,(err,user)=>{
        if(err) return res.sendStatus(403)
        const accessToken = generateAccessToken({ name:user})
        res.json({accessToken:accessToken})
    })
})

//delete or prevent creation of infinite refresh tokens
server.delete('/logout',(req,res)=>{
    refreshTokens = refreshTokens.filter(token=> token!== req.body.token)
    res.sendStatus(204)
})

server.post('/login',(req,res)=>{
   const username = req.body.username
   const user = {name:username}
   //creates token for user
   const accessToken =  jwt.sign(user,process.env.ACCESS_TOKEN_SECRET)
   const refreshToken = jwt.sign(user,process.env.REFRESH_TOKEN_SECRET)
   //store refresh tokens 
   refreshTokens.push(refreshToken)
   res.json({accessToken: accessToken, refreshToken: refreshToken})
})

function authenticateToken(req,res,next){
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if(token == null) return res.sendStatus(401)

    jwt.verify(token,process.env.ACCESS_TOKEN_SECRET,(err,user)=>{
        if(err) return res.sendStatus(403)
        req.user = user
        next()
    })
}

function generateAccessToken(user){
    return jwt.sign(user,process.env.ACCESS_TOKEN_SECRET, {expiresIn: '15s'})
}
server.listen(3000,()=>{
    console.log("Server started")
})