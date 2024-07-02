"use strict";

events.on('ready', function () {
  animatePespectiva();
  particula();
});

function animatePespectiva(){
  $('body').on('mousemove', function() {
    var el = $(this)[0];
    var r = el.getBoundingClientRect();

    var _val = 5;

    if( $('body').attr('angleBase') ){
      _val = $('body').attr('angleBase');
    }
    
    var y = Math.floor((event.clientX - (r.left + Math.floor(r.width)/2))/r.width*2*100)/100;
    var x = Math.floor((event.clientY - (r.top + Math.floor(r.height)/2))/r.height*2*100)/100;
    el.style.setProperty('--xAngle', -x*_val+'deg');
    el.style.setProperty('--yAngle', y*_val+'deg');
    el.style.setProperty('--a', '10deg');
  }).on('mouseleave', function() {
    var el = $(this)[0];
    el.style.setProperty('--xAngle', '0deg');
    el.style.setProperty('--yAngle', '0deg');
  });
}

function particula(){
  if( $('#particles-js').length > 0 ){

    particlesJS("particles-js", {
      "particles": {
        "number": {
          "value": 33,
          "density": {
            "enable": true,
            "value_area": 1420.4657549380909
          }
        },
        "color": {
          "value": "#ffffff"
        },
        "shape": {
          "type": "triangle",
          "stroke": {
            "width": 0,
            "color": "#000000"
          },
          "polygon": {
            "nb_sides": 5
          },
          "image": {
            "src": "img/github.svg",
            "width": 100,
            "height": 100
          }
        },
        "opacity": {
          "value": 0.06313181133058181,
          "random": false,
          "anim": {
            "enable": false,
            "speed": 1,
            "opacity_min": 0.1,
            "sync": false
          }
        },
        "size": {
          "value": 11.83721462448409,
          "random": true,
          "anim": {
            "enable": false,
            "speed": 40,
            "size_min": 0.1,
            "sync": false
          }
        },
        "line_linked": {
          "enable": true,
          "distance": 150,
          "color": "#ffffff",
          "opacity": 0.4,
          "width": 1
        },
        "move": {
          "enable": true,
          "speed": 6,
          "direction": "none",
          "random": false,
          "straight": false,
          "out_mode": "out",
          "bounce": false,
          "attract": {
            "enable": false,
            "rotateX": 600,
            "rotateY": 1200
          }
        }
      },
      "interactivity": {
        "detect_on": "canvas",
        "events": {
          "onhover": {
            "enable": true,
            "mode": "repulse"
          },
          "onclick": {
            "enable": true,
            "mode": "push"
          },
          "resize": true
        },
        "modes": {
          "grab": {
            "distance": 400,
            "line_linked": {
              "opacity": 1
            }
          },
          "bubble": {
            "distance": 400,
            "size": 40,
            "duration": 2,
            "opacity": 8,
            "speed": 3
          },
          "repulse": {
            "distance": 200,
            "duration": 0.4
          },
          "push": {
            "particles_nb": 4
          },
          "remove": {
            "particles_nb": 2
          }
        }
      },
      "retina_detect": true
    });
  }
}

window.controlVideo = (vidFunc) => {
  var iframe = document.getElementsByTagName("iframe")[0].contentWindow;
  iframe.postMessage(
    '{"event":"command","func":"' + vidFunc + '","args":""}',
    "*"
  );
}