class Position < ActiveRecord::Base
  attr_accessible :achievements, :employer, :endDate, :role, :skills, :startDate, :title
  belongs_to :user
end
