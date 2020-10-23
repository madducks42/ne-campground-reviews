class Api::V1::CampgroundsController < ApiController
  def index
    render json: Campground.all, each_serializer: CampgroundSerializer
  end
  
  def show
    render json: Campground.find(params[:id]), serializer: CampgroundShowSerializer
  end
end