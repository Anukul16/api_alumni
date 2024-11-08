class user_detailsModel {

    constructor(db) {
        this.db = db;
    }
    register(user_id,name,passout_year,phone_number,email,password,callBack){
        var sql = "INSERT INTO `users` (`user_id`, `name`, `passout_year`, `phone_number`, `email`, `password`, `created_at`) VALUES (?, ?, ?, ?, ?, ?, current_timestamp)";
        var params = [user_id,name,passout_year,phone_number,email,password];
        this.db.query(sql,params,callBack)
    }
    editProfile(name, passout_year, designation, location, phone_number, whatsapp_number, email, linkedin, current_addr, permanent_addr, skills,user_id, callBack) {
        var sql = `
            UPDATE \`users\` 
            SET 
                \`name\` = ?,
                \`passout_year\` = ?,
                \`designation\` = ?,
                \`location\` = ?,
                \`phone_number\` = ?,
                \`whatsapp_number\` = ?,
                \`email\` = ?,
                \`linkedin_id\` = ?,
                \`current_address\` = ?,
                \`permanent_address\` = ?,
                \`skills\` = ?
            WHERE \`user_id\` = ?;
        `;
        console.log("Linkedin Id: ",linkedin);
        
        var params = [name, passout_year, designation, location, phone_number, whatsapp_number, email, linkedin, current_addr, permanent_addr, skills, user_id];
        this.db.query(sql, params, callBack);
    }
    addCompanies(companies, callBack) {
        const sql = `
            INSERT INTO \`company\` (\`company_name\`, \`company_logo\`) 
            VALUES ? 
            ON DUPLICATE KEY UPDATE \`company_logo\` = VALUES(\`company_logo\`)
        `;
        const companyData = companies.map(company => [company.companyName, company.companyLogo]);
        this.db.query(sql, [companyData], callBack);
    }
    addRoles(rolesData,callBack){
        const sql = "INSERT INTO `user_roles` (`user_id`,`company_id`,`role_name`,`start_date`,`end_date`) VALUES ?";
        this.db.query(sql,[rolesData],callBack);
    }
    getCompanyIds(companies,callBack){
        const sql = "SELECT `company_id`,`company_name` from `company` where `company_name` in(?)";
        const companyNames = companies.map(company =>company.companyName)
        this.db.query(sql,[companyNames],callBack)
    }
    getProfileDetails(user_id,callBack){
        const sql = "SELECT*FROM `users` WHERE `user_id`=?";
        this.db.query(sql,[user_id],callBack)
    }
    getExperienceDetails(user_id,callBack){
        const sql = `
                    SELECT 
                        c.company_logo,
                        c.company_name,
                        ur.role_name,
                        ur.start_date,
                        ur.end_date
                    FROM \`users\` u
                    JOIN \`user_roles\` ur ON u.user_id = ur.user_id
                    JOIN \`company\` c ON ur.company_id = c.company_id
                    WHERE u.user_id = ?;
                    `;
        this.db.query(sql,[user_id],callBack)
    }
    
    createUserId(id,passout_year, callBack) {
        this.db.execute(
            `UPDATE users 
                SET user_id = CONCAT(
                    'VUCS', 
                    id,
                    LPAD(FLOOR(RAND() * 90) + 10, 2, '0'),
                    RIGHT(?, 2)
                ) 
                WHERE id = ?;`,
            [passout_year,id],
            callBack
        )
    }
    addProfilePicture(user_id,img,callBack){
        const sql = "UPDATE `users` SET profile = ? WHERE `user_id` = ?"
        console.log(img);
        
        this.db.query(sql,[img.filename,user_id],callBack)
    }
    addCoverPicture(user_id,img,callBack){
        const sql = "UPDATE `users` SET cover = ? WHERE `user_id` = ?"
        this.db.query(sql,[img.filename,user_id],callBack)
    }
    deleteProfilePicture(user_id, callBack) {
        const sql = "UPDATE `users` SET `profile` = NULL WHERE `user_id` = ?";
        this.db.execute(sql, [user_id], callBack);
    }
    deleteCoverPicture(user_id,callBack){
        const sql = "UPDATE `users` SET `cover` = NULL WHERE `user_id` = ?";
        this.db.execute(sql, [user_id], callBack);
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