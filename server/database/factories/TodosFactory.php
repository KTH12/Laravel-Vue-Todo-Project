<?php

use Faker\Generator as Faker;

$factory->define(App\todos::class, function (Faker $faker) {
    return [
        'todo_group_id' => rand(1,20),
        'content' => $faker->sentence(15),
        'deadline' => $faker->dateTime($max = 'now'),
    ];
});
// $table->unsignedInteger('todo_group_id');
//             $table->string('content');
//             $table->dateTime('deadline');