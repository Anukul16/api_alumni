const responseObj = require("../helpers/json-response");
const constants = require("../config/constants");
// const mailTemplates = require("../config/mail-templates");
const db_gateway = require("../config/db-config");
const User = require("../model/user.model");
// const Notification = require('../model/notification.model')
const path = require('path');

const db = new db_gateway();
const UserModel = new User(db)
// const notification = new Notification(db)

login = async (req, res, next) => {
    try {
        const user_id = req.body.user_id;
        const password = req.body.password;

        UserModel.getUserByUserId(user_id, async (err, result) => { 
            if (err) {
                return res.json(responseObj.error("Internal Server Error", [err]));
            }

            if (result.length === 0) {
                return res.json(responseObj.error("Invalid Credential.", []));
            }

            if (result[0].password !== password) {
                return res.json(responseObj.error("Password do not match", []));
            }
            return res.json(responseObj.success("Login Successful", result));
        });
    } catch (error) {
        next(error);
    }
};



register = async (req, res, next) => {
    try {
        let name = req.body.name;
        let passout_year = req.body.passout_year;
        let phone_number = req.body.phone_number;
        let email = req.body.email;
        let password = req.body.password;
        UserModel.getUserByEmail(email,async(err,result)=>{
            if(err){
                res.json(responseObj.error("Internal Server Error",[err]))
            }else{
                if(result.length == 0){
                    UserModel.register('',name,passout_year,phone_number,email,password,async(err,result)=>{
                        if(err){
                            res.json(responseObj.error("Internal Server Error",[err]))
                        }else{
                            let id = result.insertId
                            UserModel.createUserId(id,passout_year,async(err,result)=>{
                                if(err){
                                    res.json(responseObj.error("Internal Server Error",[err]))
                                }else{
                                    res.json(responseObj.success("Registration Successfull",[]))
                                }
                            })
                        }
                    })
                }else{
                    res.json(responseObj.error("Email Already Registered",[]))
                }
            }
        })
    } catch (error) {
        next(error)
    }

}
fetch_user = async(req,res,next) => {
    try{
        let user_id = req.body.alumniId
        UserModel.getUserByUserId(user_id,async(err,result)=>{
            if(err){
                res.json(responseObj.error("Internal Server Error",[]))
            }else{
                return res.json(responseObj.success("User Fetched",result))
            }
        })
    }catch(err){
        next(err)
    }
}
editProfile = async (req,res,next) => {
    try{
        let name = req.body.name;
        let passout_year = req.body.passoutYear;
        let designation = req.body.designation;
        let location = req.body.location;
        let phone_number = req.body.phoneNo;
        let whatsapp_number = req.body.whatsappNo;
        let email = req.body.email;
        let linkedin = req.body.linkedin;
        let current_addr = req.body.currentAddress;
        let permanent_addr = req.body.permanentAddress;
        let skills = req.body.skills;
        let user_id = req.body.userId;
        UserModel.editProfile(name,passout_year,designation,location,phone_number,whatsapp_number,email,linkedin,current_addr,permanent_addr,skills,user_id,async(err,result)=>{
            if(err){
                res.json(responseObj.error("Internal Server Error",[err]));
            }else{
                res.json(responseObj.success("Profile Edited Successfully",result));
            }
        })
    }catch(err){
        next(err)
    }
}


logout = async (req, res, next) => {
    try {
        let user_id = req.body.user_id;
        let exponent_token = req.body.exponent_token;
        UserModel.removeExponentToken(user_id, exponent_token, (err, result) => {
            if (err) {
                console.log(err)
                res.json(responseObj.error("Faild to logout please try later.", [err]))
            } else {
                res.json(responseObj.success("push token removed", []))
            }
        })
    } catch (error) {
        next(error)
    }
}
module.exports = {
    login, register ,editProfile,fetch_user,logout
};