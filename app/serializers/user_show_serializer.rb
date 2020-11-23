class UserShowSerializer < ActiveModel::Serializer
attributes  :id, 
            :email, 
            :username, 
            :first_name, 
            :last_name, 
            :created_at

attribute :account_created, key: :accountCreated

has_many :reviews
has_many :campgrounds, through: :favorites

def account_created
  return object.created_at.strftime("%B %Y")
end

end