const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('./users.db');

async function queryDatabase(sql, params = []) {
    return new Promise((resolve, reject) => {
        db.all(sql, params, (err, rows) => {
            if (err) reject(err);
            resolve(rows);
        });
    });
}

module.exports = { queryDatabase };