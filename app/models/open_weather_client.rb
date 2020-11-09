class OpenWeatherClient

  def initialize(zip_code)
    @campground_zip = zip_code
  end

  def format_weather_api_response
    parsed_weather = parse_weather_api_response

    if parsed_weather["cod"] === "404"
      return {
        code: parsed_weather["cod"],
        message: parsed_weather["message"]
      }
    else
      return {
        conditions: parsed_weather["weather"][0]["main"],
        icon: parsed_weather["weather"][0]["icon"],
        temp: parsed_weather["main"]["temp"],
        low: parsed_weather["main"]["temp_min"],
        high: parsed_weather["main"]["temp_max"],
        humidity: parsed_weather["main"]["humidity"],
        date: Time.at(parsed_weather["dt"]).strftime("%a %b %d"),
        location: parsed_weather["name"],
        description: parsed_weather["weather"][0]["description"],
        wind: parsed_weather["wind"]["speed"]
      }
    end
  end

  private

  def fetch_weather_by_zip
    # binding.pry
    domain = "https://api.openweathermap.org/data/2.5/"
    query = "weather?units=imperial&zip=#{@campground_zip}&appid=#{ENV["OPEN_WEATHER_KEY"]}"
    url = domain + query

    weather_api_response = Faraday.get(url)

    return weather_api_response
  end

  def parse_weather_api_response
    weather_response_body = fetch_weather_by_zip.body
    parsed_weather_json = JSON.parse(weather_response_body)

    return parsed_weather_json
  end
end