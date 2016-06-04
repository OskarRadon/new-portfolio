const colors = ['#7AD1D1',
                '#5AD95A',
                '#FFEF4F']

function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

$(function(){
  $('.post').hover(function() {
    var id = this.id;
    console.log(id);
    $('body').css({ background: colors[randomNum(0,2)] });
    $('#' + id + '-bg').show();

  }, function() {
    var id = this.id;
    $('body').css({ background: "white" });
    $('#' + id + '-bg').hide();
  });
});
