<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::middleware(['auth:api'])->group(function () {
    Route::get('getUserToTodoGroups', 'TodoController@getUserToTodoGroups'); // login user get getTodoGroups
    Route::get('getTodoDetailList/{id}', 'TodoController@getTodoDetailList'); // login user get getTodoDetailList
    Route::put('updateTodoGroup', 'TodoController@updateTodoGroup'); // login user get getTodoGroups
});