Project overview
Bamazon is an Amazon-like store front that utilizes Node.js and MySQL. The app takes in orders from customers and depletes stock from the store's inventory.
How it works
Type node bamazonCustomer.js into the command line to start the app.

The app will prompt users to enter the ID of the product they'd like to purchase, and then asks how many units they'd like to buy.

Once the user has placed an order, the app will check with the database to verify if the store has enough product to meet the user's request.

If not, the app will prevent the order from being processed and ask the user to modify their order.

The order will be processed if there is enough product. The SQL database will be updated to reflect the order. Once the update is successful, total purchase price will be displayed for the user.

#Technology and packages used

#Node.js

##MySQL

##Chalk

##Figlet

###Below is a thorough, but not too comprehensive, step-by-step process of how I got the app running in terms of code

bamazon.sql

create database and table. Insert predetermined values into table.

bamazonCustomer.js

create connection with MySQL

displayInventory function

queryStr pulls all columns from products table
run query method and perform for loop to pull all inventory from database
promptPurchase function

utilizes inquirer to prompt user to enter Item ID and quantity of items user is wanting to purchase
promise call runs series of if/else statements to check against errors, such as when a user enters wrong information into the inquirer prompts, or places an order that is too large and item is out of stock.
if all data entered is valid, stock_quantity is updated and total purchase price is displayed.
app will display inventory if error is caught
app will end if purchase is successful
