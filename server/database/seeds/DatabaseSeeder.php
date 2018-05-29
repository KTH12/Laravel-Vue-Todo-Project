<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $this->call(TodoGroupTableSeeder::class);
        $this->call(TodosTableSeeder::class);
        // $this->call(UsersTableSeeder::class);
    }
}