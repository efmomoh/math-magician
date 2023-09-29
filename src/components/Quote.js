import React, { useState, useEffect } from 'react';
import './Quote.css';

const ShowQuote = () => {
  const [quoteData, setQuoteData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [quoteColor, setQuoteColor] = useState('');

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const response = await fetch('https://api.api-ninjas.com/v1/quotes', {
          headers: {
            'X-Api-Key': 'rxnc4OzY21Nx119eenfALw==OOeAua2GvA6zjgKk',
          },
        });

        const generateRandomColor = () => {
          const letters = '0123456789abcdef';
          let color = '#';
          for (let i = 0; i < 6; i += 1) {
            color += letters[Math.floor(Math.random() * 16)];
          }
          return color;
        };

        const data = await response.json();
        const quoteItem = data[0]; // Assuming the API returns an array of quotes
        setQuoteData(quoteItem);
        setQuoteColor(generateRandomColor());
        setIsLoading(false);
      } catch (error) {
        setError('Error fetching quote');
        setIsLoading(false);
      }
    };

    fetchQuote();
  }, []);

  if (isLoading) {
    return <p className="Loading">Loading...</p>;
  }

  if (error) {
    return <p className="error">{error}</p>;
  }

  return (
    <div className="quote-container">
      <p className="quote" style={{ color: quoteColor }}>
        {quoteData.quote}
      </p>
      <p className="author">
        -
        {quoteData.author}
      </p>
    </div>
  );
};

export default ShowQuote;
