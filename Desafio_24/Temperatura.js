function converterTemperatura() {
    var celsius = parseFloat(document.getElementById('celsius').value);
    var fahrenheit = (celsius * 9/5) + 32;
    var kelvin = celsius + 273.15;
  
    document.getElementById('resultado').innerHTML = `
      <p><strong>Temperatura em Fahrenheit:</strong> ${fahrenheit.toFixed(2)} °F</p>
      <p><strong>Temperatura em Kelvin:</strong> ${kelvin.toFixed(2)} K</p>
    `;
  }