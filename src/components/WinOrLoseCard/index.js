// Write your code here.
import './index.css'

const WinOrLoseCard = props => {
  const {isWon, score, onClickPlayAgain} = props

  const loseImg = 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
  const winImg = 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'

  const imgUrl = isWon ? winImg : loseImg
  const status = isWon ? 'You Won' : 'You Lose'
  const scoreText = isWon ? 'Best Score' : 'Score'

  return (
    <div className="win-or-lose-card">
      <div className="details-section">
        <h1 className="game-status">{status}</h1>
        <p className="current-score-label">{scoreText}</p>
        <p className="current-score-value">{score}/12</p>
        <button
          className="play-again-button"
          type="button"
          onClick={onClickPlayAgain}
        >
          Play Again
        </button>
      </div>
      <div className="image-section">
        <img className="win-or-lose-image" src={imgUrl} alt="win or lose" />
      </div>
    </div>
  )
}

export default WinOrLoseCard
