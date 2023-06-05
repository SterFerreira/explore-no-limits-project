let listaDeEstudantes = [
  {
    nomeDoEstudante: 'Murilo',
    primeiraNota: 6,
    segundaNota: 9
  },

  {
    nomeDoEstudante: 'Ana',
    primeiraNota: 5,
    segundaNota: 3
  },

  {
    nomeDoEstudante: 'Sara',
    primeiraNota: 8,
    segundaNota: 8
  }
]

function calcularMedia(primeiraNota, segundaNota) {
  let media = (primeiraNota + segundaNota) / 2
  return media
}

for (let estudantes of listaDeEstudantes) {
  mediaIndividual = calcularMedia(
    estudantes.primeiraNota,
    estudantes.segundaNota
  )
  let aprovadoOuNao =
    mediaIndividual < 7
      ? 'Infelizmente não foi aprovado, estude mais'
      : 'Parabéns pela sua aprovação'
  alert(`A média de ${estudantes.nomeDoEstudante} é ${mediaIndividual}.
      ${aprovadoOuNao}`)
}
