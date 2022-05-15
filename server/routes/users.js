const router = require("express").Router();
const authToken = require("../middleware/authToken")

router.get("/",authToken,(req,res)=>{
    res.send("Hai Youre logged in");
})


module.exports = router;