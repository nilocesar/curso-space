events.on("ready", function () {
  if (!scorm.loadObject("avatar")) {
    resetAvatar();
  }

  $(".containerScreen button").on("click", function () {
    var type = $(this).attr("type");
    var model = $(this).attr("model");
    var modelDescription = "";

    if ($(this).hasClass("active")) {
      $(`.containerScreen button.${type}`).removeClass("active");
      $(this).attr("aria-selected", "false");
      $(`.avatarContainer .${type}${model}`).addClass("hide");

      if (type == "cabelo") $(".avatarContainer .cabelo1").removeClass("hide");
      if (type == "roupa") $(".avatarContainer .roupa0").removeClass("hide");
      if (type == "sapato") $(".avatarContainer .sapato0").removeClass("hide");
      if (type == "corCabelo") {
        $(".avatarContainer .cabelo .fundo path").css("fill", "#000");
      }
      if (type == "corPele") {
        $(".avatarContainer .pele").css("fill", "#F9C9BC");
      }

      return false;
    }

    $(`.containerScreen button.${type}`).removeClass("active");
    $(this).addClass("active");

    $(`.avatarContainer .${type}`).addClass("hide");
    $(`.avatarContainer .${type}${model}`).removeClass("hide");

    if (type == "cabelo") {
      $(".avatarContainer .rosto").addClass("hide");
      if (model <= 4) {
        $(".avatarContainer .rosto1").removeClass("hide");
      } else {
        $(".avatarContainer .rosto2").removeClass("hide");
      }
    }

    if (type == "corCabelo" || type == "corPele") {
      var cor = $(this).css("background-color");

      if (type == "corCabelo") {
        $(".avatarContainer .cabelo .fundo path").css("fill", cor);
      }

      if (type == "corPele") {
        $(".avatarContainer .pele").css("fill", cor);
      }
    }

    modelDescription = $(this).attr("aria-label")
      ? `O item: ${$(this).attr("aria-label")}, foi selecionado.`
      : "Item selecionado.";
    $(this).attr("aria-selected", "true");
  });

  $(".btnLimpar").on("click", function () {
    resetAvatar();
  });

  $(".btnConfirmar").on("click", function () {
    var avatarObj = {
      corPele: $(".avatarContainer .pele").css("fill"),
      corCabelo: $(".avatarContainer .cabelo .fundo path").css("fill"),
      bengala: !$(".avatarContainer .bengala").hasClass("hide"),
      fone: !$(".avatarContainer .fone").hasClass("hide"),
      relogio: !$(".avatarContainer .relogio").hasClass("hide"),
      cabeloModel: itemAvatar("cabelo", 8),
      chapeuModel: itemAvatar("chapeu", 3),
      oculosModel: itemAvatar("oculos", 3),
      roupaModel: itemAvatar("roupa", 3),
      sapatoModel: itemAvatar("sapato", 3),
    };

    console.log(avatarObj);
    scorm.saveObject("avatar", avatarObj);

    if (scorm.loadObject("avatarReturn")) {
      navigate.goto(scorm.loadObject("avatarReturn"));
    } else {
      navigate.next();
    }
  });

  function itemAvatar(_name, _all) {
    var item = 0;

    $(`.avatarContainer .${_name}`).each(function () {
      for (var i = 1; i <= _all; i++) {
        if (!$(this).hasClass("hide") && $(this).hasClass(_name + i)) item = i;
      }
    });

    return item;
  }

  function resetAvatar() {
    $(".avatarContainer .cabelo").addClass("hide");
    $(".avatarContainer .bengala").addClass("hide");
    $(".avatarContainer .fone").addClass("hide");
    $(".avatarContainer .relogio").addClass("hide");
    $(".avatarContainer .chapeu").addClass("hide");
    $(".avatarContainer .oculos").addClass("hide");
    $(".avatarContainer .sapato").addClass("hide");
    $(".avatarContainer .roupa").addClass("hide");
    $(".avatarContainer .cabelo").addClass("hide");
    $(".avatarContainer .rosto").addClass("hide");

    $(".avatarContainer .cabelo1").removeClass("hide");
    $(".avatarContainer .rosto1").removeClass("hide");
    $(".avatarContainer .roupa0").removeClass("hide");
    $(".avatarContainer .sapato0").removeClass("hide");

    $(".avatarContainer .pele").css("fill", "#F9C9BC");
    $(".avatarContainer .cabelo .fundo path").css("fill", "#000");
  }
});
