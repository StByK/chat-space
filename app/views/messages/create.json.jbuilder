json.name @message.user.name
json.text @message.text
json.image @message.image.url
json.time @message.created_at.strftime("%Y/%m/%d %H:%M")