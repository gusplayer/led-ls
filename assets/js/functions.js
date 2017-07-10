// @codekit-prepend "/vendor/hammer-2.0.8.js";

$( document ).ready(function() {

  // DOMMouseScroll included for firefox support
  var canScroll = true,
      scrollController = null;
  $(this).on('mousewheel DOMMouseScroll', function(e){
    if (!($('.outer-nav').hasClass('is-vis'))) {

      e.preventDefault();

      var delta = (e.originalEvent.wheelDelta) ? -e.originalEvent.wheelDelta : e.originalEvent.detail * 20;

      if (delta > 50 && canScroll) {
        canScroll = false;
        clearTimeout(scrollController);
        scrollController = setTimeout(function(){
          canScroll = true;
        }, 800);
        updateHelper(1);
      }
      else if (delta < -50 && canScroll) {
        canScroll = false;
        clearTimeout(scrollController);
        scrollController = setTimeout(function(){
          canScroll = true;
        }, 800);
        updateHelper(-1);
      }

    }

  });

  $('.side-nav, .outer-nav').find('li').click(function(){
    if (!($(this).hasClass('is-active'))) {


      var $this = $(this),
          curActive = $('.side-nav').find('li.is-active'),
          curPos = $('.side-nav').find('li').index(curActive),
          nextPos = $('.side-nav').find('li').index($this),
          lastItem = $('.side-nav').find('li').length - 1;

      var whoParent = $this.parent();
          whoParent = whoParent[0].className;
      if(whoParent == 'outer-nav is-vis'){
          nextPos = $('.outer-nav').find('li').index($this)
      }

      updateNavs(nextPos);
      updateContent(curPos, nextPos, lastItem);

    }
  });

  //callAction para ir a contacto
  $('.cta').bind("click touchstart", function(){

    var curActive = $('.side-nav').find('li.is-active'),
        curPos = $('.side-nav').find('li').index(curActive),
        lastItem = $('.side-nav').find('li').length - 1;
        nextPos = lastItem;

    updateNavs(lastItem);
    updateContent(curPos, nextPos, lastItem);

  });

  //callAction de proyectos para funcional
  $('.proyecto-funcional').click(function(){

    var curActive = $('.side-nav').find('li.is-active'),
        curPos = $('.side-nav').find('li').index(curActive),
        lastItem = $('.side-nav').find('li').length - 1
        nextPos = $('.side-nav').find('li').length - 4;
        console.log(nextPos)

    updateNavs(nextPos);
    updateContent(curPos, nextPos, lastItem);

  });

  //callAction de proyectos para arquitectonico
  $('.proyecto-arquitectonica').click(function(){

    var curActive = $('.side-nav').find('li.is-active'),
        curPos = $('.side-nav').find('li').index(curActive),
        lastItem = $('.side-nav').find('li').length - 1
        nextPos = $('.side-nav').find('li').length - 3;
        console.log(nextPos)

    updateNavs(nextPos);
    updateContent(curPos, nextPos, lastItem);

  });

  //callAction de aliados para cree
  $('.aliado-cree').click(function(){

    var curActive = $('.side-nav').find('li.is-active'),
        curPos = $('.side-nav').find('li').index(curActive),
        lastItem = $('.side-nav').find('li').length - 1
        nextPos = $('.side-nav').find('li').length - 7;
        console.log(nextPos)

    updateNavs(nextPos);
    updateContent(curPos, nextPos, lastItem);

  });

  //callAction de aliados para colorkinetics
  $('.aliado-colorkinetics').click(function(){

    var curActive = $('.side-nav').find('li.is-active'),
        curPos = $('.side-nav').find('li').index(curActive),
        lastItem = $('.side-nav').find('li').length - 1
        nextPos = $('.side-nav').find('li').length - 6;
        console.log(nextPos)

    updateNavs(nextPos);
    updateContent(curPos, nextPos, lastItem);

  });

  // swipe support for touch devices
  var targetElement = document.getElementById('viewport'),
      mc = new Hammer(targetElement);
  mc.get('swipe').set({ direction: Hammer.DIRECTION_VERTICAL });
  mc.on('swipeup swipedown', function(e) {

    updateHelper(e);

  });

  $(document).keyup(function(e){
    if (!($('.outer-nav').hasClass('is-vis'))) {
      e.preventDefault();
      updateHelper(e);
    }

  });

  // determine scroll, swipe, and arrow key direction
  function updateHelper(param) {

    var curActive = $('.side-nav').find('.is-active'),
        curPos = $('.side-nav').find('li').index(curActive),
        lastItem = $('.side-nav').find('li').length - 1,
        nextPos = 0;

    if (param.type === "swipeup" || param.keyCode === 40 || param > 0) {
      if (curPos !== lastItem) {
        nextPos = curPos + 1;
        updateNavs(nextPos);
        updateContent(curPos, nextPos, lastItem);
      }
      else {
        updateNavs(nextPos);
        updateContent(curPos, nextPos, lastItem);
      }
    }
    else if (param.type === "swipedown" || param.keyCode === 38 || param < 0){
      if (curPos !== 0){
        nextPos = curPos - 1;
        updateNavs(nextPos);
        updateContent(curPos, nextPos, lastItem);
      }
      else {
        nextPos = lastItem;
        updateNavs(nextPos);
        updateContent(curPos, nextPos, lastItem);
      }
    }

  }

  // sync side and outer navigations
  function updateNavs(nextPos) {

    $('.side-nav, .outer-nav').find('li').removeClass('is-active');
    $('.side-nav').find('li').eq(nextPos).addClass('is-active');
    $('.outer-nav').children().eq(nextPos).addClass('is-active');

  }

  // update main content area
  function updateContent(curPos, nextPos, lastItem) {
    setTimeout(function(){
      player.stopVideo();
    }, 1000);

    $('.main-content').children().removeClass('section--is-active');
    $('.main-content').children().eq(nextPos).addClass('section--is-active');
    $('.main-content .section').children().removeClass('section--next section--prev');

    if (curPos === lastItem && nextPos === 0 || curPos === 0 && nextPos === lastItem) {
      $('.main-content .section').children().removeClass('section--next section--prev');
    }
    else if (curPos < nextPos) {
      $('.main-content').children().eq(curPos).children().addClass('section--next');
    }
    else {
      $('.main-content').children().eq(curPos).children().addClass('section--prev');
    }

    if (nextPos !== 0 && nextPos !== lastItem) {
      $('.header--cta').addClass('is-active');
    }
    else {
      $('.header--cta').removeClass('is-active');
    }

  }

  function outerNav() {

    $('.header--nav-toggle').bind("click touchstart", function(){

      $('.perspective').addClass('perspective--modalview');
      setTimeout(function(){
        $('.perspective').addClass('effect-rotate-left--animate');
      }, 25);
      $('.outer-nav, .outer-nav li, .outer-nav--return').addClass('is-vis');

    });

    $('.outer-nav--return, .outer-nav li').click(function(){

      $('.perspective').removeClass('effect-rotate-left--animate');
      setTimeout(function(){
        $('.perspective').removeClass('perspective--modalview');
      }, 400);
      $('.outer-nav, .outer-nav li, .outer-nav--return').removeClass('is-vis');

    });

  }

  function workSlider() {

    $('.slider--prev, .slider--next').click(function() {

      var $this = $(this),
          curLeft = $('.slider').find('.slider--item-left'),
          curLeftPos = $('.slider').children().index(curLeft),
          curCenter = $('.slider').find('.slider--item-center'),
          curCenterPos = $('.slider').children().index(curCenter),
          curRight = $('.slider').find('.slider--item-right'),
          curRightPos = $('.slider').children().index(curRight),
          totalWorks = $('.slider').children().length,
          $left = $('.slider--item-left'),
          $center = $('.slider--item-center'),
          $right = $('.slider--item-right'),
          $item = $('.slider--item');

      $('.slider').animate({ opacity : 0 }, 400);

      setTimeout(function(){

      if ($this.hasClass('slider--next')) {
        if (curLeftPos < totalWorks - 1 && curCenterPos < totalWorks - 1 && curRightPos < totalWorks - 1) {
          $left.removeClass('slider--item-left').next().addClass('slider--item-left');
          $center.removeClass('slider--item-center').next().addClass('slider--item-center');
          $right.removeClass('slider--item-right').next().addClass('slider--item-right');
        }
        else {
          if (curLeftPos === totalWorks - 1) {
            $item.removeClass('slider--item-left').first().addClass('slider--item-left');
            $center.removeClass('slider--item-center').next().addClass('slider--item-center');
            $right.removeClass('slider--item-right').next().addClass('slider--item-right');
          }
          else if (curCenterPos === totalWorks - 1) {
            $left.removeClass('slider--item-left').next().addClass('slider--item-left');
            $item.removeClass('slider--item-center').first().addClass('slider--item-center');
            $right.removeClass('slider--item-right').next().addClass('slider--item-right');
          }
          else {
            $left.removeClass('slider--item-left').next().addClass('slider--item-left');
            $center.removeClass('slider--item-center').next().addClass('slider--item-center');
            $item.removeClass('slider--item-right').first().addClass('slider--item-right');
          }
        }
      }
      else {
        if (curLeftPos !== 0 && curCenterPos !== 0 && curRightPos !== 0) {
          $left.removeClass('slider--item-left').prev().addClass('slider--item-left');
          $center.removeClass('slider--item-center').prev().addClass('slider--item-center');
          $right.removeClass('slider--item-right').prev().addClass('slider--item-right');
        }
        else {
          if (curLeftPos === 0) {
            $item.removeClass('slider--item-left').last().addClass('slider--item-left');
            $center.removeClass('slider--item-center').prev().addClass('slider--item-center');
            $right.removeClass('slider--item-right').prev().addClass('slider--item-right');
          }
          else if (curCenterPos === 0) {
            $left.removeClass('slider--item-left').prev().addClass('slider--item-left');
            $item.removeClass('slider--item-center').last().addClass('slider--item-center');
            $right.removeClass('slider--item-right').prev().addClass('slider--item-right');
          }
          else {
            $left.removeClass('slider--item-left').prev().addClass('slider--item-left');
            $center.removeClass('slider--item-center').prev().addClass('slider--item-center');
            $item.removeClass('slider--item-right').last().addClass('slider--item-right');
          }
        }
      }

    }, 400);

    $('.slider').animate({ opacity : 1 }, 400);

    });

  }

  function transitionLabels() {

    $('.work-request--information input').focusout(function(){

      var textVal = $(this).val();

      if (textVal === "") {
        $(this).removeClass('has-value');
      }
      else {
        $(this).addClass('has-value');
      }

      // correct mobile device window position
      window.scrollTo(0, 0);

    });

  }

  outerNav();
  workSlider();
  transitionLabels();

});

