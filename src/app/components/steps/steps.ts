import { Component } from '@angular/core';
import { MatCard } from '@angular/material/card';

@Component({
  imports: [
    MatCard
  ],
  selector: 'app-steps',
  styles: ``,
  template: ` 
  <!-- CONTENEDOR PRINCIPAL: Fondo oscuro/azul -->
    <section class="bg-[#0b2533] py-20 px-12 md:px-24 text-white">
      
      <!-- ENCABEZADO -->
      <div class="max-w-4xl mb-16">
        <span class="text-[#2bb6bf] font-semibold tracking-widest text-xs uppercase block mb-3">STEP</span>
        <h2 class="text-4xl md:text-5xl font-bold tracking-tight leading-tight max-w-2xl">
          Maximize your returns with a Reserve account that generates.
        </h2>
      </div>

      <!-- REJILLA DE 3 TARJETAS -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        
        <!-- Tarjeta 1 -->
        <mat-card class="bg-[#103142]! text-white p-8 rounded-2xl! shadow-none! border-none! flex flex-col justify-between min-h-260px">
          <span class="text-6xl font-bold text-[#194054] tracking-tighter">1</span>
          <div>
            <h3 class="text-xl font-bold mb-2 text-white">Open your account</h3>
            <p class="text-slate-400 text-sm leading-relaxed">
              Sign up to finpay and set up your account from the dashboard.
            </p>
          </div>
        </mat-card>

        <!-- Tarjeta 2 -->
        <mat-card class="bg-[#103142]! text-white p-8 rounded-2xl! shadow-none! border-none! flex flex-col justify-between min-h-260px">
          <span class="text-6xl font-bold text-[#194054] tracking-tighter">2</span>
          <div>
            <h3 class="text-xl font-bold mb-2 text-white">Transfer your money</h3>
            <p class="text-slate-400 text-sm leading-relaxed">
              Move money from to another account into and start to earning up.
            </p>
          </div>
        </mat-card>

        <!-- Tarjeta 3 -->
        <mat-card class="bg-[#103142]! text-white p-8 rounded-2xl! shadow-none! border-none! flex flex-col justify-between min-h-260px">
          <span class="text-6xl font-bold text-[#194054] tracking-tighter">3</span>
          <div>
            <h3 class="text-xl font-bold mb-2 text-white">Watch your balance grow</h3>
            <p class="text-slate-400 text-sm leading-relaxed">
              Accessed instantly and remain insulated from market volatility.
            </p>
          </div>
        </mat-card>

      </div>
    </section>
  `,
})
export class Steps {}
