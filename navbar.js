document.addEventListener("DOMContentLoaded", function() {
    // 1. โครงสร้างเมนู HTML
    const menuHTML = `
        <div class="navbar no-print">
            <a href="calculate.html" id="nav-calculate">1. คำนวณราคา</a>
            <a href="search.html" id="nav-search">2. ค้นหา & เพิ่มรุ่น</a>
            <a href="price.html" id="nav-price">3. ตารางราคา</a>
            <a href="barcode-manual.html" id="nav-barcode">🏷️ บาร์โค้ด (Manual)</a>
            <a href="stock.html" id="nav-stock">📦 สต๊อกสินค้า</a>
            <a href="firmware.html" id="nav-firmware">📱 เช็คตามรุ่น</a>
            <a href="firmware-latest.html" id="nav-fw-latest">⬇️ ลิงก์โหลดรวม (ไม่ซ้ำรุ่น)</a>
        </div>
    `;

    // 2. นำเมนูไปแทรกในหน้าเว็บ
    const container = document.getElementById('navbar-container');
    if (container) {
        container.innerHTML = menuHTML;
    }

    // 3. ระบบไฮไลท์ปุ่มอัตโนมัติ (Active)
    const currentPath = window.location.pathname.split("/").pop();
    
    if (currentPath === "calculate.html" || currentPath === "") {
        document.getElementById('nav-calculate').classList.add('active');
    } else if (currentPath === "search.html") {
        document.getElementById('nav-search').classList.add('active');
    } else if (currentPath === "price.html") {
        document.getElementById('nav-price').classList.add('active');
    } else if (currentPath === "barcode-manual.html") {
        document.getElementById('nav-barcode').classList.add('active');
    } else if (currentPath === "stock.html") {
        let el = document.getElementById('nav-stock');
        if(el) el.classList.add('active');
    } else if (currentPath === "firmware.html") {
        let el = document.getElementById('nav-firmware');
        if(el) el.classList.add('active');
    } else if (currentPath === "firmware-latest.html") {
        let el = document.getElementById('nav-fw-latest');
        if(el) el.classList.add('active');
    }
});
