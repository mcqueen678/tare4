import { Component } from '@angular/core';
import { MatCard } from '@angular/material/card';

@Component({
  selector: 'app-pricing',
  imports: [
    MatCard,
  ],
  
  styles: ``,
  template: ` 
   <!-- CONTENEDOR PRINCIPAL BLANCO -->
    <section class="bg-white py-20 px-12 md:px-24">
      
      <!-- ENCABEZADO SUPERIOR -->
      <div class="text-center max-w-2xl mx-auto mb-16">
        <span class="text-[#1e848e] font-semibold tracking-widest text-xs uppercase block mb-3">Our Mission</span>
        <h2 class="text-4xl font-bold text-slate-900 tracking-tight mb-4">
          We’ve helped <br> innovative companies
        </h2>
        <p class="text-slate-400 text-xs leading-relaxed max-w-sm mx-auto">
          Hundreds of all sizes and across all industries have made a big improvements with us.
        </p>
      </div>

      <!-- FILA DE ESTADÍSTICAS (3 Columnas) -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto text-center mb-20">
        <div>
          <h3 class="text-5xl font-bold text-[#032d3e]">24%</h3>
          <p class="text-slate-500 text-xs mt-2 font-medium">Revenue business</p>
        </div>
        <div>
          <h3 class="text-5xl font-bold text-[#032d3e]">180K</h3>
          <p class="text-slate-500 text-xs mt-2 font-medium">In annual revenue</p>
        </div>
        <div>
          <h3 class="text-5xl font-bold text-[#032d3e]">10+</h3>
          <p class="text-slate-500 text-xs mt-2 font-medium">Months of runway</p>
        </div>
      </div>

      <!-- SEPARADOR CHOOSE PLAN -->
      <div class="text-center mb-10">
        <span class="text-slate-400 text-[10px] font-bold uppercase tracking-widest">Choose Plan:</span>
      </div>

      <!-- GRILLA DE PLANES (2 Mitades perfectas) -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        
        <!-- PLAN PLUS (Blanco/Grisáceo muy suave) -->
        <mat-card class="bg-[#f4f7f9]! p-10! rounded-3xl! shadow-none! border-none! h-64 flex flex-col justify-between cursor-pointer hover:bg-[#ebf0f3] transition-colors">
          <h3 class="text-3xl font-bold text-[#032d3e]">Plus</h3>
          <div class="flex justify-between items-center w-full">
            <span class="text-2xl font-bold text-[#032d3e]">£2.99/month</span>
            <span class="text-xl font-medium text-[#032d3e]">↗</span>
          </div>
        </mat-card>

        <!-- PLAN PREMIUM (Destacado con tu degradado Turquesa Fintech) -->
        <mat-card class="bg-linear-to-br! from-[#3891a6]! to-[#1e848e]! text-white! p-10! rounded-3xl! shadow-lg! h-64 flex flex-col justify-between cursor-pointer hover:brightness-110 transition-all">
          <h3 class="text-3xl font-bold">Premium</h3>
          <div class="flex justify-between items-center w-full">
            <span class="text-2xl font-bold">£6.99/month</span>
            <span class="text-xl font-medium opacity-90">↗</span>
          </div>
        </mat-card>

      </div>

    </section>
  `,
})
export class Pricing {}
