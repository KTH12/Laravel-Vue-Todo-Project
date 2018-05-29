<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
Use App\todo_groups;
Use App\todos;
Use App\User;

class TodoController extends Controller
{
    /**
     * Get login user all todo list controller
     *
     * @return \Illuminate\Http\Response
     */
    public function getUserToTodoGroups()
    {
        // return todo_groups::all();
        return Auth::user()->userToTodoGroups;
    }

    /**
     * 투두 그룹 타이틀 업데이트
     */
    public function updateTodoGroup(Request $request)
    {
        $todoGroup = todo_groups::find($request->id);
        $todoGroup->title = $request->title;
        $todoGroup->save();
        return $todoGroup;
    }

    /**
     * 투두 그룹 타이틀 업데이트
     */
    public function getTodoDetailList($id)
    {
        $todos = todo_groups::find($id)->todos;
        return $todos;
    }
}
