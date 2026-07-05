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
    } else if (currentPath === "macos.html") {
        let el = document.getElementById('nav-macos');
        if(el) el.classList.add('active');
    }
});
