$(document).ready(function() {
  $category = $('.ct-js');

  if (localStorage.getItem('activeSubNav') === "true") {
    getCategory = $category[localStorage.getItem('activeCategoryIndex')];
    $(getCategory).find('.list-vertical-left').removeClass('hide');
    $(getCategory).find('.category-link').addClass('active');

  }


  $category.each(function() {
    $(this).click(function() {
      ul = $(this).find('.list-vertical-left');
      a = $(this).find('.category-link');
      $activeCategoryIndex = $category.index($(this));

      localStorage.setItem('activeCategoryIndex', $activeCategoryIndex);

      ul.addClass('fake');

      if (ul.hasClass('fake')) {
        localStorage.setItem('activeSubNav', true);
      } else {
        localStorage.setItem('activeSubNav', false);
      }

    })
  })

});
