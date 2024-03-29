import './index.css'
const Emoji = props => {
  const {details, displayThankYouPage} = props
  const {id, name, imageUrl} = details

  const onClickDisplay = () => {
    return (
      <div>
        <img src={loveEmojiUrl} alt="love emoji" />
        <h1>Thank You!</h1>
      </div>
    )
  }

  return (
    <li>
      <img
        src={imageUrl}
        className="emoji"
        alt={name}
        onClick={onClickDisplay}
      />
      <p>{name}</p>
    </li>
  )
}

export default Emoji
