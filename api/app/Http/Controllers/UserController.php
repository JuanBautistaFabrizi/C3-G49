<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\DB;
class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
       
        $users=  DB::table('users')->select('*')->get();
        return $users;
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        

        
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $this->validate($request, array(
            'name' => 'required',
            'email' => 'required',
            'password' => 'required',
            'address' => 'required',
            'phone' => 'required',
            'status' => 'required',
            'role' => 'required'
          ));

        $name=$request->post('name');
        $email=$request->post('email');
        $password=$request->post('password');
        $address=$request->post('address');
        $phone=$request->post('phone');
        $status=$request->post('status');
        $role=$request->post('role');

        DB::table('users')->insert([
            'name'=>$name,
            'email'=>$email,
            'password'=> $password,
            'address'=>$address,
            'phone'=>$phone,
            'status'=>$status,
            'role'=>$role
        ]);
     }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        
        $user=DB::table('user')->where('id',$id)->first();
        return $user;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        

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
        $user = User::find($id);

        $request->validate([
            "name" => 'required',
            "email" => 'required',
            "password" => 'required',
            "address" => 'required',
            "phone" => 'required',
            "status" => 'required',
            "role" => 'required'
        ]);

        $name = $request->post('name');
        $email = $request->post('email');
        $password = $request->post('password');
        $address = $request->post('address');
        $phone = $request->post('phone');
        $status = $request->post('status');
        $role = $request->post('role');

        DB::table('users')->where('idCliente',$id)->update([
            "name" => $name,
            "email" => $email,
            "password" => $password,
            "address" => $address,
            "phone" => $phone,
            "status" => $status,
            "role" => $role

         ]);

         return  $user->save();
    }



    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $user = User::find($id);
        if($user-> status == true){
            DB::table('users')->where('idCliente',$id)->update([
                'status' => 0
            ]);
        }

        return $user;
    }
}

