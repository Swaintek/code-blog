rawData.sort(function (a, b) {
  if (a.publishedOn < b.publishedOn) {
    return 1;
  }
  if (a.publishedOn > b.publishedOn) {
    return -1;
  }
  return 0;
});

var blogConstructor = function () {
  var authors = [];
  var categories = [];
  // articleConstructor(rawData[0], 0);
  for (var i = 0; i < rawData.length; i++) {
    authors.push(rawData[i].author);
    categories.push(rawData[i].category);
    articleConstructor(rawData[i], i);
  };
  $('article section p:not(:first-child)').addClass('hide').hide();
  $('article:first').remove();
  authors = $.unique(authors);
  categories = $.unique(categories);
  for (var i = 0; i < authors.length; i++) {
    $('#authors').append('<option value='+authors[i].trim()+'>'+authors[i]+'</option>');
  };
  for (var i = 0; i < categories.length; i++) {
    $('#categories').append('<option value='+categories[i]+'>'+categories[i]+'</option>');
  };
};

blogConstructor();

$(function () {
  $('#bio').hide();

  $('article a').on('click', function() {
    event.preventDefault();
    $(this).prev().children('.hide').toggle();
  });

  $('#categories').change(function() {
    var $selectedCat = $('#categories').find(':selected').text();
    var $selectedAuth = $('#authors').find(':selected').text().replace(/\s/g, '');
    $('article').hide();
    $('.'+$selectedCat+'.'+$selectedAuth).show();
  });

  $('#authors').change(function() {
    var $selectedCat = $('#categories').find(':selected').text();
    var $selectedAuth = $('#authors').find(':selected').text().replace(/\s/g, '');
    $('article').hide();
    $('.'+$selectedCat+'.'+$selectedAuth).show();
  });

  $('#about').on('click', function() {
    $('#bio').toggle();
  });
});
