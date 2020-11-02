class Api::V1::CampgroundsController < ApiController
  def index
    render json: Campground.all
  end
  
  def show
    render json: Campground.find(params[:id]), serializer: CampgroundShowSerializer
  end

  def new
    render json: Campground.new
  end

  def create
    campground = Campground.new
  
    if campground.save
      render json: campground
    else
      render json: { errors: campground.errors.full_messages }
    end 
  end

  def campground_params
    params.require(:review).permit([:name, :caption, :description, :location, :campground_link, :dogs_allowed, :electronic_hookups, :water_hookups, :potable_water, :dump_station, :bathrooms, :showers])
  end
end