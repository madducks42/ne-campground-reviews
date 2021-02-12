class CampgroundWeatherSerializer < ActiveModel::Serializer
  attributes  :conditions,
              :icon,
              :temp,
              :low,
              :high,
              :humidity,
              :date,
              :location,
              :description,
              :wind
end