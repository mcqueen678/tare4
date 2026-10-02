import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Navbar } from './components/navbar/navbar';
import { Hero } from './components/hero/hero';
import { Features } from './components/features/features';
import { Why } from './components/why/why';
import { Steps } from './components/steps/steps';
import { Pricing } from './components/pricing/pricing';
import { Footer } from './components/footer/footer';


@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    Navbar,
    Hero,
    Features,
    Why,
    Steps,
    Pricing,
    Footer
  ],
  styles: [],
  template: `
    <app-navbar></app-navbar>
    <app-hero></app-hero>
    <app-features></app-features>
    <app-why></app-why>
    <app-steps></app-steps>
    <app-pricing></app-pricing>
    <app-footer></app-footer>
    <router-outlet></router-outlet>
  `,
})
export class App {
  protected readonly title = signal('practicsII');
}
