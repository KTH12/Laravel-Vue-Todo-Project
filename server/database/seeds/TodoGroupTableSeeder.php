<?php

use Illuminate\Database\Seeder;

class TodoGroupTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        factory(App\todo_group::class, 25)->create();
    }
}
