json.extract! answer, :id, :body, :question_id, :user_id, :created_at
json.votes answer.votes.pluck(:vote_type)
json.commentsIds answer.comments.pluck(:id)
