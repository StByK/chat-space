class CreateUserRooms < ActiveRecord::Migration[5.0]
  def change
    create_table :user_rooms do |t|
      t.references :room, foreign_key: true
      t.references :user, foreign_key: true
      t.timestamps
    end
  end
end