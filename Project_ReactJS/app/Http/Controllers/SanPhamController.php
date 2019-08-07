<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\sanpham;
class SanPhamController extends Controller
{
    public function index(){
        $sanpham = sanpham::all();
        return response()->json($sanpham);
    }
    public function themSP(Request $rq){
       $sanpham = new sanpham();
       $sanpham->id_catalog = $rq->catalog;
       $sanpham->name = $rq->name;
       $sanpham->content = $rq->mota;
       $sanpham->price = $rq->price;
       //$sanpham->images = $rq->images;
       $sanpham->images = '2.jpg';
       $sanpham->save();
       return response()->json();
    }
    public function delete($id){
        $sanpham = sanpham::find($id);
        $sanpham->delete();
        return response()->json();
    }
    public function postEdit(Request $rq,$id){
        $sanpham = sanpham::find($id);
        $sanpham->name = $rq->name;
        $sanpham->content = $rq->mota;
        $sanpham->price = $rq->price;
        //$sanpham->images = $rq->images;
        $sanpham->images = '2.jpg';
        $sanpham->save();
        return response()->json();
    }
}
