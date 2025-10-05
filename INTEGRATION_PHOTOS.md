# 🖼️ Guide d'Intégration des Photos - Fanion Canon

## 📸 Vos Photos des Calanques

Vous avez partagé de magnifiques photos des calanques de Marseille ! Voici comment les intégrer facilement dans le site.

## 🎯 Emplacements des Images

### 1. **Images Hero (Slider principal)**
**Fichier :** `/src/components/HeroSection.tsx`

Remplacez ces URLs placeholder :
```typescript
// Ligne 16-32 dans HeroSection.tsx
const heroImages = [
  {
    src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=800&fit=crop',
    alt: 'Calanques de Marseille - Vue panoramique des falaises calcaires',
    title: 'Affichez vos couleurs',
    subtitle: 'Stylisez votre région'
  },
  // ... autres images
];
```

**Par :**
```typescript
const heroImages = [
  {
    src: '/images/hero-calanques-panoramique.jpg',
    alt: 'Calanques de Marseille - Vue panoramique des falaises calcaires',
    title: 'Affichez vos couleurs',
    subtitle: 'Stylisez votre région'
  },
  {
    src: '/images/hero-bateaux-calanques.jpg',
    alt: 'Bateaux dans les calanques de Marseille',
    title: 'L\'élégance marseillaise',
    subtitle: 'À votre portée'
  },
  {
    src: '/images/hero-plage-calanques.jpg',
    alt: 'Plage des calanques avec falaises en arrière-plan',
    title: 'Design authentique',
    subtitle: 'Made in Marseille'
  }
];
```

### 2. **Images Produits**
**Fichier :** `/src/lib/data.ts`

Remplacez ces URLs placeholder :
```typescript
// Lignes 10, 24, 38 dans data.ts
image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
images: ['https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop', 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop'],
```

**Par :**
```typescript
image: '/images/fanion-marseille.jpg',
images: ['/images/fanion-marseille-1.jpg', '/images/fanion-marseille-2.jpg'],
```

## 📁 Structure des Fichiers

Placez vos photos dans le dossier `/public/images/` avec cette nomenclature :

```
public/images/
├── hero-calanques-panoramique.jpg    # Vue panoramique des calanques
├── hero-bateaux-calanques.jpg        # Bateaux dans les calanques
├── hero-plage-calanques.jpg          # Plage avec falaises
├── fanion-marseille.jpg              # Fanion Marseille principal
├── fanion-marseille-1.jpg            # Fanion Marseille vue 2
├── fanion-marseille-2.jpg            # Fanion Marseille vue 3
├── fanion-vieux-port.jpg             # Fanion Vieux-Port
├── fanion-vieux-port-1.jpg           # Fanion Vieux-Port vue 2
├── fanion-vieux-port-2.jpg           # Fanion Vieux-Port vue 3
├── fanion-notre-dame.jpg             # Fanion Notre-Dame
├── fanion-notre-dame-1.jpg           # Fanion Notre-Dame vue 2
├── fanion-notre-dame-2.jpg           # Fanion Notre-Dame vue 3
└── region-marseille.jpg              # Vue générale de Marseille
```

## 🎨 Recommandations Techniques

### **Tailles Optimisées**
- **Hero images** : 1200x800px (ratio 3:2)
- **Images produits** : 400x300px (ratio 4:3)
- **Images supplémentaires** : 600x400px (ratio 3:2)

### **Formats Recommandés**
- **WebP** pour la meilleure compression (avec fallback JPEG)
- **JPEG** pour la compatibilité maximale
- **Qualité** : 85-90% pour un bon compromis taille/qualité

### **Optimisation**
- Compressez les images avant upload
- Utilisez des outils comme TinyPNG ou ImageOptim
- Gardez les fichiers sous 500KB chacun

## 🚀 Étapes d'Intégration

1. **Préparez vos photos** selon les tailles recommandées
2. **Renommez-les** selon la nomenclature ci-dessus
3. **Placez-les** dans `/public/images/`
4. **Modifiez le code** dans les fichiers mentionnés
5. **Testez** le site pour vérifier l'affichage

## ✨ Résultat Attendu

Avec vos photos des calanques, le site aura :
- ✅ **Authenticité marseillaise** - Falaises calcaires emblématiques
- ✅ **Esprit maritime** - Bateaux et activités nautiques
- ✅ **Lifestyle méditerranéen** - Soleil, mer, détente
- ✅ **Ambiance "Instagrammable"** - Cadres naturels spectaculaires

Vos photos créeront parfaitement l'univers souhaité pour votre collection de fanions Marseille ! 🏖️⛵
