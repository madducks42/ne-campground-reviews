class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :campground, :title, :body, :rating, :currentUser

  belongs_to :user
  belongs_to :campground

  def userSignedIn
    if !current_user
      return false
    else
      return true
    end
  end

  def currentUser
    current_user
  end

end