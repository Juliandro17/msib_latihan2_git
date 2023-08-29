function hitungRataRata() {
    const gradeValue = document.getElementById("grade").value;
    
    // Menghitung nilai numerik berdasarkan grade (contoh sederhana)
    let nilaiNumerik = 0;
    switch (gradeValue) {
        case "A":
            nilaiNumerik = 4;
            break;
        case "B":
            nilaiNumerik = 3;
            break;
        case "C":
            nilaiNumerik = 2;
            break;
        case "D":
            nilaiNumerik = 1;
            break;
        default:
            nilaiNumerik = 0;
    }
    
    // Menampilkan hasil
    const namaMahasiswa = document.getElementById("nama").value;
    const mataKuliah = document.getElementById("mata-kuliah").value;
    const rataRata = nilaiNumerik.toFixed(2);
    
    const hasilElemen = document.getElementById("hasil");
    hasilElemen.innerHTML = `<p><strong>Nama Mahasiswa:</strong> ${namaMahasiswa}</p>
                            <p><strong>Mata Kuliah:</strong> ${mataKuliah}</p>
                            <p><strong>Rata-Rata Nilai:</strong> ${rataRata}</p>`;
}
