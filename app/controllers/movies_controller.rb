class MoviesController < ApplicationController

  def index
    render json: [{id: 1, name: 'movie 1', desc: 'description 1'},
                  {id: 2, name: 'movie 2', desc: 'description 2'}]
  end

  def new

  end

  def create

  end

  def show

  end

  def destroy

  end


end
