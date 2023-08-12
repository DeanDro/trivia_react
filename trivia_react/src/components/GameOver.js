
function GameOver(props){
    const score = props.score;

    return (
        <div className="gameOver">
            <h1 className="finalText">Congratulations!</h1>
            {score === 1? 
            <h2 className="finalText">You have answered {score} questions correctly.</h2>
            :
            <h2 className="finalText">You have answered {score} question correctly.</h2>
            }
        </div>
    );
};

export default GameOver;