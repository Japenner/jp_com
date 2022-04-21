class ToDosController < ApplicationController
  def index
    to_dos = ToDo.order("created_at DESC")
    render json: to_dos
  end

  def show
    to_do = ToDo.find(params[:id])
    render json: to_do
  end

  def create
    to_do = ToDo.create(to_do_params)
    render json: to_do
  end

  def update
    to_do = ToDo.find(params[:id])
    to_do.update(to_do_params)
    render json: to_do
  end

  def destroy
    to_do = ToDo.find(params[:id])
    to_do.destroy
    head :no_content, status: :ok
  end

  private

  def to_do_params
    params.require(:to_do).permit(:title, :done)
  end
end
