const router = require("express").Router();
const userControle = require("../controllers/product.controler.user");
// router.get("/restaurant", userControle.getALLRestaurant);
router.post("/signUpUser", userControle.signUpUser);
router.post("/loginUser", userControle.loginUser);
// router.get("/Message",userControle.Message)
// router.get("/menu/:name",userControle.getOneRestaurant)
// router.get("/menu/:restaurantName/:foodName",userControle.putInCart)


module.exports=router

