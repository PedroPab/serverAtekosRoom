# Server Atekos Room

Este proyecto esta creado para tener un api propia para mi proyectos de domotica.

Este es la api que uso para encender la luz de mi habitación ya que el interruptor esta en un lugar poco inaccesible, con una macro en mi celular al presionar un icono en la pantalla le mando una petición para cambiar el estado una variable. El bombillo esta conectado a un modulo relay con un esp8266 genérico que esta constantemente esta consultando el estado de la misma variable para encender o apagar la luz.

<!-- link del código de la esp8266:  -->

## Instalación

Esta probado en sistema Linux Ubuntu.

```bash
git clone git@github.com:PedroPab/serverAtekosRoom.git
cd serverAtekosRoom
npm i
npm run dev

```

## Environment Variables

Deben de haber dos archivos `.env`. Uno llamado `.env.development` que contiene las variables de desarrollo, y el otro llamado `.env.production` con las variables de producción.

Según la variable `NODE_ENV`, que puede ser `production` o `development` se escogerá uno archivo de configuración.

El archivo `.env.` debe contener las siguientes variables de entorno:

- `PORT`: Puerto del servidor.
- `NODE_ENV`: Es nuestro modo de entorno.

## Scripts

- `npm start`: Iniciar el servidor en modo de producción.
- `npm dev`: Iniciar el servidor en modo de desarrollo.
- `npm deploy`: Deploy con el servicio de google cloud app engine.
- `npm log`: Ver los logs en producción.
- `npm test`: Runs the test suite.

## Deploy

### App Engine

Debemos de tener el apk de gcp e iniciar session y tener un proyecto activo.

Recuerda tener el archivo `app.yaml` para la configuración.

Con `$ gcloud beta app deploy` puedes desplegar ( es el predeterminado en el script `npm run dev`)
