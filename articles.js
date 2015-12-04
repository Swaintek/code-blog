var articleConstructor = function (data, num) {
  $('article:first').removeAttr('class').removeAttr('id').clone().appendTo('main');
  $('article:last').addClass(data.category).addClass('All').addClass(data.author.replace(/\s/g, '')).attr('id', num);
  var articleTemplateScript = $('#articleTemplate').html();
  var articleTemplate = Handlebars.compile(articleTemplateScript);
  var context = data;
  var compiledArticle = articleTemplate(context);
  $('.articlePlaceholder').html(compiledArticle);
  $('.articlePlaceholder').removeClass();
  $('article#'+num+' .age').text(Math.floor(
    (new Date - new Date(data.publishedOn))/86400000) + ' Days Old'
  );
};
