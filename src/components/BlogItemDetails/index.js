// Write your JS code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

class BlogItemDetails extends Component {
  state = {objValue: {}, isLoading: true}

  componentDidMount() {
    this.getObj()
  }

  getObj = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const data = await response.json()

    const changeSnake = {
      id: data.id,
      title: data.title,
      imageUrl: data.image_url,
      avatarUrl: data.avatar_url,
      author: data.author,
      topic: data.topic,
      content: data.content,
    }

    this.setState({objValue: changeSnake, isLoading: false})
  }

  sendValue() {
    const {objValue} = this.state

    const {title, imageUrl, avatarUrl, author, content} = objValue

    console.log(objValue)

    return (
      <div className="list-el">
        <h1 className="main-heading">{title}</h1>
        <div className="profile-container">
          <img className="profile-logo" src={avatarUrl} alt="" />
          <p className="para">{author}</p>
        </div>
        <div>
          <img className="inner-logo" src={imageUrl} alt={title} />
        </div>
        <div className="text-container">
          <p className="inner-para">{content}</p>
        </div>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state

    return (
      <>
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        ) : (
          this.sendValue()
        )}
      </>
    )
  }
}

export default BlogItemDetails
