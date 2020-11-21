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
    {js: 'newHampshire', ruby: 'New Hampshire'},
    {js: 'newYork', ruby: 'New York'},
    {js: 'maine', ruby: 'Maine'}
  ]

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

  def destroy
    campground = Campground.find(params[:id])
    if campground.destroy
      render json: {destroyed: true}
    end
  end

  def filter
    filtered_campgrounds = Campground.none
    campgrounds = Campground.none
    no_states_checked = true
    no_amenities_checked = true
    query = ''

    STATES.each do |state| 
      if params[state[:js]] == true
        no_states_checked = false
        campgrounds = Campground.where(location: state[:ruby])
        filtered_campgrounds = filtered_campgrounds.or(campgrounds)
      end
    end

    if no_states_checked == true
      filtered_campgrounds = Campground.all
    end

    AMENITIES.each do |amenity|
      if params[amenity[:js]] == true
        query = amenity[:ruby] + ' = true'
        filtered_campgrounds = filtered_campgrounds.where(query)
      end
    end
    
    render json: filtered_campgrounds
  end
  
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