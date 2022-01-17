var i = 0;
var txt = 'Comfty Home offers a unique selection of stylish, comfortable and chic fourniture online. Our fourniture range include sofa,beds,Dining table...';
var speed = 5;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}


$(window).scroll(function(){
    $('nav').toggleClass('scrolled',$(this).scrollTop()>50);
    });


    $(document).ready(function(){
      $('.slick').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1000,
    });
  })

  $('.rev').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      centerMode: true,
      focusOnSelect: true,
      autoplay: true,
      autoplaySpeed: 3000,
  });

    