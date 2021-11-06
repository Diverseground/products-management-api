# products-management-api

## Registering

register by sending a post request to /auth/register
the schema structure is as following:
{
"name": "billiam",
"email": "billiam@gmail.com",
"password": "secret"
}

## Logging a user in

the schema for logging in is a post request send to /auth/login
{
"email": "sally@gmail.com",
"password": "secret"
}

### Grab the token and authorize your HTTP requests

Grab the token and paste it after Bearer

## Create product route

the request body is required and example that works is this schema, these fields are required
{
"company": "The Coca-Cola Company",
"product": "Sprite Original Citrus Flavor 2 liter",
"description": "Lemon Lime Carbonated Soft Drink",
"price": 1.98,
"unitPrice": 2.9,
"taxRate": 5.45,
"quantity": 35,
"unit": "fl oz",
"packageType": "Plastic Bottle",
"upc": 67111437
}

## Getting All products

Works as simple as sending a get request to /products

## Getting Single Product

This is just sending a get request for getting a product by id and works by sending get request to
/products/{id}
a schema example that works is
/products/61862126c94e770baa507fd3

## Updating Product

Works the same as creating but it is sent as a Patch request to /products/{id}
an example is sending a patch request to /products/61862126c94e770baa507fd3 with the following schema
{
"company": "The Coca-Cola Company",
"product": "Fanta Soda Pop",
"description": "Caffeine-Free Orange Soda Pop",
"price": 1.94,
"unitPrice": 9.7,
"taxRate": 5.45,
"quantity": 15,
"unit": "fl oz",
"packageType": "Plastic Bottle",
"upc": 67109490
}

## Deleting a Product

Sending a delete request to the route /products/{id} will work if using the id above
