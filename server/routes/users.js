const router = require("express").Router();

router.get("/",(req,res)=>{
    res.send("Hai How are you");
})


module.exports = router;