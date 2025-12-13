function calcularIMC() {
  const peso = parseFloat(document.getElementById('peso').value);
  const altura = parseFloat(document.getElementById('altura').value);
  const resultado = document.getElementById('resultado');
  const classificacao = document.getElementById('classificacao');
  const barra = document.getElementById('barra');

  if (isNaN(peso) || isNaN(altura) || altura <= 0) {
    resultado.textContent = 'Por favor, insira valores válidos.';
    classificacao.textContent = '';
    barra.style.width = '0';
    return;
  }

  const imc = peso / (altura * altura);
  resultado.textContent = `Seu IMC é: ${imc.toFixed(2)}`;

  let tipo = '';
  let cor = '';
  let emoji = '';

  if (imc < 18.5) {
    tipo = 'Abaixo do peso 😕';
    cor = '#f4a261';
  } else if (imc < 24.9) {
    tipo = 'Peso normal 😄';
    cor = '#2a9d8f';
  } else if (imc < 29.9) {
    tipo = 'Sobrepeso 😐';
    cor = '#e9c46a';
  } else if (imc < 34.9) {
    tipo = 'Obesidade grau I 😟';
    cor = '#f4a261';
  } else if (imc < 39.9) {
    tipo = 'Obesidade grau II 😣';
    cor = '#e76f51';
  } else {
    tipo = 'Obesidade grau III (mórbida) 😭';
    cor = '#d62828';
  }

  classificacao.textContent = `Classificação: ${tipo}`;
  barra.style.backgroundColor = cor;

  // Ajuste da barra proporcional ao IMC
  const largura = Math.min((imc / 40) * 100, 100);
  barra.style.width = `${largura}%`;
}
