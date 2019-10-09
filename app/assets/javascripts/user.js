$(function() {

  var search_list = $("#user-search-result");

  function appendUser(user) {
    var resultHtml = `<div class="chat-group-user clearfix">
              <p class="chat-group-user__name">${user.name}</p>
              <a class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-id=${user.id} data-user-name=${user.name}>追加</a>
              </div>`
    search_list.append(resultHtml)
  }

  function appendMember(user,id) {
    var memberHtml = `<div class='chat-group-user' '${id}'>
                <input name='room[user_ids][]' type='hidden' value=${id}>
                <p class='chat-group-user__name'>${user}</p>
                <div class='user-search-remove chat-group-user__btn chat-group-user__btn--remove js-remove-btn'>削除</div>
                </div>`
    $('.member__list').append(memberHtml)
    
    
  }

  function appendErrMsgToHTML(msg) {
    var html = `<div class='user-search-add chat-group-user__btn chat-group-user__btn--add'>${ msg }</div>`
    search_list.append(html);
  }

  $("#user-search-field").on("keyup", function() {
    var input = $("#user-search-field").val();

    $.ajax({
      type: 'GET',
      url: '/users',
      data: {word: input},
      dataType: 'json'
    })
    .done(function(users) {
      $("#user-search-result").empty();
      if (users.length !== 0 && input.length !== 0) {
        users.forEach(function(user){
          appendUser(user);
        });
      }
      else {
        appendErrMsgToHTML("一致するユーザはいません");
      }
    })
    .fail(function(){ 
      alert('検索中にエラーが発生しました');
    })
  });

  $('#user-search-result').on("click", ".chat-group-user__btn--add", function() {
    var user = $(this).data('user-name');
    var id = $(this).data('user-id');
    appendMember(user, id);
    $(this).parent().remove()
    })

  $('.member__list').on("click", ".chat-group-user__btn--remove", function() {
    $(this).parent().remove()
  });
});