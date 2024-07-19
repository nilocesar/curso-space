events.on("ready",function(){$(".close-page").on("click",function(){var t;window.controlVideo("stopVideo"),$(this).attr("materialComplete")&&(t=parseInt($(this).attr("materialComplete"))+1,!scorm.loadObject("comeia1")||parseInt(scorm.loadObject("comeia1"))<t)&&scorm.saveObject("comeia1",t),navigate.goto($(this).attr("page"))})});
//# sourceMappingURL=script.js.map
