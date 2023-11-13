module Api::V1
  module RSS
    class FeedsController < ApplicationController
      def index
        feeds = Feed.order("created_at DESC")
        render json: { feeds: feeds }
      end

      def show
        render json: { feed: feed }
      end

      def create
        new_feed = Feed.create(feed_params)
        render json: { feed: new_feed }
      end

      def update
        feed.update(feed_params)
        head :no_content, status: :ok
      end

      def destroy
        feed.destroy
        head :no_content, status: :ok
      end

      private

      def feed
        @feed ||= Feed.find(params[:id])
      end

      def feed_params
        params.require(:feed).permit(
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
end
