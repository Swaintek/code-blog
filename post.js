$('.newPost > p > *').on('focusout', function() {
  console.log(this.name);
  if (this.name == 'authorUrl') {
    $('.author').html('<a href="'+this.value+'">'+$('input[name="author"]')[0].value+'</a>');
  } else {
    $('.'+this.name).text(this.value);
  };
});
