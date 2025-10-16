# 📸 Guide d'ajout des médias pour votre portfolio

## 🎯 Vue d'ensemble

Votre site est maintenant équipé d'un système de modales interactif avec des **placeholders visuels** pour tous vos médias (photos, vidéos, GIFs, clips). Ce guide vous explique comment ajouter vos fichiers.

---

## 📁 Structure des fichiers médias

Placez tous vos fichiers médias dans le **même dossier que `index.html`** (racine du site).

```
votre-site/
├── index.html
├── style.css
├── script.js
├── me.png (déjà présent)
├── favicon.ico
│
├── 📸 PHOTOS
├── twitch-stats.png
├── workspace-pichet.jpg
├── team-photo.jpg
├── office-pichet.jpg
├── simplon-classroom.jpg
├── simplon-team.jpg
├── simplon-diplome.jpg
├── ecole-42-cluster.jpg
├── 42-piscine.jpg
├── 42-projects.jpg
├── sports-collage.jpg
├── streaming-setup.jpg
├── batterie.jpg
├── synthé.jpg
├── workout.jpg
├── codingame-profile.png
├── architecture-azure.png
├── projet-alternance-dashboard.png
│
├── 🎬 VIDÉOS
├── best-rocket-league-clip.mp4
├── demo-agent-ia.mp4
├── projet-final-simplon.mp4
│
├── 🎞️ GIFs
├── rocket-league-goal.gif
├── salsa-dance.gif
│
└── 🎵 AUDIO
    └── ma-composition.mp3
```

---

## 🔧 Checklist par section

### 🎮 **E-Sport / Streamer**

| Fichier | Type | Description | Dimensions recommandées |
|---------|------|-------------|------------------------|
| `twitch-stats.png` | Image | Screenshot de vos stats Twitch | 1200x675px (16:9) |
| `best-rocket-league-clip.mp4` | Vidéo | Votre meilleur clip Rocket League | 1920x1080, max 50MB |
| `video-thumbnail.jpg` | Image | Miniature de la vidéo | 1280x720px |
| `rocket-league-goal.gif` | GIF | But spectaculaire | Max 5MB |
| `streaming-setup.jpg` | Image | Photo de votre setup streaming | 1200x900px |

**💡 Suggestions :**
- Stats Twitch : Utilisez TwitchTracker ou SullyGnome
- Clips : Exportez depuis Twitch/YouTube
- GIFs : Créez avec Giphy ou ezgif.com

---

### 🚀 **Data Scientist CDI (Groupe Pichet)**

| Fichier | Type | Description | Dimensions recommandées |
|---------|------|-------------|------------------------|
| `workspace-pichet.jpg` | Image | Photo de votre bureau | 1200x900px |
| `team-photo.jpg` | Image | Photo d'équipe | 1200x800px |
| `office-pichet.jpg` | Image | Bureaux Groupe Pichet | 1200x800px |
| `demo-agent-ia.mp4` | Vidéo | Démo d'un agent IA en action | 1920x1080, max 100MB |
| `demo-agent-ia-thumbnail.jpg` | Image | Miniature de la démo | 1280x720px |

**💡 Suggestions :**
- Workspace : Setup avec vos écrans affichant du code/dashboards
- Demo IA : Screen recording avec OBS Studio
- Floutez les données sensibles avec un logiciel de montage

---

### 🔬 **Alternance (Groupe Pichet)**

| Fichier | Type | Description | Dimensions recommandées |
|---------|------|-------------|------------------------|
| `projet-alternance-dashboard.png` | Image | Dashboard Power BI | 1920x1080px |
| `architecture-azure.png` | Image | Schéma architecture Azure | 1600x900px |

**💡 Suggestions :**
- Dashboard : Screenshot de Power BI Desktop ou Service
- Architecture : Créez avec draw.io, Lucidchart ou Microsoft Visio
- Anonymisez les données d'entreprise si nécessaire

---

### 🎓 **Formation Simplon**

| Fichier | Type | Description | Dimensions recommandées |
|---------|------|-------------|------------------------|
| `simplon-classroom.jpg` | Image | Salle de classe Simplon | 1200x900px |
| `simplon-team.jpg` | Image | Photo de promo | 1200x800px |
| `simplon-diplome.jpg` | Image | Diplôme | 1200x1600px (portrait) |
| `projet-final-simplon.mp4` | Vidéo | Présentation projet final | 1920x1080, max 100MB |
| `projet-final-thumbnail.jpg` | Image | Miniature vidéo | 1280x720px |

**💡 Suggestions :**
- Demandez à Simplon les photos officielles de promo
- Scannez votre diplôme en haute résolution
- Enregistrez votre soutenance de projet

---

