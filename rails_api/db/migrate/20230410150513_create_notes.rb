class CreateNotes < ActiveRecord::Migration[7.0]
  def change
    enable_extension 'pgcrypto'

    create_table :notes, id: :uuid do |t|
      t.text :description
      t.string :tags, array: true, default: []
      t.string :title
      t.string :url

      t.timestamps
    end
  end
end
