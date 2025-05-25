document.body.innerHTML=`

<!-- خلفية متحركة -->
<div id="particles-js"></div>

<header>
Applications
</header>

<main>
  <a href="/createads" class="button">إنشاء إعلان</a>

  <button class="button" onclick="showQR()">جرد المواد</button>

  <div id="qr-container">
    <img src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://barrenapp.netlify.app" alt="QR Code" />
    <a href="https://barrenapp.netlify.app/" target="_blank" class="button">اطلع على التطبيق</a>
  </div>
</main>

<footer>
 <p>© <b id="year"></b> All rights reserved by 
  <a href="https://sari-abdulla.web.app" target="_blank" class="glow-link">Dev. Sari</a>
</p>
</footer>
`