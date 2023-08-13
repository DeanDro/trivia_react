import books from './stack_books.png';
import quiz from './science.png';
import bookShelf from './bookshelf.jpg';
import bookPages from './book_pages.jpg';

function retrieveImg(props){
    const image = props === "books" ? books : quiz;
    return(
        <img className='footer_img' src={image} alt='Stack of books'/>
    );
};

function retriveBackground(props){
    const image = bookPages;
    return (
        <img className='backgroundImage' src={image} alt='bookshelf'/>
    )
}

export default retrieveImg;
export {retriveBackground};