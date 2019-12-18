## ORM (Object Relational Mapping)
* Data from database <--> Objects

## ActiveRecord
* The ORM that we will be using in Ruby/Rails.

### Rake
* Is a task runner library where we get to define our own tasks using ruby.
* Some example of task runners we've been using is `learn submit`. _(it may not be built using rake but the idea is the same)_
* find out what tasks are available using: `rake -T`

### Migrations
* What active record uses to manage database tables.
* `rake db:create_migration NAME=the_name_of_file`
* `rake db:migrate` make changes to tables based on whats specified in all migrations in `migrate/` directory.
  * _migrations with a status of up will be skipped over_
* `rake db:migrate:status`
* `rake db:rollback`


```ruby
class Tea < ActiveRecord::Base

end
```
