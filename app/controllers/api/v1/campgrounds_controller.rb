class Api::V1::CampgroundsController < ApiController
  def index
    render json: Campground.all
  end
  
  def show
    render json: Campground.find(params[:id]), serializer: CampgroundShowSerializer
  end

end