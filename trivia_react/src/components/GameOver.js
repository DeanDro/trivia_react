
function GameOver(props){
    const score = props.score;

    return (
        <div className="gameOver">
            <h1 className="finalText">Congratulations!</h1>
            {score === 1? 
            <h2 className="finalText">You have answered {score} question correctly.</h2>
            :
            <h2 className="finalText">You have answered {score} questions correctly.</h2>
            }
            <br/>
            <div className="social_container">
                <a href="https://www.facebook.com/sharer/sharer.php?kid_directed_site=0&sdk=joey&u=https%3A%2F%2Fraqueldrosos.com%2F&display=popup&ref=plugin&src=share_button" 
                className="fa fa-facebook"></a>
                <a href="https://www.instagram.com/raqueldrosos/" className="fa fa-instagram"></a>
            </div>
        </div>
    );
};

export default GameOver;