
// --- DATABASE SISWA MANUAL (34 PERSONEL) ---
const students = [
    { name: "Zamroni", photo: "https://i.ibb.co.com/ymXBQ5RP/IMG-20260314-WA0108.jpg", quote: "terus berjalan tanpa pemandu" },
    { name: "Via", photo: "https://i.ibb.co.com/nNpjkhxx/IMG-20260314-WA0044.jpg", quote: "Semesta mempertemukan waktu mengajarkan kenangan menyimpan" },
    { name: "Alam", photo: "https://i.ibb.co.com/zTg1GhXQ/IMG-20260314-WA0131.jpg", quote: "selalu bersyukur dan terus lah bernapas" },
    { name: "Andini", photo: "https://i.ibb.co.com/ycb7bBVk/IMG-20260314-WA0033.jpg", quote: "dipertemukan karana pendidikan dipisahkan oleh masa depan,perpisahan bukanlah akhir,perpisahan adalah awal  dari pertemuan yang baru🙌" },
    { name: "Arip", photo: "https://i.ibb.co.com/mZ2hHLr/IMG-20260314-WA0142.jpg", quote: "Terus hidup" },
    { name: "Thalita", photo: "https://i.ibb.co.com/7dbd2KCn/IMG-20260314-WA0041.jpg", quote: "kalau mau hidupmu di permudah jangan mempersulit orang lain" },
    { name: "Zulfikar", photo: "https://i.ibb.co.com/zTC366ns/IMG-20260314-WA0135.jpg", quote: "nikmati  setiap waktu yang ada, karna suatu saat kita  akan rindu  masa masa  ini ✨" },
    { name: "Shelly", photo: "https://i.ibb.co.com/21X76FZf/IMG-20260314-WA0037.jpg", quote: "jangan berkembang biak  kalau belum berkembang baik" },
    { name: "Febryan", photo: "https://i.ibb.co.com/9SWgpwN/IMG-20260314-WA0116.jpg", quote: "rindu itu bukan tentang perpisahan dan jarak yg berjauhan tapi rindu dimana nama sudah di batu nisan dan hanya bisa mengirim doa yg di lafalkan" },
    { name: "Silfina", photo: "https://i.ibb.co.com/zHLycSdx/IMG-20260314-WA0040.jpg", quote: "untuk mencapai 10 tidak harus dengan 5+5" },
    { name: "Rapi", photo: "https://i.ibb.co.com/Q3Nh5BS4/DSC-8531e-pp.jpg", quote: "motivasi tanpa aksi hanyalah halusinasi" },
    { name: "Nesia", photo: "https://i.ibb.co.com/N6PFwYvc/IMG-20260314-WA0032.jpg", quote: "Tidak ada yang abadi di dunia ini dan kita bodoh jika berharap sesuatu tetap ada selamanya.tapi lebih bodoh lagi kalau kita tidak menikmatinya selagi kita memilikinya" },
    { name: "Fadlan", photo: "https://i.ibb.co.com/v48M4891/IMG-20260314-WA0133.jpg", quote: "Kerjakan sekarang, sempurnakan nanti." },
    { name: "Nita", photo: "https://i.ibb.co.com/kg3Cbhb9/IMG-20260314-WA0043.jpg", quote: "prestasi tidak menentukan mu sukses tetapi sukses di tentukan oleh caramu berproses" },
    { name: "Indra", photo: "https://i.ibb.co.com/wFX4yJtm/IMG-20260314-WA0117.jpg", quote: "Tidak butuh kata-kata yg penting  bukti nyata" },
    { name: "Aila", photo: "https://i.ibb.co.com/SX5LsmNv/IMG-20260314-WA0029.jpg", quote: "Satu langkah kecil hari ini lebih baik pada seribu rencana esok hari" },
    { name: "Tegar", photo: "https://i.ibb.co.com/zHXnttpK/IMG-20260314-WA0127.jpg", quote: "terlalu banyak kekurangan, untuk menjadi prioritas seseorang" },
    { name: "Ririn", photo: "https://i.ibb.co.com/cc7GsvVC/IMG-20260314-WA0039.jpg", quote: "hidup itu perjalanan bukan tujuan" },
    { name: "Abi", photo: "https://i.ibb.co.com/ycCgn0sd/IMG-20260314-WA0132.jpg", level: "94" },
    { name: "Dwi", photo: "https://i.ibb.co.com/0jN1bSNb/IMG-20260314-WA0036.jpg", quote: "tidak semua yang pergi itu buruk terkadang itu adalah awal dari yang lebih baik" },
    { name: "Fiqi", photo: "https://i.ibb.co.com/WvSzDDBG/IMG-20260314-WA0107.jpg", quote: "aku bersyukur memiliki kamu" },
    { name: "Aisya", photo: "https://i.ibb.co.com/GQsbthSt/IMG-20260314-WA0034.jpg", quote: "for my peace i choose myself" },
    { name: "Madan", photo: "https://i.ibb.co.com/Xfb3Sysh/IMG-20260314-WA0134.jpg", level: "93" },
    { name: "Disa", photo: "https://i.ibb.co.com/dwTX6bww/IMG-20260314-WA0038.jpg", quote: "saat dunia memberi seribu kata untuk menyerah maka temukanlah satu alasan untuk terus melangkah" },
    { name: "Zara", photo: "https://i.ibb.co.com/mm4cQPh/IMG-20260314-WA0042.jpg", quote: "kalau nantinya aku berhasil berarti allah yang kasi aku jalan" },
    { name: "Agi", photo: "https://i.ibb.co.com/0RZqHJv3/IMG-20260314-WA0140.jpg", quote: "cinta di tolak kapak bertindak" },
    { name: "Yongki", photo: "https://i.ibb.co.com/chxBZ2K0/DSC-8546e-pp.jpg", quote: "92" },
    { name: "Arpin", photo: "https://i.ibb.co.com/6cgjWxbq/IMG-20260314-WA0141.jpg", quote:"selalu merasa cukup itulah cara saya menikmati hidup" },
    { name: "Erlan", photo: "https://i.ibb.co.com/TDSBfM6j/IMG-20260314-WA0139.jpg", quote: "Spike keras, bukan sekedar keras kepala" },
    { name: "Zulkarnaen", photo: "https://i.ibb.co.com/bgSc9ZmN/DSC-8521e-pp.jpg", level: "89" },
    { name: "Genta", photo: "https://i.ibb.co.com/sJbXGLkN/IMG-20260314-WA0109.jpg", quote: "Enjoy life" },
    { name: "Yudi", photo: "https://i.ibb.co.com/1tGcS6vF/DSC-8548e-pp.jpg", quote: "prestasi tidak menentukan mu sukses tetapi sukses di tentukan oleh cara mu berposes" },
    { name: "Rio", photo: "https://i.ibb.co.com/h1fWLVzG/DSC04697e-pp3x4.jpg", quote: "" }
];

    // ... teruskan ganti semua foto.jpg menjadi link URL ...
