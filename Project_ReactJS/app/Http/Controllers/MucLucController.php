<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\mucluc;
class MucLucController extends Controller
{
    public function index(){
        $danhmuc = mucluc::all();
        return response()->json($danhmuc);
    }
    public function them(Request $rq){
        $danhmuc = new mucluc();
        $danhmuc->name = $rq->name;
        $danhmuc->save();
        return response()->json();
    }
    public function delete($id){
        $danhmuc = mucluc::find($id);
        $danhmuc->delete();
        return response()->json();
    }
    public function postEdit(Request $rq,$id){
        $danhmuc = mucluc::find($id);
        $danhmuc->name = $rq->name;
        $danhmuc->save();
        return response()->json($danhmuc);
    }
}
