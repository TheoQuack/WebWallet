<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;



    Route::post('/login', [UserController::class, 'login']);
    Route::post('/signup', [UserController::class, 'signup']);
    Route::get('/token', [UserController::class, 'token']);


Route::middleware('auth:sanctum')->group(function () {
    Route::post('/findUser', [UserController::class, 'findUser']);

    Route::put('/editUser/{number}', [UserController::class, 'editUser']);
    Route::put('/sendMoney',  [UserController::class, 'sendMoney']);

    Route::post('/currentUserMoney', [UserController::class, 'currentUserMoney']);
    Route::post('/findCurrentUserID', [UserController::class, 'findCurrentUserID']);
});



