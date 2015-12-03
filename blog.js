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
  $('article:first').remove();
};

blogConstructor();
