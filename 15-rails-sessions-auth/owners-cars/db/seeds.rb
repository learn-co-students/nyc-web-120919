# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Car.destroy_all
User.destroy_all

u1 = User.create!(username: "Ian", password: "123")
u2 = User.create!(username: "Matt", password: "123")
Car.create!(name: 'Panda', make:'Toyota', model: 'AE86', color: 'White & Black', year: 1986, user: u1)
Car.create!(name: 'Sheila', make:'Chevrolet', model: 'Tahoe', color: 'Blue', year: 1999, user: u2)