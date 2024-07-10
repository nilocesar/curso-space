events.on('ready', function() {
    controlAudio();
    controleAvatar();
    controlHeader();
    controlMenuScreen();
    controlConquista();
    controlSemente();
    controlCarregamento();
    controlResetFase();
    initEquipamento();
});

function controlAudio() {

    $('.efeitosonoroBase .efeitosonoro').each(function(){
        this.volume = 0; 
    }); 

    var audioObj = bridge.statusAudioObj();
    if( audioObj.status == 1 ){
        $('header .btnAudio .playAudio').addClass('hide');
        $('header .btnAudio .pauseAudio').removeClass('hide');

        $('.efeitosonoroBase .efeitosonoro').each(function(){
            this.volume = 0.2; 
        }); 

    }else{

    }

    $('header .btnAudio').on('click', function() {

        bridge.statusAudio();

        var audioObj = bridge.statusAudioObj();
        if( audioObj.status == 0 )
        {
            $(this).find('.playAudio').removeClass('hide');
            $(this).find('.pauseAudio').addClass('hide');
            $('.efeitosonoroBase .efeitosonoro').each(function(){
                this.volume = 0; 
            }); 
            
        }else{
            $(this).find('.playAudio').addClass('hide');
            $(this).find('.pauseAudio').removeClass('hide');
            $('.efeitosonoroBase .efeitosonoro').each(function(){
                this.volume = 0.2; 
            });
        }
    })
}

function controleAvatar(){

    if( scorm.loadObject( 'name') ){
        $('.nome').text( scorm.loadObject( 'name') );
    }

    $('header .avatar').on('click', function() {
        scorm.saveObject( 'avatarReturn', navigate.currentScreenUid );
        navigate.goto('05_tela');
    });

    resetAvatar();
    function resetAvatar(){
        $('.avatarContainer .cabelo').addClass('hide');
        $('.avatarContainer .bengala').addClass('hide');
        $('.avatarContainer .fone').addClass('hide');
        $('.avatarContainer .relogio').addClass('hide');
        $('.avatarContainer .chapeu').addClass('hide');
        $('.avatarContainer .oculos').addClass('hide');
        $('.avatarContainer .sapato').addClass('hide');
        $('.avatarContainer .roupa').addClass('hide');
        $('.avatarContainer .cabelo').addClass('hide');
        $('.avatarContainer .rosto').addClass('hide');
        
        if( scorm.loadObject( 'avatar') ){
            const { bengala, fone, relogio, sapatoModel, corPele, corCabelo,
                    cabeloModel, chapeuModel, oculosModel,
                    roupaModel } =  scorm.loadObject( 'avatar');

            $('.avatarContainer .bengala').removeClass( bengala ? 'hide' : '' );
            $('.avatarContainer .fone').removeClass( fone ? 'hide' : '' );
            $('.avatarContainer .relogio').removeClass( relogio ? 'hide' : '' );

            $(`.avatarContainer .cabelo${cabeloModel}`).removeClass('hide');
            $(`.avatarContainer .chapeu${chapeuModel}`).removeClass('hide');
            $(`.avatarContainer .oculos${oculosModel}`).removeClass('hide');
            $(`.avatarContainer .roupa${roupaModel}`).removeClass('hide');
            $(`.avatarContainer .sapato${roupaModel}`).removeClass('hide');

            $('.avatarContainer .pele').css('fill', corPele );
            $('.avatarContainer .cabelo .fundo path').css('fill', corCabelo );

            if(cabeloModel <= 4 ){
                $('.avatarContainer .rosto1').removeClass('hide');
            }else{
                $('.avatarContainer .rosto2').removeClass('hide');
            }
        }
    }
}

function controlHeader() {

    // $('.btnHelp').on('click', function() {
    //     $('.header').addClass('headerActive');
    //     setTimeout(function(){
    //         $('body').trigger('show-header');
    //     }, 1000 * 0.2);
    // })

    // $('#help .modal-close').focusin(function () {
    //     $('.header').removeClass('headerActive');
    // });

    $('.header .btnEquipamento').on('click', function() {
        $('body').trigger('modal-open', [$("#schoolbag")]);
      
        controlEquipamento();
        controlConquista();
    })

    $('.header .btnConquista').on('click', function() {
        $('body').trigger('modal-open', [$("#medal")]);

        controlEquipamento();
        controlConquista();
    })

    $('.modal-close').focusin(function () {
        $('body').trigger('modal-close');
    });

    $('.modal-close').on("click", function () {
        $('body').trigger('modal-close');
    });
}

function controlMenuScreen(){
    if( scorm.loadObject( 'check') ) {
        var check = scorm.loadObject( 'check');
        
        for( var i = 1; i <= check; i++ ){
            if(i < check ){
                $('.menuIt'+ i ).addClass('checkIt');
                $('.menuIt'+ i ).attr("aria-label", `Fase ${i} - Já visitada.`)
            } 
            $('.menuIt'+ i ).removeClass('inativo');
        }
        
        $(`.menuIt${check} .unclock`).addClass('animated pulse infinite')
        // $("body").trigger("libras", ['08_tela-fase' + check] );
    }
}

