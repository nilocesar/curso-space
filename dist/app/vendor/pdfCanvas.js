document.getElementById('isPDF').onload = function() {
  setTimeout(function(){
    // let elements = document.querySelectorAll('.loaderPDF')
    // elements.forEach((item) => {
    //   item.style.display = 'none'
    // })

    $('.loaderPDF').css('display', 'none')
    
  }, 1000 * 4 );
};
