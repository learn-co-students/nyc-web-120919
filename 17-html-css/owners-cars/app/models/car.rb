class Car < ApplicationRecord
    belongs_to :owner

    validates :model, uniqueness: { case_sensitive: false, scope: :make }, presence: true
    validate :year_is_not_in_the_future


    def year_is_not_in_the_future
        if self.year & self.year > Time.now.year
            errors.add(:year, "can't be in the FUTURE 🚀")
        end
    end
end
