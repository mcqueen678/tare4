import { Component } from '@angular/core';
import { MatToolbar } from '@angular/material/toolbar';

@Component({
  selector: 'app-navbar',
  imports: [
    MatToolbar
  ],
  styles: `
  .btn-transparente {
      background: transparent;
      color: #475569;
      border: none;
      padding: 8px 16px;
      font-size: 0.875rem;
      font-weight: 500;
      cursor: pointer;
    }
    .btn-transparente:hover { color: #1e848e; }
  `,
  template: ` 
   <!-- BARRA SUPERIOR BLANCA -->
    <mat-toolbar class="bg-white! border-b border-slate-100! h-20! px-6 md:px-24 flex justify-between items-center">
      
      <!-- LOGO -->
      <div class="flex items-center gap-2 font-bold text-xl text-slate-900">
        <span>Finpay</span>
      </div>

      <!-- ENLACES CENTRALES -->
      <div class="hidden md:flex items-center gap-4">
        <button class="btn-transparente">Product</button>
        <button class="btn-transparente">Customers</button>
        <button class="btn-transparente">Pricing</button>
        <button class="btn-transparente">Docs</button>
      </div>

      <!-- ACCIONES DERECHA -->
      <div class="flex items-center gap-4">
        <button class="btn-transparente">Login</button>
        <!-- Hereda el botón turquesa global automáticamente -->
        <button class="rounded-full! px-6!">Sign Up</button>
      </div>

    </mat-toolbar>
`,
})
export class Navbar {}
