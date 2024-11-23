import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Quotes() {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    fetch('https://seussology.info/api/quotes')
      .then(response => response.json())
      .then(json => setQuotes(json));
      console.log(quotes);
  }, []);

  return (
    <>
    <div className='quotes-container'>
    {quotes.map((quote) => (
        <div className='quotes'>
          <h2>{quote.text}</h2>
          <p>-Dr Suess in  {quote.book.title}</p>
          <p>{quote.book.author}</p>
        </div>
        
      ))}

    </div>
    </>
  );
}

export default Quotes;
