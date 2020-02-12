'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route');

Route.get('/',
'PageController.home');
Route.get('/about',
'PageController.about');
Route.get('/products',
'ProductController.index');


// products
Route.get('/products/new-arrivals',
'ProductController.newArrivals');
Route.get('/:brand/:subcategory/:slug',
'ProductController.show');

//cart checkout
Route.get('/cart/checkout',
'CartController.checkout');


// Account
Route.get('/register',
'UserController.register');
Route.get('/login',
'UserController.login');
Route.get('/account',
'UserController.index');
Route.get('/account/orders',
'UserController.orders');
Route.get('/account/change-password',
'UserController.changepassword');
