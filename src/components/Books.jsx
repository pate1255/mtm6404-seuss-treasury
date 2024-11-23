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
                <div className='books-image'><img src={book.image} alt={book.title} style={{
                    width: '180px',
                    height: '240px',
                }}/></div>
                <div><Link key={book.id} to={`/book/${book.id}`}>Details</Link></div>
            </div>
          )
        )}
         </div>
      </>
    );
}

export default Books;

  