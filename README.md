# "Bamazon" Marketplace App
## Customer View
Running this application will first display all of the items available for sale in the "Bamazon" Marketplace

The app first prompts the user with two messages: 

1. The first message asks them to select the ID of the product they would like to buy.

   ![alt text](https://github.com/nfarrell87/Bamazon/blob/master/READMEGIFS/appLaunch.gif?raw=true "First Message")
   

2. The second message asks how many units of the product they would like to buy.

   ![alt text](https://github.com/nfarrell87/Bamazon/blob/master/READMEGIFS/productSelect.gif?raw=true "Selected Product and Second Message")

### Once the customer has placed the order, the application checks if the "Bamazon" Marketplace has enough of the product to meet the user's request.

1. If not, the app logs a phrase stating insufficient quantity, and then prevents the order from going through.

   ![alt text](https://github.com/nfarrell87/Bamazon/blob/master/READMEGIFS/productDenied.gif?raw=true "Order Denied Message")

### However, if the "Bamazon" Marketplace does have enough of the product, the app will prompt the user to confirm their order.
1. The app displays a confirm prompt showing the user the quantity requested of the selected item and the total cost to fulfill the user's order.

   ![alt text](https://github.com/nfarrell87/Bamazon/blob/master/READMEGIFS/productConfirm.gif?raw=true "Confirm Order Message")

2. If the user confirms, the SQL database updates to reflect the remaining quantity. 
3. Once the update goes through, the app confirms the purchase and shows the updated quantity

   ![alt text](https://github.com/nfarrell87/Bamazon/blob/master/READMEGIFS/orderConfirmed.PNG?raw=true "Final Message")


[Link to deployed version of the app](https://nfarrell87.github.io/Bamazon/)

Created by Nick Farrell, RN with the help of the internet and my teachers <3