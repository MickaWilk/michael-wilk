# 🚀 Guide de déploiement sur GitHub Pages

## 📦 Déployer votre site professionnel en 10 minutes

---

## ✅ Prérequis

- [x] Compte GitHub créé ([github.com](https://github.com))
- [x] Git installé sur votre ordinateur
- [x] Tous vos fichiers prêts

---

## 📁 Structure de fichiers à uploader

```
votre-dossier-site/
├── index.html              ← Page principale (36 KB) ✅
├── style.css               ← Votre fichier CSS existant
├── style-modal-enhanced.css ← Styles modales (13 KB) ✅
├── script.js               ← JavaScript (46 KB) ✅
├── robots.txt              ← SEO (363 bytes) ✅
├── sitemap.xml             ← Plan du site (1.8 KB) ✅
├── favicon.ico             ← Icône du site
├── me.png                  ← Votre photo
│
├── 📸 MÉDIAS (à ajouter selon README-MEDIAS.md)
├── twitch-stats.png
├── workspace-pichet.jpg
├── ... (tous vos médias)
│
└── 📄 DOCS (optionnel, ne pas uploader)
    ├── README-MEDIAS.md
    ├── SEO-GUIDE.md
    ├── RESUME-MODIFICATIONS.md
    ├── EXEMPLES-CODE.md
    └── DEPLOIEMENT-GITHUB-PAGES.md (ce fichier)
```

---

## 🎯 Méthode 1 : Upload via interface GitHub (FACILE)

### Étape 1 : Créer le repository

1. Allez sur [github.com](https://github.com)
2. Cliquez sur le **+** en haut à droite → **New repository**
3. Remplissez :
   - **Repository name** : `michael-wilk` (ou autre nom)
   - **Description** : "Portfolio professionnel - Data Scientist & Ingénieur IA"
   - **Public** (important pour GitHub Pages gratuit)
   - ❌ **Ne cochez PAS** "Initialize with README"
4. Cliquez sur **Create repository**

### Étape 2 : Upload des fichiers

1. Sur la page du repo, cliquez sur **uploading an existing file**
2. Glissez-déposez **tous vos fichiers** :
   - `index.html`
   - `style.css`
   - `style-modal-enhanced.css`
   - `script.js`
   - `robots.txt`
   - `sitemap.xml`
   - `favicon.ico`
   - `me.png`
   - Tous vos médias (photos, vidéos, etc.)

3. En bas, ajoutez un message de commit : "Initial commit - Portfolio"
4. Cliquez sur **Commit changes**

### Étape 3 : Activer GitHub Pages

1. Dans votre repo, allez dans **Settings** (onglet en haut)
2. Dans le menu gauche, cliquez sur **Pages**
3. Sous **Source**, sélectionnez :
   - Branch : **main** (ou master)
   - Folder : **/ (root)**
4. Cliquez sur **Save**
5. Attendez 1-2 minutes
6. Rafraîchissez la page → Votre URL s'affiche ! 🎉

**Votre site sera accessible à :**
```
https://VOTRE-USERNAME.github.io/michael-wilk/
```

Exemple : `https://mickawilk.github.io/michael-wilk/`

---

## 🎯 Méthode 2 : Via Git en ligne de commande (AVANCÉ)

### Étape 1 : Initialiser le repository local

Ouvrez un terminal dans le dossier de votre site :

```bash
cd /chemin/vers/votre-dossier-site

# Initialiser Git
git init

# Ajouter tous les fichiers
git add .

# Premier commit
git commit -m "Initial commit - Portfolio Michaël Wilk"
```

### Étape 2 : Créer le repository sur GitHub

1. Allez sur [github.com](https://github.com)
2. Créez un nouveau repository (comme méthode 1, étape 1)
3. **NE cochez RIEN**, laissez vide

### Étape 3 : Lier local et remote

GitHub vous donne des commandes, utilisez-les :

```bash
# Renommer la branche en 'main' (si elle s'appelle 'master')
git branch -M main

# Ajouter le remote
git remote add origin https://github.com/VOTRE-USERNAME/michael-wilk.git

# Pusher
git push -u origin main
```

### Étape 4 : Activer GitHub Pages

Même chose que Méthode 1, Étape 3.

---

## 🔗 Lier un nom de domaine personnalisé (OPTIONNEL)

### Si vous avez un nom de domaine (ex: michaelwilk.com)

#### Étape 1 : Configurer GitHub Pages

1. Dans **Settings → Pages**
2. Sous **Custom domain**, entrez : `michaelwilk.com`
3. Cochez **Enforce HTTPS**
4. Cliquez **Save**

#### Étape 2 : Configurer votre DNS

Chez votre registrar (OVH, Gandi, Namecheap...), ajoutez :

**Pour un domaine principal (michaelwilk.com) :**
```
Type: A
Name: @
Value: 185.199.108.153

Type: A
Name: @
Value: 185.199.109.153

Type: A
Name: @
Value: 185.199.110.153

Type: A
Name: @
Value: 185.199.111.153
```

**Pour un sous-domaine (www.michaelwilk.com) :**
```
Type: CNAME
Name: www
Value: VOTRE-USERNAME.github.io.
```

**Vérification :**
Attendez 24-48h pour propagation DNS. Testez :
```bash
dig michaelwilk.com +noall +answer
```

---

## ⚙️ Fichier CNAME (si domaine personnalisé)

Créez un fichier `CNAME` à la racine :

```
michaelwilk.com
```

Uploadez-le avec les autres fichiers.

---

## 🔄 Mettre à jour votre site

### Via interface GitHub :

1. Allez dans votre repo
2. Cliquez sur le fichier à modifier
3. Cliquez sur l'icône crayon (Edit)
4. Faites vos modifications
5. En bas : "Commit changes"

**Les changements sont live en 1-2 minutes !**

### Via Git local :

```bash
# Modifier vos fichiers localement
# Puis :

git add .
git commit -m "Description des changements"
git push origin main
```

---

## 🐛 Résolution de problèmes

### ❌ Problème : Site ne s'affiche pas

**Solution :**
1. Vérifiez que le repo est **Public**
2. Vérifiez que GitHub Pages est activé (Settings → Pages)
3. Vérifiez que la branche est correcte (main ou master)
4. Attendez 5 minutes, parfois ça prend du temps
5. Videz le cache du navigateur (Ctrl + Shift + R)

### ❌ Problème : Images ne chargent pas

**Solutions :**
1. Vérifiez que les images sont bien uploadées
2. Vérifiez les noms de fichiers (sensible à la casse)
3. Vérifiez les chemins dans le code (relatifs, pas absolus)
4. Exemple : `src="me.png"` ✅ pas `src="/Users/moi/Documents/me.png"` ❌

### ❌ Problème : CSS/JS ne chargent pas

**Solutions :**
1. Dans `index.html`, vérifiez les liens :
   ```html
   <link rel="stylesheet" href="style.css">
   <link rel="stylesheet" href="style-modal-enhanced.css">
   <script src="script.js"></script>
   ```
2. Pas de slash au début : ❌ `/style.css` → ✅ `style.css`
3. Vérifiez que les fichiers sont uploadés
4. F12 → Console : regardez les erreurs

### ❌ Problème : 404 sur certaines pages

**Solution :**
GitHub Pages est fait pour des sites statiques. Si vous avez des liens comme `/about` qui ne pointent pas vers `/about.html`, créez un fichier `404.html` :

```html
<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="refresh" content="0; url=/" />
</head>
<body>
    <p>Redirection...</p>
</body>
</html>
```

---

## 📊 Vérifier que tout fonctionne

### Checklist post-déploiement :

- [ ] Site accessible à l'URL GitHub Pages
- [ ] Toutes les sections s'affichent
- [ ] Navigation fonctionne (liens #anchor)
- [ ] Modales s'ouvrent au clic
- [ ] Images chargent (ou placeholders s'affichent)
- [ ] Menu mobile fonctionne
- [ ] Responsive OK (testez sur mobile)
- [ ] Pas d'erreurs dans la Console (F12)
- [ ] robots.txt accessible : `https://votre-site.github.io/robots.txt`
- [ ] sitemap.xml accessible : `https://votre-site.github.io/sitemap.xml`

---

## 🔍 Indexation Google

### Étape 1 : Google Search Console

1. Allez sur [search.google.com/search-console](https://search.google.com/search-console)
2. Cliquez **Ajouter une propriété**
3. Entrez votre URL : `https://VOTRE-USERNAME.github.io/michael-wilk/`
4. Vérifiez avec la balise meta (déjà dans votre `index.html`)
5. Attendez validation

### Étape 2 : Soumettre le sitemap

1. Dans Search Console, menu **Sitemaps**
2. Entrez : `sitemap.xml`
3. Cliquez **Envoyer**

### Étape 3 : Demander l'indexation

1. Menu **Inspection de l'URL**
2. Entrez votre URL
3. Cliquez **Demander l'indexation**

**Résultat :** Votre site sera indexé en 24-72h.

---

## 📈 Analytics

### Ajouter Google Analytics

1. Créez un compte sur [analytics.google.com](https://analytics.google.com)
2. Créez une propriété GA4
3. Copiez votre ID (G-XXXXXXXXXX)
4. Dans `index.html`, avant `</head>`, ajoutez :

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

5. Commitez et pushez
6. Vérifiez dans Analytics (temps réel) que ça fonctionne

---

## 🔒 HTTPS

**Bonne nouvelle :** GitHub Pages active automatiquement HTTPS ! 🎉

Votre site sera accessible en `https://` sans configuration.

Si vous avez un domaine personnalisé, cochez **Enforce HTTPS** dans Settings → Pages.

---

## 🎨 Personnaliser l'URL du repository

**Actuellement :**
```
https://VOTRE-USERNAME.github.io/michael-wilk/
```

**Pour avoir :**
```
https://VOTRE-USERNAME.github.io/
```

**Solution :**
1. Renommez votre repository en : `VOTRE-USERNAME.github.io`
2. Dans Settings → Pages, la source sera automatiquement configurée
3. Votre site sera à la racine : `https://VOTRE-USERNAME.github.io/`

⚠️ **Attention :** Vous ne pouvez avoir qu'UN SEUL repo de ce type (user/organization pages).

---

## 📱 Tester le site

### Outils en ligne :

1. **Mobile-Friendly Test** : [search.google.com/test/mobile-friendly](https://search.google.com/test/mobile-friendly)
2. **PageSpeed Insights** : [pagespeed.web.dev](https://pagespeed.web.dev/)
3. **GTmetrix** : [gtmetrix.com](https://gtmetrix.com/)
4. **W3C Validator** : [validator.w3.org](https://validator.w3.org/)
5. **Schema Markup Validator** : [validator.schema.org](https://validator.schema.org/)

### Navigateurs à tester :

- ✅ Chrome (desktop + mobile)
- ✅ Firefox
- ✅ Safari (Mac + iOS)
- ✅ Edge
- ✅ Samsung Internet (Android)

---

## 🔄 Workflow de développement recommandé

```bash
# 1. Cloner le repo (si pas déjà fait)
git clone https://github.com/VOTRE-USERNAME/michael-wilk.git
cd michael-wilk

# 2. Créer une branche pour vos modifications
git checkout -b feature/ajout-blog

# 3. Faire vos modifications localement
# Testez avec un serveur local :
python -m http.server 8000
# Ou : npx http-server

# 4. Commiter vos changements
git add .
git commit -m "Ajout section blog"

# 5. Pusher la branche
git push origin feature/ajout-blog

# 6. Créer une Pull Request sur GitHub
# Merger dans main

# 7. Le site se met à jour automatiquement !
```

---

## 📦 Alternatives à GitHub Pages

Si GitHub Pages ne vous convient pas :

### Netlify (recommandé)
- ✅ Gratuit
- ✅ HTTPS automatique
- ✅ Déploiement automatique depuis GitHub
- ✅ Redirections faciles
- ✅ Formulaires intégrés
- [netlify.com](https://netlify.com)

### Vercel
- ✅ Gratuit
- ✅ Très rapide
- ✅ Bon pour React/Next.js
- [vercel.com](https://vercel.com)

### Cloudflare Pages
- ✅ Gratuit
- ✅ CDN intégré
- ✅ Rapide mondialement
- [pages.cloudflare.com](https://pages.cloudflare.com)

---

## 🎓 Ressources utiles

### Documentation GitHub Pages
- [docs.github.com/pages](https://docs.github.com/en/pages)

### Tutoriels vidéo
- YouTube : "GitHub Pages tutorial"
- YouTube : "Deploy website to GitHub Pages"

### Communautés
- r/github (Reddit)
- Stack Overflow (tag: github-pages)
- GitHub Community

---

## ✅ Checklist finale avant le grand lancement

### Contenu
- [ ] Toutes les informations sont à jour
- [ ] Photo `me.png` est la bonne
- [ ] Liens LinkedIn et GitHub sont corrects
- [ ] Aucune faute d'orthographe
- [ ] Dates sont exactes

### Technique
- [ ] Tous les fichiers sont uploadés
- [ ] robots.txt et sitemap.xml présents
- [ ] Pas d'erreurs dans Console (F12)
- [ ] Site responsive sur mobile
- [ ] Toutes les modales fonctionnent
- [ ] Liens #anchor fonctionnent
- [ ] HTTPS activé

### SEO
- [ ] Google Search Console configuré
- [ ] Sitemap soumis
- [ ] Google Analytics installé
- [ ] Meta tags vérifiés
- [ ] Structured data validé
- [ ] PageSpeed > 85

### Social
- [ ] Lien ajouté sur LinkedIn
- [ ] Lien ajouté sur GitHub
- [ ] Post LinkedIn publié
- [ ] Partagé sur Twitter/X
- [ ] Partagé avec amis/famille

---

## 🎉 Félicitations !

Votre site est maintenant en ligne et visible par le monde entier ! 🌍

**Prochaines étapes :**
1. Partagez votre URL sur tous vos réseaux
2. Ajoutez-la sur votre CV
3. Suivez vos stats dans Google Analytics
4. Mettez à jour régulièrement
5. Créez du contenu (blog)

**Votre URL :**
```
https://VOTRE-USERNAME.github.io/michael-wilk/
```

---

**Besoin d'aide ?** N'hésitez pas à consulter la documentation GitHub ou à me contacter.

**Bonne chance pour votre carrière dans l'IA ! 🚀**