
function GameOver(props){
    const score = props.score;

    return (
        <div className="gameOver">
            <h1>Games of Chance Quiz</h1>
            <h2 className="finalText">You answered {score} out of 10 questions correctly!</h2>
        </div>
    );
};

export default GameOver;