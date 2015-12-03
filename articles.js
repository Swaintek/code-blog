var articleConstructor = function (data, num) {
  $('article:first').removeAttr('class').removeAttr('id').clone().appendTo('main');
  $('article:last').addClass(data.category).addClass(data.author.replace(/\s/g, '')).attr('id', num);
  $('article#'+num+' .title').text(data.title);
  $('article#'+num+' .author').text(data.author);
  $('article#'+num+' .body').html(data.body);
  $('article#'+num+' .age').text(Math.floor(
    (new Date - new Date(data.publishedOn))/86400000) + ' Days Old'
  );
};
