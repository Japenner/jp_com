module Api::V1
  class NotesController < ApplicationController
    def index
      notes = Note.order("created_at DESC")
      render json: notes
    end

    def show
      render json: note
    end

    def create
      new_note = Note.create(note_params)
      render json: new_note
    end

    def update
      note.update(note_params)
      render json: note
    end

    def destroy
      note.destroy
      head :no_content, status: :ok
    end

    private

    def note
      @note ||= Note.find(params[:id])
    end

    def note_params
      params.require(:note).permit(
        :created_at,
        :created_by,
        :description,
        :id,
        :tags,
        :title,
        :updated_at,
        :updated_by,
        :url
      )
    end
  end
end
