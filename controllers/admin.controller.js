const responseObj = require("../helpers/json-response");
const constants = require("../config/constants");
const db_gateway = require("../config/db-config");
const Admin = require("../model/admin.model")
const path = require('path');

const db = new db_gateway();
const AdminModel = new Admin(db);

fetchPendingUsers = async(req,res,next) => {
    AdminModel.getAllPendingUsers((err,result)=>{
        if(err){
            res.json(responseObj.error("Internal Server Error",[err]))
        }else{
            res.json(responseObj.success("Pending Users",[result]))
        }
    })
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
                AdminModel.restoreRejectedUser(user_id,async(err,res)=>{
                    if(err){
                        res.json(responseObj.error("Internal Server Error",[err]))
                    }else{
                        res.json(responseObj.success("Restored Successfully",[]))
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
                AdminModel.acceptUser(user_id,async(err,res)=>{
                    if(err){
                        res.json(responseObj.error("Internal Server Error",[err]))
                    }else{
                        res.json(responseObj.success("Approved Successfully",[]))
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
                AdminModel.rejectUser(user_id,async(err,res)=>{
                    if(err){
                        res.json(responseObj.error("Internal Server Error",[err]))
                    }else{
                        res.json(responseObj.success("Rejected Successfully",[]))
                    }
                })
            }else{
                res.json(responseObj.error("Status is not pending",[]))
            }
        }
    })
}

module.exports = {
    fetchPendingUsers,
    fetchRejectedUsers,
    restoreRejectedUser,
    acceptUser
}