// =======================
// MODAL SYSTEM - Complete & Enhanced
// =======================

const modalData = {
    'esport-streamer': {
        title: '🎮 Streamer | Coach | Joueur Pro Rocket League',
        content: `
            <div class="modal-section">
                <h3>Statistiques Twitch & Performances</h3>
                
                <!-- Placeholder Image - Remplacez par votre screenshot Twitch -->
                <div class="media-placeholder image-placeholder">
                    <img src="twitch-stats.png" alt="Statistiques Twitch de Michaël Wilk" class="modal-image" 
                         onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                    <div class="placeholder-box" style="display:none;">
                        <div class="placeholder-icon">📊</div>
                        <p><strong>Ajoutez votre screenshot Twitch ici</strong></p>
                        <p class="placeholder-hint">Fichier : twitch-stats.png</p>
                        <p class="placeholder-hint">Format recommandé : 1200x675px (16:9)</p>
                    </div>
                </div>

                <div class="stats-grid">
                    <div class="stat-card">
                        <div class="stat-icon">🏆</div>
                        <div class="stat-value">Top 100</div>
                        <div class="stat-label">Mondial Rocket League</div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-icon">🎓</div>
                        <div class="stat-value">Top 3</div>
                        <div class="stat-label">Coach pendant +1 an</div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-icon">🎙️</div>
                        <div class="stat-value">10+</div>
                        <div class="stat-label">Événements castés</div>
                    </div>
                </div>
            </div>

            <div class="modal-section">
                <h3>🎬 Clips & Moments forts</h3>
                
                <!-- Placeholder Video - Remplacez par votre meilleur clip -->
                <div class="media-placeholder video-placeholder">
                    <video controls class="modal-video" poster="video-thumbnail.jpg" 
                           onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                        <source src="best-rocket-league-clip.mp4" type="video/mp4">
                        Votre navigateur ne supporte pas la vidéo.
                    </video>
                    <div class="placeholder-box">
                        <div class="placeholder-icon">🎬</div>
                        <p><strong>Ajoutez votre meilleur clip Rocket League</strong></p>
                        <p class="placeholder-hint">Fichier : best-rocket-league-clip.mp4</p>
                        <p class="placeholder-hint">Format : MP4, max 50MB</p>
                        <p class="placeholder-hint">Dimensions : 1920x1080 recommandé</p>
                    </div>
                </div>

                <!-- GIF Placeholder -->
                <div class="media-placeholder gif-placeholder" style="margin-top: 1rem;">
                    <img src="rocket-league-goal.gif" alt="But spectaculaire Rocket League" class="modal-gif" 
                         onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                    <div class="placeholder-box" style="display:none;">
                        <div class="placeholder-icon">🎯</div>
                        <p><strong>GIF de vos meilleurs buts</strong></p>
                        <p class="placeholder-hint">Fichier : rocket-league-goal.gif</p>
                        <p class="placeholder-hint">Taille max : 5MB</p>
                    </div>
                </div>
            </div>

            <div class="modal-section">
                <h3>Compétences développées</h3>
                <ul class="skills-list">
                    <li><strong>Communication :</strong> Animation en direct devant des centaines de spectateurs</li>
                    <li><strong>Pédagogie :</strong> Coaching de joueurs semi-professionnels avec méthodologie structurée</li>
                    <li><strong>Gestion de stress :</strong> Performances sous pression en compétition internationale</li>
                    <li><strong>Organisation :</strong> Planification et animation d'événements communautaires</li>
                    <li><strong>Adaptabilité :</strong> Ajustement stratégique en temps réel</li>
                    <li><strong>Leadership :</strong> Gestion d'équipe et motivation</li>
                </ul>
            </div>

            <div class="modal-section">
                <div class="info-box">
                    <p><strong>📍 Localisation :</strong> En ligne (Twitch/YouTube) & Association Bordelaise</p>
                    <p><strong>🔗 Liens :</strong> Profils désormais privés (disponibles sur demande)</p>
                    <p><strong>⏱️ Heures streamées :</strong> +2000h de contenu live</p>
                </div>
            </div>
        `
    },
    
    'data-scientist-cdi': {
        title: '🚀 Data Scientist / Ingénieur IA - Groupe Pichet',
        content: `
            <div class="modal-section">
                <div class="company-header">
                    <h3>À propos du poste</h3>
                    <p><strong>Période :</strong> Avril 2024 - Aujourd'hui</p>
                    <p><strong>Entreprise :</strong> DATA I | Groupe Pichet</p>
                    <p><strong>Localisation :</strong> Pessac, Nouvelle-Aquitaine</p>
                </div>
            </div>

            <div class="modal-section">
                <h3>📸 Mon environnement de travail</h3>
                
                <!-- Workspace Photo Placeholder -->
                <div class="media-placeholder image-placeholder">
                    <img src="workspace-pichet.jpg" alt="Bureau Michaël Wilk chez Pichet" class="modal-image" 
                         onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                    <div class="placeholder-box" style="display:none;">
                        <div class="placeholder-icon">💻</div>
                        <p><strong>Photo de votre workspace</strong></p>
                        <p class="placeholder-hint">Fichier : workspace-pichet.jpg</p>
                        <p class="placeholder-hint">Suggestion : Bureau avec écrans, setup IA</p>
                    </div>
                </div>

                <div class="image-grid" style="margin-top: 1rem;">
                    <div class="media-placeholder">
                        <img src="team-photo.jpg" alt="Équipe Data I" class="modal-image-small" 
                             onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                        <div class="placeholder-box" style="display:none;">
                            <div class="placeholder-icon">👥</div>
                            <p><strong>Photo d'équipe</strong></p>
                        </div>
                    </div>
                    <div class="media-placeholder">
                        <img src="office-pichet.jpg" alt="Bureaux Groupe Pichet" class="modal-image-small" 
                             onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                        <div class="placeholder-box" style="display:none;">
                            <div class="placeholder-icon">🏢</div>
                            <p><strong>Bureaux Pichet</strong></p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="modal-section">
                <h3>🎬 Démo de mes réalisations</h3>
                
                <!-- Demo Video Placeholder -->
                <div class="media-placeholder video-placeholder">
                    <video controls class="modal-video" poster="demo-agent-ia-thumbnail.jpg"
                           onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                        <source src="demo-agent-ia.mp4" type="video/mp4">
                    </video>
                    <div class="placeholder-box">
                        <div class="placeholder-icon">🤖</div>
                        <p><strong>Démo d'un agent IA en action</strong></p>
                        <p class="placeholder-hint">Fichier : demo-agent-ia.mp4</p>
                        <p class="placeholder-hint">Exemple : Agent RAG répondant à des questions métier</p>
                    </div>
                </div>
            </div>

            <div class="modal-section">
                <h3>Missions principales</h3>
                <ul class="missions-list">
                    <li>
                        <strong>🤖 Agents IA & Automatisation</strong>
                        <p>Conception et mise en production d'agents IA pour automatiser les processus métier (Azure AI Foundry / Microsoft Copilot Studio)</p>
                    </li>
                    <li>
                        <strong>🌐 Applications IA Web</strong>
                        <p>Développement d'applications web full-stack intégrant l'IA générative (FastAPI, React, Azure OpenAI)</p>
                    </li>
                    <li>
                        <strong>📚 RAG & Données</strong>
                        <p>Déploiement de pipelines RAG (Retrieval-Augmented Generation) et valorisation des données internes</p>
                    </li>
                    <li>
                        <strong>💬 Communication technique</strong>
                        <p>Vulgarisation et formation auprès des équipes métiers (direction, commerciaux, opérationnels)</p>
                    </li>
                    <li>
                        <strong>☁️ Architecture Cloud</strong>
                        <p>Architecture et déploiement sur Azure (OpenAI, ML, Functions, Container Apps)</p>
                    </li>
                </ul>
            </div>

            <div class="modal-section">
                <h3>🛠️ Stack technique</h3>
                <div class="tech-stack">
                    <span class="tech-badge">Azure OpenAI</span>
                    <span class="tech-badge">Python</span>
                    <span class="tech-badge">LangChain</span>
                    <span class="tech-badge">Semantic Kernel</span>
                    <span class="tech-badge">FastAPI</span>
                    <span class="tech-badge">Docker</span>
                    <span class="tech-badge">Azure ML</span>
                    <span class="tech-badge">Power BI</span>
                    <span class="tech-badge">Git</span>
                </div>
            </div>

            <div class="modal-section">
                <h3>📍 Localisation</h3>
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2830.8!2d-0.6319!3d44.8064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDTCsDQ4JzIzLjAiTiAwwrAzNyc1NC45Ilc!5e0!3m2!1sfr!2sfr!4v1234567890" 
                    width="100%" 
                    height="300" 
                    style="border:0; border-radius: 8px;" 
                    allowfullscreen="" 
                    loading="lazy"
                    title="Localisation Groupe Pichet Pessac">
                </iframe>
            </div>
        `
    },

    'data-scientist-alternance': {
        title: '🔬 Alternance Data Scientist - Groupe Pichet',
        content: `
            <div class="modal-section">
                <p><strong>Période :</strong> Décembre 2022 - Avril 2024 (1 an 5 mois)</p>
                <p><strong>Entreprise :</strong> DATA I | Groupe Pichet</p>
                <p><strong>Localisation :</strong> Pessac, Nouvelle-Aquitaine</p>
            </div>

            <div class="modal-section">
                <h3>📊 Projets réalisés</h3>
                
                <!-- Project Screenshots -->
                <div class="media-placeholder image-placeholder">
                    <img src="projet-alternance-dashboard.png" alt="Dashboard Power BI créé en alternance" class="modal-image" 
                         onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                    <div class="placeholder-box" style="display:none;">
                        <div class="placeholder-icon">📊</div>
                        <p><strong>Screenshot de vos dashboards Power BI</strong></p>
                        <p class="placeholder-hint">Fichier : projet-alternance-dashboard.png</p>
                    </div>
                </div>

                <div class="media-placeholder" style="margin-top: 1rem;">
                    <img src="architecture-azure.png" alt="Architecture Azure du projet" class="modal-image" 
                         onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                    <div class="placeholder-box" style="display:none;">
                        <div class="placeholder-icon">☁️</div>
                        <p><strong>Schéma de votre architecture Azure</strong></p>
                        <p class="placeholder-hint">Fichier : architecture-azure.png</p>
                        <p class="placeholder-hint">Suggestion : draw.io ou Lucidchart</p>
                    </div>
                </div>
            </div>

            <div class="modal-section">
                <h3>Réalisations principales</h3>
                <ul class="missions-list">
                    <li>
                        <strong>Exploration Azure</strong>
                        <p>Exploration et intégration des solutions Azure (OpenAI, Azure ML, Power BI)</p>
                    </li>
                    <li>
                        <strong>Application IA interne</strong>
                        <p>Conception d'une application interne combinant IA générative et Cloud</p>
                    </li>
                    <li>
                        <strong>Machine Learning</strong>
                        <p>Mise en place de premiers modèles de ML et pipelines de données</p>
                    </li>
                    <li>
                        <strong>Documentation</strong>
                        <p>Documentation technique et accompagnement des utilisateurs</p>
                    </li>
                    <li>
                        <strong>POC IA Générative</strong>
                        <p>POC et tests de solutions d'IA générative (GPT-3.5, GPT-4)</p>
                    </li>
                </ul>
            </div>

            <div class="modal-section">
                <h3>Compétences acquises</h3>
                <div class="tech-stack">
                    <span class="tech-badge">Azure OpenAI</span>
                    <span class="tech-badge">Power BI</span>
                    <span class="tech-badge">Python</span>
                    <span class="tech-badge">Pandas</span>
                    <span class="tech-badge">Azure ML</span>
                    <span class="tech-badge">FastAPI</span>
                    <span class="tech-badge">SQL</span>
                </div>
            </div>
        `
    },

    'simplon': {
        title: '🎓 Formation Développeur IA - Simplon',
        content: `
            <div class="modal-section">
                <p><strong>Formation :</strong> Développeur IA (RNCP Niveau 6)</p>
                <p><strong>Période :</strong> 2022-2024</p>
                <p><strong>Localisation :</strong> Bègles, Nouvelle-Aquitaine</p>
            </div>

            <div class="modal-section">
                <h3>📸 Moments de la formation</h3>
                
                <div class="media-placeholder image-placeholder">
                    <img src="simplon-classroom.jpg" alt="Salle de classe Simplon" class="modal-image" 
                         onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                    <div class="placeholder-box" style="display:none;">
                        <div class="placeholder-icon">🎓</div>
                        <p><strong>Photo de la salle de formation</strong></p>
                        <p class="placeholder-hint">Fichier : simplon-classroom.jpg</p>
                    </div>
                </div>

                <div class="image-grid" style="margin-top: 1rem;">
                    <div class="media-placeholder">
                        <img src="simplon-team.jpg" alt="Promotion Simplon" class="modal-image-small" 
                             onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                        <div class="placeholder-box" style="display:none;">
                            <div class="placeholder-icon">👥</div>
                            <p><strong>Photo de promo</strong></p>
                        </div>
                    </div>
                    <div class="media-placeholder">
                        <img src="simplon-diplome.jpg" alt="Diplôme Simplon" class="modal-image-small" 
                             onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                        <div class="placeholder-box" style="display:none;">
                            <div class="placeholder-icon">🏆</div>
                            <p><strong>Diplôme</strong></p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="modal-section">
                <h3>Programme de formation</h3>
                <div class="program-grid">
                    <div class="program-item">
                        <h4>📊 Data Science</h4>
                        <p>Python, Pandas, NumPy, Matplotlib, Seaborn, Jupyter</p>
                    </div>
                    <div class="program-item">
                        <h4>🤖 Machine Learning</h4>
                        <p>Scikit-learn, TensorFlow, PyTorch, Régression, Classification, Clustering</p>
                    </div>
                    <div class="program-item">
                        <h4>🧠 Deep Learning</h4>
                        <p>CNN, RNN, LSTM, Transfer Learning, Computer Vision</p>
                    </div>
                    <div class="program-item">
                        <h4>💬 NLP</h4>
                        <p>Traitement du langage naturel, BERT, Transformers, Sentiment Analysis</p>
                    </div>
                    <div class="program-item">
                        <h4>🎨 IA Générative</h4>
                        <p>LLMs, RAG, Agents IA, Prompt Engineering, LangChain</p>
                    </div>
                    <div class="program-item">
                        <h4>☁️ Cloud & MLOps</h4>
                        <p>Azure ML, Docker, CI/CD, Monitoring, Data Engineering</p>
                    </div>
                    <div class="program-item">
                        <h4>🌐 Web Full Stack</h4>
                        <p>FastAPI, Flask, HTML/CSS/JS, REST APIs, Bases de données</p>
                    </div>
                </div>
            </div>

            <div class="modal-section">
                <h3>🎬 Projet de fin de formation</h3>
                
                <div class="media-placeholder video-placeholder">
                    <video controls class="modal-video" poster="projet-final-thumbnail.jpg"
                           onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                        <source src="projet-final-simplon.mp4" type="video/mp4">
                    </video>
                    <div class="placeholder-box">
                        <div class="placeholder-icon">🎬</div>
                        <p><strong>Vidéo de votre projet final</strong></p>
                        <p class="placeholder-hint">Fichier : projet-final-simplon.mp4</p>
                        <p class="placeholder-hint">Présentation ou démo de votre projet de certification</p>
                    </div>
                </div>
            </div>

            <div class="modal-section">
                <h3>📍 Localisation</h3>
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2831.5!2d-0.5479!3d44.8078!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0!2zNDTCsDQ4JzI4LjEiTiAwwrAzMic1Mi40Ilc!5e0!3m2!1sfr!2sfr!4v1234567890" 
                    width="100%" 
                    height="300" 
                    style="border:0; border-radius: 8px;" 
                    allowfullscreen="" 
                    loading="lazy"
                    title="Localisation Simplon Bègles">
                </iframe>
            </div>
        `
    },

    'ecole-42': {
        title: '🎓 École 42 Paris',
        content: `
            <div class="modal-section">
                <p><strong>Formation :</strong> Expert Architecture Informatique (RNCP niveau 7)</p>
                <p><strong>Période :</strong> 2014-2017</p>
                <p><strong>Localisation :</strong> Paris Clichy</p>
            </div>

            <div class="modal-section">
                <h3>📸 Souvenirs de l'École 42</h3>
                
                <div class="media-placeholder image-placeholder">
                    <img src="ecole-42-cluster.jpg" alt="Cluster École 42" class="modal-image" 
                         onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                    <div class="placeholder-box" style="display:none;">
                        <div class="placeholder-icon">💻</div>
                        <p><strong>Photo du cluster ou de votre poste</strong></p>
                        <p class="placeholder-hint">Fichier : ecole-42-cluster.jpg</p>
                    </div>
                </div>

                <div class="image-grid" style="margin-top: 1rem;">
                    <div class="media-placeholder">
                        <img src="42-piscine.jpg" alt="Piscine 42" class="modal-image-small" 
                             onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                        <div class="placeholder-box" style="display:none;">
                            <div class="placeholder-icon">🏊</div>
                            <p><strong>Photo de la piscine</strong></p>
                        </div>
                    </div>
                    <div class="media-placeholder">
                        <img src="42-projects.jpg" alt="Projets 42" class="modal-image-small" 
                             onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                        <div class="placeholder-box" style="display:none;">
                            <div class="placeholder-icon">🚀</div>
                            <p><strong>Screenshots de vos projets</strong></p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="modal-section">
                <h3>Pédagogie unique</h3>
                <p>L'École 42 est reconnue pour sa pédagogie innovante basée sur le peer-learning et la pratique intensive.</p>
                
                <div class="program-grid">
                    <div class="program-item">
                        <h4>💻 Langages</h4>
                        <p>C, C++, Assembleur, Shell, PHP, Python</p>
                    </div>
                    <div class="program-item">
                        <h4>🧮 Compétences</h4>
                        <p>Algorithmique avancée, système Unix/Linux, réseau</p>
                    </div>
                    <div class="program-item">
                        <h4>🎯 Méthodes</h4>
                        <p>Apprentissage par projets, peer-to-peer, évaluations croisées</p>
                    </div>
                    <div class="program-item">
                        <h4>🤝 Soft skills</h4>
                        <p>Autonomie, collaboration, résolution de problèmes, adaptabilité</p>
                    </div>
                </div>
            </div>

            <div class="modal-section">
                <h3>Projets marquants</h3>
                <ul class="missions-list">
                    <li><strong>Libft :</strong> Recréation de la libc en C</li>
                    <li><strong>ft_printf :</strong> Réimplémentation de printf</li>
                    <li><strong>Get Next Line :</strong> Lecture ligne par ligne</li>
                    <li><strong>Fdf / FdF :</strong> Fil de fer 3D (wireframe)</li>
                    <li><strong>Push_swap :</strong> Algorithme de tri optimisé</li>
                    <li><strong>Minishell :</strong> Création d'un shell Unix</li>
                    <li><strong>Philosophers :</strong> Threading et synchronisation</li>
                    <li><strong>Cub3D :</strong> Moteur 3D type Wolfenstein</li>
                </ul>
            </div>

            <div class="modal-section">
                <h3>📍 Localisation</h3>
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2623.8!2d2.3147!3d48.8965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66fec70fb1d8d%3A0x6b9b3b8f5f8f5f8f!2s96%20Boulevard%20Bessieres%2C%2075017%20Paris!5e0!3m2!1sfr!2sfr!4v1234567890" 
                    width="100%" 
                    height="300" 
                    style="border:0; border-radius: 8px;" 
                    allowfullscreen="" 
                    loading="lazy"
                    title="Localisation École 42 Paris">
                </iframe>
            </div>
        `
    },

    'danse': {
        title: '💃 Danse - Salsa',
        content: `
            <div class="modal-section">
                <h3>Pratique de la Salsa</h3>
                <p>La danse, et particulièrement la salsa, est pour moi un excellent moyen d'expression corporelle et de développement personnel.</p>
                
                <!-- Dance GIF Placeholder -->
                <div class="media-placeholder gif-placeholder">
                    <img src="salsa-dance.gif" alt="Salsa dance" class="modal-gif" 
                         onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                    <div class="placeholder-box" style="display:none;">
                        <div class="placeholder-icon">💃</div>
                        <p><strong>GIF ou vidéo de vous en train de danser</strong></p>
                        <p class="placeholder-hint">Fichier : salsa-dance.gif ou salsa-dance.mp4</p>
                    </div>
                </div>
            </div>

            <div class="modal-section">
                <h3>Apports personnels</h3>
                <ul class="skills-list">
                    <li><strong>Coordination :</strong> Synchronisation et précision des mouvements</li>
                    <li><strong>Écoute :</strong> Attention au partenaire et à la musique</li>
                    <li><strong>Confiance :</strong> Guidage et connexion avec le partenaire</li>
                    <li><strong>Créativité :</strong> Improvisation et expression artistique</li>
                    <li><strong>Social :</strong> Rencontres et échanges culturels</li>
                    <li><strong>Discipline :</strong> Entraînement régulier et perfectionnement</li>
                </ul>
            </div>
        `
    },

    'sports': {
        title: '🏊 Sports & Bien-être',
        content: `
            <div class="modal-section">
                <h3>Mes pratiques sportives</h3>
                <p>Le sport est essentiel à mon équilibre personnel. Je pratique régulièrement plusieurs disciplines complémentaires.</p>
                
                <!-- Sports collage placeholder -->
                <div class="media-placeholder image-placeholder">
                    <img src="sports-collage.jpg" alt="Mes activités sportives" class="modal-image" 
                         onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                    <div class="placeholder-box" style="display:none;">
                        <div class="placeholder-icon">🏊</div>
                        <p><strong>Collage photo de vos activités sportives</strong></p>
                        <p class="placeholder-hint">Fichier : sports-collage.jpg</p>
                    </div>
                </div>
            </div>

            <div class="modal-section">
                <h3>🏊‍♂️ Natation</h3>
                <p>Pratique régulière pour l'endurance et la relaxation. Excellent complément mental au travail intellectuel.</p>
            </div>

            <div class="modal-section">
                <h3>🎳 Bowling</h3>
                <p>Sport de précision et de stratégie. Moments conviviaux entre amis.</p>
            </div>

            <div class="modal-section">
                <h3>🎾 Padel & Badminton</h3>
                <p>Sports de raquette pour développer réflexes, agilité et esprit d'équipe.</p>
            </div>

            <div class="modal-section">
                <h3>Bénéfices</h3>
                <ul class="skills-list">
                    <li><strong>Santé physique :</strong> Endurance, force, souplesse</li>
                    <li><strong>Mental :</strong> Gestion du stress, concentration</li>
                    <li><strong>Social :</strong> Travail d'équipe, fair-play</li>
                    <li><strong>Discipline :</strong> Régularité et dépassement de soi</li>
                </ul>
            </div>
        `
    },

    'streaming': {
        title: '🎬 Streaming & Création de Contenu',
        content: `
            <div class="modal-section">
                <h3>Casteur & Commentateur E-Sport</h3>
                <p>Animation d'événements e-sport, commentaires en direct et création de contenu sur Twitch/YouTube.</p>
                
                <!-- Streaming setup -->
                <div class="media-placeholder image-placeholder">
                    <img src="streaming-setup.jpg" alt="Setup streaming" class="modal-image" 
                         onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                    <div class="placeholder-box" style="display:none;">
                        <div class="placeholder-icon">🎥</div>
                        <p><strong>Photo de votre setup streaming</strong></p>
                        <p class="placeholder-hint">Fichier : streaming-setup.jpg</p>
                    </div>
                </div>
            </div>

            <div class="modal-section">
                <h3>Compétences développées</h3>
                <ul class="skills-list">
                    <li><strong>Expression orale :</strong> Commentaires en direct, improvisation</li>
                    <li><strong>Montage vidéo :</strong> Post-production, highlights</li>
                    <li><strong>Organisation d'événements :</strong> Tournois, soirées communautaires</li>
                    <li><strong>Gestion de communauté :</strong> Animation, modération</li>
                    <li><strong>Technique audiovisuelle :</strong> OBS, streaming, encodage</li>
                </ul>
            </div>
        `
    },

    'musique': {
        title: '🎵 Musique & Composition',
        content: `
            <div class="modal-section">
                <h3>Mes instruments</h3>
                
                <div class="image-grid">
                    <div class="media-placeholder">
                        <img src="batterie.jpg" alt="Ma batterie" class="modal-image-small" 
                             onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                        <div class="placeholder-box" style="display:none;">
                            <div class="placeholder-icon">🥁</div>
                            <p><strong>Photo de votre batterie</strong></p>
                        </div>
                    </div>
                    <div class="media-placeholder">
                        <img src="synthé.jpg" alt="Mon synthétiseur" class="modal-image-small" 
                             onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                        <div class="placeholder-box" style="display:none;">
                            <div class="placeholder-icon">🎹</div>
                            <p><strong>Photo de votre synthé</strong></p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="modal-section">
                <h3>🎧 Composition musicale</h3>
                <p>Création de beats et morceaux sur Fruity Loops (FL Studio).</p>
                
                <!-- Music clip placeholder -->
                <div class="media-placeholder video-placeholder">
                    <audio controls class="modal-audio" style="width: 100%;"
                           onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                        <source src="ma-composition.mp3" type="audio/mpeg">
                    </audio>
                    <div class="placeholder-box" style="display:none;">
                        <div class="placeholder-icon">🎵</div>
                        <p><strong>Fichier audio de vos compositions</strong></p>
                        <p class="placeholder-hint">Fichier : ma-composition.mp3</p>
                    </div>
                </div>
            </div>

            <div class="modal-section">
                <h3>Apports créatifs</h3>
                <ul class="skills-list">
                    <li><strong>Créativité :</strong> Composition, improvisation</li>
                    <li><strong>Rigueur :</strong> Théorie musicale, rythme</li>
                    <li><strong>Expression :</strong> Émotion, interprétation</li>
                    <li><strong>Persévérance :</strong> Pratique régulière</li>
                </ul>
            </div>
        `
    },

    'bienetre': {
        title: '🧘 Bien-être & Développement Personnel',
        content: `
            <div class="modal-section">
                <h3>Mes pratiques bien-être</h3>
                <p>Je cultive un équilibre entre corps et esprit à travers différentes disciplines.</p>
            </div>

            <div class="modal-section">
                <h3>🧘‍♂️ Méditation</h3>
                <p>Pratique quotidienne pour la gestion du stress et la concentration. Méditation guidée et pleine conscience.</p>
            </div>

            <div class="modal-section">
                <h3>💪 Workout</h3>
                <p>Entraînement physique régulier (musculation, cardio, stretching) pour maintenir forme et énergie.</p>
                
                <div class="media-placeholder image-placeholder">
                    <img src="workout.jpg" alt="Workout routine" class="modal-image" 
                         onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                    <div class="placeholder-box" style="display:none;">
                        <div class="placeholder-icon">💪</div>
                        <p><strong>Photo de votre routine workout</strong></p>
                    </div>
                </div>
            </div>

            <div class="modal-section">
                <h3>🥗 Nutrition</h3>
                <p>Alimentation équilibrée et consciente. Intérêt pour la nutrition sportive et la santé.</p>
            </div>

            <div class="modal-section">
                <h3>🧠 Psychologie</h3>
                <p>Lecture et apprentissage sur le développement personnel, la psychologie cognitive et la neuroscience.</p>
            </div>

            <div class="modal-section">
                <h3>Bénéfices</h3>
                <ul class="skills-list">
                    <li><strong>Équilibre mental :</strong> Gestion du stress, clarté d'esprit</li>
                    <li><strong>Énergie :</strong> Vitalité et motivation au quotidien</li>
                    <li><strong>Performance :</strong> Meilleure concentration au travail</li>
                    <li><strong>Résilience :</strong> Capacité d'adaptation et sang-froid</li>
                </ul>
            </div>
        `
    },

    'algorithmes': {
        title: '🎨 Algorithmique & Challenges',
        content: `
            <div class="modal-section">
                <h3>Passion pour les défis algorithmiques</h3>
                <p>Je maintiens mes compétences en résolution de problèmes à travers diverses plateformes de challenges.</p>
                
                <div class="media-placeholder image-placeholder">
                    <img src="codingame-profile.png" alt="Profil Codingame" class="modal-image" 
                         onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                    <div class="placeholder-box" style="display:none;">
                        <div class="placeholder-icon">🎮</div>
                        <p><strong>Screenshot de votre profil Codingame</strong></p>
                        <p class="placeholder-hint">Fichier : codingame-profile.png</p>
                    </div>
                </div>
            </div>

            <div class="modal-section">
                <h3>🏆 Plateformes pratiquées</h3>
                
                <div class="program-grid">
                    <div class="program-item">
                        <h4>🎮 CodinGame</h4>
                        <p>Résolution de puzzles algorithmiques sous forme de jeux</p>
                    </div>
                    <div class="program-item">
                        <h4>⚔️ BattleDev</h4>
                        <p>Compétitions de programmation en temps réel</p>
                    </div>
                    <div class="program-item">
                        <h4>🥋 CodeWars</h4>
                        <p>Katas de programmation pour tous niveaux</p>
                    </div>
                    <div class="program-item">
                        <h4>💻 LeetCode</h4>
                        <p>Préparation technique et algorithmes avancés</p>
                    </div>
                </div>
            </div>

            <div class="modal-section">
                <h3>Compétences affûtées</h3>
                <ul class="skills-list">
                    <li><strong>Résolution de problèmes :</strong> Approche méthodique et créative</li>
                    <li><strong>Optimisation :</strong> Complexité algorithmique, performance</li>
                    <li><strong>Pensée logique :</strong> Décomposition et structuration</li>
                    <li><strong>Rapidité :</strong> Efficacité sous contrainte de temps</li>
                    <li><strong>Veille technique :</strong> Découverte de nouveaux patterns</li>
                </ul>
            </div>
        `
    }
};