const squadList = document.getElementById('squad-list');

// ================== BAGIAN WAJIB TAMBAHAN ==================
const vipTopStudents = [
    { name: "Via", photo: "https://i.ibb.co.com/nNpjkhxx/IMG-20260314-WA0044.jpg", quote: "Semesta mempertemukan waktu mengajarkan kenangan menyimpan" },
    { name: "Genta", photo: "https://i.ibb.co.com/sJbXGLkN/IMG-20260314-WA0109.jpg", quote: "Enjoy life" },
    { name: "Tegar", photo: "https://i.ibb.co.com/zHXnttpK/IMG-20260314-WA0127.jpg", quote: "terlalu banyak kekurangan, untuk menjadi prioritas seseorang" }
];

const vipTopContainer = document.createElement('div');
vipTopContainer.style.cssText = `
    width: 90%;
    max-width: 1000px;
    margin: 2rem auto 3rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2rem;
    padding: 1rem;
`;

vipTopStudents.forEach((vipStd, vipIndex) => {
    const vipCard = document.createElement('div');
    vipCard.style.cssText = `
        width: 100%;
        max-width: 280px;
        background: linear-gradient(180deg, #2d2d2d, #1a1a1a);
        border-radius: 12px;
        padding: 2rem;
        text-align: center;
        color: #fff;
        box-shadow: 0 8px 20px rgba(255, 112, 67, 0.3);
        border: 2px solid #ff7043;
        position: relative;
    `;

    vipCard.innerHTML = `
        <div style="
            position: absolute;
            top: 1rem;
            left: 1rem;
            font-size: 0.8rem;
            color: #ffd700;
            font-weight: bold;
            background: rgba(0,0,0,0.6);
            padding: 0.3rem 0.7rem;
            border-radius: 4px;
        ">VIP SQUAD-${(vipIndex + 1).toString().padStart(2, '0')}</div>
        <div style="width: 80px; height: 80px; margin: 0 auto 1.5rem; overflow: hidden; border-radius: 50%; border: 3px solid #ffd700; box-shadow: 0 0 15px rgba(255, 215, 0, 0.4);">
            <img src="${vipStd.photo}" 
                 alt="${vipStd.name}" 
                 onerror="this.src='https://via.placeholder.com/80/222/ffd700?text=VIP'"
                 style="width: 100%; height: 100%; object-fit: cover;">
        </div>
        <h3 style="margin: 0 0 1rem; text-transform: uppercase; font-size: 1.1rem; color: #ff7043; text-shadow: 0 0 5px rgba(255, 112, 67, 0.3);">${vipStd.name}</h3>
        <p style="font-size: 0.8rem; color: #e0e0e0; line-height: 1.5; padding: 0 0.5rem;">${vipStd.quote}</p>
    `;

    vipTopContainer.appendChild(vipCard);
});

if (squadList) {
    squadList.innerHTML = ""; 
    students.forEach((std, index) => {
        // Membuat format ID agar jadi SQUAD-01, SQUAD-02, dst.
        const squadId = (index + 1).toString().padStart(2, '0');
        
        const memberCard = document.createElement('div');
        memberCard.className = 'member-card';
        
        // Template HTML
        memberCard.innerHTML = `
            <div class="member-id">ID: SQUAD-${squadId}</div>
            <div class="img-container" style="width: 60px; height: 60px; margin: 0 auto; overflow: hidden; border-radius: 50%; border: 2px solid #ff7043; background: #222;">
                <img src="${std.photo}" 
                     alt="${std.name}" 
                     onerror="this.src='https://via.placeholder.com/60/222/ff7043?text=?'"
                     style="width: 100%; height: 100%; object-fit: cover; display: block;">
            </div>
            <h4 style="margin-top: 15px; text-transform: uppercase; font-size: 0.8rem;">${std.name}</h4>
            <p style="font-size: 0.6rem; color: #fff; font-weight: bold; text-align: center; margin-top: 20px; max-width: 90%; margin-left: auto; margin-right: auto;">${std.quote}</p>
            </div>
        `;
        squadList.appendChild(memberCard);
    });
}
