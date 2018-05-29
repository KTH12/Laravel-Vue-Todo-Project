<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class todo_groups extends Model
{
    /**
     * Get the todos.
     */
    public function todos()
    {
        return $this->hasMany('App\todos');
    }
}