// Modal functions
function openModal(key) {
    const data = modalData[key];
    if (!data) {
        console.error('Modal data not found for key:', key);
        return;
    }

    const overlay = document.getElementById('modalOverlay');
    const content = document.getElementById('modalContent');
    const title = document.getElementById('modalTitle');

    // Set content
    title.textContent = data.title;
    content.innerHTML = '<h2 id="modalTitle">' + data.title + '</h2>' + data.content;

    // Show modal with animation
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent background scroll

    // Accessibility
    overlay.setAttribute('aria-hidden', 'false');
    
    // Focus trap
    const focusableElements = overlay.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
    if (focusableElements.length > 0) {
        focusableElements[0].focus();
    }
}

function closeModal() {
    const overlay = document.getElementById('modalOverlay');
    overlay.classList.remove('active');
    document.body.style.overflow = ''; // Restore scroll

    // Accessibility
    overlay.setAttribute('aria-hidden', 'true');
}

// Close modal on overlay click
document.getElementById('modalOverlay')?.addEventListener('click', function(e) {
    if (e.target === this) {
        closeModal();
    }
});

// Close modal on ESC key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && document.getElementById('modalOverlay')?.classList.contains('active')) {
        closeModal();
    }
});

// =======================
// INTERACTIVE ELEMENTS
// =======================

