# 💰 Mis Finanzas PWA

App de control de gastos personales con reconocimiento de voz.

## 📁 Archivos

| Archivo | Descripción |
|---------|-------------|
| `index.html` | La app completa |
| `manifest.json` | Configuración PWA |
| `sw.js` | Service worker (offline) |
| `icon.svg` | Ícono de la app |

## 🚀 Publicar en GitHub Pages

1. Ve a **github.com** → "New repository"
2. Nombre: `finanzas` (o cualquier nombre)
3. Marca ✅ "Public"
4. Click "Create repository"
5. Click "uploading an existing file" → arrastra los 4 archivos
6. Click "Commit changes"
7. Ve a **Settings → Pages → Branch: main → /root → Save**
8. En ~1 minuto tu URL es: `https://TU_USUARIO.github.io/finanzas/`

## 📱 Instalar en Android

1. Abre Chrome en tu celular
2. Ve a tu URL de GitHub Pages
3. Toca el menú (⋮) → "Agregar a pantalla de inicio"
4. ¡Listo! Queda como app con ícono propio

## 🔧 Hacer modificaciones

Para cualquier cambio, dile a Claude qué quieres cambiar y te dará
el archivo actualizado. Luego:

1. Ve a tu repo en github.com
2. Click en el archivo a reemplazar → ícono del lápiz ✏️
3. Pega el nuevo contenido → "Commit changes"
4. En 1 minuto está actualizado en el celular

## 🎤 Voz con IA

Para usar Claude AI en el reconocimiento de voz:
1. Ve a https://console.anthropic.com/settings/keys
2. Crea una API key
3. En la app: tab Config → "API Key de Claude" → pega la key → Guardar

Sin API key, la voz usa reconocimiento básico por palabras clave.

## 💡 Valores por defecto

Configurados con los datos reales de tu presupuesto:
- Ingresos: S/ 3,500
- Gastos fijos (78% proporcional): S/ 2,352
- Meta ahorro: S/ 600
- **Saldo disponible: S/ 548**
