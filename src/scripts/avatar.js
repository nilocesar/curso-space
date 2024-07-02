events.on('ready', function () {
   var avatarSelecionado = scorm.loadObject('avatar_selecionado');

   if (avatarSelecionado) {
      switch (avatarSelecionado) {
         case 'avatar01':
            $('.container-avatar').append(`
               <img src="../../assets/img/avatar_laranja.png">
            `)
            break;
         case 'avatar02':
            $('.container-avatar').append(`
               <img src="../../assets/img/avatar_rosa.png">
            `)
            break;
         case 'avatar03':
            $('.container-avatar').append(`
               <img src="../../assets/img/avatar_verde.png">
            `)
            break;
         default:
            $('.container-avatar').hide();
            break;
      }
   }
});