class CreateTeams < ActiveRecord::Migration
  def change
    create_table :teams do |t|
      t.string :state_code
      t.string :name
      t.string :nickname
      t.string :park_image
      t.integer :map_id

      t.timestamps
    end
  end
end
