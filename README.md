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

> En la rama `apk_muestra` todos estos valores están en 0, para entregar la app
> "en blanco" a otra persona y que ella cargue sus propios datos.

## 🌐 Probar en el celular sin GitHub (misma red WiFi)

No necesitas subir nada a internet para probarlo en otro celular: basta con
levantar un servidor local en tu PC y que el celular se conecte por WiFi.

1. Conecta la PC y el celular a la **misma red WiFi**.
2. En la carpeta del proyecto, levanta un servidor local. Cualquiera de estas
   opciones sirve (usa la que ya tengas instalada):
   ```
   # Con Python
   python -m http.server 8080

   # Con Node
   npx serve -l 8080
   ```
3. Averigua la IP local de tu PC:
   ```
   # Windows (PowerShell)
   ipconfig
   ```
   Busca algo como `192.168.1.23` (adaptador WiFi, IPv4).
4. En el navegador del celular entra a `http://192.168.1.23:8080`.
5. Toca el menú (⋮) → "Agregar a pantalla de inicio".

> Nota: por HTTP (no HTTPS) el Service Worker no se registra, así que el modo
> offline no funcionará en esta modalidad — pero la app funciona igual
> mientras el celular esté conectado a la misma red y la PC tenga el
> servidor corriendo. Para offline real, usa GitHub Pages (HTTPS) o el APK.

## 📦 Generar un APK instalable (sin Android Studio)

La forma más simple, sin instalar nada de Android, es usar **PWABuilder**:

1. Publica el proyecto en GitHub Pages (ver sección de arriba) para tener
   una URL HTTPS pública, por ejemplo `https://tu_usuario.github.io/finanzas/`.
2. Ve a **https://www.pwabuilder.com** y pega esa URL.
3. Click "Start" → espera el análisis (ícono, manifest, service worker ya
   están listos en este proyecto).
4. En la pestaña **Android**, click "Generate" → descarga el paquete.
5. Dentro del ZIP descargado está el archivo `.apk` (firma de prueba lista
   para instalar, no requiere Play Store).
6. Pasa el `.apk` al celular de la otra persona (por cable, Drive, WhatsApp,
   etc.) y ábrelo — Android pedirá permitir "instalar apps de orígenes
   desconocidos" la primera vez.

Como los datos se guardan en el `localStorage` del propio celular, cada
persona que instale el APK (o abra la PWA) parte con sus propios valores en
cero y no comparte información con nadie más.
