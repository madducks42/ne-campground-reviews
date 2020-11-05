class Api::V1::CampgroundsController < ApiController
  before_action :authorize_user, except: [:index, :show]

  def index
    render json: Campground.all
  end
  
  def show
    render json: Campground.find(params[:id]), serializer: CampgroundShowSerializer
  end

  def edit
    render json: Campground.find(params[:id]), serializer: CampgroundUpdateSerializer
  end

  def update
    campground = Campground.find(params[:id])

    if campground.update(campground_params)
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

  def destroy
    campground = Campground.find(params[:id])
    binding.pry
    if campground.destroy
      redirect_to root_path
    end
  end
  
  def search
    campgrounds = Campground.where("name ILIKE ? OR description ILIKE ?", "%#{params['search_string']}%", "%#{params['search_string']}%")
    render json: campgrounds
  end

  protected

  def campground_params
    params.require(:campground).permit([:name, :caption, :description, :location, :campground_link, :dogs_allowed, :electric_hookups, :water_hookups, :potable_water, :dump_station, :bathrooms, :showers])
  end

  def authorize_user
    if !user_signed_in? || !current_user.admin?
      redirect_to root_path
    end
  end

end