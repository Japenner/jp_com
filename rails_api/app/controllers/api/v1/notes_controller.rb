module Api::V1
  class NotesController < ApplicationController
    def index
      notes = Note.order("created_at DESC")
      render json: { notes: notes }
    end

    def show
      render json: { note: note }
    end

    def create
      new_note = Note.create(note_params)
      render json: { note: new_note }
    end

    def feeds
      urls = [
        'https://notes.billmill.org/atom.xml',
        'https://ln.ht/_/feed/~eli/rss',
        'https://www.wagslane.dev/index.xml',
        'https://macarthur.me/rss/feed.xml',
        'http://alearningaday.com/feed'
      ]
      hash = urls.map { |url| { url:, feed: RssReaderService.new(url).feed_hash } }

      render json: hash
    end

    def test
      urls = [
        'https://notes.billmill.org/atom.xml',
        'https://ln.ht/_/feed/~eli/rss',
        'https://www.wagslane.dev/index.xml',
        'https://macarthur.me/rss/feed.xml',
        'http://alearningaday.com/feed'
      ]

      hash = urls.map { |url| { url:, entries: RssReaderService.new(url).entries } }

      render json: hash
    end

    def build
      RssReaderService.new(params[:url]).build_notes
      render json: { success: 200  }
    end

    def update
      note.update(note_params)
      head :no_content, status: :ok
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
