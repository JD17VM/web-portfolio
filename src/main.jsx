// main.jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import './assets/styles/normalize.css'
import './assets/styles/estilos_generales.css'

// --- INICIO: CÓDIGO PARA MANEJAR REDIRECCIÓN DESDE 404.html ---
(function() {
  const redirect = sessionStorage.redirect;
  // console.log('Redirección guardada:', redirect); // Descomenta para depurar
  delete sessionStorage.redirect; // Bórralo una vez leído
  if (redirect && redirect !== window.location.href) {
    // Asegúrate que el basename aquí coincida EXACTAMENTE con el de BrowserRouter y vite.config.js
    const repoName = '/web-portfolio';
    // Obtiene solo la parte de la ruta de la URL guardada (ej: /web-portfolio/cv)
    const pathOnly = new URL(redirect, window.location.origin).pathname;
    // Extrae la ruta relativa al basename (ej: /cv)
    // Comprueba si pathOnly empieza con repoName + '/' para evitar errores si es solo repoName
    const targetPath = pathOnly.startsWith(repoName + '/') ? pathOnly.substring(repoName.length) : (pathOnly === repoName ? '/' : pathOnly);

    // console.log('Intentando navegar a (relativo al basename):', targetPath); // Descomenta para depurar
    // Comprueba que no estemos ya en la ruta correcta para evitar bucles
    if (targetPath && window.location.pathname !== repoName + (targetPath === '/' ? '' : targetPath)) {
       // console.log('Ejecutando history.replaceState con:', repoName + (targetPath === '/' ? '' : targetPath)); // Descomenta para depurar
       // Usa replaceState para cambiar la URL sin recargar la página
       // Asegúrate que el path final sea correcto (maneja el caso de '/')
       history.replaceState(null, '', repoName + (targetPath === '/' ? '' : targetPath) + new URL(redirect, window.location.origin).search + new URL(redirect, window.location.origin).hash); // Añade search y hash si existen
    }
  }
})();
// --- FIN: CÓDIGO PARA MANEJAR REDIRECCIÓN ---

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)