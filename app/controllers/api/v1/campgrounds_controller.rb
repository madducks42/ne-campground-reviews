class Api::V1::CampgroundsController < ApiController

  def index
    render json: Campground.all
  end
  
  def show
    render json: Campground.find(params[:id]), serializer: CampgroundShowSerializer
  end

  def create
    campground = Campground.new(campground_params)
    if campground.save
      render json: campground
    else
      render json: { errors: campground.errors.full_messages }
    end 
  end

  protected

  def campground_params
    params.require(:campground).permit([:name, :caption, :description, :location, :campground_link, :dogs_allowed, :electric_hookups, :water_hookups, :potable_water, :dump_station, :bathrooms, :showers])
  end

end