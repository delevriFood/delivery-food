var db = require("../database_mysql");
const bcrypt = require("bcrypt");
const nodemailer=require("nodemailer")
// var messagebird=require("messagebird")("ttHaP4KXrwtSuGD30eaeuqVG2")
const accountSid = 'AC2b2458ac5837c24ff8db85c5ccba0406'; 
const authToken = '1d6ad213f047aff4836d2c49cb75a5a0'; 
// const client = require('twilio')(accountSid, authToken); 


// var Message=function(req,res){ 

 
//   client.messages 
//   .create({         
//      to: '+21652049969' 
//    }) 
//   .then(message => res.send(message.sid)) 
//   .done();
// }


var signUpUser = function (req, res) {
  db.query(
    `SELECT * From user where email = "${req.body.email}" `,
    (err, result) => {
      if (err) {
        res.status(500).send(err);
      } else if (result.length === 0) {
        if (
          req.body.password.length > 8 &&
          req.body.password.length < 25 &&
          req.body.password.match(
            /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]/
          )
        ) {
          const salt = bcrypt.genSaltSync();
          const hashedPaswword = bcrypt.hashSync(req.body.password, salt);
          db.query(
            `INSERT INTO user (firstName,lastName ,email,password,phoneNumber,profilePicture) Values ("${req.body.firstName}","${req.body.lastName}","${req.body.email}","${hashedPaswword}","${req.body.phoneNumber}","${req.body.profilePicture}")`,
            (err, result) => {
              if (err) {
                throw err;
              } else {
                res.send("nice");
                sendconfirmation(req.body.email,req.body.firstName,req.body.lastName)
              }
            }
          );
        } else {
          res.send("please enter a strong password");
        }
      }
    }
  );
};

var loginUser = (req, res) => {
  esm = req.body.loginNameUser;
console.log(req.body)
  db.query(
    `SELECT * FROM user WHERE email = '${req.body.loginEmail}';`,
    (err, result) => {
      if (err) {
        throw err;
      } else {

if(result.length==0)
res.end("Account Not Found")
console.log(result.length)
        var pass = result[0];
        console.log(pass)
        if(pass=="undefined")
        res.end("Account Not Found")
        if (bcrypt.compareSync(req.body.loginPassword, pass.password)) {
            db.query(`SELECT * FROM user where email =='${req.body.loginEmail}' AND  ip =='${req.body.ip}' AND device =='${req.body.device}' `, (err,rez)=> {
                  if(err)
                    res.send("2facter") 
                    else 
                    res.send("nice")
                      })
        } else {
          res.send("incorrect");
        }
      }
    }
  );
};



///////////////////// used nodemailer to send email to user when he signup using outlook/ ///

    
    module.exports={signUpUser, loginUser,}
