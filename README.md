# 📊 Dashboard de Influencers 2025

Dashboard interactivo para análisis completo de campañas de influencers, métricas de rendimiento, ROI y optimización presupuestaria.

![Dashboard Preview](https://img.shields.io/badge/React-18.2.0-blue) ![Vite](https://img.shields.io/badge/Vite-4.3.9-purple) ![Tailwind](https://img.shields.io/badge/Tailwind-3.3.2-cyan)

## 🎯 Características

- **📈 Visualización de Métricas**: Gráficos interactivos de visualizaciones, alcance e interacciones
- **💰 Análisis Presupuestario**: Comparación de presupuesto asignado vs gasto real
- **🏆 Ranking de Influencers**: Top 10 influencers por rendimiento
- **📊 Distribución por Categoría**: Análisis de campañas de alcance vs interacción
- **💡 Insights Automáticos**: Recomendaciones basadas en datos
- **🔍 Filtros Inteligentes**: Visualización por mes o vista general
- **📱 Responsive Design**: Optimizado para desktop, tablet y móvil

## 🛠️ Tecnologías

- **React 18** - Framework frontend
- **Vite** - Build tool ultrarrápido
- **Tailwind CSS** - Estilos utility-first
- **Recharts** - Gráficos interactivos
- **Lucide React** - Iconos modernos

## 🚀 Instalación y Uso

### Prerrequisitos

- Node.js 16+ y npm instalados

### Instalación

```bash
# Clonar el repositorio
git clone https://github.com/tu-usuario/influencer-dashboard-2025.git

# Navegar al directorio
cd influencer-dashboard-2025

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

El dashboard estará disponible en `http://localhost:5173`

### Build para Producción

```bash
# Crear build optimizado
npm run build

# Preview del build
npm run preview
```

## 📊 Métricas Disponibles

El dashboard analiza las siguientes métricas:

- **Visualizaciones**: Total de vistas de contenido
- **Alcance**: Personas únicas alcanzadas
- **Interacciones**: Likes, comentarios, shares
- **Inversión**: Costo total de campañas
- **CPM**: Costo por mil impresiones
- **Engagement Rate**: Tasa de interacción

## 📁 Estructura del Proyecto

```
influencer-dashboard-2025/
├── src/
│   ├── App.jsx              # Componente principal del dashboard
│   ├── main.jsx             # Punto de entrada de React
│   └── index.css            # Estilos globales y Tailwind
├── public/                  # Archivos estáticos
├── index.html               # HTML base
├── package.json             # Dependencias y scripts
├── vite.config.js           # Configuración de Vite
├── tailwind.config.js       # Configuración de Tailwind
├── postcss.config.js        # Configuración de PostCSS
└── README.md                # Este archivo
```

## 🎨 Personalización

### Agregar Nuevos Datos

Edita el array `data` en `src/App.jsx`:

```javascript
const data = [
  { 
    month: 'Enero', 
    influencer: '@usuario', 
    views: 27640, 
    reach: 16384, 
    interactions: 830, 
    cost: 65000, 
    category: 'Alcance' 
  },
  // ... más datos
];
```

### Cambiar Colores

Modifica los colores en `tailwind.config.js` o directamente en los componentes.

## 📈 Casos de Uso

- Agencias de marketing digital
- Marcas con programas de influencer marketing
- Freelancers de social media
- Analistas de marketing
- Gerentes de marca

## 🔐 Licencia

MIT License - Ver [LICENSE](LICENSE) para más detalles

## 👤 Autor

**Alim Reyes García**

- LinkedIn: [linkedin.com/in/alimreyes](https://linkedin.com/in/alimreyes)
- Email: alimreyes95@gmail.com
- Portafolio: Especialista en Marketing Digital | Data Analytics & IA

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Para cambios importantes:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add: nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📝 Roadmap

- [ ] Export de reportes a PDF
- [ ] Integración con APIs de redes sociales
- [ ] Comparación entre períodos
- [ ] Predicción de rendimiento con IA
- [ ] Dashboard en tiempo real

## ⭐ Reconocimientos

- Desarrollado con React y Vite
- Gráficos powered by Recharts
- Diseño UI con Tailwind CSS

---

**💡 ¿Te gustó este proyecto?** Dale una estrella ⭐ al repositorio y compártelo con tu equipo.

**🐛 ¿Encontraste un bug?** Abre un issue y lo resolveremos juntos.
