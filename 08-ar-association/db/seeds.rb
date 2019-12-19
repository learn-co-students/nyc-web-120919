User.destroy_all
Movie.destroy_all
Review.destroy_all

50.times do 
  User.create(name: Faker::Name.unique.name)
end


50.times do
  Movie.create(
    title: Faker::Hipster.sentence(word_count: 3),
    description: Faker::Hipster.paragraph
  )
end