function initEquipamento(){
    controlEquipamento();

    var arrItensText = [
        "Você conquistou seu binóculo de desbravador ou desbravadora, que será muito útil em seu dia a dia. Clique nele para saber mais!",
        "Você conquistou um cantil, ele será muito útil em seu dia a dia. Clique nele para saber mais!",
        "Você conquistou um <b>chapéu australiano</b>, ele será muito útil em seu dia a dia. Clique nele para saber mais!",
        "Você conquistou sua <b>câmera fotográfica</b>, que será muito útil em seu dia a dia. Clique nela para saber mais!",
        "Você conquistou seu <b>kit de primeiro socorros</b>c, que será muito útil em seu dia a dia. Clique nele para saber mais!"
    ]

    $('body').on('equipamento', function(e, item){
        
        $("#schoolbag").css('display', 'flex');
        $('body').trigger('modal-open', [$("#schoolbag")]);

        

        scorm.saveObject( 'equipamento'+item, 1 );
        $("#schoolbag .it"+ item).removeClass('hide');
        $("#schoolbag .equip").removeClass('animated pulse infinite');
        $("#schoolbag .equip"+ item).addClass('animated pulse infinite');
        
        controlEquipamento();

        setTimeout(() => {
            console.log('FOCANDO');
            $("#schoolbag .equip"+ item).focus();
            addAlert(arrItensText[item - 1]);
          }, 3000);
       
        

    })

    $("#schoolbag .equip").on('click', function(){
        $("#schoolbag .whapper .modal-close").removeClass('animated pulse infinite');
        $("#schoolbag .equip").removeClass('animated pulse infinite');
    })
    
}

function controlEquipamento(){
    $('#schoolbag .equip').addClass('equipeInativo');
    var all = 5;
    for( var i = 1; i <= all; i++ ){
        if( scorm.loadObject( 'equipamento'+i ) ){
            $('#schoolbag .equip'+i).removeClass('equipeInativo');
            $('.boxbag .equip'+i).removeClass('block');
            $('.btnEquipamento').attr('data-libras', "00_equipamentos_0"+i);/// controle de libras
            // $("body").trigger("libras", ["equipamentos_0"+i] );
        }
    }
}

function controlConquista(){

    $('#medal .card').addClass('cardInativo');

    const all =  $('#medal .card').length;
    let arrMedalhasConquistadas = [];

    for( var i = 1; i <= all; i++ ){
        if( scorm.loadObject( 'conquista'+i ) ){
            $('#medal .card'+i).removeClass('cardInativo');
            $('.boxMedal .card'+i).removeClass('block');
            $('.btnConquista').attr('data-libras', "00_conquista_0"+i);

            arrMedalhasConquistadas.push($('#medal .card'+i).attr('aria-label'));
        }
    }

    if(arrMedalhasConquistadas.length > 0){
        $('#medal').find('.box').attr('aria-label', `Você conquistou ${arrMedalhasConquistadas.length <= 1 ? 'a medalha' : 'as medalhas'} ${arrMedalhasConquistadas.toString()}`);
    }else{
        $('#medal').find('.box').attr('aria-label', `Você ainda não conquistou medalhas.`);
    }
   

}

function controlSemente() {

    const calcSementes = () => {
        
        var sementes = 0;
        for(var i = 1; i <= 10; i++ ){
            if( scorm.loadObject('sem'+ i ) ){
                sementes += scorm.loadObject('sem'+ i );
            }
        }

        $( '.point').text(sementes);
        // addAlert(`Parabéns! Você conquistou mais sementes, agora você possuí ${sementes} sementes.`);
    }

    $("body").on("sementes", function( e , curr, value ){

        if( !scorm.loadObject('sem'+ curr ) )
            scorm.saveObject( 'sem'+ curr , value );

        calcSementes();
    });

    calcSementes();

    // function calcSementes(){
        
    //     var sementes = 0;
    //     for(var i = 1; i <= 10; i++ ){
    //         if( scorm.loadObject('sem'+ i ) ){
    //             sementes += scorm.loadObject('sem'+ i );
    //         }
    //     }

    //     $( '.point').text(sementes);
    // }

    
}

function controlCarregamento(){

    var _page = 7;/// valor inicial // remove as 7 primeiras telas 
    if( navigate.currentScreen.index >= _page ){
        var index = navigate.currentScreen.index + 1 - _page;
        var total = navigate.pagesTotal - _page;
        var porc = parseInt(( index * 100 ) / total);

        if( scorm.loadObject( 'porc' ) ){
            if( porc >= parseInt( scorm.loadObject( 'porc' ) ) ){
                scorm.saveObject( 'porc', porc );
            }
        }else{
            scorm.saveObject( 'porc', porc );
        }
        
        var carregamento = scorm.loadObject( 'porc' );
        if( carregamento == 1 ){
            carregamento = 0;
        }

        $('header .progress .porc .porcInt').css('width', carregamento +"%");
        $('.porc .porcInt').css('width', carregamento +"%");
        console.log("carregamento: "+carregamento);
    }
}

function controlResetFase(){

    $('body').on('faseReset', function( e, fase){
        scorm.removeObject("sem"+ fase);
        scorm.removeObject("conquista"+ fase);
        scorm.removeObject("equipamento"+ fase);
    })

    $('body').on('faseResetEnd', function( e, fase){
        scorm.removeObject("desafio1");
        scorm.removeObject("desafio2");
        scorm.removeObject("desafio3");
        scorm.removeObject("camera");
        scorm.removeObject("fase4_buzz11");
        scorm.removeObject("fase4_buzz12");
        scorm.removeObject("fase4_buzz13");
        scorm.removeObject("fase4_buzz21");
        scorm.removeObject("fase4_buzz22");
        scorm.removeObject("fase4_buzz23");
        scorm.removeObject("fase4_buzz31");
        scorm.removeObject("fase4_buzz32");
        scorm.removeObject("fase4_buzz33");
        scorm.removeObject("bonus");
        scorm.removeObject("sem5");
        scorm.removeObject("sem6");
        scorm.removeObject("sem7");
        scorm.removeObject("conquista4");
        scorm.removeObject("equipamento4");
        scorm.removeObject("equipamento5");
    })
}