$(".range--water")
  .noUiSlider({
  start: 23,
  step: 1,
  range: {
    min: 0,
    max: 35
  }
})

  .on('set', function (event, value) {
  if (value < 0) {
    $(this).val(0);
  } else if (value > 1000000) {
    $(this).val(1000000);
  }
});


// тут можно поставить чтобы минус заходил за границы но
// возвращался обратно куда ты скажешь ему в min and max
$(".range--ambient")
  .noUiSlider({
  start: 1000000,
  step: 10000,
  range: {
    min: 0,
    max: 1000000
  }
})

  .on('set', function (event, value) {
  if (value < 0) {
    $(this).val(0);
  } else if (value > 1000000) {
    $(this).val(1000000);
  }
});

$(".range").Link('lower').to('-inline-<div class="tooltip"></div>', function (value) {
  $(this).html('<span>' + deneme(value) + "$" + '</span>');
  $('.range--content').width(value*100/1000000+'%');
});

function deneme(value) {
  value = value | 0;
  return value;
}
