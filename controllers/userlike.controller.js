const responseObj = require("../helpers/json-response");
const constants = require("../config/constants");
const db_gateway = require("../config/db-config");
const Userlike = require("../model/userlike.model")
const db = new db_gateway();
const UserlikeModel = new Userlike(db)


likeAlumni = async(req,res,next) => {
    let user_id = req.body.alumniId;
    let liked_user_id = req.body.likedAlumniId;
    UserlikeModel.insertLike(user_id,liked_user_id,async(err,result)=>{
        if(err){
            res.json(responseObj.error("Internal Server Error",[err]))
        }else{
            res.json(responseObj.success("Done",[result]))
        }
    })
}
fetchLikeAlumniIds = async(req,res,next) => {
    let user_id = req.body.alumniId;
    UserlikeModel.getAllLikedAlumnisId(user_id,(err,result)=>{
        if(err){
            res.json(responseObj.error("Internal Server Error",[err]))
        }else{
            res.json(responseObj.success("Fetching Successfull",[result]))
        }
    })
}
unlikeAlumni = async(req,res,next) =>{
    let user_id = req.body.alumniId;
    let unliked_user_id = req.body.unlikedAlumniId;
    UserlikeModel.deleteLikedAlumni(user_id,unliked_user_id,(err,result)=>{
        if(err){
            res.json(responseObj.error("Internal Server Error",[err]));
        }else{
            res.json(responseObj.success("Removed Successfully",[result]))
        }
    })
}

module.exports = {
    likeAlumni,
    fetchLikeAlumniIds,
    unlikeAlumni
}