class ReviewSerializer < ActiveModel::Serializer
  attributes  :id, 
              :campground, 
              :title, 
              :body, 
              :rating, 
              :currentUser,
              :userIsAdmin

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

  # def userIsOwner
  #   current_user == object.owner
  # end

  # def ownerName
  #   object.owner.username
  # end

  def userIsAdmin
    if current_user.nil?
      false
    else
      current_user.role == "admin"
    end
  end

end