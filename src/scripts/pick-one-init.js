events.on('ready', function () {
    var PickOneElement = $('.quiz').first();
    var IdQuiz = $('.quiz').attr("id");
    PickOneElement.PickOneFlamboyant();
    PickOneElement.on(PickOne.EVENTS.FINISH, function(event) {
        let pick_one = event.pickOne;
        if( scorm.loadObject('quizStatus') ){
            var quizStatus = scorm.loadObject('quizStatus');
            if (pick_one.acertou) {
                quizStatus.itens.push(1);
            }else{
                quizStatus.itens.push(0);
            }

            scorm.saveObject("quizStatus", quizStatus);
        }
    });

    $('.feedback .feed-close').on("click",function(){

        var cadastroTela = bridge.cadastroTela(); // busca as telas do quiz - main.js 
        var question = parseInt(scorm.loadObject("question"));
        var telaAll = cadastroTela.length;
        
        console.log(question + " " + telaAll );
        if(question == telaAll){
            if(scorm.loadObject('tentativa') == 1){
                scorm.saveObject('tentativa', 2);
            }else{
                scorm.saveObject('tentativa', 1);
            }   
            navigate.next();
        }else{
            navigate.goto('04_tabuleiro');
        }
    });
});      