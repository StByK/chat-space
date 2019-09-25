# README

## ruby version
5.0.7.2

## About DataBase

### usersテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
|e_mail|string|null: false|
|password|string|null: false|
#### Association
* has_many :messages
* has_many :rooms, through: :users_rooms

### roomsテーブル

|Column|Type|Options|
|------|----|-------|
|room_name|string|null: false|
|user_id|references|null: false, foreign_key: true|
#### Association
* has_many :messages
* has_many :users through: :users_rooms

### messagesテーブル

|Column|Type|Options|
|------|----|-------|
|text|text|null: false|
|image|string|null: false|
|user_id|references|null: false, foreign_key: true|
|room_id|references|null: false, foreign_key: true|
* 送信日時はcreated_at(タイムスタンプ型)を使う
#### Associaion
* belongs_to :users
* belongs_to :rooms

