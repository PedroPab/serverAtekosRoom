import admin from 'firebase-admin';

import ENV from '../dotEnv.js';

admin.initializeApp({
  credential: admin.credential.cert(ENV.SERVICE_ACCOUNT)
});

const db = admin.firestore();

// Comprobar si estamos en modo de desarrollo y conectar al emulador de Firestore
if (ENV.NODE_ENV !== 'production') {
  db.settings({
    host: `localhost:${ENV.PORT_DATABASE}`,
    ssl: false
  });
}

export default db;
