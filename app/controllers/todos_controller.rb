class TodosController < ApplicationController

  def index
   todos = Todo.all
    render json: todos
  end

  def create
    todo = Todo.new(params[:todo])
    if todo.save!
      render json: {}, status: :created
    end
  end

  def show
    todo = Todo.find(params[:id])
    render json: todo
  end

  def update
    todo = Todo.find(params[:id]).update_attributes(params[:todo])
    render json: todo
  end

  def destroy
    todo = Todo.find(params[:id])
    todo.destroy
    head :ok
  end
end