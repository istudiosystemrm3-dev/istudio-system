// ประกาศ URL ครั้งเดียวที่นี่ เพื่อให้หน้าอื่นๆ เรียกใช้ได้อัตโนมัติ
const WEB_APP_URL = "https://script.google.com/macros/s/AKfycbzGXPWcFPx5Oy_Ey0LtxzAvIBVS7sB6j8pvFWY_BcpEL2lmThw-iWfdZS10K-ylKII1fQ/exec";

document.addEventListener("DOMContentLoaded", function() {
    const menuHTML = `
        <div class="navbar no-print">
            <a href="calculate.html" id="nav-calculate">คำนวณราคาอะไหล่ และ ทำใบเสนอราคา</a>
            <a href="search.html" id="nav-search">ค้นหารุ่น</a>
            <a href="price.html" id="nav-price">ตารางราคาหน้าร้าน</a>
            <a href="barcode-manual.html" id="nav-barcode">บาร์โค้ด สำหรับใช้หน้าร้าน</a>
            <a href="stock.html" id="nav-stock">สต๊อกสินค้า</a>
            <a href="firmware.html" id="nav-firmware">เฟิร์มแวร์ล่าสุด (IPSW)</a>
            <a href="macos.html" id="nav-macos">💻 macOS Bootable</a>
        </div>
    `;
 
    const container = document.getElementById('navbar-container');
    if (container) {
        container.innerHTML = menuHTML;
    }

    // ... (โค้ดจัดการ Active เมนูส่วนที่เหลือคงเดิม) ...
});
