function controleAvatar(){var a,e,o,r,t,n,s,l,i,d;scorm.loadObject("name")&&$(".nome").text(scorm.loadObject("name")),$("header .resAvatar").on("click",function(){scorm.saveObject("avatarReturn",scorm.get("cmi.core.lesson_location")),navigate.goto("03_avatar")}),$(".avatarContainer .cabelo").addClass("hide"),$(".avatarContainer .bengala").addClass("hide"),$(".avatarContainer .fone").addClass("hide"),$(".avatarContainer .relogio").addClass("hide"),$(".avatarContainer .chapeu").addClass("hide"),$(".avatarContainer .oculos").addClass("hide"),$(".avatarContainer .sapato").addClass("hide"),$(".avatarContainer .roupa").addClass("hide"),$(".avatarContainer .cabelo").addClass("hide"),$(".avatarContainer .rosto").addClass("hide"),scorm.loadObject("avatar")&&({bengala:a,fone:e,relogio:o,sapatoModel:r,corPele:t,corCabelo:n,cabeloModel:s,chapeuModel:l,oculosModel:i,roupaModel:d}=scorm.loadObject("avatar"),$(".avatarContainer .bengala").removeClass(a?"hide":""),$(".avatarContainer .fone").removeClass(e?"hide":""),$(".avatarContainer .relogio").removeClass(o?"hide":""),$(".avatarContainer .cabelo"+s).removeClass("hide"),$(".avatarContainer .chapeu"+l).removeClass("hide"),$(".avatarContainer .oculos"+i).removeClass("hide"),$(".avatarContainer .roupa"+d).removeClass("hide"),$(".avatarContainer .sapato"+d).removeClass("hide"),$(".avatarContainer .pele").css("fill",t),$(".avatarContainer .cabelo .fundo path").css("fill",n),(s<=4?$(".avatarContainer .rosto1"):$(".avatarContainer .rosto2")).removeClass("hide"))}events.on("ready",function(){controleAvatar()});
//# sourceMappingURL=avatar.js.map