$("[data-modal]").each(function (i, element) {
    var $botao = $(element);
    var modal_id = $botao.attr('data-modal');
    var $popup = $(modal_id);
    $popup.hide().addClass('modal');
    $botao.on('click', function () {
        $botao.addClass('clicked');
        $popup.fadeIn();
    });

    $botao.keydown(function(event){
        if (event.key === " " || event.key === "Enter" || event.key === "Spacebar") {
            // $botao.addClass('clicked');
            // $popup.fadeIn();
            $(this).click();
            event.preventDefault();
        }
    });


    $popup.find('.modal-close')
        .on('click', function () {
            $botao.removeClass('clicked');
            $popup.fadeOut();
        })

    $popup.find('.modal-close').keydown(function(event){
        if (event.key === " " || event.key === "Enter" || event.key === "Spacebar") {
            // $botao.removeClass('clicked');
            // $popup.fadeOut();
            $(this).click();
            event.preventDefault();
        }
    });

    $botao.attr("role", "button");
    $popup.find('.modal-close').attr("role", "button");
    $popup.find('.modal-close').attr("aria-label", "Fechar modal.");

    var _tabndex = findLastIndex($popup);
    $popup.find('.modal-close').attr("tabindex", Math.round(_tabndex + 1));
});


function findLastIndex(element){
    var tabMax = 0;
    $(element).find("*").each(function () {
        var tabAtual = Number($(this).attr('tabindex'));
        
        if(tabAtual!=undefined){
            if(tabAtual > tabMax){
                tabMax = tabAtual;
            }
        }
        
    });

    return tabMax;
}

