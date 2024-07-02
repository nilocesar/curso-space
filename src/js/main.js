$(window).on("beforeunload", function () {
	scorm.quit();
});

$(window).on("unload", function () {
	scorm.quit();
});

$(window).on(VIEW_EVENT.READY, viewReady);

function viewReady() {
	if (window.scorm.loadObject('iniciar') == true) {
		esconderCover();
	}

	$('#comecar').click(esconderCover);

	function esconderCover() {
		window.scorm.saveObject('iniciar', true);
		$('#cover').addClass('hide');
	}
}

bridge.cadastroTela = function () {

	var cadast =[ 
		'05_quiz', 
		'06_quiz',
		'07_quiz',
		'08_quiz',
		'09_quiz',
		'10_quiz',
		'11_quiz',
		'12_quiz',
		'13_quiz',
		'14_quiz' 
  ]

	return cadast;
}

