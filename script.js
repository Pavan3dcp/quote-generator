const quoteContainer =document.getElementById('quote-container');
const quoteText =document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn  =document.getElementById('twitter-button');
const nextQuoteBtn  =document.getElementById('new-quote');
const loader = document.getElementById('loader')

function loading(){
  loader.hidden = false;
  quoteContainer.hidden = true;
}

function complete(){
  quoteContainer.hidden = false;
  loader.hidden = true;
}

let apiQuote = [];

function newQoute(){
  loading();
  const quote =apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
  if(!quote.author){
    authorText.textContent = 'Unknown'
  }else{
    authorText.textContent = quote.author;
  }

  if(quote.text.length > 120){
    quoteText.classList.add('long-quote');

  }else{
    quoteText.classList.remove('long-quote');
  }

  quoteText.textContent = quote.text;
  complete();
}






  
async function getQuote() {
  loading();
  const apiUrl ='https://type.fit/api/quotes';
  try{
    const response =await fetch(apiUrl);
    apiQuotes = await response.json();
   newQoute();
  } catch (error){
    alert('Error')
  }
}



function tweeteQuote(){
  const twitteUrl =`https://twitter.com/intent/tweet?/text=${quoteText.textContent} - ${authorText.textContent}`;
  window.open(twitteUrl, '_blank')
}

nextQuoteBtn.addEventListener('click', newQoute);
twitterBtn.addEventListener('click', tweeteQuote);

getQuote();
// loading();




