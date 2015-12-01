var articleConstructor = function (data) {
  $('article').addClass(data.category).attr('active', 'yes');
  $('.title').text(data.title);
  $('.author').text(data.author);
  $('.body').html(data.body);
  $('.age').text(Math.floor((new Date - new Date(data.publishedOn))/86400000) + ' Days Old');
};


articleConstructor(rawData[0]);
