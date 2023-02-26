import './index.css'

const CommentItem = props => {
  const {commentList, time, addLiked, checkDelete} = props
  const {id, name, comment, date, backGround, isLiked} = commentList

  const like =
    'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'
  const liked =
    'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png '
  const DeleteBtn =
    'https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png'

  const Letter = name.slice(0, 1)
  const likeItem = isLiked
    ? [liked, 'liked', 'liked-color']
    : [like, 'like', 'like-color']

  const getLike = () => {
    addLiked(id)
  }

  const Delete = () => {
    checkDelete(id)
  }

  return (
    <li className="list-container">
      <div className="name-des-content">
        <div className={`name-container ${backGround}`}>
          <p className="first-letter"> {Letter} </p>
        </div>
        <div className="des">
          <p className="name-style">
            {name} <span> {time(date)} </span>
          </p>
          <p className="paragraph">{comment}</p>
        </div>
      </div>
      <div className="likes-container">
        <button type="button" className="icon margin">
          <img src={likeItem[0]} alt={likeItem[1]} />
        </button>

        <button
          type="button"
          className={` icon like-style ${likeItem[2]}`}
          alt={likeItem[1]}
          onClick={getLike}
        >
          Like
        </button>
        <button type="button" className="icon delete" onClick={Delete}>
          <img
            src={DeleteBtn}
            alt="delete"
            className="delete-img"
            data-testid="delete"
          />
        </button>
      </div>
      <hr className="line" />
    </li>
  )
}
export default CommentItem
