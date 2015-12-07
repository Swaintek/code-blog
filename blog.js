//Sort raw data by date
rawData.sort(function (a, b) {
  if (a.publishedOn < b.publishedOn) {
    return 1;
  }
  if (a.publishedOn > b.publishedOn) {
    return -1;
  }
  return 0;
});
//Blog constructor function
var blogConstructor = function () {
//Build filters
  var authors = [];
  var categories = [];
  for (var i = 0; i < rawData.length; i++) {
    authors.push(rawData[i].author);
    categories.push(rawData[i].category);
  };
  authors = $.unique(authors);
  categories = $.unique(categories);
  for (var i = 0; i < authors.length; i++) {
    $('#authors').append('<option value='+authors[i].trim()+'>'+authors[i]+'</option>');
  };
  for (var i = 0; i < categories.length; i++) {
    $('#categories').append('<option value='+categories[i]+'>'+categories[i]+'</option>');
  };
//Build articles
  for (var i = 0; i <rawData.length; i++) {
    articleBuilder(i);
    var newArticle = $('section.articlePlaceholder').clone();
    $('main section:last').after(newArticle);
    $('main section:last').removeAttr('class').addClass(rawData[i].category).addClass('All').addClass(rawData[i].author.replace(/\s/g, '')).attr('id', i);
    $('main section:first').removeAttr('class').addClass('articlePlaceholder');
  };
  $('main section:first').remove();
  $('.body p').not(':first-child').addClass('hide').hide();
};
//Call blog constructor
blogConstructor();

$(function () {
//Expand/collapse paragraphs
  $('section a.expand').on('click', function(event) {
    event.preventDefault();
    $(this).prev().children('.hide').toggle();
  });
//Event listener for categories filter
  $('#categories').change(function() {
    var $selectedCat = $('#categories').find(':selected').text();
    var $selectedAuth = $('#authors').find(':selected').text().replace(/\s/g, '');
    $('main section').hide();
    $('.'+$selectedCat+'.'+$selectedAuth).show();
  });
//Event listener for authors filter
  $('#authors').change(function() {
    var $selectedCat = $('#categories').find(':selected').text();
    var $selectedAuth = $('#authors').find(':selected').text().replace(/\s/g, '');
    $('main section').hide();
    $('.'+$selectedCat+'.'+$selectedAuth).show();
  });
//Event listener for About tab
  $('.bioPlaceholder').hide();
  $('#about').on('click', function(event) {
    event.preventDefault();
    $('.bioPlaceholder').toggle();
  });
});
