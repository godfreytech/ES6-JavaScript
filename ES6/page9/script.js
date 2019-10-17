// Assign the value 110 to the dollarYenRate constant
const dollarYenRate = 110;
const convertToYen = (priceDollar) => {            
return priceDollar * dollarYenRate;            
};            
                                 


// Write a function to convert US dollars to Japanese Yen called convertToYen




const information = (name, price) => {
  console.log(`In US dollars, ${name} is $${price}`);
  
  // Define the priceYen constant and assign the result after calling the convertToYen function to it
  const priceYen = convertToYen(price); 
  
  // Print "In Japanese yen, ____ is ¥____"
  console.log(`In Japanese yen, ${name} is ¥${priceYen}`);  
  
  // This line should not be deleted
  console.log('--------------');
};

information("Perfume", 48);
information("Candy", 6);
