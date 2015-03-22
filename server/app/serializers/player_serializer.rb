class PlayerSerializer < ActiveModel::Serializer

  attributes :id, :name, :position, :home, :born, :ops

end
