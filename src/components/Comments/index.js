import {Component} from 'react'
import {v4 as uudiv4} from 'uuid'
import {formatDistanceToNow} from 'date-fns'

import CommentItem from '../CommentItem'

import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

const initialCommentList = []

class Comments extends Component {
  state = {
    commentList: initialCommentList,
    name: '',
    comment: '',
    count: 0,
  }

  addComment = event => {
    const {name, comment} = this.state

    const randomColor =
      initialContainerBackgroundClassNames[
        Math.ceil(
          Math.random() * initialContainerBackgroundClassNames.length - 1,
        )
      ]

    event.preventDefault()

    const AddContact = {
      id: uudiv4(),
      name,
      comment,
      date: new Date(),
      isLiked: false,
      backGround: randomColor,
    }

    this.setState(prevState => ({
      commentList: [...prevState.commentList, AddContact],
      name: '',
      comment: '',
      count: prevState.count + 1,
    }))
  }

  onChangeName = event => {
    this.setState({name: event.target.value})
  }

  onChangeComment = event => {
    this.setState({comment: event.target.value})
  }

  checkLiked = id => {
    this.setState(prevState => ({
      commentList: prevState.commentList.map(eachComment => {
        if (eachComment.id === id) {
          return {...eachComment, isLiked: !eachComment.isLiked}
        }
        return eachComment
      }),
    }))
  }

  Delete = id => {
    this.setState(prevState => ({
      commentList: prevState.commentList.filter(
        everyComment => everyComment.id !== id,
      ),
      count: prevState.count - 1,
    }))
  }

  render() {
    const {commentList, name, comment, count} = this.state

    return (
      <div className="bgContainer">
        <div className="contentContainer">
          <h1 className="heading">Comments</h1>
          <div className="container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
              alt="comments"
              className="img"
            />
            <div className="comment-section">
              <p className="about">Say something about 4.0 technologies</p>
              <form className="comment-container" onSubmit={this.addComment}>
                <input
                  value={name}
                  className="input"
                  placeholder="Your Name"
                  onChange={this.onChangeName}
                />
                <textarea
                  value={comment}
                  className="textarea"
                  placeholder="Your Comment"
                  rows="6"
                  cols="12"
                  onChange={this.onChangeComment}
                >
                  {' '}
                </textarea>
                <button type="submit" className="button">
                  Add comment
                </button>
              </form>
            </div>
          </div>
          <hr className="line" />
          <div className="comments-count">
            <p className="count">{count}</p>
            <p className="comments"> Comments</p>
          </div>

          {commentList.length > 0 ? (
            <ul>
              {commentList.map(commentObj => (
                <CommentItem
                  key={commentObj.id}
                  commentList={commentObj}
                  time={formatDistanceToNow}
                  addLiked={this.checkLiked}
                  checkDelete={this.Delete}
                />
              ))}
            </ul>
          ) : null}
        </div>
      </div>
    )
  }
}

export default Comments
