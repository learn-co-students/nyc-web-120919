class MemeSerializer < ActiveModel::Serializer
    attributes :id, :title, :subreddit, :subreddit_id, :url
  
    def subreddit
      object.subreddit.name
    end
end
