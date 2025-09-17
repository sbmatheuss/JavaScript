function verificar() {
  var data = new Date()
  var ano = data.getFullYear()
  var fano = document.getElementById('txtano')
  var res = document.querySelector('div#res')
  if (fano.value.length == 0 || Number(fano.value) > ano) {
    alert('[ERRO] Verifique os dados e tente novamente!')
  } else {
    var fsex = document.getElementsByName('radsex')
    var idade = ano - Number(fano.value)
    var genero = ''
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    if (fsex[0].checked) {
      genero = 'Homem'
      if (idade >= 0 && idade < 10) {
        // Criança
        img.setAttribute('src', 'crianca-h.png')
      } else if (idade < 21) {
        // Jovem
        img.setAttribute('src', 'jv-h.png')
      } else if (idade < 50) {
        // Aulto
        img.setAttribute('src', 'adulto-h.png')
      } else {
        // Idoso
        img.setAttribute('src', 'idoso.png')
      }
    } else if (fsex[1].checked) {
      genero = 'Mulher'
      if (idade >= 0 && idade < 10) {
        // Criança
        img.setAttribute('src', 'crianca-m.png')
      } else if (idade < 21) {
        // Jovem
        img.setAttribute('src', 'jv-m.png')
      } else if (idade < 50) {
        // Adulto
        img.setAttribute('src', 'adulto-m.png')
      } else {
        // Idosa
        img.setAttribute('src', 'idosa.png')
      }
    }
    res.computedStyleMap.textAlign = 'center'
    res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
    res.appendChild(img)
  }
}