### 🎓 **École 42 Paris**

| Fichier | Type | Description | Dimensions recommandées |
|---------|------|-------------|------------------------|
| `ecole-42-cluster.jpg` | Image | Cluster ou votre poste | 1200x900px |
| `42-piscine.jpg` | Image | Photo de la piscine | 1200x800px |
| `42-projects.jpg` | Image | Screenshots de projets | 1200x800px |

**💡 Suggestions :**
- Utilisez les photos officielles de 42 ou vos souvenirs
- Screenshots de code : VS Code avec thème élégant
- Assurez-vous d'avoir les droits sur les images

---

### 💃 **Loisirs & Intérêts**

| Fichier | Type | Description | Dimensions recommandées |
|---------|------|-------------|------------------------|
| `salsa-dance.gif` | GIF | Vous en train de danser | Max 5MB |
| `sports-collage.jpg` | Image | Collage de vos activités | 1200x900px |
| `workout.jpg` | Image | Routine workout | 1200x900px |
| `batterie.jpg` | Image | Votre batterie | 1200x900px |
| `synthé.jpg` | Image | Votre synthétiseur | 1200x900px |
| `ma-composition.mp3` | Audio | Une de vos compositions | Max 10MB, MP3 320kbps |
| `codingame-profile.png` | Image | Screenshot profil CodinGame | 1200x900px |

**💡 Suggestions :**
- GIFs : Créez avec votre smartphone + app de conversion
- Collage : Utilisez Canva, Photoshop ou GIMP
- Audio : Exportez depuis FL Studio en MP3 haute qualité
- CodinGame : Screenshot de votre profil public

---

## 🎨 Outils recommandés

### Édition d'images
- **Gratuit** : GIMP, Canva, Photopea
- **Payant** : Photoshop, Affinity Photo

### Création de GIFs
- **En ligne** : ezgif.com, giphy.com
- **Desktop** : ScreenToGif, LICEcap

### Montage vidéo
- **Gratuit** : DaVinci Resolve, Shotcut, OpenShot
- **Simple** : OBS Studio (recording), Windows Video Editor
- **Payant** : Adobe Premiere Pro, Final Cut Pro

### Compression
- **Images** : TinyPNG, Squoosh.app
- **Vidéos** : HandBrake, FFmpeg
- **Audio** : Audacity

### Schémas & Diagrammes
- **Gratuit** : draw.io (diagrams.net), Excalidraw
- **Payant** : Lucidchart, Microsoft Visio

---

## 📏 Formats et optimisations

### Images (JPG/PNG)
```
✅ Formats acceptés : JPG, PNG, WebP
✅ Poids max recommandé : 500KB par image
✅ Résolution : 72-150 DPI pour le web
✅ Compression : 80-85% qualité JPG

🛠️ Commande ImageMagick (exemple) :
convert input.jpg -quality 85 -resize 1200x output.jpg
```

### Vidéos (MP4)
```
✅ Format : MP4 (codec H.264)
✅ Poids max : 50-100MB
✅ Résolution : 1920x1080 ou 1280x720
✅ Framerate : 30fps
✅ Bitrate vidéo : 2000-5000 kbps
✅ Bitrate audio : 128-192 kbps

🛠️ Commande FFmpeg (exemple) :
ffmpeg -i input.mp4 -vcodec h264 -b:v 2500k -acodec aac -b:a 128k output.mp4
```

### GIFs
```
✅ Poids max : 5MB
✅ Dimensions max : 800x600px
✅ Durée recommandée : 3-10 secondes
✅ Frames : 15-20 fps

🛠️ Conversion vidéo → GIF avec FFmpeg :
ffmpeg -i input.mp4 -vf "fps=15,scale=800:-1" -loop 0 output.gif
```

### Audio (MP3)
```
✅ Format : MP3
✅ Bitrate : 192-320 kbps
✅ Poids max : 10MB
✅ Durée recommandée : 2-5 minutes

🛠️ Commande FFmpeg :
ffmpeg -i input.wav -b:a 192k output.mp3
```

---

## 🚀 Processus d'intégration

### Étape 1 : Préparer vos fichiers
1. Rassemblez tous vos médias
2. Renommez-les selon la nomenclature ci-dessus
3. Optimisez-les (compression, dimensions)

### Étape 2 : Upload
1. Placez tous les fichiers dans le dossier racine de votre site
2. Assurez-vous que les noms correspondent **exactement** à ceux du code

