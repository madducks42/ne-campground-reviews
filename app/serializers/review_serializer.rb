class ReviewSerializer < ActiveModel::Serializer
  attributes  :id, 
              :campground, 
              :title, 
              :body, 
              :rating, 
              :currentUser,
              :userIsAdmin,
              :ownerName,
              :ownerUsername,
              :userIsOwner,
              :reviewCreated

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

  def userIsOwner
    if current_user.id == object.user_id
      return true
    else 
      return false
    end
  end

  def ownerName
    user = User.find_by(id: object.user_id)
    owner_name = user.first_name + " " +  user.last_name

    return owner_name
  end

  def ownerUsername
    user = User.find_by(id: object.user_id)
    owner_username = user.username
    
    return owner_username
  end

  def userIsAdmin
    if current_user.nil?
      false
    else
      current_user.role == "admin"
    end
  end

  def reviewCreated
    return object.created_at.strftime("%B %d, %Y")
  end

end