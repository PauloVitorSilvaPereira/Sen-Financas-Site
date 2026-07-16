$(document).ready(function () {
    $('.inicialTexto').mouseover(function () {
      $(this).css('color','#dfdfdf'), $('.inicialImg').attr('src', 'assets/Home1.png')
    })
    $('.inicialTexto').mouseout(function () {
      $(this).css('color','#454545'), $('.inicialImg').attr('src', 'assets/Home.png')
    })
})

$(document).ready(function () {
    $('.emprestimoTexto').mouseover(function () {
      $(this).css('color','#dfdfdf'), $('.emprestimoImg').attr('src', 'assets/Money1.png')
    })
    $('.emprestimoTexto').mouseout(function () {
      $(this).css('color','#454545'), $('.emprestimoImg').attr('src', 'assets/Money.png')
    })
})

$(document).ready(function () {
    $('.clienteTexto').mouseover(function () {
      $(this).css('color','#dfdfdf'), $('.clienteImg').attr('src', 'assets/Cliente1.png')
    })
    $('.clienteTexto').mouseout(function () {
      $(this).css('color','#454545'), $('.clienteImg').attr('src', 'assets/Cliente.png')
    })
})

$(document).ready(function () {
    $('.instaImg').mouseover(function () {
      $(this).attr('src', 'assets/Insta1.png')
    })
    $('.instaImg').mouseout(function () {
      $(this).attr('src', 'assets/Insta.png')
    })
})

$(document).ready(function () {
    $('.faceImg').mouseover(function () {
      $(this).attr('src', 'assets/Face1.png')
    })
    $('.faceImg').mouseout(function () {
      $(this).attr('src', 'assets/Face.png')
    })
})