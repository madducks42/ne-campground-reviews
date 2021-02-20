class Api::V1::ImagesController < ApiController
  skip_before_action :verify_authenticity_token, only: [:create, :update]

  def index
    campground = Campground.find(params[:campground_id])
    images = campground.images

    render json: images
  end

  def create
    new_image = Image.new(image_params)
    
    if new_image.save
      render json: new_image
    else
      render json: { errors: new_image.errors.full_messages }
    end

  end

  def destroy
    # binding.pry
    image = Image.find(params[:id])

    if image.destroy
      render json: {destroyed: true}
    end
  end

  # def destroy
  #   campground = Campground.find(params[:id])

  #   if campground.destroy
  #     render json: {destroyed: true}
  #   end

  # end

  protected

  def image_params
    params.permit([:image, :campground_id])
  end

end