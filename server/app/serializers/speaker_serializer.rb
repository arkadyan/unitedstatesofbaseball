class SpeakerSerializer < ActiveModel::Serializer

  attributes :id, :name

  has_many :presentations

end
