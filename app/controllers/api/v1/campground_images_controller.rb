class Api::V1::CampgroundImagesController < ApiController
  skip_before_action :verify_authenticity_token, only: [:create, :update]

  def create
    campground_image = CampgroundImage.new(image_params)
    if campground_image.save
      render json: campground_image
    else
      render json: { errors: campground_image.errors.full_messages }
    end
  end

  def show
    binding.pry
    render json: Campground.find(params[:id]), serializer: CampgroundImageSerializer
  end


  def image_params
    params.permit([:image, :campground_id])
  end
end