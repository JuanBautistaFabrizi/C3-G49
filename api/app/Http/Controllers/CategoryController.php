<?php

namespace App\Http\Controllers;

<<<<<<< HEAD
<<<<<<< HEAD:api/app/Http/Controllers/CategoryController.php
=======
>>>>>>> nicoBonder
use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class CategoryController extends Controller
<<<<<<< HEAD
=======
use App\Models\Order;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class OrderController extends Controller
>>>>>>> nicoBonder:api/app/Http/Controllers/OrderController.php
=======
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
<<<<<<< HEAD:api/app/Http/Controllers/CategoryController.php
        $categories= DB::table('categories')->select('*')->get();
        return view('categories.index',compact('categories')) ;
=======
        $orders= DB::table('orders')->select('*')->get();
        return view('orders.index',compact('orders')) ;
>>>>>>> nicoBonder:api/app/Http/Controllers/OrderController.php
=======
        $categories= DB::table('categories')->select('*')->get();
        return view('categories.index',compact('categories')) ;
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
<<<<<<< HEAD:api/app/Http/Controllers/CategoryController.php
        return view('categories.form');
=======
        return view('orders.form');
>>>>>>> nicoBonder:api/app/Http/Controllers/OrderController.php
=======
        return view('categories.form');
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
<<<<<<< HEAD:api/app/Http/Controllers/CategoryController.php
=======
>>>>>>> nicoBonder
            'name'=>'required|min:3|max:50',
            'status'=>'required|max:1|numeric'
        ]);
        $nombre=$request->post('name');
        $status=$request->post('status');

        DB::table('categories')->insert([
            'name'=>$nombre,
            'status'=>$status

        ]);
<<<<<<< HEAD
=======
            'order_date'=>'required'
        ]);
        $fecha=$request->post('order_date');


        DB::table('orders')->insert([
            'order_date'=>$fecha
                    ]);
>>>>>>> nicoBonder:api/app/Http/Controllers/OrderController.php
=======
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
<<<<<<< HEAD:api/app/Http/Controllers/CategoryController.php
        $category=DB::table('categories')->select('*')->where('id',$id)->first();
        return $category;
=======
        $order=DB::findOrFail($id);
        return $order;
>>>>>>> nicoBonder:api/app/Http/Controllers/OrderController.php
=======
        $category=DB::table('categories')->select('*')->where('id',$id)->first();
        return $category;
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
<<<<<<< HEAD:api/app/Http/Controllers/CategoryController.php
        $category=Category::findOrFail($id);
        return view('categories.edit',compact('category'));
=======
        $order=DB::findOrFail($id);
        return view('orders.edit',compact('order'));
>>>>>>> nicoBonder:api/app/Http/Controllers/OrderController.php
=======
        $category=Category::findOrFail($id);
        return view('categories.edit',compact('category'));
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
<<<<<<< HEAD:api/app/Http/Controllers/CategoryController.php
=======
>>>>>>> nicoBonder
        $category=Category::findOrFail($id);
        $request->validate([
          'name'=>'required|min:3|max:50',
          'status'=>'required|max:1|numeric'
      ]);
        $category->name=$request->input('name');
        $category-> status=$request->input('status');

        $category->save();
<<<<<<< HEAD
=======
        $order=Order::findOrFail($id);
        $request->validate([
          'order_date'=>'required'
      ]);
      $order->order_date=$request->input('order_date');


      $order->save();
>>>>>>> nicoBonder:api/app/Http/Controllers/OrderController.php
=======
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
<<<<<<< HEAD:api/app/Http/Controllers/CategoryController.php
        DB::table('categories')->where('id',$id)->delete();
=======
        DB::table('orders')->where('id',$id)->delete();
>>>>>>> nicoBonder:api/app/Http/Controllers/OrderController.php
    }
}
=======
        DB::table('categories')->where('id',$id)->delete();
    }
}
>>>>>>> nicoBonder
