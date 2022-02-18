var db = require("../database_mysql");
const bcrypt = require("bcrypt");
const nodemailer=require("nodemailer")

var SendMessage= async function(req,res){ 
  // Only needed if you don't have a real mail account for testing
  let testAccount = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport('SMTP',{
    service:"gmail",
    auth: {
      user: "najjarwajih05@gmail.com", // generated ethereal user
      pass: "wajouhawajih", // generated ethereal password
    },
  });


  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Fred Foo 👻" <najjarwajih05@gmail.com>', // sender address
    to: "wajih.najjar@esprit.tn", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
  },function(err , info){
 if(err)
 console.log(err)
 else 
 console.log("Check You " + info.response)
  })
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
  // Preview only available when sending through an Ethereal account
  // Preview URL: https://ethereal
res.send("Check Your Email")

}


var getDataOrder = function(req, res){
var id = req.body.id 
db.query(`SELECT * from orders where id_user ='${id}'`,(err,rez)=> {
if(err)
res.send(err)
else 
res.send(rez)

})


}

var getDataIp= function (req ,res) {
  var ip= req.body.ip
  db.query(`SELECT * from user where ip='${ip}'` , (err, rez)=> { 
  if(err)
  res.send(err)
  else 
  res.send(rez)
  }) 
  }


var postOrder= async  function(req,res){
var id = req.body.id 
var food = req.body.food
food = "/"+food
await db.query(`SELECT * FROM orders where id_user = '${id}'` , (err,rez)=> {
  if(err)
  res.send(err) 
  else 
{
if(rez.length==0){
    db.query(`INSERT INTO orders (id_user , orderstring) VALUES ('${id}' , '${food}')`, (err,rez)=> {
 if(err)
 res.send(err)
 else 
 res.send("Data Added Done")
    })
}
else 
{ 
  console.log(rez["0"].orderstring)
 food+= rez["0"].orderstring
db.query(`UPDATE orders set orderstring='${food}' where id_user='${id}'` ,(err1 ,rez1)=> {
if(err1)
res.send(err1)
else {
console.log(rez)
  res.send('Data Updated')

}
})
}
}
})

}
var deleteOneOrder = (req,res)=>{
  let food_name=req.body.food_name
 const deleteOne=`DELETE FROM Orders where food_name= '${food_name}'}'`
  db.query(deleteOne,(err,data)=>{
      err?console.log(err):res.send(data)
  })
}

  var getOrder=function(req, res){
 var id = req.body.id
 db.query(`SELECT * FROM orders where id_user = '${id}'` , (err,rez)=> {
console.log(rez)
if(err)
res.send(err) 
else 
res.send(rez)
 })


}


  
var signUpUser = function (req, res) {
  db.query(
    `SELECT * From user where email = "${req.body.email}" `,
    (err, result) => {
      if (result.length > 0)
        res.send("There Is an Accout With The Same Email ");
      if (err) {
        console.log("There is An err") 
        res.status(500).send(err);
      } else if (result.length === 0) {
        if (
          req.body.password.length > 8 &&
          req.body.password.length < 25 &&
          req.body.password.match(
            /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]/
          )
        )
        {
          const salt = bcrypt.genSaltSync();
          const hashedPaswword = bcrypt.hashSync(req.body.password, salt);
          db.query(
            `INSERT INTO user (firstName,lastName ,email,password,phoneNumber,ip,device) Values ("${req.body.firstName}","${req.body.lastName}","${req.body.email}","${hashedPaswword}","${req.body.phone}", '${req.body.ip}' , '${req.body.device}')`,
            (err, result) => {
              console.log(result);
              if (err) {
                console.log("err") 
              res.send("err")
              } else {
                console.log("Data Added") 
                res.send("nice");
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
var getData = (req, res) => {
  var ip = req.body.ip;
  db.query(`SELECT * FROM user where ip=${ip}`, (err, rez) => {
    if (err) res.send("Err Hapaned");
    else res.send(rez);
  });
};
var getAllFood = (req, res) => {
  db.query("SELECT * FROM menu", (err, rez) => {
    if (err) res.send(err);
    else res.send(rez);
  });
};
var loginUser = (req, res) => {
  esm = req.body.loginNameUser;

   db.query(
    `SELECT * FROM user WHERE email = '${req.body.loginEmail}';`,
    (err, result) => {
      if (err) {
        throw err;
      } else {
if(result.length==0)
res.send("Account Not Found")
console.log(result.length)
console.log(result[0])
console.log("**************")
console.log(req.body)
var pass = result[0];
        if(pass=="undefined"){
        return res.send("Account Not Found")
        }
        if ( result.length>0&&bcrypt.compareSync(req.body.loginPaswword, result[0].password)) {
           db.query(`SELECT * FROM user where email ='${req.body.loginEmail}' AND  ip ='${req.body.ip}' AND device ='${req.body.device}' `, (err,rez)=> {
                  if(err){
throw err 

                  }else {
                  return   res.send(res.id)
                  }    
                  })
        } else {
          return res.send("incorrect");
        }
      }
    }
  );
};
var getALLRestaurant = function (req, res) {
  db.query(
    "SELECT name,picture,description FROM restaurant ",
    (err, result) => {
      err ? res.status(500).send(err) : res.status(200).send(result);
    }
  );
};
var getOneRestaurant = (req, res) => {
  db.query(
    `SELECT * FROM menu where restaurant_id = (SELECT restaurant_id from restaurant where name = "${req.params.name}" )`,
    (err, result) => {
      err ? res.status(500).send(err) : res.status(200).send(result);
    }
  );
};
var putInCart = (req, res) => {
  db.query(
    `SELECT food_name , price  FROM menu WHERE food_name = '${req.params.foodName}' AND restaurant_id = (SELECT restaurant_id FROM  restaurant WHERE name = '${req.params.restaurantName}') `,
    (err, result) => {
      err ? res.status(500).send(err) : res.send(result);
    }
  );
};
const transporter = nodemailer.createTransport({
  service: "Outlook365",
  host: "smtp.office365.com",
  port: "587",
  tls: {
    ciphers: "SSLv3",
    rejectUnauthorized: false,
  },
  auth: {
    user: "mortadha125@outlook.fr",
    pass: "123456mortadha",
  },
});

///////////////////// used nodemailer to send email to user when he signup using outlook/ ///
const sendconfirmation = async (email, firstName, lastName) => {
  const mailOptions = {
    from: "mortadha125@outlook.fr",
    to: email,
    subject: "Hello : user",
    text:
      "Hello" +
      " " +
      firstName +
      " " +
      lastName +
      " " +
      "welcome to delevery food",
  };
  try {
    await transporter.sendMail(mailOptions, function (err, info) {
      console.log(err);
      if (err) {
        throw err;
      }
    });
  } catch (err) {
    throw err;
  }
};
var addFeedback=function(req, res){
  var feedbacks = "INSERT INTO menu SET ?"
  var params = {
    person_name: req.body.person_name,
    feedback:req.body.feedback
  }
  db.query(menufood, params,(res,err,)=>{
    if(err){
      console.log(err)
    }else{
      console.log(res)
    }
  })
}

    
    module.exports={deleteOneOrder,getALLRestaurant,getOneRestaurant,signUpUser, loginUser,putInCart,getAllFood,getData,getDataIp,getOrder,postOrder,getDataOrder}
