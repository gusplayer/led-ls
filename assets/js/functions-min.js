$(document).ready(function(){var canScroll=!0,scrollController=null;$(this).on('mousewheel DOMMouseScroll',function(e){if(!($('.outer-nav').hasClass('is-vis'))){e.preventDefault();var delta=(e.originalEvent.wheelDelta)?-e.originalEvent.wheelDelta:e.originalEvent.detail*20;if(delta>50&&canScroll){canScroll=!1;clearTimeout(scrollController);scrollController=setTimeout(function(){canScroll=!0},800);updateHelper(1)}
else if(delta<-50&&canScroll){canScroll=!1;clearTimeout(scrollController);scrollController=setTimeout(function(){canScroll=!0},800);updateHelper(-1)}}});$('.side-nav, .outer-nav').find('li').click(function(){if(!($(this).hasClass('is-active'))){var $this=$(this),curActive=$('.side-nav').find('li.is-active'),curPos=$('.side-nav').find('li').index(curActive),nextPos=$('.side-nav').find('li').index($this),lastItem=$('.side-nav').find('li').length-1;var whoParent=$this.parent();whoParent=whoParent[0].className;if(whoParent=='outer-nav is-vis'){nextPos=$('.outer-nav').find('li').index($this)}
updateNavs(nextPos);updateContent(curPos,nextPos,lastItem)}});$('.cta').click(function(){var curActive=$('.side-nav').find('li.is-active'),curPos=$('.side-nav').find('li').index(curActive),lastItem=$('.side-nav').find('li').length-1;nextPos=lastItem;updateNavs(lastItem);updateContent(curPos,nextPos,lastItem)});$('.proyecto-funcional').click(function(){var curActive=$('.side-nav').find('li.is-active'),curPos=$('.side-nav').find('li').index(curActive),lastItem=$('.side-nav').find('li').length-1
nextPos=$('.side-nav').find('li').length-4;console.log(nextPos)
updateNavs(nextPos);updateContent(curPos,nextPos,lastItem)});$('.proyecto-arquitectonica').click(function(){var curActive=$('.side-nav').find('li.is-active'),curPos=$('.side-nav').find('li').index(curActive),lastItem=$('.side-nav').find('li').length-1
nextPos=$('.side-nav').find('li').length-3;console.log(nextPos)
updateNavs(nextPos);updateContent(curPos,nextPos,lastItem)});$('.aliado-cree').click(function(){var curActive=$('.side-nav').find('li.is-active'),curPos=$('.side-nav').find('li').index(curActive),lastItem=$('.side-nav').find('li').length-1
nextPos=$('.side-nav').find('li').length-7;console.log(nextPos)
updateNavs(nextPos);updateContent(curPos,nextPos,lastItem)});$('.aliado-colorkinetics').click(function(){var curActive=$('.side-nav').find('li.is-active'),curPos=$('.side-nav').find('li').index(curActive),lastItem=$('.side-nav').find('li').length-1
nextPos=$('.side-nav').find('li').length-6;console.log(nextPos)
updateNavs(nextPos);updateContent(curPos,nextPos,lastItem)});var targetElement=document.getElementById('viewport'),mc=new Hammer(targetElement);mc.get('swipe').set({direction:Hammer.DIRECTION_VERTICAL});mc.on('swipeup swipedown',function(e){updateHelper(e)});$(document).keyup(function(e){if(!($('.outer-nav').hasClass('is-vis'))){e.preventDefault();updateHelper(e)}});function updateHelper(param){var curActive=$('.side-nav').find('.is-active'),curPos=$('.side-nav').find('li').index(curActive),lastItem=$('.side-nav').find('li').length-1,nextPos=0;if(param.type==="swipeup"||param.keyCode===40||param>0){if(curPos!==lastItem){nextPos=curPos+1;updateNavs(nextPos);updateContent(curPos,nextPos,lastItem)}
else{updateNavs(nextPos);updateContent(curPos,nextPos,lastItem)}}
else if(param.type==="swipedown"||param.keyCode===38||param<0){if(curPos!==0){nextPos=curPos-1;updateNavs(nextPos);updateContent(curPos,nextPos,lastItem)}
else{nextPos=lastItem;updateNavs(nextPos);updateContent(curPos,nextPos,lastItem)}}}
function updateNavs(nextPos){$('.side-nav, .outer-nav').find('li').removeClass('is-active');$('.side-nav').find('li').eq(nextPos).addClass('is-active');$('.outer-nav').children().eq(nextPos).addClass('is-active')}
function updateContent(curPos,nextPos,lastItem){$('.main-content').children().removeClass('section--is-active');$('.main-content').children().eq(nextPos).addClass('section--is-active');$('.main-content .section').children().removeClass('section--next section--prev');if(curPos===lastItem&&nextPos===0||curPos===0&&nextPos===lastItem){$('.main-content .section').children().removeClass('section--next section--prev')}
else if(curPos<nextPos){$('.main-content').children().eq(curPos).children().addClass('section--next')}
else{$('.main-content').children().eq(curPos).children().addClass('section--prev')}
if(nextPos!==0&&nextPos!==lastItem){$('.header--cta').addClass('is-active')}
else{$('.header--cta').removeClass('is-active')}}
function outerNav(){$('.header--nav-toggle').click(function(){$('.perspective').addClass('perspective--modalview');setTimeout(function(){$('.perspective').addClass('effect-rotate-left--animate')},25);$('.outer-nav, .outer-nav li, .outer-nav--return').addClass('is-vis')});$('.outer-nav--return, .outer-nav li').click(function(){$('.perspective').removeClass('effect-rotate-left--animate');setTimeout(function(){$('.perspective').removeClass('perspective--modalview')},400);$('.outer-nav, .outer-nav li, .outer-nav--return').removeClass('is-vis')})}
function workSlider(){$('.slider--prev, .slider--next').click(function(){var $this=$(this),curLeft=$('.slider').find('.slider--item-left'),curLeftPos=$('.slider').children().index(curLeft),curCenter=$('.slider').find('.slider--item-center'),curCenterPos=$('.slider').children().index(curCenter),curRight=$('.slider').find('.slider--item-right'),curRightPos=$('.slider').children().index(curRight),totalWorks=$('.slider').children().length,$left=$('.slider--item-left'),$center=$('.slider--item-center'),$right=$('.slider--item-right'),$item=$('.slider--item');$('.slider').animate({opacity:0},400);setTimeout(function(){if($this.hasClass('slider--next')){if(curLeftPos<totalWorks-1&&curCenterPos<totalWorks-1&&curRightPos<totalWorks-1){$left.removeClass('slider--item-left').next().addClass('slider--item-left');$center.removeClass('slider--item-center').next().addClass('slider--item-center');$right.removeClass('slider--item-right').next().addClass('slider--item-right')}
else{if(curLeftPos===totalWorks-1){$item.removeClass('slider--item-left').first().addClass('slider--item-left');$center.removeClass('slider--item-center').next().addClass('slider--item-center');$right.removeClass('slider--item-right').next().addClass('slider--item-right')}
else if(curCenterPos===totalWorks-1){$left.removeClass('slider--item-left').next().addClass('slider--item-left');$item.removeClass('slider--item-center').first().addClass('slider--item-center');$right.removeClass('slider--item-right').next().addClass('slider--item-right')}
else{$left.removeClass('slider--item-left').next().addClass('slider--item-left');$center.removeClass('slider--item-center').next().addClass('slider--item-center');$item.removeClass('slider--item-right').first().addClass('slider--item-right')}}}
else{if(curLeftPos!==0&&curCenterPos!==0&&curRightPos!==0){$left.removeClass('slider--item-left').prev().addClass('slider--item-left');$center.removeClass('slider--item-center').prev().addClass('slider--item-center');$right.removeClass('slider--item-right').prev().addClass('slider--item-right')}
else{if(curLeftPos===0){$item.removeClass('slider--item-left').last().addClass('slider--item-left');$center.removeClass('slider--item-center').prev().addClass('slider--item-center');$right.removeClass('slider--item-right').prev().addClass('slider--item-right')}
else if(curCenterPos===0){$left.removeClass('slider--item-left').prev().addClass('slider--item-left');$item.removeClass('slider--item-center').last().addClass('slider--item-center');$right.removeClass('slider--item-right').prev().addClass('slider--item-right')}
else{$left.removeClass('slider--item-left').prev().addClass('slider--item-left');$center.removeClass('slider--item-center').prev().addClass('slider--item-center');$item.removeClass('slider--item-right').last().addClass('slider--item-right')}}}},400);$('.slider').animate({opacity:1},400)})}
function transitionLabels(){$('.work-request--information input').focusout(function(){var textVal=$(this).val();if(textVal===""){$(this).removeClass('has-value')}
else{$(this).addClass('has-value')}
window.scrollTo(0,0)})}
outerNav();workSlider();transitionLabels()});var changeContact=function(next){var selected=$('.contacts').children()
selected.removeClass('selected');var next=$('.contacts').find(next)
next.addClass('selected')}
$('.modal--options').find('img').click(function(){var pais=$(this)[0].className
switch(pais){case 'colombia':changeContact('.contact1')
break;case 'usa':changeContact('.contact2')
break;case 'argentina':changeContact('.contact3')
break;case 'brasil':changeContact('.contact4')
break;case 'chile':changeContact('.contact5')
break;case 'mexico':changeContact('.contact6')
break;case 'peru':changeContact('.contact7')
break}})
function openModal(type,n,este){var folder=`./assets/img/proyectos/${type}/${n}/`
$('.modal--content--mainImage').find('img').attr('src',`./assets/img/proyectos/${type}/${n}/0.jpg`);for(var i=0;i<=3;i++){$('.modal--content--images-list').find(`.${i}`).find('img').attr('src',`${folder}${i}.jpg`)}
var title=$(este).find('.slider--item-title')[0].innerText
var description=$(este).find('.slider--item-description')[0].innerText
var ubicacion=$(este).find('.slider--item-ubicacion')[0].innerText
$('.modal--content--mainImage').find('.title').text(title)
$('.modal--content--mainImage').find('.description').text(description)
$('.modal--content--mainImage').find('.ubicacion').text(ubicacion)
$('.modal--work').addClass('openModal')}
function changeMainImage(n){var newSrc=$(`.modal--content--images-list .${n} img`).attr('src')
$('.modal--content--mainImage img').attr('src',newSrc)}
$('.closeModal--content').click(()=>{$('.modal--work').removeClass('openModal')})