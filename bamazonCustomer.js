var inquirer = require("inquirer");
var mysql = require("mysql");
var figlet = require("figlet");
var chalk = require("chalk");
require("dotenv").config()

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "bamazon"
})

connection.connect(function(err){
    if (err) throw err;
    console.log("you are connected on a port!");
   validateInput()
 
})
function validateInput(val) {
    var integer = Number.isInteger(parseFloat(val));
    var sign = Math.sign(val);

    if (integer && (sign === 1)) {
        return true;
    } else {
        return 'Please enter a whole number greater than zero'
    }

}


var bamazonFig = "Bamazon";
figlet(bamazonFig, function(err, data){
    if (err) throw err;

    console.log(chalk.hex('#146eb4')(data));
	//Welcome screen text.
	console.log(chalk.hex('#146eb4')(" Welcome to Bamazon."));
	console.log(chalk.hex('#146eb4')(" See the same 10 items, every day.\n"));
})

function displayInventory() {
    query = "SELECT * FROM products";

    connection.query(query, function(err, data){
        if (err) throw err;

        console.log(" Existing Inventory:");
        console.log(chalk.hex('#760ce8')("---------------------------------------------------------------------\n"));


        for (var i = 0; i < data.length; i++){
            var strEnd = " ";
            strEnd += (chalk.hex('#ff9900')(' Product ID: ' + data[i].product_id + ' // '));
            strEnd += (chalk.hex('#ff9900')(' Product Name: ' + data[i].product_name + ' // '));
            strEnd += (chalk.hex('#ff9900')(' Department: ' + data[i].department_name + ' // '));
            strEnd += (chalk.hex('#ff9900')(' Price: $' + data[i].price + '\n'));

            console.log(strEnd);
        }
        console.log(chalk.hex('#760ce8')("---------------------------------------------------------------------\n"));

        promptPurchase();
    })
}

function promptPurchase(product){

    inquirer.prompt([{
        type: "input",
        name: "product_id",
        message: "Please enter the item ID that you would like to purchase",
        validate: validateInput,
        filter: Number
    },
    {
        type: "input",
        name: "quantity",
        message: "How many units of this item would you like to purchase?",
        validate: validateInput,
        filter: Number

    }
]).then(function(answers){
    var item = answers.product_id;
    var quantity = answers.quantity;

    var queryStr = "UPDATE products SET stock_quantity = stock_quantity - ? WHERE product_id = ?";

    connection.query(queryStr, [quantity, item], function (err, data){
        if (err) throw err;
        console.log(item, quantity);
        displayInventory()
        
                });

                console.log(`You purchased all the items you wanted, breh!`)
                process.exit(0)

         })

}

displayInventory();