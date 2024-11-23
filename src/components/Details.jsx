import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


function Details() {
  const params = useParams();
  const bookId = params.id;
  const [book, setBook] = useState(null);

  useEffect(() => {
    fetch(`https://seussology.info/api/books/${bookId}`)
      .then(response => response.json())
      .then(json => setBook(json));
      console.log(book);
  }, [bookId]);

  return (
    <>
      {book && (
        <div className='details-container'>
          <h1>{book.title}</h1>
          <h2>Year Published: {book.year_published}</h2>
          <p>{book.author}</p>
          <img src={book.image} alt={book.title} style={{
            width: '180px',
            height: '240px',
          }} />
          <p>{book.description}</p>

        </div>
      )}
    </>
  );

}

export default Details;

