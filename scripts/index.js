var blog =
$('article:first').clone()[0];

article.prototype.toHTML = function (argument) {
  $artSkel = $('article').filter(':first').clone();
};

function postArticle (rawArticle) {
  var art = new ARticle(rawArticle);
  art.toHTML();
};

var Article = function (props) {
  this.author = props.authoer;
  this.whatever = props.whatever;
  articles.push(this);
};

Article.prototype.toHTML = function() {
  var $clonedARticle = $('article#template').clone();
  $clonedArticle.removeAttr('id');
  $clonedArticle.find('h1.author').html('<a href "' + articles[i].authorURL + '" ' + articles[i].author);
};

blog.sortRawData = function () {
  blog.RawData;
};

blog.truncateArticles = function() {
  $('article p:not(:first-child')).hide();
  $('main').on('click', '.read-on', function(event) {  //read-on is a class, main is an element, # sign is an id selector
    event.preventDefault;
    $(this).parent().find('p)'.fadeIn();
    $(this).hide();
  })
}

//Below is the same as using document ready
$(function() {
  blog.sortArticles();
  blog.importArticles();


})
