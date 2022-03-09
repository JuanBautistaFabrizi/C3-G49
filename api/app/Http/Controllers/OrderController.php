<?php

namespace App\Http\Controllers;

<<<<<<< HEAD
=======
<<<<<<< HEAD:api/app/Http/Controllers/CategoryController.php
use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class CategoryController extends Controller
=======
>>>>>>> nicoBonder
use App\Models\Order;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class OrderController extends Controller
<<<<<<< HEAD
=======
>>>>>>> nicoBonder:api/app/Http/Controllers/OrderController.php
>>>>>>> nicoBonder
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
<<<<<<< HEAD
        $orders= DB::table('orders')->select('*')->get();
        return view('orders.index',compact('orders')) ;
=======
<<<<<<< HEAD:api/app/Http/Controllers/CategoryController.php
        $categories= DB::table('categories')->select('*')->get();
        return view('categories.index',compact('categories')) ;
=======
        $orders= DB::table('orders')->select('*')->get();
        return view('orders.index',compact('orders')) ;
>>>>>>> nicoBonder:api/app/Http/Controllers/OrderController.php
>>>>>>> nicoBonder
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
<<<<<<< HEAD
        return view('orders.form');
=======
<<<<<<< HEAD:api/app/Http/Controllers/CategoryController.php
        return view('categories.form');
=======
        return view('orders.form');
>>>>>>> nicoBonder:api/app/Http/Controllers/OrderController.php
>>>>>>> nicoBonder
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
<<<<<<< HEAD
=======
<<<<<<< HEAD:api/app/Http/Controllers/CategoryController.php
            'name'=>'required|min:3|max:50',
            'status'=>'required|max:1|numeric'
        ]);
        $nombre=$request->post('name');
        $status=$request->post('status');

        DB::table('categories')->insert([
            'name'=>$nombre,
            'status'=>$status

        ]);
=======
>>>>>>> nicoBonder
            'order_date'=>'required'
        ]);
        $fecha=$request->post('order_date');


        DB::table('orders')->insert([
            'order_date'=>$fecha
                    ]);
<<<<<<< HEAD
=======
>>>>>>> nicoBonder:api/app/Http/Controllers/OrderController.php
>>>>>>> nicoBonder
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
<<<<<<< HEAD
        $order=DB::findOrFail($id);
        return $order;
=======
<<<<<<< HEAD:api/app/Http/Controllers/CategoryController.php
        $category=DB::table('categories')->select('*')->where('id',$id)->first();
        return $category;
=======
        $order=DB::findOrFail($id);
        return $order;
>>>>>>> nicoBonder:api/app/Http/Controllers/OrderController.php
>>>>>>> nicoBonder
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
<<<<<<< HEAD
        $order=DB::findOrFail($id);
        return view('orders.edit',compact('order'));
=======
<<<<<<< HEAD:api/app/Http/Controllers/CategoryController.php
        $category=Category::findOrFail($id);
        return view('categories.edit',compact('category'));
=======
        $order=DB::findOrFail($id);
        return view('orders.edit',compact('order'));
>>>>>>> nicoBonder:api/app/Http/Controllers/OrderController.php
>>>>>>> nicoBonder
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
<<<<<<< HEAD
=======
<<<<<<< HEAD:api/app/Http/Controllers/CategoryController.php
        $category=Category::findOrFail($id);
        $request->validate([
          'name'=>'required|min:3|max:50',
          'status'=>'required|max:1|numeric'
      ]);
        $category->name=$request->input('name');
        $category-> status=$request->input('status');

        $category->save();
=======
>>>>>>> nicoBonder
        $order=Order::findOrFail($id);
        $request->validate([
          'order_date'=>'required'
      ]);
      $order->order_date=$request->input('order_date');


      $order->save();
<<<<<<< HEAD
=======
>>>>>>> nicoBonder:api/app/Http/Controllers/OrderController.php
>>>>>>> nicoBonder
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
<<<<<<< HEAD
        DB::table('orders')->where('id',$id)->delete();
    }
}
=======
<<<<<<< HEAD:api/app/Http/Controllers/CategoryController.php
        DB::table('categories')->where('id',$id)->delete();
=======
        DB::table('orders')->where('id',$id)->delete();
>>>>>>> nicoBonder:api/app/Http/Controllers/OrderController.php
    }
}
>>>>>>> nicoBonder