// Informacion segun el pais en la pestaña contacto

//cambiar el contenido
var changeContact = function (next, pais) {
  var selected = $('.contacts').children()
  selected.removeClass('selected');
  var next = $('.contacts').find(next)
  next.addClass('selected');
  $(next).find(pais).addClass('banderaSelected');

}

//segun la bandera que seleccione
$('.modal--options').find('img').click(function(){

  var pais = $(this)[0].className
  switch(pais) {
      case 'colombia':
          changeContact('.contact1', '.colombia')
          break;
      case 'usa':
          changeContact('.contact2', '.usa')
          break;
      case 'argentina':
          changeContact('.contact3', '.argentina')
          break;
      case 'brasil':
          changeContact('.contact4', '.brasil')
          break;
      case 'chile':
          changeContact('.contact5', '.chile')
          break;
      case 'peru':
          changeContact('.contact6', '.peru')
          break;
      case 'bolivia':
          changeContact('.contact7', '.bolivia')
          break;
  }
})


var maxmediaquerywork = window.matchMedia("(max-width: 767px)");


//abrir el modal de proyectos
function openModal(type ,n, este) {

  var folder = `./assets/img/proyectos/${type}/${n}/`
  $('.modal--content--mainImage').find('img').attr('src', `./assets/img/proyectos/${type}/${n}/0.jpg`);
  for (var i = 0; i <= 2; i++) {

    $('.modal--content--images-list').find(`.${i}`).find('img').attr('src', `${folder}${i}.jpg`);
    $('.swiper11').find(`.swiper-slide.${i}`).find('img').attr('src', `${folder}${i}.jpg`);
  }
  var description = ''
  var title = $(este).find('.slider--item-title')[0].innerText
  if($('.slider--item-description').length != 0){
    description = $(este).find('.slider--item-description')[0].innerText
  }
  var sector = $(este).find('.slider--item-sector')[0].innerText
  var ubicacion = $(este).find('.slider--item-ubicacion')[0].innerText
  $('.content-text').find('.title').text(title)
  $('.content-text').find('.description').text(description)
  $('.content-text').find('.sector').text(sector)
  $('.content-text').find('.ubicacion').text(ubicacion)

  if(maxmediaquerywork.matches){
    $('.modal--work-mobile').addClass('openModal')
  }else{
    $('.modal--work').addClass('openModal')
  }

}


