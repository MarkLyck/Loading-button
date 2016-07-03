var $button = $('button');
var $content = $('#buttonContent');
var percent = 0;

$button.on('click',function(){
  var loadingTimer = window.setInterval(function(){
    percent = percent + 10;
    if (percent <= 100) {
      $('.progressBar').css('width', percent + '%');
    } else {
      clearInterval(loadingTimer);
      $content.html('<i class="fa fa-check" aria-hidden="true"></i>');
      $content.css({
        fontSize: '30px',
        color: '#168955'
      });
    }
  }, 100);
});

var addToBar = function() {

};
