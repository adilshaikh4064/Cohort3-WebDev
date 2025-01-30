// You have to create a middleware for rate limiting a users request based on their username passed in the header

const express = require('express');
const app = express();

// Your task is to create a global middleware (app.use) which will
// rate limit the requests from a user to only 5 request per second
// If a user sends more than 5 requests in a single second, the server
// should block them with a 404.
// User will be sending in their user id in the header as 'user-id'
// You have been given a numberOfRequestsForUser object to start off with which
// clears every one second

let numberOfRequestsForUser = {};
function ratelimitter(req,res,next){
  let userId=req.header(`user-id`);

  if(!userId){
    res.status(400).send('user-id is required in the header.')
  }

  if(!numberOfRequestsForUser[userId]){
    numberOfRequestsForUser[userId]=1;
  }
  else{
    numberOfRequestsForUser[userId]+=1;
  }

  if(numberOfRequestsForUser[userId]>5){
    res.status(404).send('rate limit exceed');
  }
  next();
}
setInterval(() => {
  numberOfRequestsForUser = {};
}, 1000)

app.use(ratelimitter);


app.get('/user', function(req, res) {
  res.status(200).json({ name: 'john' });
});

app.post('/user', function(req, res) {
  res.status(200).json({ msg: 'created dummy user' });
});

module.exports = app;