// Attach modal handlers to clickable items
document.addEventListener('DOMContentLoaded', function() {
    // Interest cards
    const interestItems = document.querySelectorAll('.clickable-item[data-modal]');
    interestItems.forEach(item => {
        const modalKey = item.getAttribute('data-modal');
        
        // Click event
        item.addEventListener('click', () => {
            openModal(modalKey);
        });

        // Keyboard accessibility
        item.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                openModal(modalKey);
            }
        });
    });

    // Timeline items
    const timelineItems = document.querySelectorAll('.clickable-timeline-item[data-modal]');
    timelineItems.forEach(item => {
        const modalKey = item.getAttribute('data-modal');
        
        item.addEventListener('click', () => {
            openModal(modalKey);
        });

        item.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                openModal(modalKey);
            }
        });
    });

    // Mobile menu toggle
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', () => {
            const isExpanded = mobileMenuToggle.getAttribute('aria-expanded') === 'true';
            mobileMenuToggle.setAttribute('aria-expanded', !isExpanded);
            navLinks?.classList.toggle('active');
        });
    }
});

// =======================
// SMOOTH SCROLL
// =======================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            // Close mobile menu if open
            const navLinks = document.querySelector('.nav-links');
            const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
            if (navLinks?.classList.contains('active')) {
                navLinks.classList.remove('active');
                mobileMenuToggle?.setAttribute('aria-expanded', 'false');
            }

            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// =======================
