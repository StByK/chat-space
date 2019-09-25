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