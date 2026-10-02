import { Component } from '@angular/core';
import { MatCard } from '@angular/material/card';

@Component({
  imports: [
    MatCard
  ],
  selector: 'app-footer',
  styles: ``,
  template: `
  <!-- CONTENEDOR PRINCIPAL BLANCO -->
    <footer class="bg-white py-16 px-6 md:px-24 text-slate-600 text-sm">
      
      <!-- CUADRO AZUL MARINO DE ARRIBA (CTA) -->
      <mat-card class="bg-[#032d3e]! text-white! p-10 md:p-16! rounded-32px! shadow-none! border-none! mb-20 flex flex-col lg:flex-row justify-between items-center gap-8">
        
        <!-- Textos Izquierda -->
        <div class="max-w-xl w-full">
          <span class="text-teal-400 text-xs font-semibold tracking-widest uppercase block mb-3">Try it now</span>
          <h2 class="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Ready to level up your <br> payment process?
          </h2>
          <p class="text-slate-400 text-xs leading-relaxed max-w-sm">
            Supports small businesses with simple invoicing, powerful integrations, and cash flow management tools.
          </p>
        </div>

        <!-- Botones Derecha -->
        <div class="flex flex-wrap items-center gap-4 shrink-0">
          <button class="bg-[#3891a6] text-white px-6 py-3 rounded-xl text-sm font-medium border-none hover:bg-[#2c7586] transition-colors">
            Get Started Now
          </button>
          <button class="bg-transparent text-white px-6 py-3 rounded-xl text-sm font-medium border border-slate-600 hover:bg-white/10 transition-colors flex items-center gap-2">
            Learn More <span>↗</span>
          </button>
        </div>

      </mat-card>

      <!-- MAPA DEL SITIO: Enlaces inferiores en fondo blanco -->
      <div class="grid grid-cols-1 md:grid-cols-5 gap-8 mb-16 text-xs">
        
        <!-- Bloque de la Marca (Logo Finpay) -->
        <div class="md:col-span-1">
          <div class="flex items-center gap-2 font-bold text-xl text-slate-900 mb-4">
            <span>Finpay</span>
          </div>
        </div>

        <!-- Columna Solutions -->
        <div>
          <h4 class="text-slate-900 font-bold mb-4 text-sm">Solutions</h4>
          <ul class="space-y-3 text-slate-500">
            <li><a href="#" class="hover:text-slate-900">Small Business</a></li>
            <li><a href="#" class="hover:text-slate-900">Freelancers</a></li>
            <li><a href="#" class="hover:text-slate-900">Customers</a></li>
            <li><a href="#" class="hover:text-slate-900">Taxes</a></li>
          </ul>
        </div>

        <!-- Columna Company -->
        <div>
          <h4 class="text-slate-900 font-bold mb-4 text-sm">Company</h4>
          <ul class="space-y-3 text-slate-500">
            <li><a href="#" class="hover:text-slate-900">About Us</a></li>
            <li><a href="#" class="hover:text-slate-900">Career</a></li>
            <li><a href="#" class="hover:text-slate-900">Contact</a></li>
          </ul>
        </div>

        <!-- Columna Learn -->
        <div>
          <h4 class="text-slate-900 font-bold mb-4 text-sm">Learn</h4>
          <ul class="space-y-3 text-slate-500">
            <li><a href="#" class="hover:text-slate-900">Blog</a></li>
            <li><a href="#" class="hover:text-slate-900">Ebooks</a></li>
            <li><a href="#" class="hover:text-slate-900">Guides</a></li>
            <li><a href="#" class="hover:text-slate-900">Templates</a></li>
          </ul>
        </div>

        <!-- Columna Social Media usando las imágenes reales de tu carpeta public -->
        <div>
          <h4 class="text-slate-400 font-medium mb-3 text-[11px]">Follow us on</h4>
          <div class="flex gap-4 items-center">
            <a href="#"><img src="icon10.png" alt="Twitter" class="w-5 h-5 object-contain"></a>
            <a href="#"><img src="icon11.png" alt="LinkedIn" class="w-5 h-5 object-contain"></a>
            <a href="#"><img src="icon12.png" alt="LinkedIn" class="w-5 h-5 object-contain"></a>
          </div>
        </div>

      </div>

      <!-- COPYRIGHT INFERIOR -->
      <div class="text-center text-xs text-slate-400 border-t border-slate-100 pt-8">
        <span>©Finpay 2024. All Rights Reserved.</span>
      </div>

    </footer>
  `,
})
export class Footer {}
