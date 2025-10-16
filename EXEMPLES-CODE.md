# 💻 Exemples de code pour personnaliser votre site

## 🎯 Snippets prêts à l'emploi

---

## 1. Ajouter une nouvelle modale

### Dans `script.js`, ajoutez dans l'objet `modalData` :

```javascript
'ma-nouvelle-section': {
    title: '🎯 Titre de ma section',
    content: `
        <div class="modal-section">
            <h3>Introduction</h3>
            <p>Texte d'introduction de votre section...</p>
        </div>

        <div class="modal-section">
            <h3>📸 Photos</h3>
            <div class="media-placeholder image-placeholder">
                <img src="mon-image.jpg" alt="Description" class="modal-image" 
                     onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                <div class="placeholder-box" style="display:none;">
                    <div class="placeholder-icon">📸</div>
                    <p><strong>Ajoutez votre image ici</strong></p>
                    <p class="placeholder-hint">Fichier : mon-image.jpg</p>
                </div>
            </div>
        </div>

        <div class="modal-section">
            <h3>Détails</h3>
            <ul class="skills-list">
                <li><strong>Point 1 :</strong> Explication</li>
                <li><strong>Point 2 :</strong> Explication</li>
                <li><strong>Point 3 :</strong> Explication</li>
            </ul>
        </div>
    `
}
```

### Dans `index.html`, ajoutez l'élément cliquable :

```html
<div class="clickable-item" data-modal="ma-nouvelle-section" role="button" tabindex="0">
    <div class="interest-icon">🎯</div>
    <h3>Ma nouvelle section</h3>
    <p>Description courte</p>
    <p class="click-hint">👆 Cliquez pour en savoir plus</p>
</div>
```

---

## 2. Ajouter un élément à la timeline

### Dans `index.html`, section timeline :

```html
<div class="timeline-item clickable-timeline-item" data-modal="mon-experience" role="button" tabindex="0">
    <div class="timeline-indicator">📸 🎬</div>
    <strong>🚀 Titre de mon expérience</strong>
    <p class="company">Nom de l'entreprise</p>
    <p class="period">Date début - Date fin</p>
    <ul style="margin-top: 0.5rem; padding-left: 1.2rem;">
        <li>Mission 1</li>
        <li>Mission 2</li>
        <li>Mission 3</li>
    </ul>
    <p class="click-hint">👆 Cliquez pour plus de détails</p>
</div>
```

### N'oubliez pas de créer la modale correspondante dans `script.js` !

---

## 3. Templates de modales par type

### Template : Expérience professionnelle

```javascript
'experience-entreprise': {
    title: '🚀 Poste - Entreprise',
    content: `
        <div class="modal-section">
            <div class="company-header">
                <h3>À propos du poste</h3>
                <p><strong>Période :</strong> Janvier 2024 - Aujourd'hui</p>
                <p><strong>Entreprise :</strong> Nom de l'entreprise</p>
                <p><strong>Localisation :</strong> Ville, Région</p>
            </div>
        </div>

        <div class="modal-section">
            <h3>📸 Mon environnement de travail</h3>
            <div class="media-placeholder image-placeholder">
                <img src="workspace.jpg" alt="Bureau" class="modal-image" 
                     onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                <div class="placeholder-box" style="display:none;">
                    <div class="placeholder-icon">💻</div>
                    <p><strong>Photo de votre workspace</strong></p>
                    <p class="placeholder-hint">Fichier : workspace.jpg</p>
                </div>
            </div>
        </div>

        <div class="modal-section">
            <h3>Missions principales</h3>
            <ul class="missions-list">
                <li>
                    <strong>Mission 1</strong>
                    <p>Description détaillée de la mission</p>
                </li>
                <li>
                    <strong>Mission 2</strong>
                    <p>Description détaillée de la mission</p>
                </li>
            </ul>
        </div>

        <div class="modal-section">
            <h3>🛠️ Stack technique</h3>
            <div class="tech-stack">
                <span class="tech-badge">Python</span>
                <span class="tech-badge">React</span>
                <span class="tech-badge">Docker</span>
            </div>
        </div>

        <div class="modal-section">
            <h3>📍 Localisation</h3>
            <iframe 
                src="VOTRE_URL_GOOGLE_MAPS_EMBED" 
                width="100%" 
                height="300" 
                style="border:0; border-radius: 8px;" 
                allowfullscreen="" 
                loading="lazy"
                title="Localisation">
            </iframe>
        </div>
    `
}
```

