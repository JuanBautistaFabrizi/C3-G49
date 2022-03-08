<?php

use App\Http\Controllers\CategoryController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ShipmentController;
use App\Http\Controllers\UserController;
use App\Models\Order;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});
Route::middleware(['cors'])->group(function () {
    Route::post('/hogehoge', 'Controller@hogehoge');
});

Route::resource('users',UserController::class);
Route::resource('products',ProductController::class);
Route::resource('categories',CategoryController::class);
Route::resource('orders',OrderController::class);
Route::resource('shipments',ShipmentController::class);
