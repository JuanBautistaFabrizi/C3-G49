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
        //$users = DB::select("SELECT * FROM producto");
        $users = User::all();
        //$users = User::orderBy('id','desc')->paginate();
        $users = DB::table("users")->select('*')
            ->where("name")
            ->where("email")
            ->where("password")
            ->where("address")
            ->where("phone")
            ->where("status")
            ->where("role")
            ->get();
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
            'name' => 'required|max:255',
            'email' => 'required|max:255',
            'password' => 'required|max:255',
            'address' => 'required|max:255',
            'phone' => 'required|max:255',
            'status' => 'required|max:255',
            'role' => 'required|max:255'
          ));

        $user = new User();
        $user->name = $request->name;
        $user->save();

        
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $user = User::find($id);
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
            "name" => 'required|max:45',
            "email" => 'required|max:45',
            "password" => 'required|max:45',
            "address" => 'required|max:45',
            "phone" => 'required|max:45',
            "status" => 'required|max:45',
            "role" => 'required|max:45'
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
            $user->update(['status' => false]);
        }
        return $user;
    }
}

