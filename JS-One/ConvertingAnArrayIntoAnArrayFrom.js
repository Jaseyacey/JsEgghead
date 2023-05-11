// Define an array of bike products
const Products = [
    {
       bike: 'Canyon Speedmax',
       price: 3000,
       type: 'Triathlon Bike',
   }, 
   {
       bike: 'Trek Emonda',
       price: 10000,
       type: 'Road Bike',
   },
   {
       bike: 'Scott',
       price: 5000,
       type: 'Gravel Bike'
   }
   ]
   
   // Filter the array to get only bikes that have a price of 5000 or more,
   // and then log their details to the console
   Products.filter(Product => Product.price >= 5000)
       .forEach(Product => console.log(Product.bike, '£' + Product.price, Product.type));
   