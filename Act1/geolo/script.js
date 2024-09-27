// Seleccionar elementos de la página
const getLocationBtn = document.getElementById('getLocationBtn');
const status = document.getElementById('status');
const latitudeElement = document.getElementById('latitude');
const longitudeElement = document.getElementById('longitude');
const locationData = document.getElementById('locationData');
 
// Función que se ejecuta cuando se hace clic en el botón
getLocationBtn.addEventListener('click', () => {
  // Verificar si el navegador soporta la Geolocation API
  if (navigator.geolocation) {
    // Mostrar mensaje mientras se obtiene la ubicación
    status.textContent = 'Obteniendo tu ubicación...';
    
    // Obtener la posición actual del usuario
    navigator.geolocation.getCurrentPosition(showPosition, showError);
  } else {
    // Si el navegador no soporta la API
    status.textContent = 'La Geolocalización no es soportada por este navegador.';
  }
});
 
// Función que se ejecuta si la geolocalización es exitosa
function showPosition(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
 
  // Mostrar los datos de ubicación en la página
  latitudeElement.textContent = latitude;
  longitudeElement.textContent = longitude;
  locationData.style.display = 'block';
  status.textContent = '¡Ubicación obtenida con éxito!';
}
 
// Función para manejar errores
function showError(error) {
  switch (error.code) {
    case error.PERMISSION_DENIED:
      status.textContent = 'Permiso denegado. Por favor, permite el acceso a la ubicación.';
      break;
    case error.POSITION_UNAVAILABLE:
      status.textContent = 'Información de ubicación no disponible.';
      break;
    case error.TIMEOUT:
      status.textContent = 'La solicitud de ubicación ha caducado.';
      break;
    case error.UNKNOWN_ERROR:
      status.textContent = 'Ha ocurrido un error desconocido.';
      break;
  }
}