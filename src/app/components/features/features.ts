import { Component } from '@angular/core';
import { MatCard,} from '@angular/material/card';

@Component({
  selector: 'app-features',
  imports: [
    MatCard,
  ],
  styles: ``,
  template: ` 
   <section class="bg-white py-20 px-12 md:px-24">
      
      <div class="flex flex-col lg:flex-row justify-between items-start gap-6 mb-16">
        <div class="max-w-xl">
          <span class="text-[#1e848e] font-semibold tracking-widest text-xs uppercase block mb-3">Future Payment</span>
          <h2 class="text-4xl font-bold text-slate-900 leading-tight tracking-tight">Experience that grows <br> with your scale.</h2>
        </div>
        <div class="max-w-md lg:mt-9">
          <p class="text-slate-400 text-sm leading-relaxed">Design a financial operating system that works for your business and streamlined cash flow management</p>
        </div>
      </div>
      
      <!-- REJILLA DE BENEFICIOS USANDO TUS IMÁGENES -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
        
        <mat-card class="bg-transparent! shadow-none! border-none!">
          <img src="icon4.png" alt="Transfers" class="w-12 h-12 mb-4 object-contain">
          <h3 class="text-lg font-bold text-slate-900 mb-2">Free transfers</h3>
          <p class="text-slate-400 text-xs leading-relaxed">Create a financial experienceay and automate repeat purchases by scheduling recurring payments.</p>
        </mat-card>

        <mat-card class="bg-transparent! shadow-none! border-none!">
          <img src="icon5.png" alt="Accounts" class="w-12 h-12 mb-4 object-contain">
          <h3 class="text-lg font-bold text-slate-900 mb-2">Multiple account</h3>
          <p class="text-slate-400 text-xs leading-relaxed">Run your operations with cash from your account and generate yield on funds stored in your account.</p>
        </mat-card>

        <mat-card class="bg-transparent! shadow-none! border-none!">
          <img src="icon6.png" alt="Security" class="w-12 h-12 mb-4 object-contain">
          <h3 class="text-lg font-bold text-slate-900 mb-2">Unmatched security</h3>
          <p class="text-slate-400 text-xs leading-relaxed">Securely manage your finances with organization-wide MFA, card-locking, and account-level controls.</p>
        </mat-card>

      </div>
    </section>
  `,
})
export class Features {}
