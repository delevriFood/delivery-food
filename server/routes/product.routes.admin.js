const router = require("express").Router();
const adminControle = require("../controllers/product.controler.admin");
router.get("/getMenuOneRestaurant", adminControle.getMenuOneRestaurant);
router.post("/foodmenu", adminControle.addMenu);
router.post("/signup", adminControle.signUp);
router.post("/login", adminControle.login);

module.exports = router;
