const colors = ['#7AD1D1',
                '#5AD95A',
                '#FFEF4F']

function randomNum() {
    return Math.floor(Math.random() * (2 + 1));
}


$(function(){
  $('.post').hover(function() {
    var viewport = $(window).width();
    var id = this.id;
    if (viewport >= 800) {
      $('body').css({ background: colors[randomNum()] });
      $('#' + id + '-bg').show();
    }
  }, function() {
    var id = this.id;
    $('body').css({ background: "white" });
    $('#' + id + '-bg').hide();
  });

});
