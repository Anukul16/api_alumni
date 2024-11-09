class Admin {

    constructor(db){
        this.db=db;
    }

    getAllPendingUsers(callBack){
        const sql = "SELECT `user_id`,`profile`,`name`,`passout_year` FROM `users` WHERE `status` = 'pending' "
        this.db.query(sql,[],callBack)
    }
    getAllRejectedUsers(callBack){
        const sql = "SELECT `user_id`,`profile`,`name`,`passout_year` FROM `users` WHERE `status` = 'rejected' "
        this.db.query(sql,[],callBack)
    }
    checkUserStatus(user_id,callBack){
        const sql = "SELECT `status` from `users` WHERE `user_id` = ?";
        this.db.query(sql,[user_id],callBack)
    }
    restoreRejectedUser(user_id,callBack){
        const sql = " UPDATE `users` SET `status` = 'pending' WHERE `user_id` = ? "
        this.db.execute(sql,[user_id],callBack)
    }
    acceptUser(user_id,callBack){
        const sql = " UPDATE `users` SET `status` = 'approved' WHERE `user_id` = ? "
        this.db.execute(sql,[user_id],callBack)
    }
    rejectUser(user_id,callBack){
        const sql = " UPDATE `users` SET `status` = 'rejected' WHERE `user_id` = ? "
        this.db.execute(sql,[user_id],callBack)
    }
}

module.exports = Admin