### Template : Formation

```javascript
'formation-ecole': {
    title: '🎓 Formation - École',
    content: `
        <div class="modal-section">
            <p><strong>Formation :</strong> Nom du diplôme (Niveau RNCP)</p>
            <p><strong>Période :</strong> 2020-2023</p>
            <p><strong>Localisation :</strong> Ville</p>
        </div>

        <div class="modal-section">
            <h3>📸 Souvenirs de la formation</h3>
            <div class="media-placeholder image-placeholder">
                <img src="formation-photo.jpg" alt="École" class="modal-image" 
                     onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                <div class="placeholder-box" style="display:none;">
                    <div class="placeholder-icon">🎓</div>
                    <p><strong>Photo de l'école</strong></p>
                    <p class="placeholder-hint">Fichier : formation-photo.jpg</p>
                </div>
            </div>
        </div>

        <div class="modal-section">
            <h3>Programme de formation</h3>
            <div class="program-grid">
                <div class="program-item">
                    <h4>📊 Module 1</h4>
                    <p>Description du module</p>
                </div>
                <div class="program-item">
                    <h4>🤖 Module 2</h4>
                    <p>Description du module</p>
                </div>
            </div>
        </div>

        <div class="modal-section">
            <h3>🎬 Projet de fin de formation</h3>
            <div class="media-placeholder video-placeholder">
                <video controls class="modal-video" poster="projet-thumbnail.jpg">
                    <source src="projet-final.mp4" type="video/mp4">
                </video>
                <div class="placeholder-box">
                    <div class="placeholder-icon">🎬</div>
                    <p><strong>Vidéo de votre projet</strong></p>
                    <p class="placeholder-hint">Fichier : projet-final.mp4</p>
                </div>
            </div>
        </div>
    `
}
```

### Template : Hobby / Intérêt

```javascript
'mon-hobby': {
    title: '🎯 Titre du hobby',
    content: `
        <div class="modal-section">
            <h3>Description</h3>
            <p>Description de votre passion, pourquoi vous aimez ça...</p>
            
            <div class="media-placeholder gif-placeholder">
                <img src="hobby.gif" alt="Mon hobby" class="modal-gif" 
                     onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                <div class="placeholder-box" style="display:none;">
                    <div class="placeholder-icon">🎯</div>
                    <p><strong>GIF de votre hobby</strong></p>
                    <p class="placeholder-hint">Fichier : hobby.gif</p>
                </div>
            </div>
        </div>

        <div class="modal-section">
            <h3>Ce que ça m'apporte</h3>
            <ul class="skills-list">
                <li><strong>Compétence 1 :</strong> Explication</li>
                <li><strong>Compétence 2 :</strong> Explication</li>
                <li><strong>Compétence 3 :</strong> Explication</li>
            </ul>
        </div>
    `
}
```

---

## 4. Composants visuels réutilisables

### Stats Grid (pour statistiques)

```html
<div class="stats-grid">
    <div class="stat-card">
        <div class="stat-icon">🏆</div>
        <div class="stat-value">Top 10</div>
        <div class="stat-label">Classement mondial</div>
    </div>
    <div class="stat-card">
        <div class="stat-icon">🎓</div>
        <div class="stat-value">5 ans</div>
        <div class="stat-label">D'expérience</div>
    </div>
    <div class="stat-card">
        <div class="stat-icon">🚀</div>
        <div class="stat-value">20+</div>
        <div class="stat-label">Projets réalisés</div>
    </div>
</div>
```

### Image Grid (galerie d'images)

```html
<div class="image-grid">
    <div class="media-placeholder">
        <img src="image1.jpg" alt="Description 1" class="modal-image-small" 
             onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
        <div class="placeholder-box" style="display:none;">
            <div class="placeholder-icon">📸</div>
            <p><strong>Image 1</strong></p>
        </div>
    </div>
    <div class="media-placeholder">
        <img src="image2.jpg" alt="Description 2" class="modal-image-small" 
             onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
        <div class="placeholder-box" style="display:none;">
            <div class="placeholder-icon">📸</div>
            <p><strong>Image 2</strong></p>
        </div>
    </div>
</div>
```

### Tech Stack (badges de technologies)

