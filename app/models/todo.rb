class Todo
  include Mongoid::Document
  include Mongoid::Timestamps

  field :title, type: String
  field :completed, type: Boolean, default: false

end