const communication_functions = require('../helpers/communication');
const responseObj = require("../helpers/json-response");
const constants = require("../config/constants");
const mailTemplates = require("../config/mail-templates");
const db_gateway = require("../config/db-config");
const User = require("../model/user.model");
const Notification = require('../model/notification.model')
const path = require('path');

const db = new db_gateway();
const UserModel = new User(db)
const notification = new Notification(db)

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
                return res.json(responseObj.error("Invalid Credential.", []));
            }
            return res.json(responseObj.success("Login Successful", result));
        });
    } catch (error) {
        next(error);
    }
};



signUp = async (req, res, next) => {
    try {
        let email = req.body.email;
        let password = req.body.password;
        let exponent_token = req.body.exponent_token;
        let user_type = 'DUEVION'
        UserModel.getUserByEmail(email, async (err, result) => {
            if (err) {
                res.json(responseObj.error("Interval Server Error", [err]))
            } else {
                if (result.length == 0) {
                    UserModel.insertRecord('', email, password, '', '', '', user_type, async (err, result) => {
                        if (err) {
                            res.json(responseObj.error("Interval Server Error", [err]))
                        } else {
                            UserModel.createUserId(email, async (err, result) => {
                                if (err) {
                                    res.json(responseObj.error("Internal Server Error", [err]))
                                } else {
                                    UserModel.getUserByEmail(email, async (err, result) => {
                                        if (err) {
                                            res.json(responseObj.error("Internal Server Error", [err]))
                                        } else {
                                            res.json(responseObj.success('Registration Successfull', result))
                                            const subject = 'Wellcome to DueVion!!!';
                                            const htmlEmail = mailTemplates.wellcome_to_duevion.template(result[0].user_id);
                                            await communication_functions.sendEmail(constants.companyEmail, email, subject, htmlEmail, async function (response) {
                                                // response['extras'].push(otp)
                                                // res.json(response);
                                            });
                                            UserModel.setExponentToken(result[0].user_id, exponent_token, (err, result) => {
                                                if (err) {
                                                    console.log("setting expotoken errror signup : ", err)
                                                }
                                            })
                                        }
                                    })
                                }
                            })
                        }
                    })
                } else {
                    if(result[0].is_deleted==1){
                        UserModel.recoverAccount(email, async (e, r)=>{
                            if(e){
                                res.json(responseObj.error("Internal Server Error", [e]))
                            }else{
                                res.json(responseObj.success('Registration Successfull', result))
                                const subject = 'Wellcome to DueVion!!!';
                                const htmlEmail = mailTemplates.wellcome_to_duevion.template(result[0].user_id);
                                await communication_functions.sendEmail(constants.companyEmail, email, subject, htmlEmail, async function (response) {
                                    // response['extras'].push(otp)
                                    // res.json(response);
                                });
                                UserModel.setExponentToken(result[0].user_id, exponent_token, (err, result) => {
                                    if (err) {
                                        console.log("setting expotoken errror signup : ", err)
                                    }
                                })
                            }
                        })
                    }else{
                        res.json(responseObj.error("Email Allready Registered", []))
                    }
                }
            }
        })
    } catch (error) {
        next(error)
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
    login, signUp ,logout
};