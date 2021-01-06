# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Workout.destroy_all

Workout.create(date: "12/30/2020", duration: "1-15 mins", description: "Yoga")
Workout.create(date: "12/31/2020", duration: "15-30 mins", description: "HIIT")