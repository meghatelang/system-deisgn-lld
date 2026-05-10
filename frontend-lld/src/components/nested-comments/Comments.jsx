const Comments = ({ data }) => {
  return data?.map((comment, index) => (
    <div className="pl-8 border-l-2 border-gray-400" key={index}>
      <div className="flex gap-2">
        <div>
          <img
            src="https://www.redditstatic.com/avatars/defaults/v2/avatar_default_0.png"
            className="w-10 rounded-full"
          />
        </div>
        <div>
          <div className="font-bold">{comment.username}</div>
          <div>{comment.comment}</div>
        </div>
      </div>
      {comment?.replies && <Comments data={comment.replies} />}
    </div>
  ));
};

export default Comments;
