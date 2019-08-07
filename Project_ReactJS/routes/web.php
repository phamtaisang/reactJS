<?php

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
	Route::get('product',function(){
		Schema::create('product_list',function($table){
			$table->increments('id');
			$table->integer('id_shop')->unsigned();
			$table->foreign('id_shop')->references('id')->on('shop');
			$table->integer('id_product');
			$table->integer('id_user');
			$table->timestamps();
		});
		echo "vừa tạo bảng product xog nè";
	});
	Route::get('shop',function(){
		Schema::create('shop',function($table){
			$table->increments('id');
			$table->string('url',200);
			$table->timestamps();
		});
		echo "vừa tạo bảng xog nè";
	});
//Route::post('mucluc/them','Api\MucLucController@them');

Route::get('theloai',function(){
	Schema::create('catalog',function($table){
		$table->increments('id');
		$table->string('name',200);
		$table->timestamps();
	});
	echo "vừa tạo bảng xog nè";
});
Route::get('sanpham',function(){
	Schema::create('product',function($table){
		$table->increments('id');
		$table->integer('id_catalog')->unsigned();
        $table->foreign('id_catalog')->references('id')->on('catalog');
		$table->string('name',100);
		$table->longtext('content',255);
		$table->string('images');
		$table->float('count');
		$table->integer('view')->default(0);
		$table->timestamps();
	});
	echo "vừa tạo bảng sản phẩm xog nè";
});
