<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class Todos extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        //
        Schema::create('todos', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('todo_group_id');
            $table->string('content');
            $table->dateTime('deadline');
            $table->timestamps();
            $table->foreign('todo_group_id')->references('id')->on('users');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('todos');
    }
}
