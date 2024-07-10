events.on("ready", function () {
  controleAvatar();
});

function controleAvatar() {
  if (scorm.loadObject("name")) {
    $(".nome").text(scorm.loadObject("name"));
  }

  $("header .avatar").on("click", function () {
    scorm.saveObject("avatarReturn", navigate.currentScreenUid);
    navigate.goto("05_tela");
  });

  resetAvatar();
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

    if (scorm.loadObject("avatar")) {
      const {
        bengala,
        fone,
        relogio,
        sapatoModel,
        corPele,
        corCabelo,
        cabeloModel,
        chapeuModel,
        oculosModel,
        roupaModel,
      } = scorm.loadObject("avatar");

      $(".avatarContainer .bengala").removeClass(bengala ? "hide" : "");
      $(".avatarContainer .fone").removeClass(fone ? "hide" : "");
      $(".avatarContainer .relogio").removeClass(relogio ? "hide" : "");

      $(`.avatarContainer .cabelo${cabeloModel}`).removeClass("hide");
      $(`.avatarContainer .chapeu${chapeuModel}`).removeClass("hide");
      $(`.avatarContainer .oculos${oculosModel}`).removeClass("hide");
      $(`.avatarContainer .roupa${roupaModel}`).removeClass("hide");
      $(`.avatarContainer .sapato${roupaModel}`).removeClass("hide");

      $(".avatarContainer .pele").css("fill", corPele);
      $(".avatarContainer .cabelo .fundo path").css("fill", corCabelo);

      if (cabeloModel <= 4) {
        $(".avatarContainer .rosto1").removeClass("hide");
      } else {
        $(".avatarContainer .rosto2").removeClass("hide");
      }
    }
  }
}
