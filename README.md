# MyStor

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.0.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

#### Project introduction: MyStore

I built an e-commerce website – an application that allows users to view a list of available products to purchase, 
add them to a shopping cart, and ultimately complete the checkout process. 

#### Project features

 **Product list** page, this page is contain your child (Product item component).
 **Product item** , this is child in product list component for display the available products for the user to choose and add to their cart.
			**onClickImg * function** 
				*click the product's image to call this function
				*when call this function , it is add this product to (product item details)and you will navigate to that
			**getCount * function**
				*change product's (input selector) to call this function
				*when call this fuction , it chamge the counter for this product in the cart
				
			**addProductCart *function*
				*click product's (add to cart)button to call this function
				*when call this function , it call updataCartProducts function from cartService (service).

  **Product item details** page	this page is display one product with more details
			**getCount * function**
				*change product's (input selector) to call this function
				*when call this fuction , it chamge the counter for this product in the cart
				
			**addProductCart *function*
				*click product's (add to cart)button to call this function
				*when call this function , it call updataCartProducts function from cartService (service).
  **cart **page, *this page display the cart's products and you can change the counter for any cart's product 
				*contain form for submit this buy operation 
			**updateCount * function**
				*change the product's (input amount) to call this function
				*when call this function , update product's counter and total price .
			**submitForm * function** 
				*click on submit button (disable untit success full form inputs) ,to call this function
				**when call this function , it navigate to success page with your name and total price.
  **success **page *this page display the success massage with button (back to product list)
  
