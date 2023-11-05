module Api::V1
  module Debts
    class PaymentsController < ApplicationController
      def index
        payments = Payment.order("created_at DESC")
        render json: { payments: payments }
      end

      def show
        render json: { payment: payment }
      end

      def create
        new_payment = Payment.create(payment_params)
        render json: { payment: new_payment }
      end

      def update
        payment.update(payment_params)
        render json: { payment: payment }
      end

      def destroy
        payment.destroy
        head :no_content, status: :ok
      end

      private

      def payment
        @payment ||= Payment.find(params[:id])
      end

      def payment_params
        params.require(:payment).permit(
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
