<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
Route::resource('mucluc','MucLucController');
Route::post('mucluc/them','MucLucController@them');
Route::get('mucluc/delete/{id}','MucLucController@delete');
Route::post('mucluc/edit/{id}','MucLucController@postEdit');

Route::resource('sanpham','SanPhamController');
Route::post('sanpham/themSP','SanPhamController@themSP');
Route::get('sanpham/delete/{id}','SanPhamController@delete');
Route::post('sanpham/editSP/{id}','SanPhamController@postEdit');

