const mahasiswaId = '2023004028';
const updatedData = {
    nama: 'Fahri Aziz',
    gender: 'L',
    prodi: 'TI',
    alamat: 'Cisaat'
};

fetch(`http://localhost:3000/mahasiswa/${mahasiswaId}`, {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(updatedData)
})
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
    
