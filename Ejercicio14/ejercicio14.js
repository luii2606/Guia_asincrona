const numero1 = () => new Promise((resolve => setTimeout(() => resolve(5), 1000)));

const numero2 = (respuestaAnterior) =>
  new Promise((resolve => setTimeout(() => resolve(respuestaAnterior + 10), 1000)));

const numero3 = (respuestaAnterior) =>
  new Promise((resolve => setTimeout(() => resolve(respuestaAnterior + 15), 1000)));
  
numero1()
  .then(resultado1 => numero2(resultado1))
  .then(resultdo2 => numero3(resultdo2))
  .then(final => console.log("resultado final:", final));