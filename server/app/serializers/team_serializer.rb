class TeamSerializer < ActiveModel::Serializer

  attributes :id, :state_code, :name, :nickname, :park_image, :map_id, :players

  has_many :players

end
