# Etapa 1: Construcción
FROM node:18-alpine AS builder

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia únicamente los archivos necesarios para instalar dependencias
COPY package*.json ./

# Instala solo las dependencias de producción para reducir el tamaño de la imagen
RUN npm ci --production

# Copia el resto del código de la aplicación al contenedor
COPY . .

# Compila el proyecto si es necesario (por ejemplo, Babel o TypeScript)
# Descomenta la siguiente línea si utilizas un proceso de build como Babel o TypeScript
# RUN npm run build

# Etapa 2: Imagen de producción
FROM node:18-alpine

# Establece el directorio de trabajo
WORKDIR /app

# Copia las dependencias de producción y el código de la aplicación desde la etapa de construcción
COPY --from=builder /app /app

# Establece la variable de entorno para producción
ENV NODE_ENV=production

# Expone el puerto que utiliza tu servidor
EXPOSE 3012

# Comando para ejecutar la aplicación
CMD ["node", "src/server.js"]
