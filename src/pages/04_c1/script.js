events.on('ready', function () {
  
  $('.hit').each(function(){
      var item = $(this).attr('item');
      var page = $(this).attr('page');
      $(this).find('path').attr('item', item );
      $(this).find('path').attr('page', page );
  })

  var pageAll = parseInt( $('body').attr('comeiaAll') );
  var comeiaCurrent = parseInt( $('body').attr('comeiaCurrent') );
  var pageCurrent = 1;

  if( scorm.loadObject("comeia"+comeiaCurrent) ){
    pageCurrent = parseInt(scorm.loadObject("comeia"+comeiaCurrent));
  }

  for(var i = 1; i <= pageAll ; i++ ){
    if( pageCurrent < i ){
      $('.comeiaItem'+ i ).addClass('inativo');
    }
    else if( pageCurrent == i ){
      $('.comeiaItem'+ i ).addClass('atual');
    }
    else{
      $('.comeiaItem'+ i ).addClass('visitado');
    }
  }
  

  $('.hit path').on('click', function(){
    var page = $(this).attr('page');
    navigate.goto(page);
  })

  $('.hit path').hover(function() {
    var item = $(this).attr('item');
    $('.comeiaItem'+ item).find('.seta').css('display', 'flex');

  }, function() {
    var item = $(this).attr('item');
    $('.comeiaItem'+ item).find('.seta').css('display', 'none');
  });

})