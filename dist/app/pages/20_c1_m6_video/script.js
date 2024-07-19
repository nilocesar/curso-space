events.on("ready",function(){$(".close-page").on("click",function(){var e;window.controlVideo("stopVideo"),$(this).attr("materialComplete")&&(e=parseInt($(this).attr("materialComplete"))+1,!scorm.loadObject("comeia1")||parseInt(scorm.loadObject("comeia1"))<e)&&scorm.saveObject("comeia1",e),navigate.next()})});
//# sourceMappingURL=script.js.map
