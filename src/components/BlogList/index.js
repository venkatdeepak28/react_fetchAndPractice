// Write your JS code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import BlogItem from '../BlogItem'
import './index.css'

class BlogList extends Component {
  state = {blogList: [], isLoading: true}

  componentDidMount() {
    this.getArr()
  }

  getArr = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const data = await response.json()

    const changeProp = data.map(eachValue => ({
      id: eachValue.id,
      title: eachValue.title,
      imageUrl: eachValue.image_url,
      avatarUrl: eachValue.avatar_url,
      author: eachValue.author,
      topic: eachValue.topic,
    }))

    this.setState({blogList: changeProp, isLoading: false})
  }

  render() {
    const {blogList, isLoading} = this.state

    return (
      <div className="list-prop">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        ) : (
          blogList.map(eachValue => (
            <BlogItem key={eachValue.id} value={eachValue} />
          ))
        )}
      </div>
    )
  }
}

export default BlogList
