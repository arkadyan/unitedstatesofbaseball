class CreatePlayers < ActiveRecord::Migration
  def change
    create_table :players do |t|
      t.string :name
      t.string :position
      t.string :home
      t.string :born
      t.string :ops
      t.integer :team_id

      t.timestamps
    end
  end
end
