class Api::V1::UsersController < ApiController
  before_action :authorize_user, except: [:index, :show]
  def show
    render json: User.find(params[:id]), serializer: UserShowSerializer
  end
end