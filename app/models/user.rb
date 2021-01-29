class User < ApplicationRecord
  has_many :reviews, dependent: :delete_all
  has_many :favorites, dependent: :delete_all
  has_many :campgrounds, through: :favorites

  validates :first_name, presence: true
  validates :last_name, presence: true
  validates :email, presence: true
  validates :username, presence: true
  validates :role, presence: true
  
  # Include default devise modules. Others available are:
  # :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable, :confirmable

  def admin?
    role == "admin"
  end
end
