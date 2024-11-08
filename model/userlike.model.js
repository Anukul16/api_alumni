class user_like_details{

    constructor(db){
        this.db=db;
    }
    insertLike(user_id,liked_user_id,callBack){
        const sql = "INSERT INTO `user_likes`(`user_id`,`liked_user_id`,`created_at`) VALUES(?,?,CURRENT_TIMESTAMP)"
        this.db.execute(sql,[user_id,liked_user_id],callBack)
    }
    getAllLikedAlumnisId(user_id,callBack){
        const sql = "SELECT `liked_user_id` from `user_likes` WHERE `user_id` = ?";
        this.db.query(sql,[user_id],callBack)
    }
    deleteLikedAlumni(user_id,unliked_alumni_id,callBack){
        const sql = "DELETE FROM `user_likes` WHERE `user_id` = ? AND `liked_user_id` = ?"
        this.db.execute(sql,[user_id,unliked_alumni_id],callBack)
    }

}

module.exports=user_like_details