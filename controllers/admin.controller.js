const responseObj = require("../helpers/json-response");
const constants = require("../config/constants");
const db_gateway = require("../config/db-config");
const Admin = require("../model/admin.model")
const path = require('path');

const db = new db_gateway();
const AdminModel = new Admin(db);

fetchPendingUsers = async(req,res,next) => {
    try{
        AdminModel.getAllPendingUsers((err,result)=>{
            if(err){
                res.json(responseObj.error("Internal Server Error",[err]))
            }else{
                res.json(responseObj.success("Pending Users",[result]))
            }
        })
    }catch(err){
        console.log(err);
    }
}
fetchRejectedUsers = async(req,res,next) => {
    AdminModel.getAllRejectedUsers((err,result)=>{
        if(err){
            res.json(responseObj.error("Internal Server Error",[err]))
        }else{
            res.json(responseObj.success("Rejected Users",[result]))
        }
    })
}
restoreRejectedUser = async(req,res,next) => {
    let user_id = req.body.user_id;
    AdminModel.checkUserStatus(user_id,async(err,result)=>{
        if(err){
            res.json(responseObj.error("Internal Server Error",[err]))
        }else{
            let status = result[0].status;
            if(status == 'rejected'){
                AdminModel.restoreRejectedUser(user_id,async(err,reslt)=>{
                    if(err){
                        res.json(responseObj.error("Internal Server Error",[err]))
                    }else{
                        res.json(responseObj.success("Restored Successfully",[reslt]))
                    }
                })
            }else{
                res.json(responseObj.error("Status is not rejected",[]))
            }
            
        }
    })
}
acceptUser = async(req,res,next) => {
    let user_id = req.body.user_id;
    AdminModel.checkUserStatus(user_id,async(err,result)=>{
        if(err){
            res.json(responseObj.error("Internal Server Error",[err]))
        }else{
            let status = result[0].status;
            if(status == 'pending'){
                AdminModel.acceptUser(user_id,async(err,reslt)=>{
                    if(err){
                        res.json(responseObj.error("Internal Server Error",[err]))
                    }else{
                        res.json(responseObj.success("Approved Successfully",[reslt]))
                    }
                })
            }else{
                res.json(responseObj.error("Status is not pending",[]))
            }
        }
    })
}
rejectUser = async(req,res,next) => {
    let user_id = req.body.user_id;
    AdminModel.checkUserStatus(user_id,async(err,result)=>{
        if(err){
            res.json(responseObj.error("Internal Server Error",[err]))
        }else{
            let status = result[0].status;
            if(status == 'pending'){
                AdminModel.rejectUser(user_id,async(err,reslt)=>{
                    if(err){
                        res.json(responseObj.error("Internal Server Error",[err]))
                    }else{
                        res.json(responseObj.success("Rejected Successfully",[reslt]))
                    }
                })
            }else{
                res.json(responseObj.error("Status is not pending",[])) 
            }
        }
    })
}
getAllSections = async(req,res,next) => {
    try{
        AdminModel.getAllSections((err,result)=>{
            if(err){
                res.json(responseObj.error("Internal Server Error",[]))
            }else{  
                res.json(responseObj.success("All sessions",[result]))
            }
        })
    }catch(err){
        console.log(err);
    }
}
getYearsBySection = async(req,res,next) => {
    try{
        let section_name = req.body.section_name;
        AdminModel.getYearsBySection(section_name,(err,result)=>{
        if(err){
            res.json(responseObj.error("Internal Server Error",[]))
        }else{
            res.json(responseObj.success("Success",[result]))
        }
    })
    }catch(err){
        console.log(err);
    }
}
getImages = async(req,res,next) => {
    try{
        let section_name = req.body.section_name;
        let year = req.body.year;
        let page = req.body.pageNo
        let offset = (page-1) * 30
        AdminModel.countImages(section_name,year,(err,imagesCount)=>{
            if(err){
                res.json(responseObj.error("Internal Server Error",[]))
            }else{
                console.log(imagesCount);
                let totalImages = imagesCount[0].total || 0; 
                AdminModel.getImagesByYear(section_name,year,offset,(err,result)=>{
                    if(err){
                        res.json(responseObj.error("Internal Server Error",[]))
                    }else{
                        const resp ={result,count:totalImages}
                        
                        res.json(responseObj.success("Success",resp))
                    }
                })
            }
        })
        
    }catch(err){
        console.error(err)
    }
}

module.exports = {
    fetchPendingUsers,
    fetchRejectedUsers,
    restoreRejectedUser,
    acceptUser,
    rejectUser,
    getAllSections,
    getYearsBySection,
    getImages
}