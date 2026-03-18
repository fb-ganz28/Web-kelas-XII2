
// --- DATABASE SISWA MANUAL (34 PERSONEL) ---
const students = [
    { name: "Zamroni", photo: "https://i.ibb.co.com/ymXBQ5RP/IMG-20260314-WA0108.jpg", level: "95" },
    { name: "Via", photo: "https://i.ibb.co.com/nNpjkhxx/IMG-20260314-WA0044.jpg", level: "90" },
    { name: "Alam", photo: "https://i.ibb.co.com/zTg1GhXQ/IMG-20260314-WA0131.jpg", level: "85" },
    { name: "Andini", photo: "https://i.ibb.co.com/ycb7bBVk/IMG-20260314-WA0033.jpg", level: "88" },
    { name: "Arip", photo: "https://i.ibb.co.com/mZ2hHLr/IMG-20260314-WA0142.jpg", level: "90" },
    { name: "Thalita", photo: "https://i.ibb.co.com/7dbd2KCn/IMG-20260314-WA0041.jpg", level: "85" },
    { name: "Zulfikar", photo: "https://i.ibb.co.com/zTC366ns/IMG-20260314-WA0135.jpg", level: "94" },
    { name: "Shelly", photo: "https://i.ibb.co.com/21X76FZf/IMG-20260314-WA0037.jpg", quote: "jangan berkembang biak  kalau belum berkembang baik" },
    { name: "Febryan", photo: "https://i.ibb.co.com/9SWgpwN/IMG-20260314-WA0116.jpg", level: "91" },
    { name: "Silfina", photo: "https://i.ibb.co.com/zHLycSdx/IMG-20260314-WA0040.jpg", level: "89" },
    { name: "Rapi", photo: "https://i.ibb.co.com/Q3Nh5BS4/DSC-8531e-pp.jpg", level: "93" },
    { name: "Nesia", photo: "https://i.ibb.co.com/N6PFwYvc/IMG-20260314-WA0032.jpg", level: "86" },
    { name: "Fadlan", photo: "https://i.ibb.co.com/v48M4891/IMG-20260314-WA0133.jpg", level: "90" },
    { name: "Nita", photo: "https://i.ibb.co.com/kg3Cbhb9/IMG-20260314-WA0043.jpg", level: "88" },
    { name: "Indra", photo: "https://i.ibb.co.com/wFX4yJtm/IMG-20260314-WA0117.jpg", level: "92" },
    { name: "Aila", photo: "https://i.ibb.co.com/SX5LsmNv/IMG-20260314-WA0029.jpg", level: "85" },
    { name: "Tegar", photo: "https://i.ibb.co.com/zHXnttpK/IMG-20260314-WA0127.jpg", level: "90" },
    { name: "Ririn", photo: "https://i.ibb.co.com/cc7GsvVC/IMG-20260314-WA0039.jpg", level: "87" },
    { name: "Abi", photo: "https://i.ibb.co.com/ycCgn0sd/IMG-20260314-WA0132.jpg", level: "94" },
    { name: "Dwi", photo: "https://i.ibb.co.com/0jN1bSNb/IMG-20260314-WA0036.jpg", level: "89" },
    { name: "Fiqi", photo: "https://i.ibb.co.com/WvSzDDBG/IMG-20260314-WA0107.jpg", level: "91" },
    { name: "Aisya", photo: "https://i.ibb.co.com/GQsbthSt/IMG-20260314-WA0034.jpg", level: "88" },
    { name: "Madan", photo: "https://i.ibb.co.com/Xfb3Sysh/IMG-20260314-WA0134.jpg", level: "93" },
    { name: "Disa", photo: "https://i.ibb.co.com/dwTX6bww/IMG-20260314-WA0038.jpg", level: "86" },
    { name: "Zara", photo: "https://i.ibb.co.com/mm4cQPh/IMG-20260314-WA0042.jpg", level: "90" },
    { name: "Agi", photo: "https://i.ibb.co.com/0RZqHJv3/IMG-20260314-WA0140.jpg", level: "85" },
    { name: "Yongki", photo: "https://i.ibb.co.com/chxBZ2K0/DSC-8546e-pp.jpg", level: "92" },
    { name: "Arpin", photo: "https://i.ibb.co.com/6cgjWxbq/IMG-20260314-WA0141.jpg", level: "87" },
    { name: "Erlan", photo: "https://i.ibb.co.com/TDSBfM6j/IMG-20260314-WA0139.jpg", level: "91" },
    { name: "Zulkarnaen", photo: "https://i.ibb.co.com/bgSc9ZmN/DSC-8521e-pp.jpg", level: "89" },
    { name: "Genta", photo: "https://i.ibb.co.com/sJbXGLkN/IMG-20260314-WA0109.jpg", level: "94" },
    { name: "Yudi", photo: "https://i.ibb.co.com/1tGcS6vF/DSC-8548e-pp.jpg", level: "88" },
    { name: "Unknow", photo: "foto34.jpg", level: "90" }
];

    // ... teruskan ganti semua foto.jpg menjadi link URL ...
const squadList = document.getElementById('squad-list');

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
