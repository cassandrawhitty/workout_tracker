class WorkoutsController < ApplicationController

    def index 
        @workouts = Workout.all

        render json: @workouts
    end

    def show 
        @workout = Workout.find(params[:id])

        render json: @workout
    end

    def create 
        @workout = Workout.create(
            date: params[:date],
            duration: params[:duration],
            description: params[:description],
        )

        render json: @workout
    end

    def destroy
        @workout = Workout.find(params[:id])
        @workout.destroy
    end

end
