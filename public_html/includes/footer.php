<footer class="zen-footer">
    <div class="footer-grid">
        <div class="footer-col">
            <h3>Zen<span>Eco</span>Homes</h3>
            <p>Din norske partner for trygt boligkjøp i Spania. Vi spesialiserer oss på moderne nybygg og unike tomter på Costa Blanca og Costa Calida.</p>
        </div>
        <div class="footer-col">
            <h3>Snarveier</h3>
            <div class="footer-links">
                <a href="eiendommer.php">Alle Eiendommer</a>
                <a href="eiendommer.php?region=Costa+Blanca+North">Costa Blanca Nord</a>
                <a href="eiendommer.php?region=Costa+Blanca+South">Costa Blanca Sør</a>
                <a href="login.php">Admin Login</a>
            </div>
        </div>
        <div class="footer-col">
            <h3>Kontakt Oss</h3>
            <div class="footer-links">
                <a href="mailto:freddy@zenecohomes.com"><i class="fas fa-envelope"></i> freddy@zenecohomes.com</a>
                <a href="tel:+47 9600 9965"><i class="fas fa-phone"></i> +47 9600 9965 </a>
                <p><i class="fas fa-map-marker-alt"></i> Benidorm, Spania</p>
            </div>
        </div>
    </div>
    <div class="footer-bottom">
        &copy; <?php echo date("Y"); ?> Zen Eco Homes. Alle rettigheter reservert.
    </div>
</footer>

<script>
// Enkel script for smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (!target) return;
        e.preventDefault();
        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

</script> <script src="https://realtyflow.chatgenius.pro/chatbot-embed.js"
  data-brand="zeneco"
  data-color="#10b981"
  data-title="Zen Eco Homes Assistent"
  data-welcome="Hei! Leter du etter eiendom i Spania?">
</script>



</body>
</html>
