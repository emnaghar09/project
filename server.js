// 1- import express
const express = require('express');
const cors = require('cors');
const Role= require('./model/role.model')
const authRoute = require('./routes/auth');
const User= require('./model/users.model')
const bcrypt = require('bcrypt');
require('dotenv').config();
//2-init the APP
const app = express();
// 5 call on connectDb to connect to the server
const connectDb =require ('./config/connectDb');
// 3- create a port 
const port = process.env.PORT || 4000;
connectDb()
initial()
function initial() {

    Role.estimatedDocumentCount((err, count) => {
      if (!err && count === 0) {
        new Role({
            post: "admin"
        }).save(err => {
          if (err) {
            console.log("error", err);
          }
          console.log("added 'admin' to roles collection");
        });

        new Role({
            post: "coach"
        }).save(err => {
          if (err) {
            console.log("error", err); 
          }

          console.log("added 'coach' to roles collection");
        });

        new Role({
            post: "member"
        }).save(err => { 
          if (err) {
            console.log("error", err);
          }

          console.log("added 'member' to roles collection");
        });
      }
    });
    User.estimatedDocumentCount((err,count) => {
      if (!err && count === 0) {
        Role.findOne({ post: "admin" }, (err, role) => {
          if (err) {
            res.status(500).send({ message: err });
            return;
          }
          new User({
            fullname: "admin",
            email: "admin@admin.com",
            password:bcrypt.hashSync("123456789", 8),
            role: [role._id]
          }).save(err => {
            if (err) {
              console.log("error", err);
            }
            console.log("added 'admin' to users collection"); 
          });
        });
      }
    }) 

    training.estimatedDocumentCount((err,count) => {
      if (!err && count === 0) {
       
          new training({
            title: "BODY ATTAQUE",
            description: "Improvement of cardiovascular power. Explosiveness and muscle tone. Release of endorphins and addiction guaranteed! Burns up to 730 calories per class.",
            day:"Monday, Thursday, Sunday",
            duration: "50 minutes",
            intencity:'Mediun-High', 
            image:'https://file1.vital.topsante.com/var/vital/storage/images/fitness/cours-collectifs/le-body-attack-un-cours-daerobic-depoussierre-1844/10310-1-fre-FR/Le-Body-attack-un-cours-d-aerobic-depoussierre.jpg?alias=original'
          }).save(err => {
            if (err) {
              console.log("error", err);
            }
            console.log("added to training collection"); 
          });
          new training({
            title: "GRIT",
            description: "Improvement of cardiovascular power. Explosiveness and muscle tone. Refining and toning the figure. Improve strength and build muscle mass. Burns up to 700 calories per class.",
            day:"Tuesday, Thursday",
            duration: "35 minutes",
            intencity:'High', 
            image:'https://www.espace-musculation.com/uploads/2017/12/bienfaits-hiit.jpg'
          }).save(err => {
            if (err) {
              console.log("error", err);
            }
            console.log("added to training collection"); 
          });
          new training({
            title: "AQUAGYM",
            description: "Improves cardiovascular fitness. Refines the figure. Stretches the muscles thanks to the hydro-massage. Burns an average of 550 calories per class.",
            day:"Tuesday, Thursday, Sunday",
            duration: "30 minutes",
            intencity:'Moderate', 
            image:'https://www.fitness.fr/wp-content/uploads/2020/11/Planet_Aqua_4-scaled.jpg'
          }).save(err => {
            if (err) {
              console.log("error", err);
            }
            console.log("added to training collection"); 
          });
          new training({
            title: "RPM",
            description: "Improved cardiovascular fitness, increased metabolism (calories burned at rest). Tones and sculpts the hips, legs and buttocks. Releases endorphins, brings a natural feeling of euphoria. Burns up to 675 calories per class.",
            day:"Monday, Wednesday, Friday",
            duration: "45 minutes",
            intencity:'High', 
            image:'https://oceaclub.com/slides/rpm.jpg'
          }).save(err => {
            if (err) {
              console.log("error", err);
            }
            console.log("added to training collection"); 
          });
        };
      });
    }

    
app.use(cors());
app.use(express.json());
app.use('/', authRoute)
// 4- create a server
app.listen(port, (err)=>{
    err? console.log(err)   :    console.log(`our server is listening on ${port}`)
})