function lacakPaket() {
    const noDO = document.getElementById('noDO').value;
    const resultDiv = document.getElementById('trackingResult');
    const timelineList = document.getElementById('timelineList');

    if (noDO === "") {
        alert("Silahkan masukkan nomor DO!");
        return;
    }

    const dataTracking = [
        { status: "Selesai antar di Cilandak, Jakarta Selatan", detail: "Diterima oleh Rina Wulandari", waktu: "2021-03-20 13:34:59", icon: "check" },
        { status: "Proses antar di Cilandak", detail: "", waktu: "2021-03-20 09:05:08", icon: "truck" },
        { status: "Tiba di Hub SPP Jakarta", detail: "", waktu: "2021-03-19 23:05:42", icon: "building" },
        { status: "Penerimaan di loket : TANGERANG SELATAN", detail: "Pengirim: UNIVERSITAS TERBUKA", waktu: "2021-03-10 15:56:02", icon: "box" }
    ];

    // Bersihkan timeline lama
    timelineList.innerHTML = "";

    // Isi timeline baru
    dataTracking.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = `
            <div class="timeline-dot"></div>
            <div class="timeline-content">
                <strong>${item.status}</strong>
                <p>${item.detail}</p>
                <small>${item.waktu}</small>
            </div>
        `;
        timelineList.appendChild(li);
    });

    // Tampilkan hasil
    resultDiv.style.display = "block";
}