$('.newPost > p > *').on('keyup', function() {
  console.log(this.name);
  if (this.name == 'authorUrl') {
    $('.author').html('<a href="'+this.value+'">'+$('input[name="author"]')[0].value+'</a>');
  } else {
    $('.'+this.name).text(this.value);
  };
});

var postObject = {};

$('input[name="publish"]').on('click', function() {
  if ($(this).is(':checked')) {
    var elements = $('.newPost > p > *');
    for (var i = 0; i < elements.length; i++) {
      postObject[elements[i].name] = elements[i].value;
    }
    var date = new Date();
    var y = date.getFullYear();
    var m = date.getMonth() + 1;
    var d = date.getDate();
    date = y + '-' + m + '-' + d;
    postObject.publishedOn = date;
    $('#target').text(JSON.stringify(postObject));
  }
});
