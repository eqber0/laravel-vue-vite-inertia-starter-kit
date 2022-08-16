<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get(
//     '/',
//     function () {
//         return Inertia::render(
//             'PageIndex',  // <--- Page Component Name Here
//             [
//                 'title' => 'homepage',
//             ]
//         );
//     }
// )->name( 'homepage' ); // <--- Page Route Name Here



Route::get(
    '/',
    function () {
        return Inertia::render(
            'PageIndex',
            [
                'title' => 'homepage',
            ]
        );
    }
)->name( 'homepage' );

Route::get(
	'/about',
	function () {
		return Inertia::render(
			'PageAbout',
			[
				'title' => 'about',
			]
		);
	}
)->name( 'about' );
