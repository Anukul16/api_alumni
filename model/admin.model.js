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
    getSectionDetails(section_name,callBack){
        return new Promise((resolve,reject)=>{
            const sql = "SELECT*FROM `sections` WHERE `section_name` = ? limit 1";
            this.db.query(sql,[section_name],(err,result)=>{
                if(err){
                    reject(err)
                }else{
                    resolve(result)
                }
            })
        })
        
    }
    createSection(section_name,callBack){
        return new Promise((resolve,reject)=>{
            const sql = "INSERT INTO `sections`(`section_name`) VALUES(?) "
            this.db.query(sql,[section_name],(err,result)=>{
                if(err)reject(err)
                else resolve(result)
            })
        })
        
    }
    getYearDetails(year,callBack){
        return new Promise((resolve,reject)=>{
            const sql = "SELECT*FROM `years` WHERE `year` = ? limit 1"
            this.db.query(sql,[year],(err,result)=>{
                if(err)reject(err)
                else resolve(result)
            })
        })
    }
    createYear(section_id,year,callBack){
        return new Promise((resolve,reject)=>{
            const sql = "INSERT INTO `years`(`section_id`,`year`) VALUES(?,?) "
            this.db.query(sql,[section_id ,year],(err,result)=>{
                if(err)reject(err)
                else resolve(result)
            })
        })
    }
    addImages(section_id,year_id,fileNames,callBack){
        return new Promise((resolve,reject)=>{
            const sql = "INSERT INTO `images`(`section_id`,`year_id`,`image_path`) VALUES ?"
            const imgValues = fileNames.map(file => [section_id,year_id,file])
            
            this.db.execute(sql,[imgValues],(err,result)=>{
                if(err)reject(err)
                else resolve(result)
            })
        })
    }
    getAllSections(callBack){
        const sql = "SELECT*FROM `sections`"
        this.db.query(sql,[],callBack)
    }
    getYearsBySection(section_name,callBack){
        let sql = "SELECT*FROM `sections` WHERE `section_name`= ?"
        this.db.query(sql,[section_name],(err,res)=>{
            if(err){
                callBack(err,null)
            }else{
                console.log("Res: ",res);
                
                let id = res[0].id;
                let sql = "SELECT*FROM `years` WHERE `section_id` = ?" 
                this.db.query(sql,[id],callBack)     
            }
        })  
    }
    getImagesByYear(section_name, year, offset, callBack) {
        const sql = `
            SELECT * 
            FROM images 
            JOIN sections ON images.section_id = sections.id 
            JOIN years ON images.year_id = years.id 
            WHERE sections.section_name = ? AND years.year = ?
            LIMIT 30 OFFSET ?;
        `;
        this.db.query(sql, [section_name, year, offset], callBack);
    }
    countImages(section_name,year,callBack){
        const countQuery = `
            SELECT COUNT(*) AS total 
            FROM images 
            JOIN sections ON images.section_id = sections.id 
            JOIN years ON images.year_id = years.id 
            WHERE sections.section_name = ? AND years.year = ?;
        `;
        this.db.query(countQuery,[section_name,year],callBack)
    }

    
    
}

module.exports = Admin