class user_detailsModel {

    constructor(db) {
        this.db = db;
    }

    insertRecord(user_id, email, password, users_name, pin, mobile_number, user_type, callBack) {
        var sql = "INSERT INTO `users`(`user_id`, `email`, `password`, `users_name`, `pin`, `mobile_number`, `user_type`, `doj`, `address`, `photo`, `background_photo`, `exponent_token`) VALUES (?, ?, ?, ?, ?, ?, ?, current_timestamp, 'null', '', '', '[]')";
        var params = [user_id, email, password, users_name, pin, mobile_number, user_type];
        this.db.execute(sql, params, callBack);
    }
    createUserId(email, callBack) {
        this.db.execute(
            `UPDATE users SET user_id = CONCAT(CONCAT('DU', LPAD(id, 8, '0')), 'RL') WHERE email=?;`,
            [email],
            callBack
        )
    }
    getUserByEmail(email, callBack) {
        this.db.query(
            "SELECT * FROM `users` WHERE email=?",
            [email],
            callBack
        )
    }
    getUserByEmail2(email, callBack) {
        this.db.query(
            "SELECT * FROM `users` WHERE email=? and is_deleted = 0",
            [email],
            callBack
        )
    }
    recoverAccount(email, callBack) {
        this.db.query(
            `UPDATE users set is_deleted=0 where email=?;`,
            [email],
            callBack
        )
    }
    getUserByAdharNo(ahdhar_number, callBack) {
        this.db.query(
            "SELECT * FROM `users` WHERE adhar_no=?",
            [ahdhar_number],
            callBack
        )
    }
    getUserByUserId(user_id, callBack) {
        this.db.query(
            "SELECT * FROM `users` WHERE user_id=?",
            [user_id],
            callBack
        )
    }
    setPin(user_id, pin, callBack) {
        this.db.execute(
            `UPDATE users SET pin = ? WHERE user_id=?`,
            [pin, user_id],
            callBack
        )
    }
    setExponentToken(user_id, exponent_token, callBack) {
        this.db.execute(
            `UPDATE users SET exponent_token = JSON_ARRAY_APPEND(exponent_token, '$', ?) WHERE user_id=?`,
            [exponent_token, user_id],
            callBack
        )
    }
    removeExponentToken(user_id, exponent_token, callBack) {
        this.db.execute(
            `UPDATE users SET exponent_token = JSON_REMOVE(exponent_token, JSON_UNQUOTE(JSON_SEARCH(exponent_token, 'one', ?))) 
            WHERE 
            user_id=?
            AND JSON_SEARCH(exponent_token, 'one', ?) IS NOT NULL`,
            [exponent_token, user_id, exponent_token],
            callBack
        )
    }
    changePassword(email, new_password, callBack) {
        this.db.execute(
            `UPDATE users SET password = ? WHERE email=?`,
            [new_password, email],
            callBack
        )
    }
    addMiniKYC(user_id, userdata, adhar_no, callBack) {
        this.db.execute(
            `update users set
                users_name = ?,
                adhar_no = ?,
                care_of = ?,
                full_address = ?,
                date_of_birth = ?,
                gender = ?,
                address = ?,
                photo = ?,
                kyc_status='mini'
            where user_id = ?;
            `,
            [userdata.name, adhar_no, userdata.care_of, userdata.full_address, userdata.date_of_birth, userdata.gender, JSON.stringify(userdata.address), userdata.photo, user_id],
            callBack
        )
    }
    deleteAccount(user_id, callBack) {
        this.db.query(
            `update users set is_deleted = 1, exponent_token = '[]' where user_id = ?;`,
            [user_id],
            callBack
        )
    }
    checkIsDeleted(user_id, callBack) {
        this.db.query(
            `select count(*) as deleted from users where user_id = ? and is_deleted = 1`,
            [user_id],
            callBack
        )
    }
    search(query, user_id, callBack) {
        this.db.query(
            `SELECT id, user_id, users_name, kyc_status
             FROM users 
             WHERE (user_id LIKE '${query}%' 
               OR users_name LIKE '${query}%' COLLATE utf8mb4_general_ci)
             LIMIT 10`,
            [user_id],
            callBack
        );
    }
}
module.exports = user_detailsModel;