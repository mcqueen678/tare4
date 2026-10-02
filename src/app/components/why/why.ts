import { Component } from '@angular/core';
import { MatCard } from '@angular/material/card';

@Component({
  imports: [
    MatCard
  ],
  selector: 'app-why',
  styles: ``,
  template: ` 
    <!-- CONTENEDOR PRINCIPAL -->
    <section class="bg-white py-20 px-12 md:px-24">
      
      <!-- ENCABEZADO CENTRAL -->
      <div class="text-center max-w-2xl mx-auto mb-16">
        <span class="text-[#1e848e] font-semibold tracking-widest text-xs uppercase block mb-3">Why Us</span>
        <h2 class="text-4xl font-bold text-slate-900 tracking-tight">Why they prefer Finpay</h2>
      </div>

      <!-- CONTENEDOR MÁXIMO -->
      <div class="max-w-5xl mx-auto space-y-6">
        
        <!-- FILA SUPERIOR -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          <!-- Tarjeta 1: 3k+ -->
          <mat-card class="bg-[#f4f7f9] p-10 rounded-3xl shadow-none border-none flex flex-col justify-between h-72">
            <h2 class="text-6xl font-bold text-[#1e848e]">3k+</h2>
            <p class="text-xl font-bold text-slate-800 leading-tight">
              Businesses already running <br> on Finpay
            </p>
          </mat-card>

          <!-- Tarjeta 2: Withdraw -->
          <mat-card class="bg-[#f4f7f9] p-10 rounded-3xl shadow-none border-none flex flex-col justify-between h-72">
            <h3 class="text-2xl font-bold text-slate-800 leading-tight">
              Instant Withdraw your funds <br> at any time
            </h3>
            
            <div class="flex items-center justify-center gap-6 mt-4 w-full">
              <img src="icon7.png" alt="Finpay Icon" class="w-16 h-16 object-contain">
              <div class="flex flex-col items-center text-slate-300 text-sm font-bold tracking-widest gap-0.5">
                <span>←</span>
                <span>→</span>
              </div>
              <img src="icon8.png" alt="Bank Icon" class="w-16 h-16 object-contain">
            </div>
          </mat-card>

        </div>

        <!-- FILA INFERIOR -->
        <mat-card class="bg-[#f4f7f9] rounded-3xl shadow-none border-none relative overflow-hidden min-h-380px flex flex-col justify-end">
          
          <!-- TEXTO -->
          <div class="absolute top-1/2 -translate-y-1/2 left-10 z-10 max-w-xs pointer-events-none">
            <h3 class="text-3xl font-bold text-slate-900 mb-4 tracking-tight">No asset volatility</h3>
            <p class="text-slate-400 text-sm leading-relaxed">
              Generate returns on your <br> cash reserves without making <br> any investments.
            </p>
          </div>

          <!-- GRÁFICA -->
          <div class="w-full flex justify-end items-end pl-48 md:pl-64 lg:pl-80">
            <img src="icon9.png" alt="Finpay Balance Chart Summary" class="w-full h-auto rounded-tl-2xl object-contain shadow-xs">
          </div>

        </mat-card>

      </div>
    </section>
  `,
})
export class Why {}
