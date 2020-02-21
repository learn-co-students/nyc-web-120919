class MemeSerializer < ActiveModel::Serializer
    attributes :id, :title, :subreddit, :url
  
    def subreddit
      object.subreddit.name
    end
end
