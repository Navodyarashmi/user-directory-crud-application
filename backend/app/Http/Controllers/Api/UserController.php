<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;

class UserController extends Controller
{
    // GET all users
    public function index()
    {
        return response()->json(User::all());
    }

    // GET single user
    public function show($id)
    {
        return response()->json(User::find($id));
    }

    // CREATE user with image
    public function store(Request $request)
    {
        $path = null;

        if ($request->hasFile('image')) {
            $path = $request->file('image')->store('images', 'public');
        }

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'image' => $path
        ]);

        return response()->json($user);
    }

    // UPDATE user
    public function update(Request $request, $id)
    {
        $user = User::find($id);

        if ($request->hasFile('image')) {
            $path = $request->file('image')->store('images', 'public');
            $user->image = $path;
        }

        $user->name = $request->name;
        $user->email = $request->email;
        $user->save();

        return response()->json($user);
    }

    // DELETE user
    public function destroy($id)
    {
        User::destroy($id);
        return response()->json(['message' => 'User deleted']);
    }
}
