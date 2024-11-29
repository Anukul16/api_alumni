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
    getFollowers(user_id, callback) {
        const sql = `
            SELECT u.user_id, u.name, u.passout_year, u.profile
            FROM user_likes ul
            JOIN users u ON ul.user_id = u.user_id
            WHERE ul.liked_user_id = ?
        `;
        this.db.query(sql, [user_id], callback);
    }
    getFollowing(user_id, callback) {
        const sql = `
            SELECT u.user_id, u.name, u.passout_year, u.profile
            FROM user_likes ul
            JOIN users u ON ul.liked_user_id = u.user_id
            WHERE ul.user_id = ?
        `;
        this.db.query(sql, [user_id], callback);
    }
    
    
    deleteLikedAlumni(user_id,unliked_alumni_id,callBack){
        const sql = "DELETE FROM `user_likes` WHERE `user_id` = ? AND `liked_user_id` = ?"
        this.db.execute(sql,[user_id,unliked_alumni_id],callBack)
    }

    countFollowers(user_id,callBack){
        const sql = "SELECT COUNT(*) FROM `user_likes` WHERE `liked_user_id` = ? AND `user_id` != ? ";
        this.db.query(sql,[user_id,user_id],callBack)
        
    }
    countFollowing(user_id,callBack){
        const sql = "SELECT COUNT(*) FROM `user_likes` WHERE `user_id` = ? AND `liked_user_id` != ? ";
        this.db.query(sql,[user_id,user_id],callBack)
        
    }

}

module.exports=user_like_details