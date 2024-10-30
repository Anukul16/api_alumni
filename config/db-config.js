const mysql = require('mysql2');

let connectionCount = 0;

class db_gateway {
  constructor() {}

  getDb(retries = 3) {
    return new Promise((resolve, reject) => {
      const tryConnect = (attempt) => {
        const db_con = mysql.createConnection({
            host:"localhost",
            user:"api", 
            password:"#alumni.com", 
            database:"alumni_db",
            port:3306,
        });

        db_con.connect((err) => {
          if (err) {
            console.log(`Connection attempt ${attempt} failed: ${err.message}`);
            if (attempt < retries) {
              setTimeout(() => tryConnect(attempt + 1), 2000); // Retry after 2 seconds
            } else {
              reject(new Error('Failed to connect to the database after multiple attempts'));
            }
          } else {
            connectionCount++;
            console.log("Connected to database: " + connectionCount);
            resolve(db_con);
          }
        });
      };

      tryConnect(1);
    });
  }

  close(db_con) {
    if (db_con) {
      db_con.end((err) => {
        if (err) {
          console.log(err.message);
        } else {
          connectionCount--;
          console.log("Connection closed: " + connectionCount);
        }
      });
    }
  }

  async execute(sql, params, callBack) {
    try {
      const db_con = await this.getDb();
      db_con.query(sql, params, (err, result) => {
        if (err) {
          callBack(err, null);
        } else {
          callBack(null, "Success");
        }
        this.close(db_con);
      });
    } catch (error) {
      callBack(error, null);
    }
  }

  async query(sql, params, callBack) {
    try {
      const db_con = await this.getDb();
      db_con.query(sql, params, (err, result) => {
        if (err) {
          callBack(err, null);
        } else {
          callBack(null, result);
        }
        this.close(db_con);
      });
    } catch (error) {
      callBack(error, null);
    }
  }

  getTime = () => {
    return new Date().toLocaleString('en-IN', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      timeZoneName: 'short'
    });
  }
}

module.exports = db_gateway;