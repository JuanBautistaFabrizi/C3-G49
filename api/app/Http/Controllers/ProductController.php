<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
      $products=  DB::table('products')->select('*')->get();
      return $products;
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('products.form');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'name'=>'required|min:3|max:50',
            'stock'=>'required',
            'brand' =>'required',
            'price' =>'required',
            'cost' =>'required',
            'desc'=>'required',
            'img'=>'required'
        ]);
        $nombre=$request->post('name');
        $stock=$request->post('stock');
        $marca=$request->post('brand');
        $precio=$request->post('price');
        $costo=$request->post('cost');
        $descripcion=$request->post('desc');
        $imagen=$request->post('img');

        DB::table('products')->insert([
            'name'=>$nombre,
            'stock'=>$stock,
            'brand'=> $marca,
            'price'=>$precio,
            'cost'=>$costo,
            'desc'=>$descripcion,
            'img'=>$imagen
        ]);
      // return redirect('products/create');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
