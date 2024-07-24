// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const BlogItem = props => {
  const {value} = props

  const {id, title, topic, imageUrl, avatarUrl, author} = value

  return (
    <Link to={`/blogs/${id}`} className="item-link">
      <div className="list-element">
        <div>
          <img className="home-logo" src={imageUrl} alt="" />
        </div>
        <div className="home-text-container">
          <p className="home-para">{topic}</p>
          <h1 className="home-main-heading">{title}</h1>
          <div className="home-profile-container">
            <img className="home-profile-logo" src={avatarUrl} alt="" />
            <p className="home-para">{author}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default BlogItem
