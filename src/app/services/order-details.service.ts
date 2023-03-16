import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  constructor() { }

  // fooddetails 

  foodDetails = [
    {
      id:1,
      foodName1:"PizzaDetails",
      foodName:"Pepperoni pizza",
      
      foodDetails:"Honey butter, pizza dough, tomato sauce, pepperoni, pizza.",
      foodDetails1:"Pepperoni pizza recipe||Packed pizza dough||Packed pizza sauce||This pepperoni pizza recipe shows that making classic homemade pizza crust and tomato sauce is easier than you think and produces delicious results.",
      foodImg1:"https://piacipizza.com/wp-content/uploads/2022/06/pizza-06222022-min-1-720x540.jpg.webp",
      foodPrice:"200",
      foodPrice1:"200",
      foodImg:"https://piacipizza.com/wp-content/uploads/2022/06/pizza-06222022-min-1-720x540.jpg.webp"
    },
    {
      id:2,
      foodName1:"PizzaDetails",
      foodName:"Veggie Supreme",
      foodDetails1:" Pizza recipe||Packed pizza dough||Packed pizza sauce||This pizza recipe shows that making classic homemade pizza crust and tomato sauce is easier than you think and produces delicious results.",
      foodDetails:"Onion| Green Capsicum|Mushroom |black olives , sweet corn , Red Paprika topped with Cheese",
      foodPrice:369,
      foodPrice1:369,
      foodImg1:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/sgbobtbxlojbtdnr2m5k",
      foodImg:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/sgbobtbxlojbtdnr2m5k"
    },
    {
      id:3,
      foodName1:"PizzaDetails",
      foodName:"Bagel pizza",
      foodDetails:"Sliced pepperoni, chopped bell pepper, sliced mushrooms or cooked sausage, if desired for toppings",
      foodDetails1:" Pizza recipe||Packed pizza dough||Packed pizza sauce||This pizza recipe shows that making classic homemade pizza crust and tomato sauce is easier than you think and produces delicious results.",
      foodPrice:149,
      foodPrice1:149,
      foodImg1:"https://piacipizza.com/wp-content/uploads/2022/06/bagel-pizza-06222022-min-1080x720.jpg.webp",
      foodImg:"https://piacipizza.com/wp-content/uploads/2022/06/bagel-pizza-06222022-min-1080x720.jpg.webp"
    },
    {
      id:4,
      foodName1:"PizzaDetails",
      foodDetails1:" Pizza recipe||Packed pizza dough||Packed pizza sauce||This pizza recipe shows that making classic homemade pizza crust and tomato sauce is easier than you think and produces delicious results.",
      foodName:"Breakfast pizza",
      foodDetails:"Refrigerated pizza crust, bacon bits, cheddar cheese, monterey",
      foodPrice:140,
      foodPrice1:140,
      foodImg:"https://piacipizza.com/wp-content/uploads/2022/06/breakfast-pizza-06222022-min-1080x720.jpg.webp",
      foodImg1:"https://piacipizza.com/wp-content/uploads/2022/06/breakfast-pizza-06222022-min-1080x720.jpg.webp"
    },
    {
      id:5,
      foodName:"California pizza",
      foodName1:"PizzaDetails",
      foodDetails1:" Pizza recipe||Packed pizza dough||Packed pizza sauce||This pizza recipe shows that making classic homemade pizza crust and tomato sauce is easier than you think and produces delicious results.",
     
      foodDetails:"California-style pizza, a thin-crust pizza noted for its fresh, nontraditional toppings, such as chicken, peanut sauce, artichoke hearts, and goat cheese.",
      foodPrice:109,
      foodPrice1:109,
      foodImg1:"https://piacipizza.com/wp-content/uploads/2022/06/california-pizza-06222022-min-1080x720.jpg.webp",
      foodImg:"https://piacipizza.com/wp-content/uploads/2022/06/california-pizza-06222022-min-1080x720.jpg.webp"
    },
    {
      id:6,
      foodName:"Chicago pizza",
      foodName1:"PizzaDetails",
      foodDetails1:" Pizza recipe||Packed pizza dough||Packed pizza sauce||This pizza recipe shows that making classic homemade pizza crust and tomato sauce is easier than you think and produces delicious results.",
     
      foodDetails:"Bacon, red star, red pepper flakes, mozzarella cheese",
      foodPrice:219,
      foodPrice1:219,
      foodImg1:"https://piacipizza.com/wp-content/uploads/2022/06/chicago-pizza-06222022-min-1080x723.jpg.webp",
      foodImg:"https://piacipizza.com/wp-content/uploads/2022/06/chicago-pizza-06222022-min-1080x723.jpg.webp"
    },
    {
      id:7,
      foodName1:"PizzaDetails",
      foodDetails1:" Pizza recipe||Packed pizza dough||Packed pizza sauce||This pizza recipe shows that making classic homemade pizza crust and tomato sauce is easier than you think and produces delicious results.",
     
      foodName:"Dessert pizza",
      foodDetails:"Cream cheese, caramel, oatmeal, chocolate chips",
      foodPrice:405,
      foodPrice1:405,
      foodImg1:"https://piacipizza.com/wp-content/uploads/2022/06/dessert-pizza-06222022-min-1080x720.jpg.webp",
      foodImg:"https://piacipizza.com/wp-content/uploads/2022/06/dessert-pizza-06222022-min-1080x720.jpg.webp"
    },
    {
      id:8,
      foodName1:"PizzaDetails",
      foodDetails1:" Pizza recipe||Packed pizza dough||Packed pizza sauce||This pizza recipe shows that making classic homemade pizza crust and tomato sauce is easier than you think and produces delicious results.",
     
      foodName:"Detroit pizza",
      foodDetails:"pizzas with tomato sauce, mozzarella and oregano.",
      foodPrice:135,
      foodPrice1:135,
      foodImg1:"https://piacipizza.com/wp-content/uploads/2022/06/detroit-pizza-06222022-min-1080x720.jpg.webp",
      foodImg:"https://piacipizza.com/wp-content/uploads/2022/06/detroit-pizza-06222022-min-1080x720.jpg.webp"
    },
    {
      id:9,
      foodName1:"PizzaDetails",
      foodDetails1:" Pizza recipe||Packed pizza dough||Packed pizza sauce||This pizza recipe shows that making classic homemade pizza crust and tomato sauce is easier than you think and produces delicious results.",
     
      foodName:"Greek pizza",
      foodDetails:"Whole wheat pizza, roasted red pepper, marinara sauce",
      foodPrice:105,
      foodPrice1:105,
      foodImg1:"https://piacipizza.com/wp-content/uploads/2022/06/greek-pizza-06222022-min-1080x720.jpg.webp",
      foodImg:"https://piacipizza.com/wp-content/uploads/2022/06/greek-pizza-06222022-min-1080x720.jpg.webp"
    },
    {
      id:10,
      foodName1:"PizzaDetails",
      foodDetails1:" Pizza recipe||Packed pizza dough||Packed pizza sauce||This pizza recipe shows that making classic homemade pizza crust and tomato sauce is easier than you think and produces delicious results.",
     
      foodName:"Hawaiian pizza",
      foodDetails:"Canadian bacon, homemade pizza dough, pizza sauce",
      foodPrice:505,
      foodPrice1:505,
      foodImg:"https://piacipizza.com/wp-content/uploads/2022/06/hawaiian-pizza-06222022-min-1080x720.jpg.webp",
      foodImg1:"https://piacipizza.com/wp-content/uploads/2022/06/hawaiian-pizza-06222022-min-1080x720.jpg.webp"
    },
    {
      id:11,
      foodName1:"PizzaDetails",
      foodDetails1:" Pizza recipe||Packed pizza dough||Packed pizza sauce||This pizza recipe shows that making classic homemade pizza crust and tomato sauce is easier than you think and produces delicious results.",
     
      foodName:"Neapolitan pizza",
      foodDetails:"Homemade pizza dough, fresh mozzarella cheese, semolina",
      foodPrice:125,
      foodPrice1:125,
      foodImg:"https://piacipizza.com/wp-content/uploads/2022/06/neapolitan-pizza-06222022-min-1080x649.jpg.webp",
      foodImg1:"https://piacipizza.com/wp-content/uploads/2022/06/neapolitan-pizza-06222022-min-1080x649.jpg.webp"
    },
    {
      id:12,
      foodName1:"PizzaDetails",
      foodDetails1:" Pizza recipe||Packed pizza dough||Packed pizza sauce||This pizza recipe shows that making classic homemade pizza crust and tomato sauce is easier than you think and produces delicious results.",
     
      foodName:"New York style pizza",
      foodDetails:"Tomato sauce, red pepper flakes, mozzarella cheese, olive.",
      foodPrice:555,
      foodPrice1:555,
      foodImg:"https://piacipizza.com/wp-content/uploads/2022/06/new-york-style-pizza-06222022-min-1080x717.jpg.webp",
      foodImg1:"https://piacipizza.com/wp-content/uploads/2022/06/new-york-style-pizza-06222022-min-1080x717.jpg.webp"
    },
    
    {
      id:13,
      foodName1:"PizzaDetails",
      foodDetails1:" Pizza recipe||Packed pizza dough||Packed pizza sauce||This pizza recipe shows that making classic homemade pizza crust and tomato sauce is easier than you think and produces delicious results.",
     
      foodName:"Pan pizza",
      foodDetails:"Whole wheat flour, rava, homemade pizza, green bell.",
      foodPrice:225,
      foodPrice1:225,
      foodImg:"https://piacipizza.com/wp-content/uploads/2022/06/pan-pizza-06222022-min-1080x730.jpg.webp",
      foodImg1:"https://piacipizza.com/wp-content/uploads/2022/06/pan-pizza-06222022-min-1080x730.jpg.webp"
    },
    {
      id:14,
      foodName1:"PizzaDetails",
      foodDetails1:" Pizza recipe||Packed pizza dough||Packed pizza sauce||This pizza recipe shows that making classic homemade pizza crust and tomato sauce is easier than you think and produces delicious results.",
     
      foodName:"St.Louis pizza",
      foodDetails:"St louis ribs, brown sugar, barbecue sauce, spice rub.",
      foodPrice:155,
      foodPrice1:155,
      foodImg:"https://piacipizza.com/wp-content/uploads/2022/06/st.-louis-pizza-06222022-min-1080x720.jpg.webp",
      foodImg1:"https://piacipizza.com/wp-content/uploads/2022/06/st.-louis-pizza-06222022-min-1080x720.jpg.webp"
    },
    {
      id:15,
      foodName:"Square pizza",
      foodName1:"PizzaDetails",
      foodDetails1:" Pizza recipe||Packed pizza dough||Packed pizza sauce||This pizza recipe shows that making classic homemade pizza crust and tomato sauce is easier than you think and produces delicious results.",
     
      foodDetails:"Bread flour, olive oil, rapidrise yeast.",
      foodPrice:605,
      foodPrice1:605,
      foodImg:"https://piacipizza.com/wp-content/uploads/2022/06/square-pizza-06222022-min-1080x810.jpg.webp",
      foodImg1:"https://piacipizza.com/wp-content/uploads/2022/06/square-pizza-06222022-min-1080x810.jpg.webp"
},
]




}