```html
<div class="tech-stack">
    <span class="tech-badge">Python</span>
    <span class="tech-badge">JavaScript</span>
    <span class="tech-badge">React</span>
    <span class="tech-badge">Node.js</span>
    <span class="tech-badge">Docker</span>
    <span class="tech-badge">AWS</span>
</div>
```

### Info Box (encadré d'informations)

```html
<div class="info-box">
    <p><strong>📍 Localisation :</strong> Paris, France</p>
    <p><strong>🔗 Site web :</strong> example.com</p>
    <p><strong>⏱️ Durée :</strong> 3 ans</p>
    <p><strong>💼 Type :</strong> CDI</p>
</div>
```

### Missions List (liste de missions/réalisations)

```html
<ul class="missions-list">
    <li>
        <strong>🤖 Titre de la mission</strong>
        <p>Description détaillée de ce qui a été fait</p>
    </li>
    <li>
        <strong>🌐 Titre de la mission 2</strong>
        <p>Description détaillée</p>
    </li>
    <li>
        <strong>📚 Titre de la mission 3</strong>
        <p>Description détaillée</p>
    </li>
</ul>
```

### Program Grid (grille de programmes/modules)

```html
<div class="program-grid">
    <div class="program-item">
        <h4>💻 Module 1</h4>
        <p>Description du module</p>
    </div>
    <div class="program-item">
        <h4>🤖 Module 2</h4>
        <p>Description du module</p>
    </div>
    <div class="program-item">
        <h4>☁️ Module 3</h4>
        <p>Description du module</p>
    </div>
    <div class="program-item">
        <h4>📊 Module 4</h4>
        <p>Description du module</p>
    </div>
</div>
```

---

## 5. Intégration Google Maps

### Obtenir le code embed :

1. Allez sur [Google Maps](https://maps.google.com)
2. Cherchez votre adresse
3. Cliquez sur "Partager"
4. Onglet "Intégrer une carte"
5. Copiez le code

### Code à utiliser :

```html
<div class="modal-section">
    <h3>📍 Localisation</h3>
    <iframe 
        src="https://www.google.com/maps/embed?pb=VOTRE_CODE_ICI" 
        width="100%" 
        height="300" 
        style="border:0; border-radius: 8px;" 
        allowfullscreen="" 
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        title="Localisation de l'entreprise">
    </iframe>
</div>
```

---

## 6. Ajouter une vidéo YouTube

```html
<div class="modal-section">
    <h3>🎬 Vidéo</h3>
    <div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden;">
        <iframe 
            style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border-radius: 12px;"
            src="https://www.youtube.com/embed/VIDEO_ID" 
            title="Titre de la vidéo" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen>
        </iframe>
    </div>
</div>
```

Remplacez `VIDEO_ID` par l'ID de votre vidéo (exemple : dQw4w9WgXcQ)

---

## 7. Ajouter un lecteur audio

```html
<div class="modal-section">
    <h3>🎵 Ma composition</h3>
    <audio controls class="modal-audio" style="width: 100%;">
        <source src="ma-musique.mp3" type="audio/mpeg">
        <source src="ma-musique.ogg" type="audio/ogg">
        Votre navigateur ne supporte pas l'audio HTML5.
    </audio>
</div>
```

---

## 8. Personnaliser les couleurs

### Dans `style-modal-enhanced.css` :

```css
/* Changer la couleur principale (violet → votre couleur) */

/* Placeholders images */
.image-placeholder .placeholder-box {
    background: linear-gradient(135deg, #VOTRE_COULEUR_1 0%, #VOTRE_COULEUR_2 100%);
}

/* Placeholders vidéos */
.video-placeholder .placeholder-box {
    background: linear-gradient(135deg, #VOTRE_COULEUR_1 0%, #VOTRE_COULEUR_2 100%);
}

/* Timeline hover */
.clickable-timeline-item {
    border-left-color: #VOTRE_COULEUR_1;
}

.clickable-timeline-item::before {
    background: #VOTRE_COULEUR_1;
    box-shadow: 0 0 0 3px #VOTRE_COULEUR_1;
}

/* Tech badges */
.tech-badge {
    background: linear-gradient(135deg, #VOTRE_COULEUR_1 0%, #VOTRE_COULEUR_2 100%);
}

/* Stats cards */
.stat-card {
    background: linear-gradient(135deg, #VOTRE_COULEUR_1 0%, #VOTRE_COULEUR_2 100%);
}
```

---

## 9. Ajouter Google Analytics

### Dans `index.html`, avant `</head>` :

```html
<!-- Google Analytics 4 -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

**Comment obtenir votre ID :**
1. Créez un compte sur [analytics.google.com](https://analytics.google.com)
2. Créez une propriété GA4
3. Copiez votre ID (format G-XXXXXXXXXX)

---

## 10. Ajouter un formulaire de contact

```html
<section id="contact-form" class="contact-form-section">
    <div class="container">
        <h2>Envoyez-moi un message</h2>
        
        <form action="https://formspree.io/f/VOTRE_ID" method="POST">
            <div class="form-group">
                <label for="name">Nom *</label>
                <input type="text" id="name" name="name" required>
            </div>
            
            <div class="form-group">
                <label for="email">Email *</label>
                <input type="email" id="email" name="email" required>
            </div>
            
            <div class="form-group">
                <label for="subject">Sujet</label>
                <input type="text" id="subject" name="subject">
            </div>
            
            <div class="form-group">
                <label for="message">Message *</label>
                <textarea id="message" name="message" rows="5" required></textarea>
            </div>
            
            <button type="submit" class="btn btn-primary">Envoyer</button>
        </form>
    </div>
</section>
```

**Service recommandé :** [Formspree](https://formspree.io/) (gratuit, sans backend)

### CSS pour le formulaire :

```css
.form-group {
    margin-bottom: 1.5rem;
}

.form-group label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 600;
    color: #333;
}

