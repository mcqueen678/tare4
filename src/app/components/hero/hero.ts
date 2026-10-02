import { Component } from '@angular/core';
import { MatFormField } from '@angular/material/form-field';

@Component({
  selector: 'app-hero',
  imports: [
    MatFormField
  ],
  styles: ``,
  template: `
     <section class="bg-slate-50 py-20 px-12 md:px-24 flex flex-col lg:flex-row justify-between items-center gap-12 min-h-[calc(100vh-80px)]">
      
      <!-- LADO IZQUIERDO -->
      <div class="max-w-xl">
        <h1 class="text-5xl md:text-6xl font-bold text-slate-900 leading-tight tracking-tight mb-6">
          Get paid early <br> save automatically <br> all your pay.
        </h1>
        <p class="text-slate-500 text-base leading-relaxed mb-8 max-w-lg">
          Supports small businesses with simple invoicing, powerful integrations, and cash flow management tools.
        </p>
        
        <!-- Formulario simple con Tailwind y Material -->
        <div class="flex items-center gap-2 mb-12 bg-white p-2 rounded-xl shadow-sm max-w-md border border-slate-100">
          <mat-form-field appearance="outline" class="w-full">
            <input matInput type="email" placeholder="Tu correo de negocio">
          </mat-form-field>
          <button mat-flat-button color="primary" class="h-12 px-6">Empezar ↗</button> 
        </div>

        <div class="flex flex-wrap items-center gap-8 font-bold text-xl text-slate-800 tracking-tight">
          <span>Klarna.</span> <span>coinbase</span> <span>instacart</span>
        </div>
      </div>

      <!-- LADO DERECHO -->
      <div class="w-full max-w-md flex justify-center lg:justify-end">
        <img src="icon3.png" alt="Finpay Dashboard" class="w-full h-auto drop-shadow-2xl">
      </div>

    </section>
  `,
})
export class Hero {}
