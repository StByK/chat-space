$(function() {

  
  function buildHTML(message) {
    var image = ""
    message.image ? image = `<img src="${message.image}">` : image = ""
    var html = `<div class="message-sender">${message.name}</div>
    <div class="message-date">${message.time}</div>
    <div class="message-text">
    <p>${message.text}</p>
    ${image}
    </div>`
    return html;
  }
  
  $('.form__box').submit(function(e) {
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action')
    var interceptFlag = 0;
    $('.send__btn').removeAttr('data-disable-with');
      if(interceptFlag == 0){
        interceptFlag == 1;
        $.ajax({
          type: 'POST',
          url: url,
          data: formData,
          dataType: 'json',
          processData: false,
          contentType: false
        })
        .done(function(data){
          var html = buildHTML(data);
          setTimeout(function() {
            $('.message__item').append(html)
            $('.message__form').val('')
            $('.main__messages').animate({scrollTop: $('.main__messages')[0].scrollHeight}, 'fast');
            interceptFlag == 0;
          }, 500);
        })
        .fail(function() {
          alert('投稿できませんでした')
          interceptFlag == 0;
        });
      }
  })
});