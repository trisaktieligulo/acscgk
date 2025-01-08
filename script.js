document.addEventListener('DOMContentLoaded', function() {
    // Tambahkan kode untuk mengambil data dan memperbarui tabel
});
document.getElementById('searchInput').addEventListener('keyup', function() {
    let filter = this.value.toUpperCase();
    let rows = document.querySelector("tbody").rows;

    for (let i = 0; i < rows.length; i++) {
        let firstCol = rows[i].cells[1].textContent.toUpperCase();
        let secondCol = rows[i].cells[2].textContent.toUpperCase();
        if (firstCol.includes(filter) || secondCol.includes(filter)) {
            rows[i].style.display = "";
        } else {
            rows[i].style.display = "none";
        }
    }
});
