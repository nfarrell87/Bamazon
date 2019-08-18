var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "",
  database: "bamazonDB"
});

//Start connection once app starts and run the initial function
connection.connect(function (err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId + "\n");
  selectProduct();
});


// function to select all products and show them in a table
function queryAllProducts() {
  connection.query("SELECT * FROM products", function (err, res) {
    if (err) throw err;
    //Turns our results into an object and replaces the index keys with item_id keys
    const array = res
    const transformed = array.reduce((acc, { item_id, ...x }) => { acc[item_id] = x; return acc }, {})
    //console log the transformed array object into a table
    console.table(transformed);
    connection.end();
  });
}

function selectProduct() {
  // query the database for all items being auctioned
  connection.query("SELECT * FROM products", function (err, res) {
    if (err) throw err;
    const array = res
    const transformed = array.reduce((acc, { item_id, ...x }) => { acc[item_id] = x; return acc }, {})
    //console log the transformed array object into a table
    console.table(transformed);
    // once you have the items, prompt the user for which they'd like to bid on
    inquirer
      .prompt([
        {
          name: "choice",
          type: "input",
          message: "Enter the index number of the item you would like to buy: ",
          validate: function (value) {
            if (isNaN(value) === false) {
              return true;
            }
            return false;
          }
        },
      ])
      .then(function (answer) {
        console.log("Selecting product...\n");
        connection.query(
          "SELECT * FROM products WHERE ?",
          {
            item_id: answer.choice
          },
          function (err, res) {
            if (err) throw err;
            console.table(res);
            // Log all results of the SELECT statement
            inquirer
              .prompt([
                {
                  name: "quantity",
                  type: "input",
                  message: "How many would you like to buy?",
                  validate: function (value) {
                    if (isNaN(value) === false) {
                      return true;
                    }
                    return false;
                  }
                },
              ])
              .then(function (answer2) {
                if (res[0].stock_quantity >= answer2.quantity) {
                  Number.prototype.round = function(p) {
                    p = p || 10;
                    return parseFloat( this.toFixed(p) );
                  };
                  total = (res[0].price * answer2.quantity).round(2);
                  inquirer
                    .prompt([
                      {
                        type: "confirm",
                        name: "confirm",
                        message: "Would you to confirm your purchase of " + answer2.quantity + " " + res[0].product_name + " for $" + total + "?"
                      },

                    ])
                    .then(function (answer3) {
                      if (answer3.confirm) {
                        console.log("Purchase Confirmed! You have " + answer2.quantity + " brand new " + res[0].product_name + " on their way!\nstock_quantity updated:\n");
                        connection.query(
                          "UPDATE products SET ? WHERE ?",
                          [{
                            stock_quantity: res[0].stock_quantity - answer2.quantity
                          },
                          {
                            item_id: answer.choice
                          }],
                          function (err, res) {
                            if (err) throw err;
                            connection.query(
                              "SELECT * FROM products WHERE ?",
                              {
                                item_id: answer.choice
                              },
                              function (err, res) {
                                if (err) throw err;
                                console.table(res);
                              })
                          })
                      }
                      
                    })
                }
                else{
                  console.log("Sorry, there is only " + res[0].stock_quantity + " currently in stock, please try ordering less than " + answer2.quantity + " !")
                  selectProduct();
                }
              })
          })
      });
  });
};

function updateQuantity() {
  inquirer
    .prompt([
      {
        name: "choice",
        type: "input",
        message: "Enter the index number of the item you would like to buy: ",
        validate: function (value) {
          if (isNaN(value) === false) {
            return true;
          }
          return false;
        }
      },
    ])
    .then(function (answer) { }

    )
};