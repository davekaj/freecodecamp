function newQuote(){
  var allQuotes = ['Appreciate your health and mobility. Treat it with respect. Taking care of health is of the utmost importance - Dave Kajpust',
                'For creativity you need to set aside big blocks of time. 3 hours minimum. You may only get twenty hours - Tim Ferriss', 
                'Smile everytime you walk through any door - Unknown', 
                'Fear is a figment of your imagination. A tiger in your dreams. - Budda', 
                'Experiment - James Altucher', 
                'What you are thinking about, you are becoming - Muhammad Ali', 
                'Just do it - Nike', 
                'Never be an IYI - Nassim Taleb', 
                'The task is not to ignore fear, but to explain it away - Unknown', 
                'Wake up and go to bed saying Thank you Everyday - Tim Podcast', 
                'Listen - Unknown', 
                'Systems, not Goals - Scott Adams', 
                'The best way to make your dreams come ture is to wake up - Muhammad Ali', 
                'A mode of dust suspended on a light beam - Carl Sagan', 
                'Long Term Thinking - Unknown']
    
    var arrayIndex = Math.floor(Math.random()*allQuotes.length);
    var chosenQuote = [];
    chosenQuote = allQuotes[arrayIndex];
    var splitQuote = chosenQuote.split('-');
    return splitquote;
}