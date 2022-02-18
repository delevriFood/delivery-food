const router = require("express").Router();
const userControle = require("../controllers/product.controler.user");
router.get("/restaurant", userControle.getALLRestaurant);
router.post("/signUpUser", userControle.signUpUser);
router.post("/loginUser", userControle.loginUser);
router.post("/getData" , userControle.getData)
router.get("/menu/:name",userControle.getOneRestaurant)
router.get("/menu/:restaurantName/:foodName",userControle.putInCart)
router.get("/getAllFodd",userControle.getAllFood)
router.post("/getDataIp" , userControle.getDataIp)
router.post("/getOrder", userControle.getOrder)
router.post("/postOrder", userControle.postOrder) 
router.post("/getDataOrder" , userControle.getDataOrder)
router.post("/DoHahsing" , userControle.DoHahsing)
router.post("/AddClick" , userControle.AddClick)
module.exports=router
