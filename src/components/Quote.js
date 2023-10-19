import React, {useState, useEffect} from 'react';

function Quote() {
    const  url = "https://api.chucknorris.io/jokes/random";
    const [isLoading, setIsLoading] = useState(true);
    const [quote, setQuote] = useState({});
    
    const fetchQuote = async() => { 
        setIsLoading(true);
        const response = await fetch(url);
        const data = await response.json()
        setQuote(data);
        setIsLoading(false);
    }

    useEffect(()=>{
        setTimeout(()=> {
            fetchQuote();
        }, 3000)

    }, [])
    
    return (
    <div className='quote-wrapper'>
        <div className='chuck' title="Chuck Norris Quotes">Chuck Norris</div>
        {isLoading ? (<h3 className='quote'>Loading...</h3>) : (<blockquote className='quote'>{quote.value}</blockquote>)}
        <button onClick={fetchQuote}>New Quote</button>
    </div>
  )
}

export default Quote