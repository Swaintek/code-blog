var articleBuilder = function (i) {
  // Grab the template script
  var theTemplateScript = $('#articleTemplate').html();
  // Compile the template
  var theTemplate = Handlebars.compile(theTemplateScript);
  // Define data object
  var context={
    'title' : rawData[i].title,
    'authorURL' : rawData[i].authorURL,
    'author' : rawData[i].author,
    'age' : Math.floor((new Date - new Date(rawData[i].publishedOn))/86400000)+' Days Old',
    'body' : rawData[i].body
  };
  // Pass data to the template
  var theCompiledHtml = theTemplate(context);
  // Add the compiled html to the page
  $('.articlePlaceholder').html(theCompiledHtml);
};
