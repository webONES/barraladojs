class CreateErrors < ActiveRecord::Migration
  def change
    create_table :errors do |t|
      t.string :name

      t.timestamps null: false
    end
  end
end