// NAVBAR SCROLL EFFECT
// =======================

let lastScroll = 0;
window.addEventListener('scroll', () => {
    const nav = document.getElementById('navbar');
    const currentScroll = window.pageYOffset;

    if (currentScroll > 50) {
        nav?.classList.add('scrolled');
    } else {
        nav?.classList.remove('scrolled');
    }

    lastScroll = currentScroll;
});

// =======================
// SKILL BARS ANIMATION
// =======================

const skillObserverOptions = {
    threshold: 0.5,
    rootMargin: '0px 0px -100px 0px'
};

const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const progressBars = entry.target.querySelectorAll('.skill-progress');
            progressBars.forEach(bar => {
                bar.style.animation = 'fillBar 1.5s ease-out forwards';
            });
        }
    });
}, skillObserverOptions);

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.skill-category').forEach(category => {
        skillObserver.observe(category);
    });
});

// =======================
// LAZY LOADING IMAGES
// =======================

if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                }
                imageObserver.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// =======================
// CONSOLE EASTER EGG
// =======================

console.log('%c👋 Hey there!', 'font-size: 20px; color: #4285f4; font-weight: bold;');
console.log('%cJe vois que vous êtes curieux 🕵️', 'font-size: 14px; color: #34a853;');
console.log('%cN\'hésitez pas à me contacter si vous voulez discuter IA, data ou code !', 'font-size: 12px; color: #fbbc05;');
console.log('%c🔗 LinkedIn: https://www.linkedin.com/in/michael-wilk-783b5867', 'font-size: 12px; color: #ea4335;');