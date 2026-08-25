document.addEventListener("DOMContentLoaded", function() {
    try {
        const menuHTML = `
            <div class="navbar no-print">
                <a href="calculate.html" id="nav-calculate">คำนวณราคาอะไหล่ และ ทำใบเสนอราคา</a>
                <a href="search.html" id="nav-search">ค้นหารุ่น</a>
                <a href="price.html" id="nav-price">ตารางราคาหน้าร้าน</a>
                <a href="barcode-manual.html" id="nav-barcode">บาร์โค้ด สำหรับใช้หน้าร้าน</a>
                <a href="stock.html" id="nav-stock">📦 สต๊อกสินค้า</a>
                <a href="checklist.html" id="nav-checklist">📋 Checklist งานซ่อม</a>
                <a href="firmware.html" id="nav-firmware">เฟิร์มแวร์ล่าสุด (IPSW)</a>
                <a href="macos.html" id="nav-macos">💻 macOS Bootable</a>
                <a href="knowledge.html" id="nav-knowledge">📚 คลังความรู้ (Knowledge)</a>
            </div>
        `;
     
        const container = document.getElementById('navbar-container');
        if (container) {
            container.innerHTML = menuHTML;
            
            // โค้ดทำแถบสว่าง (Active) ให้เมนูที่กำลังเปิดอยู่
            let currentPath = window.location.pathname.split('/').pop();
            if (currentPath === '') currentPath = 'calculate.html'; 
            
            let activeLink = document.querySelector(`.navbar a[href="${currentPath}"]`);
            if (activeLink) {
                activeLink.classList.add('active');
            }
        }
    } catch (error) {
        console.error("Error loading navbar:", error);
    }
});