//modifica el contenido de mainImage
function changeMainImage(n) {
  var newSrc = $(`.modal--content--images-list .${n} img`).attr('src')
  $('.modal--content--mainImage img').attr('src', newSrc);
}

// cerrar el modal de proyectos
$('.closeModal--content').click(function(){
  $('.modal--work-mobile').removeClass('openModal');
  $('.modal--work').removeClass('openModal');
})


//remove image with 404
function removeImage(err){
  $(err).remove()
}

//change the view of tools
function changeTool(e){
    $('.changeTool.active').removeClass('active');
  if(e == 1){
    $('.swiper10').addClass('hidden');
    $(`.swiper9`).removeClass('hidden');
  }else{
    $(`.swiper9`).addClass('hidden');
    $(`.swiper10`).removeClass('hidden');
  }
}

var mediaquery = window.matchMedia("(max-width: 700px)");
  $('.ref').click(function(){
      $('.modal--team').css("display", "flex");
      var selectedTeam = $(this).prop('id');
      console.log(selectedTeam)
      switch (selectedTeam) {
        case 'refDiseno':
          if (mediaquery.matches) {
              $('.modal--team-image').attr('src','./assets/img/disenoM.png');
          }else{
              $('.modal--team-image').attr('src','./assets/img/disenoCont.png');
              $('.modal--team-imageOption').attr('src','./assets/img/disenoOn.png');
          }
        break;
        case 'refCreativo':
          if(mediaquery.matches) {
            $('.modal--team-image').attr('src','./assets/img/creativoM.png');
          }else{
            $('.modal--team-image').attr('src','./assets/img/creativoContent.png');
            $('.modal--team-imageOption').attr('src','./assets/img/creativoOn.png');
          }
        break;
        case 'refTecnico':
          if(mediaquery.matches) {
            $('.modal--team-image').attr('src','./assets/img/tecnicom.png');
          }else{
            $('.modal--team-image').attr('src','./assets/img/tecnicoCont.png');
            $('.modal--team-imageOption').attr('src','./assets/img/tecnicoOn.png');
          }
        break;
        case 'refVentas':
          if(mediaquery.matches) {
            $('.modal--team-image').attr('src','./assets/img/ventasM.png');
          }else{
            $('.modal--team-image').attr('src','./assets/img/ventasContent.png');
            $('.modal--team-imageOption').attr('src','./assets/img/ventasOn.png');
          }
        break;
        case 'refLogistica':
          if(mediaquery.matches) {
            $('.modal--team-image').attr('src','./assets/img/logisticaM.png');
          }else{
            $('.modal--team-image').attr('src','./assets/img/logisticaCont.png');
            $('.modal--team-imageOption').attr('src','./assets/img/logisticaOn.png');
          }
        break;
      }
    });

function closeModalTeam(){
  $('.modal--team').css("display", "none");
}
