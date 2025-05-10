<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\yousir;
use Laravel\Sanctum\Contracts\HasApiTokens;

use function Laravel\Prompts\error;

class UserController extends Controller
{
    public function login(Request $request){

        $User = yousir::firstWhere([
            'email'=>$request->input('email'),
            'contact_number'=>$request->input('contact_number'),
            'password'=>$request->input('password')

        ]);

        // echo gettype(($userId));
        // echo gettype(csrf_token());

        if ($User != null) {
            $userId = $User->id;
            $userId = (string) $userId;

            $User->token= csrf_token();
            $User->token_withID= csrf_token() . "_" .((string)$userId); 
            // $token = $request->$User->createToken($request->token_name);
            // $token = $request->$User->createToken($request->token_name);

            // $token = $request->user()->createToken();
            // $token = $request->user()->createToken()
            // $token = $request->user()->
            // $token = $request->user()->

            

            

            return true;
        
        return false;
        }
    }

    public function signup(Request $request){


            $data = yousir::create([

                'email'=> $request->input('email'),
                'password'=> $request->input('password'),
                'password_confirmation'=> $request->input('password_confirmation'),
                'contact_number'=> $request->input('contact_number'),


            ]);

            


        return $data;
    }

    public function findUser(Request $request){

        $User = yousir::firstWhere([
            'email'=>$request->input('email'),
            'contact_number'=>$request->input('contact_number')
        ]);

        if ($User != null) {

            return $User;
        }

        else return null;

    }

    public function findCurrentUserID(Request $request){

        $userID1 = $request->input('id');
        $userID2 = strstr($userID1, "_");
        $userID = substr($userID2, 1);

        return $userID;
    }

    public function currentUserMoney(Request $request) {

        $userObject = yousir::find($request->input('id'));
        $userMoney = $userObject->money;
        return $userMoney;

    }



    public function editUser(Request $request, $number){
        
       yousir::where('id', $number)->update([
            'name'=>$request->input('name'),
            'email'=>$request->input('email'),
            'password'=>$request->input('password'),
            'contact_number'=>$request->input('contact_number')
        ]);

        return "haroo";
    }

    public function token(Request $request){

        return csrf_token();

    }

    public function sendMoney(Request $request){
        

        $userID1 = $request->input('current_user');
        $userID2 = strstr($userID1, "_");
        $senderID = substr($userID2, 1);

        $senderObject = yousir::find($senderID);
        $senderObjectMoney = $senderObject->money;

        $moneyCost = (float) $request->input('money');

        $receiverID = $request->input('id');
        $recieverObject = yousir::find($receiverID);
        $recieverObjectMoney = $recieverObject->money;


        if ($senderObjectMoney >= $moneyCost) {


            yousir::where('id', $senderID)->update([                
                'money'=> ($senderObjectMoney - $moneyCost)
            ]);

            yousir::where('id', $receiverID)->update([                
                'money'=> ($recieverObjectMoney + $moneyCost)
            ]);

            return "The money has been sent...";
        }

        else {

            return "Not Enough Money";
        }
        

        return $receiverID;


    }


}
