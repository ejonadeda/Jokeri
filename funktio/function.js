document.getElementById('generateRowButton').addEventListener('click', () => {
    const tableBody = document.querySelector('#myTable tbody');
    const newRow = document.createElement('tr');

    for (let i = 0; i < 9; i++) {
        newRow.innerHTML += `<td>${Math.floor(Math.random() * 100)}</td>`;
    }
    tableBody.appendChild(newRow);

    document.getElementById('rowCount').textContent = tableBody.rows.length;
});
