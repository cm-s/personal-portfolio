class User < ActiveRecord::Base
  has_many :messages
  validates :user_name, :presence => true, :uniqueness => { :case_sesitive => true, :message => "That Username is taken."}, :length => { :in => 1..25 }
  validates :password, :presence => true, :length => { :in => 1..15 }
  has_attached_file :image,
    size: { :in => 0..5.megabytes },
    styles: { thumb: [ "40x40#", :jpg ], original: [ "500x500>", :jpg ] },
    convert_options: { thumb: "-quality 70 -strip", original: "-quality 90 -strip" },
    url: "/db/images/:hash.:extension",
    hash_secret: "1bep7000x2312a"
  validates_attachment :image, content_type: { content_type: [ 'image/jpg', 'image/png', 'image/gif' ] }

  def self.authenticate(secure_user_name = '', secure_password = '')
    user = User.find_by_user_name(secure_user_name)

    if user && (user.password == secure_password)
      return user
    else
      return false
    end
  end
end
