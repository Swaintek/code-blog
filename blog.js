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
  for (var i = 0; i < rawData.length; i++) {
    articleConstructor(rawData[i], i);
  };
  $('article section p:not(:first-child)').addClass('hide').hide();
  $('article:first').remove();
};

blogConstructor();

$(function () {
  $('article a').on('click', function() {
    $(this).text('Show Less');
    $(this).prev().children('.hide').toggle();
  });
});
