<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\SalaryController;
use App\Http\Controllers\EmployeeController;
use App\Http\Controllers\LetterController;
use App\Http\Controllers\CheckClockController;
use Laravel\Sanctum\Http\Middleware\EnsureFrontendRequestsAreStateful;

// Route untuk login dan register (tanpa auth)
Route::post('/sign-up', [AuthController::class, 'signUp']);
Route::post('/sign-up/verify', [AuthController::class, 'verifyEmail']);
Route::post('/sign-in', [AuthController::class, 'signIn']);

// Route ini akan mengembalikan user yang sedang login
Route::middleware([
    EnsureFrontendRequestsAreStateful::class,
    'auth:sanctum'
])->get('/user', function (Request $request) {
    return $request->user();
});

// Route untuk logout dan lainnya, hanya bisa diakses jika user sudah login
Route::middleware('auth:sanctum')->group(function () {
    Route::post('/logout', [AuthController::class, 'logout']);
    
    Route::apiResource('employees', EmployeeController::class);
    Route::apiResource('salaries', SalaryController::class);
    Route::apiResource('letters', LetterController::class);
    Route::apiResource('check-clocks', CheckClockController::class);
});
