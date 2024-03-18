import mysql from 'mysql2/promise';
async function initializeDatabase() {
  try {
    const db = await mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: 'dinesh123',
      database: 'cems',
    });

    console.log('Connected to MySQL');
    // You can perform additional operations here if needed
    // Return the open connection
    return db;
  } catch (err) {
    console.error('Error connecting to MySQL:', err);
    throw err;
  }
}
const db = await initializeDatabase();
          
export { db };
