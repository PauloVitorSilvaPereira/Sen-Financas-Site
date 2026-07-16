$(document).ready(function () {
    $('.emprestimosDIV').mouseover(function () {
      $(this).css('height', 310)
    })
    $('.emprestimosDIV').mouseout(function () {
      $(this).css('height', 250)
    })
})

$(document).ready(function () {
    $('.emprestimoDescricao').mouseover(function () {
      $(this).css('font-size', '24px')
    })
    $('.emprestimoDescricao').mouseout(function () {
      $(this).css('font-size', '18px')
    })
})

$(document).ready(function () {
    $('.perguntasFrequentes1').mouseover(function () {
      $(this).css('border', '1px solid #8de0e0')
    })
    $('.perguntasFrequentes1').mouseout(function () {
      $(this).css('border', '1px solid #6CBECC')
    })
})

$(document).ready(function () {
    $('.perguntasFrequentes2').mouseover(function () {
      $(this).css('border', '1px solid #8de0e0')
    })
    $('.perguntasFrequentes2').mouseout(function () {
      $(this).css('border', '1px solid #6CBECC')
    })
})

$(document).ready(function () {
    $('.perguntasFrequentesResposta').hide()
})

$(document).ready(function () {
    $('.perguntasFrequentes1').click(function (){
        $(this).toggleClass('perguntasFrequentes2')
        if ($(this).hasClass("perguntasFrequentes2")) {
            $(this).children('.setaDireita').attr("src", "assets/setaBaixo.png");
            $(this).children(".perguntasFrequentesResposta").show();
        } else {
            $(this).children('.setaDireita').attr("src", "assets/setaDireita.png");
            $(this).children(".perguntasFrequentesResposta").hide();
        }
    })
})