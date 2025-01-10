const mysql = require('mysql');

// Konfigurasi koneksi MySQL
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'mahasiswa',
});

// Menghubungkan ke database
connection.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL database:', err.message);
        process.exit(1); // Keluar dari proses jika gagal terhubung
    } else {
        console.log('Connected to MySQL database');
    }
});

// Menangani error koneksi selama runtime
connection.on('error', (err) => {
    console.error('MySQL connection error:', err.message);
});

// Ekspor koneksi untuk digunakan di file lain
module.exports = connection;
