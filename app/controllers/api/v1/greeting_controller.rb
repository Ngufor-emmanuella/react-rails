class  Api::V1::GreetingController < ApplicationController
  def index
    @greeting = Greeting.all.sample
    render json: @greeting, status: 200
  end
end
