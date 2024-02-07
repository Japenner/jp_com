class AddPrivateToNotes < ActiveRecord::Migration[7.0]
  def change
    add_column :notes, :private, :boolean, default: true
  end
end
