const axios = require('axios');
var responseObj = require("./json-response");
const mail_config = require('../config/mail-config');

sendSMS = async (mobile,message,templateID,sms_url,displaymsg,params) => {
    try {
        var return_val={};
        await axios.get(sms_url,{
            params: params
        }).then((response)=> {
            response_data=response.data;
            if(JSON.stringify(response_data).indexOf('Error') !== -1){
                return_val= responseObj.error(response_data);
            }else{
                return_val= responseObj.success(displaymsg);
            }

        }).catch((error)=>{
            return_val= responseObj.error(error.message);
        });
        return return_val;
    }catch(err) {
        return responseObj.error(err.message);
    }
}
function defaultFunc(){
    console.log('default')
}
sendEmail = async (from,to,subject,html,callback) => {
    try {
        var return_val={};
        const mailData = {
            from: from,
            to: to,
            subject: subject,
            html: html
        };
        mail_config.transporter.sendMail(mailData, (error, info) => {
            if (error) {
                return_val= responseObj.error(error.message);
                // return console.log(error);
                return callback(return_val);
            }
            return_val= responseObj.success('Mail Sent');
            // res.status(200).send({ message: "Mail send", message_id: info.messageId });
            return callback(return_val);
        });
        // return return_val;
    }catch(err) {
        return_val=responseObj.error(err.message);
        return callback(return_val);
    }
}
sendEmailWithAttachment = (from,to,subject,text,html,callback) => {
    try {
        var return_val={};
        const mailData = {
            from: from,
            to: to,
            subject: subject,
            text: text,
            html: html,
            attachments: [
                {   // file on disk as an attachment
                    filename: 'nodemailer.png',
                    path: 'nodemailer.png'
                },
                {   // file on disk as an attachment
                    filename: 'text_file.txt',
                    path: 'text_file.txt'
                }
            ]
        };
        mail_config.transporter.sendMail(mailData, (error, info) => {
            if (error) {
                return_val= responseObj.error(error.message);
                return callback(return_val);
                // return console.log(error);
            }
            return_val= responseObj.success('Mail Sent with mail id '+info.messageId);
            // res.status(200).send({ message: "Mail send", message_id: info.messageId });
            return callback(return_val);
        });
        // return return_val;
    }catch(err) {
        return_val = responseObj.error(err.message);
        return callback(return_val);
    }
}
module.exports = { sendSMS, sendEmail, sendEmailWithAttachment };
