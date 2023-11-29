const {createBook}=require("../controllers/createBook");
const express=require("express");
const router=express.Router();
const {d}=require("../controllers/delete");
const {updateBook}=require("../controllers/updateBook");
const{readAll}=require("../controllers/readAll");
const{readId}=require("../controllers/readId");
const { shearching } = require("../controllers/shearching");
router.post("/books",createBook);
router.get("/books",readAll);
router.get("/books/:id",readId);
router.put("/books/:id",updateBook);
// router.delete("/books/:id",d);
router.get("/books/",shearching);

module.exports=router;