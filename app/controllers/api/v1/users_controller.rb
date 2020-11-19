class Api::V1::UsersController < ApiController
  def show
    render json: User.find(params[:id]), serializer: UserShowSerializer
  end
end