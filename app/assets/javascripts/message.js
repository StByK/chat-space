$(function() {

  
  function buildHTML(message) {
    var image = ""
    message.image ? image = `<img src="${message.image}">` : image = ""
    var html = `<div class="message__content" data-id="${message.id}">
                  <div class="message-sender">${message.name}</div>
                  <div class="message-date">${message.time}</div>
                  <div class="message-text">
                  <p>${message.text}</p>
                  ${image}
                </div>`
    return html;
  }

  var interceptFlag = 0;
  
  $('.form__box').submit(function(e) {
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action')
    $('.send__btn').removeAttr('data-disable-with');
      if(interceptFlag == 0){
        interceptFlag = 1;
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
          $('.message__item').append(html);
          $('#new_message')[0].reset();
          $('.main__messages').animate({scrollTop: $('.main__messages')[0].scrollHeight}, 'fast');
          setTimeout(function() {
            interceptFlag = 0;
          }, 1000);
        })
        .fail(function() {
          alert('投稿できませんでした')
          interceptFlag = 0;
        });
      }else{
        alert('連投しないで、、、(ノД`)')
      }
  })

  var reloadMessages = function() {
    
    var current_message_id = $('.message__content:last').data('id');
      var room_id = $('.main-contents').data('id')
      var url = `/rooms/${room_id}/api/messages`
      $.ajax({
        type: 'GET',
        url: url,
        data: {id: current_message_id},
        dataType: 'json'
      })
      .done(function(data) {
        var insertHTML = '';
        data.forEach(function(data) {
            insertHTML = buildHTML(data);
            $('.message__item').append(insertHTML);
            $('.main__messages').animate({scrollTop: $('.main__messages')[0].scrollHeight}, 'fast');
            
        });
      });
    };
    
  if (window.location.href.match(/\/rooms\/\d+\/messages/)) {
  $(function() {
    setInterval(reloadMessages, 5000);
  });
    }

});