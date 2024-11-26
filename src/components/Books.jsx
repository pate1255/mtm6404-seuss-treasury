import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


function Books() {
    const [books, setBooks] = useState([]);
    
    useEffect(() => {
    fetch('https://seussology.info/api/books')
    .then(response => response.json())
    .then(json => setBooks(json));
    }
    , []);

    return (
      <>
        <div className='book-container'>
        {books.map((book) => (
            <div key={book.id} id={book.id} className='books'>
                <div><Link key={book.id} to={`/book/${book.id}`}><div className='books-image'><img src={book.image} alt={book.title} style={{
                    width: '180px',
                    height: '240px',
                }}/></div></Link></div>
            </div>
          )
        )}
         </div>
      </>
    );
}

export default Books;

  