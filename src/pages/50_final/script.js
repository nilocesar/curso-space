events.on('ready', function () {
  
  scorm.setCompleted();
  // scorm.set("cmi.suspend_data", "{}");
  
  $('.btn1').on('click', function() {
    navigate.goto('03_intro');
  })

  $('.btn2').on('click', function() {
    navigate.goto('03_intro');
  })
})