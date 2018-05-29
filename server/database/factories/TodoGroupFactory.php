<?php

use Faker\Generator as Faker;

$factory->define(App\todo_group::class, function (Faker $faker) {
    return [
        'title' => $faker->sentence(5),
        'deadline' => $faker->dateTime($max = 'now'),
    ];
});

// $table->string('title');
// $table->dateTime('deadline');
