<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\yousir>
 */
class YousirFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => fake()->name(),
            'email' => fake()->email(),
            'password' => $pass = fake()->password(),
            'password_confirmation' => $pass,
            'contact_number' => fake()->phoneNumber()
            // $table->string('name');
            // $table->string('email');
            // $table->string('password');
            // $table->string('passowrd_confirmation');
            // $table->timestamps();

        ];
    }
}
