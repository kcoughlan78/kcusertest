class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :token_authenticatable, :confirmable,
  # :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable, :omniauthable,
         :recoverable, :rememberable, :trackable, :validatable

  # Setup accessible (or protected) attributes for your model
  attr_accessible :email, :password, :password_confirmation, :remember_me, :username, :bio, :address1, :address2, :city,
                  :county
  # attr_accessible :title, :body



  validates_presence_of :username

  validates :address1, :presence => true,
            :length => { :maximum => 50 }

  validates :address2, :length => { :maximum => 50 }

  validates :bio, :presence => true,
  :length => { :maximum => 300 }

  validates :city, :presence => true,
            :length => { :maximum => 75 }




  def self.from_omniauth(auth)
    where(auth.slice(:provider, :uid)).first_or_create do |user|
      user.provider = auth.provider
      user.uid = auth.uid
      user.username = auth.info.nickname
      user.email = auth.info.email
    end
  end



  def self.new_with_session(params, session)
    if session["devise.user_attributes"]
      new(session["devise.user_attributes"], without_protection: true) do |user|
        user.attributes = params
        user.valid?
      end
    else
      super
    end
  end



  def password_required?
    super && provider.blank?
  end



  def update_with_password(params, *options)
    if encrypted_password.blank?
      update_attributes(params, *options)
    else
      super
    end
  end



end