### Étape 3 : Tester
1. Ouvrez `index.html` dans votre navigateur
2. Cliquez sur les éléments interactifs (timeline, cartes d'intérêt)
3. Vérifiez que les modales s'ouvrent
4. Vérifiez que vos médias s'affichent correctement

### Étape 4 : Fallback
- Si un média ne charge pas, le placeholder s'affiche automatiquement
- Le site reste fonctionnel même sans médias

---

## 🎯 Priorités d'ajout

Si vous n'avez pas tous les médias, voici l'ordre de priorité :

### Priorité HAUTE (Impact SEO + UX)
1. ✅ `me.png` (déjà présent)
2. 📸 `workspace-pichet.jpg` - Montre votre environnement pro
3. 📸 `twitch-stats.png` - Preuves de vos stats e-sport
4. 🎬 `demo-agent-ia.mp4` - Démo technique de votre travail
5. 📸 `codingame-profile.png` - Profil algorithmique

### Priorité MOYENNE
6. 📸 `architecture-azure.png` - Compétence technique
7. 📸 `projet-alternance-dashboard.png` - Réalisations
8. 📸 Photos formations (Simplon, 42)
9. 🎬 `projet-final-simplon.mp4`

### Priorité BASSE (Nice to have)
10. GIFs animés
11. Photos d'équipe
12. Photos loisirs
13. Fichiers audio

---

## 📱 Test responsive

Testez votre site sur :
- ✅ Desktop (Chrome, Firefox, Safari, Edge)
- ✅ Mobile (iOS Safari, Chrome Android)
- ✅ Tablette

**Outils de test :**
- Chrome DevTools (F12 → Toggle device toolbar)
- BrowserStack (test multi-devices)
- Responsively App (desktop app)

---

## 🔒 Droits et confidentialité

### ⚠️ Avant de publier, assurez-vous :
- ✅ Vous avez les **droits** sur toutes les images/vidéos
- ✅ Aucune **donnée sensible** d'entreprise n'est visible
- ✅ Les visages des collègues sont **floutés** ou autorisés
- ✅ Pas de code propriétaire visible dans les screenshots
- ✅ Les dashboards ne montrent pas de données réelles client

### 🛡️ Comment anonymiser :
- **Floutage** : Utilisez GIMP, Photoshop ou des outils en ligne
- **Pixelisation** : Pour les textes sensibles
- **Données factices** : Remplacez par du Lorem Ipsum ou des données de test

---

## 💡 Astuces pro

### 📸 Photos professionnelles
- Utilisez un bon éclairage (naturel ou ring light)
- Résolution minimale : 1920x1080px
- Format paysage (16:9) pour les photos principales
- Utilisez un smartphone récent (12MP+) ou un appareil photo

### 🎬 Vidéos de démo
- Utilisez OBS Studio pour enregistrer votre écran
- Ajoutez une voix-off explicative
- Durée idéale : 30-90 secondes
- Ajoutez des sous-titres si possible

### 🎨 Cohérence visuelle
- Utilisez la même palette de couleurs
- Même style de screenshot (même thème VS Code, par ex.)
- Cadrage similaire pour les photos
- Logos et branding cohérents

---

## ❓ FAQ

**Q : Que se passe-t-il si je n'ajoute pas de média ?**
R : Le placeholder s'affiche automatiquement avec un design élégant. Le site reste fonctionnel.

**Q : Puis-je utiliser des formats autres que ceux listés ?**
R : Les navigateurs supportent : JPG, PNG, WebP, GIF, MP4, WebM, MP3, OGG, WAV. Privilégiez JPG/PNG/MP4/MP3.

**Q : Comment réduire la taille de mes vidéos ?**
R : Utilisez HandBrake ou FFmpeg avec les commandes ci-dessus. Visez 2-5 Mbps pour le bitrate vidéo.

**Q : Les modales fonctionnent sur mobile ?**
R : Oui, elles sont 100% responsive et touch-friendly.

**Q : Comment changer les noms de fichiers dans le code ?**
R : Éditez `script.js`, cherchez le nom du fichier et remplacez-le. Exemple : `twitch-stats.png` → `mes-stats.png`

---

## 🆘 Support

Si vous rencontrez un problème :
1. Vérifiez la console du navigateur (F12 → Console)
2. Vérifiez que les noms de fichiers correspondent exactement
3. Vérifiez les chemins (doivent être à la racine)
4. Testez dans un autre navigateur

---

## ✅ Checklist finale avant déploiement

- [ ] Tous les médias sont optimisés (poids, dimensions)
- [ ] Les noms de fichiers correspondent au code
- [ ] Aucune donnée sensible visible
- [ ] Test sur desktop + mobile
- [ ] Test de toutes les modales
- [ ] Test des vidéos (lecture, contrôles)
- [ ] Vérification des droits d'auteur
- [ ] Backup de tous les médias originaux

---

**Bon courage pour l'ajout de vos médias ! 🚀**

N'hésitez pas à me contacter si vous avez besoin d'aide.