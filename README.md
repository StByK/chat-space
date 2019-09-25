# README

## Rails version
5.0.7.2

## DataBaseの設計

### usersテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false, index: true|
|mail|string|null: false|
|password|string|null: false|
#### Association
* has_many :users_rooms
* has_many :messages
* has_many :rooms, through: :users_rooms

### roomsテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
#### Association
* has_many :users_rooms
* has_many :messages
* has_many :users through: :users_rooms

### messagesテーブル

|Column|Type|Options|
|------|----|-------|
|text|text||
|image|string||
|user_id|references|null: false, foreign_key: true|
|room_id|references|null: false, foreign_key: true|
* 送信日時はcreated_at(タイムスタンプ型)を使う
#### Associaion
* belongs_to :user
* belongs_to :room

### users_roomsテーブル

Column|Type|Options|
|------|----|-------|
|user_id|references|null: false, foreign_key: true|
|room_id|references|null: false, foreign_key: true|
#### Association
* belongs_to :user
* belongs_to :room