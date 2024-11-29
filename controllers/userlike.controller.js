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
fetchFollowers = async(req,res,next) => {
    try{
        let user_id = req.body.user_id;
        UserlikeModel.getFollowers(user_id,(err,followers)=>{
            if(err){
                res.json(responseObj.error("Internal Server Error",[err]));
            }else{
                UserlikeModel.getFollowing(user_id,(err,following)=>{
                    if(err){
                        res.json(responseObj.error("Internal Server Error",[err]))
                    }else{
                        const result = followers.map((follower)=>({
                            ...follower,
                            isFollowingBack:following.some(f => f.user_id === follower.user_id)
                        }))
                        res.json(responseObj.success("Success",[result]))
                    }
                    
                })
            }
        })
    }catch(err){    
        console.log(err);
    }
}
countFollowers =async(req,res,next) => {
    try{
        let user_id = req.body.alumniId;
        UserlikeModel.countFollowers(user_id,(err,result)=>{
            if(err){
                res.json(responseObj.error("Internal Server Error",[err]));
            }else{
                res.json(responseObj.success("Success",[result]));
            }
        })
    }catch(err){
        console.log(err);
    }
}

fetchFollowing = async(req,res,next) => {
    try{
        let user_id = req.body.user_id;
        UserlikeModel.getFollowing(user_id,(err,result)=>{
            if(err){
                res.json(responseObj.error("Internal Server Error",[err]));
            }else{
                res.json(responseObj.success("Followers Fetched",[result]))
            }
        })
    }catch(err){    
        console.log(err);
    }
}
countFollowing =async(req,res,next) => {
    try{
        let user_id = req.body.alumniId;
        UserlikeModel.countFollowing(user_id,(err,result)=>{
            if(err){
                res.json(responseObj.error("Internal Server Error",[err]));
                console.log(err);
                
            }else{
                res.json(responseObj.success("Success",[result]));
            }
        })
    }catch(err){
        console.log(err);
    }
}


module.exports = {
    likeAlumni,
    fetchLikeAlumniIds,
    unlikeAlumni,
    fetchFollowers,
    fetchFollowing,
    countFollowers,
    countFollowing
}