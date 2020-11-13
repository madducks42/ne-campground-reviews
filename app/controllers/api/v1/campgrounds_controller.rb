class Api::V1::CampgroundsController < ApiController
  before_action :authorize_user, except: [:index, :show, :search, :filter]
  
  AMENITIES = [
    {js: 'dogsAllowed', ruby: 'dogs_allowed'},
    {js: 'electricHookups', ruby: 'electric_hookups'},
    {js: 'waterHookups', ruby: 'water_hookups'},
    {js: 'potableWater', ruby: 'potable_water'},
    {js: 'dumpStation', ruby: 'dump_station'},
    {js: 'bathrooms', ruby: 'bathrooms'},
    {js: 'showers', ruby: 'showers'}
  ]

  STATES = [
    {js: 'massachusetts', ruby: 'Massachusetts'},
    {js: 'vermont', ruby: 'Vermont'},
    {js: 'newHampshire', ruby: 'new_hampshire'},
    {js: 'newYork', ruby: 'new_york'},
    {js: 'maine', ruby: 'Maine'}
  ]

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
    if campground.destroy
      render json: {destroyed: true}
    end
  end

  def filter
    filtered_campgrounds = []
    
    STATES.each do |state| 
      if params[state[:js]] == true
        campgrounds = Campground.where(location: state[:ruby])
        filtered_campgrounds = filtered_campgrounds + campgrounds
      end
    end
    
    render json: filtered_campgrounds
  end

  # def filter
  #   filtered_campgrounds = []
    
  #   AMENITIES.each do |amenity|
  #     if params[amenity[:js]] == true
  #       STATES.each do |state| 
  #        if params[state[:js]] == true
  #          campgrounds = Campground.where(location: state[:ruby])
  #          filtered_campgrounds = filtered_campgrounds + campgrounds
  #        end
  #      end
  #     else
  #       STATES.each do |state| 
  #         if params[state[:js]] == true
  #           campgrounds = Campground.where(location: state[:ruby])
  #           filtered_campgrounds = filtered_campgrounds + campgrounds
  #         end
  #       end
  #     end
  #   end
    
  #   render json: filtered_campgrounds
  # end
  
  def search
    campgrounds = Campground.where("name ILIKE ? OR description ILIKE ?", "%#{params['search_string']}%", "%#{params['search_string']}%")
    render json: campgrounds
  end

  protected

  def campground_params
    params.require(:campground).permit([:name, :caption, :description, :location, :zip_code, :campground_link, :dogs_allowed, :electric_hookups, :water_hookups, :potable_water, :dump_station, :bathrooms, :showers])
  end

  def authorize_user
    if !user_signed_in? || !current_user.admin?
      redirect_to root_path
    end
  end

end