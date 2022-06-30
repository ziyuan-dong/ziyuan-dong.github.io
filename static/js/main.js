$(function () {
  'use strict';


  // Nav Menu
  $('#nav-menu').on('click', '.section-list a', function (e) {
    const sectionId = this.hash;
    e.preventDefault();
    
    if($('#welcome')) {
      $('#welcome').css('display', 'none');
    }

    $('#nav-menu').css('background-color', 'var(--nav-bg-color)');
    $('#nav-menu .section-list .active').removeClass('active');
    $(this).addClass('active');

    $('section').css('display', 'none');
    $(sectionId).css('display', 'flex');

  });

  // Initiate Venobox
  $('.venobox').venobox({
    framewidth: '800px',
    bgcolor: '#5dff5e',
    titleattr: 'title',
    numeratio: true,
    infinigall: true,
  });
});
