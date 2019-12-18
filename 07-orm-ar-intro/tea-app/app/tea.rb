class Tea
  attr_accessor :name, :desc

  DB = SQLite3::Database.new "./db/tea.db"

  def initialize(name, desc)
    @name = name
    @desc = desc
  end

  def self.create(name, desc)
    DB.execute(" 
      INSERT INTO teas (name, desc) values (?, ?)
    ", [name, desc])
    Tea.new(name, desc)
  end

  def self.all
    DB.execute "SELECT * from teas;"
  end
end