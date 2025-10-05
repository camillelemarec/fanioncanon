# Fanion Canon - Guide de Déploiement

## 🚀 Déploiement sur Vercel (Recommandé)

### 1. Préparation
```bash
# Vérifier que tout fonctionne localement
npm run build
npm start
```

### 2. Déploiement Vercel
1. Connectez-vous à [vercel.com](https://vercel.com)
2. Importez le projet depuis GitHub
3. Vercel détectera automatiquement Next.js
4. Déployez !

### 3. Variables d'environnement (si nécessaire)
```bash
# Dans Vercel Dashboard > Settings > Environment Variables
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_SECRET_KEY=sk_test_...
```

## 🌐 Déploiement sur Netlify

### 1. Build Settings
```bash
Build command: npm run build
Publish directory: .next
```

### 2. Redirections
Créer `public/_redirects`:
```
/*    /index.html   200
```

## 📱 Déploiement sur d'autres plateformes

### Heroku
```bash
# Procfile
web: npm start
```

### DigitalOcean App Platform
- Framework: Next.js
- Build Command: `npm run build`
- Run Command: `npm start`

## 🔧 Optimisations Post-Déploiement

### 1. Images
- Remplacer les images placeholder par de vraies photos
- Optimiser les images (WebP, compression)
- Utiliser un CDN pour les images

### 2. Performance
- Activer la compression gzip
- Configurer le cache des assets
- Optimiser les fonts (preload)

### 3. SEO
- Ajouter les meta tags dynamiques
- Configurer Google Analytics
- Créer un sitemap.xml
- Ajouter les données structurées

### 4. E-commerce
- Intégrer Stripe pour les paiements
- Configurer les webhooks
- Ajouter la gestion des stocks
- Implémenter les codes promo

## 📊 Monitoring

### Analytics
- Google Analytics 4
- Hotjar pour l'UX
- Sentry pour les erreurs

### Performance
- Lighthouse CI
- Web Vitals
- Core Web Vitals

## 🔒 Sécurité

### SSL
- Certificat SSL automatique sur Vercel/Netlify
- Redirection HTTPS forcée

### Headers de sécurité
```javascript
// next.config.js
const securityHeaders = [
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on'
  },
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block'
  },
  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN'
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff'
  }
]
```

## 📈 Évolutions Futures

### Phase 2
- [ ] Système de paiement Stripe complet
- [ ] Gestion des commandes admin
- [ ] Comptes clients
- [ ] Système de reviews

### Phase 3
- [ ] Personnalisation des fanions
- [ ] Vente BtoB
- [ ] Version anglaise
- [ ] Application mobile

---

**Le site est maintenant prêt pour le déploiement !** 🎉
