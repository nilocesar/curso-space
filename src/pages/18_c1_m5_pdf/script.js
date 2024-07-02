events.on('ready', function () {

  $('.close-page').on('click', function(){
    
    if( $(this).attr('materialComplete') ){
      
      var _com = 1;
      var _mat = parseInt($(this).attr('materialComplete')) + 1;

      if( scorm.loadObject(`comeia${_com}`) ){

        var _comeia = parseInt(scorm.loadObject(`comeia${_com}`));
        if(_mat > _comeia){
          scorm.saveObject(`comeia${_com}`, _mat);
        } 

      }else{
        scorm.saveObject(`comeia${_com}`, _mat);
      }

    }
   
    navigate.goto( $(this).attr('page') );
  });

});