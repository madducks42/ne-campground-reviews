class UserShowSerializer < ActiveModel::Serializer
attributes :id, :email, :username, :first_name, :last_name
has_many :reviews
has_many :campgrounds, through: :favorites
end