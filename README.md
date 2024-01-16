# 🌐 Server Atekos Room

🔥 Este proyecto ofrece una API innovadora para proyectos de domótica. Especialmente útil para controlar la iluminación de espacios poco accesibles, ¡como mi habitación! Con solo tocar un ícono en mi celular, envío una petición para cambiar el estado de una variable. Un bombillo, conectado a un módulo relay con ESP8266, consulta esta variable para encender o apagar la luz. ¡La comodidad al alcance de tu mano! ✨

<!-- Link del código ESP8266: [Aquí] -->

## 🛠 Instalación

Probado en Linux Ubuntu. Sigue estos pasos para empezar:

```bash
git clone git@github.com:PedroPab/serverAtekosRoom.git
cd serverAtekosRoom
npm i
npm run dev
```

## ⚙️ Variables de Entorno

Crea dos archivos `.env`: Uno para desarrollo `.env.development` y otro para producción `.env.production`. Dependiendo de `NODE_ENV` (`production` o `development`), se seleccionará el archivo correspondiente.

Tus archivos `.env` deben incluir:

- `PORT`: Puerto del servidor.
- `NODE_ENV`: Modo de entorno.

## 📜 Scripts

- `npm start`: Inicia el servidor en producción.
- `npm dev`: Modo desarrollo.
- `npm deploy`: Despliega en Google Cloud App Engine.
- `npm log`: Ver logs en producción.
- `npm test`: Ejecuta pruebas.

## 🚀 Deploy

### App Engine

Asegúrate de tener la APK de GCP activa y un proyecto activo.

Incluye un archivo `app.yaml` para configuración y usa `$ gcloud beta app deploy` para desplegar (incluido en `npm run dev`).

¡Listo! Tu servidor Atekos Room está preparado para iluminar tu mundo de manera inteligente. 💡🌟
