class Api::V1::CampgroundsController < ApiController
  before_action :authorize_user, except: [:index, :show]

  def index
    render json: Campground.all
  end
  
  def show
    render json: Campground.find(params[:id]), serializer: CampgroundShowSerializer
  end

  def update
    campground = Campground.find(params[:id])

    if campground.save
      render json: campground
    else
      render json: { errors: campground.errors.full_messages }
    end 
    
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

  def authorize_user
    binding.pry
    if !user_signed_in? || !current_user.admin?
      redirect_to root_path
    end
  end

end