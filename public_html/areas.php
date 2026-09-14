<?php include 'includes/header.php'; ?>

<div class="hero" style="height: 50vh; background-image: url('assets/areas.jpg');">
    <div class="hero-content">
        <h1>Utforsk Områdene</h1>
        <p>Fra pulserende kystbyer til rolige vinområder.</p>
    </div>
</div>

<div class="container">
    
    <div class="grid-2" style="margin-bottom: 80px;">
     <img src="assets/areas.jpg" alt="Områder Costa Blanca" style="width: 100%; height: auto; border-radius: 4px; box-shadow: 0 10px 30px rgba(0,0,0,0.1); object-fit: cover;">
        <div>
            <h2>Costa Blanca Nord</h2>
            <p>Kjent for dramatiske fjell, grønne daler og kystbyer som Altea, Calpe, Moraira og Jávea.</p>
            <ul style="margin-bottom: 20px;">
                <li><i class="fas fa-check" style="color:var(--zen-gold);"></i> Kupert terreng og grønne daler</li>
                <li><i class="fas fa-check" style="color:var(--zen-gold);"></i> Villa-, leilighets- og nybyggområder</li>
                <li><i class="fas fa-check" style="color:var(--zen-gold);"></i> Mange områder med sjø- og fjellutsikt</li>
            </ul>
            <a href="eiendommer.php?region=Costa+Blanca+North" class="btn btn-dark">Se boliger i Nord</a>
        </div>
    </div>

    <div class="grid-2" style="margin-bottom: 80px;">
        <div style="order: 2;"> <img src="https://images.unsplash.com/photo-1564852694965-976f0c8ae38a?auto=format&fit=crop&w=800&q=80" style="border-radius: 4px; box-shadow: 0 10px 30px rgba(0,0,0,0.1);">
        </div>
        <div style="order: 1;">
            <h2>Costa Blanca Sør</h2>
            <p>Kjent for lange sandstrender, saltlaguner og et stort boligtilbud. Her finner du blant annet Torrevieja, Orihuela Costa og Ciudad Quesada.</p>
            <ul style="margin-bottom: 20px;">
                <li><i class="fas fa-check" style="color:var(--zen-gold);"></i> Mange flate og lett tilgjengelige områder</li>
                <li><i class="fas fa-check" style="color:var(--zen-gold);"></i> Stort utvalg av strand-, golf- og nybyggområder</li>
                <li><i class="fas fa-check" style="color:var(--zen-gold);"></i> Store internasjonale helårsmiljøer flere steder</li>
            </ul>
            <a href="eiendommer.php?region=Costa+Blanca+South" class="btn btn-dark">Se boliger i Sør</a>
        </div>
    </div>

    <div class="grid-2">
        <img src="https://images.unsplash.com/photo-1533658286927-46a29777926b?auto=format&fit=crop&w=800&q=80" style="border-radius: 4px; box-shadow: 0 10px 30px rgba(0,0,0,0.1);">
        <div>
            <h2>Innlandet i Alicante og Murcia</h2>
            <p>For deg som ønsker mer plass, landsbyliv, vinland eller fjell. Vi dekker blant annet Biar, Busot, Villena, Hondón, Pinoso, Aspe, Novelda og Jumilla.</p>
            <ul style="margin-bottom: 20px;">
                <li><i class="fas fa-check" style="color:var(--zen-gold);"></i> Fincaer, tomter og moderne villaer</li>
                <li><i class="fas fa-check" style="color:var(--zen-gold);"></i> Ulike landsby-, fjell- og vinområder</li>
                <li><i class="fas fa-check" style="color:var(--zen-gold);"></i> Vi finner egnet tomt og vurderer riktig boligmodell</li>
            </ul>
            <a href="/inland" class="btn btn-dark">Utforsk Innlandet</a>
        </div>
    </div>

</div>

<?php include 'includes/footer.php'; ?>