class Api::TeamsController < ApplicationController
  def index
    render json: Team.all
  end

  def show
    render json: Team.find_by_state_code(params[:id])
  end
end
