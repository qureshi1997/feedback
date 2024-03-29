import {Component} from 'react'
import Emoji from '../Emoji'
import './index.css'

class Feedback extends Component {
  state = {
    type: true,
  }

  render() {
    const {resources} = this.props
    const {emojis, loveEmojiUrl} = resources
    return (
      <div>
        <h1>How satisfied are you with our customer support performance?</h1>
        <ul className="list">
          {emojis.map(emojiDetails => {
            return <Emoji details={emojiDetails} key={emojiDetails.id} />
          })}
        </ul>
      </div>
    )
  }
}

export default Feedback
