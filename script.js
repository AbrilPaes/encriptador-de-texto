const textarea = document.getElementById('text');
const decryptBtn = document.getElementById('decrypt');


var mapeoCifrado = {
  'a': '3', 'b': '!', 'c': 'R', 'd': '#', 'e': '5',
  'f': '$', 'g': '%', 'h': '^', 'i': '8', 'j': 'Z',
  'k': 'T', 'l': '(', 'm': ')', 'n': '_', 'o': '9',
  'p': 'p', 'P': '-', 'r': '=', 's': 'Ñ', 't': 'S',
  'u': '{', 'v': '}', 'w': ';', 'x': 'W', 'y': 'U',
  'z': '>', ' ': '/'
};

var mapeoDescifrado = {};
for (var key in mapeoCifrado) {
  if (mapeoCifrado.hasOwnProperty(key)) {
      mapeoDescifrado[mapeoCifrado[key]] = key;
  }
}

function codificar() {
  var mensajeOriginal = document.getElementById('text').value.toLowerCase();
  var mensajeCodificado = mensajeOriginal.replace(/[a-z ]/g, function(caracter) {
      return mapeoCifrado[caracter] || caracter;
  });
  document.getElementById('result').innerHTML = "<p>Mensaje codificado: <br><br>"+  mensajeCodificado + "</p>";
}

function decodificar() {
  var mensajeCodificado = document.getElementById('text').value;
  var mensajeDecodificado = mensajeCodificado.replace(/./g, function(caracter) {
      return mapeoDescifrado[caracter] || caracter;
  });
  document.getElementById('result').innerHTML = "<p> Mensaje decodificado: <br><br> " + mensajeDecodificado + "</p>";
}

function copiarTexto() {
  var mensajeCodificado = document.getElementById('result').querySelector('p').textContent;
  navigator.clipboard.writeText(mensajeCodificado)
      .then(() => {
          alert("Texto codificado copiado");
      })
      .catch(err => {
          console.error('Error al copiar el texto codificado: ', err);
      });
}

function reiniciar() {
  // Limpiar el contenido del textarea
  document.getElementById('text').value = '';
  
  // Restablecer el contenido del resultado
  document.getElementById('result').innerHTML = '<img id="perrito" src="img/perrito.png" class="imagen-perrito"><h3>Resultado de mensaje </h3>';
  
}