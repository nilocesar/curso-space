events.on('ready', function () {
  
  $('.btnM').on('click', function(){
    navigate.goto( '04_c1' );
  });

  var _comeia = $('.materia').attr('comeia');
  var _materia = $('.materia').attr('material');
  
  $('.hit').on('click', function(){

    if( scorm.loadObject("c"+_comeia+"m"+_materia) ){

      var _ind = parseInt( scorm.loadObject("c"+_comeia+"m"+_materia) );
      var _item = parseInt( $(this).attr('item') );
      
      if(_item > _ind ){
        scorm.saveObject("c"+_comeia+"m"+_materia, $(this).attr('item'));
      }

    }else{
      scorm.saveObject("c"+_comeia+"m"+_materia, $(this).attr('item'));
    }
    
    

    navigate.goto( $(this).attr('page') );
  });

  var pageAll = $('.hit').length;
  var pageCurrent = 1;

  if( scorm.loadObject("c"+_comeia+"m"+_materia) ){
    pageCurrent = parseInt(scorm.loadObject("c"+_comeia+"m"+_materia)) + 1;
  }

  for(var i = 1; i <= pageAll ; i++ ){
    if( pageCurrent < i ){
      $('.item'+ i ).addClass('inativo');
    }
    else if( pageCurrent == i ){
      $('.item'+ i ).addClass('atual');
    }
    else{
      $('.item'+ i ).addClass('visitado');
    }
  }

})