.form-group input,
.form-group textarea {
    width: 100%;
    padding: 0.75rem;
    border: 2px solid #e0e0e0;
    border-radius: 8px;
    font-size: 1rem;
    transition: border-color 0.3s;
}

.form-group input:focus,
.form-group textarea:focus {
    outline: none;
    border-color: #667eea;
}
```

---

## 11. Ajouter un bouton "Retour en haut"

### HTML (avant `</body>`) :

```html
<button id="backToTop" class="back-to-top" aria-label="Retour en haut">
    ↑
</button>
```

### CSS :

```css
.back-to-top {
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    border: none;
    border-radius: 50%;
    font-size: 24px;
    cursor: pointer;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s;
    z-index: 1000;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}

.back-to-top.visible {
    opacity: 1;
    visibility: visible;
}

.back-to-top:hover {
    transform: translateY(-5px);
}
```

### JavaScript (dans `script.js`) :

```javascript
// Back to top button
const backToTopButton = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopButton.classList.add('visible');
    } else {
        backToTopButton.classList.remove('visible');
    }
});

backToTopButton?.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
```

---

## 12. Ajouter un cookie banner (RGPD)

### HTML (avant `</body>`) :

```html
<div id="cookieBanner" class="cookie-banner">
    <p>
        Ce site utilise des cookies pour améliorer votre expérience. 
        <a href="#" class="cookie-link">En savoir plus</a>
    </p>
    <button onclick="acceptCookies()" class="btn btn-primary btn-small">
        Accepter
    </button>
</div>
```

### CSS :

```css
.cookie-banner {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.9);
    color: white;
    padding: 1.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 9999;
    transform: translateY(100%);
    transition: transform 0.3s;
}

.cookie-banner.visible {
    transform: translateY(0);
}

.cookie-link {
    color: #667eea;
    text-decoration: underline;
}
```

### JavaScript :

```javascript
// Cookie banner
function acceptCookies() {
    localStorage.setItem('cookiesAccepted', 'true');
    document.getElementById('cookieBanner').classList.remove('visible');
}

// Show banner if not accepted
if (!localStorage.getItem('cookiesAccepted')) {
    document.getElementById('cookieBanner')?.classList.add('visible');
}
```

---

## 💡 Conseils finaux

### Organisation du code
- Gardez `script.js` organisé par sections (modales, navigation, animations...)
- Commentez votre code pour vous y retrouver
- Utilisez des noms de variables explicites

### Performance
- Compressez vos images avant upload
- Utilisez lazy loading pour les images
- Minifiez CSS/JS en production

### SEO
- Chaque image doit avoir un alt text descriptif
- Utilisez des mots-clés pertinents naturellement
- Créez du contenu régulièrement (blog)

### Accessibilité
- Testez navigation au clavier
- Vérifiez les contrastes de couleurs
- Ajoutez des ARIA labels

---

**Besoin de plus d'exemples ?** Inspirez-vous des modales déjà créées dans `script.js` !