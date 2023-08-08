import books from './stack_books.png';

function retrieveImg(){
    return(
        <img className='footer_img' src={books} alt='Stack of books'/>
    );
};

export default retrieveImg;