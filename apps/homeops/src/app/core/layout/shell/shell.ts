import { BreakpointObserver } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import { Component, ViewChild, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';

import { Sidebar } from '../sidebar/sidebar';
import { Topbar } from '../topbar/topbar';

@Component({
  selector: 'app-shell',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MatSidenavModule, Sidebar, Topbar],
  templateUrl: './shell.html',
  styleUrl: './shell.scss',
})
export class Shell {
  @ViewChild(MatSidenav) sidenav!: MatSidenav;

  private bo = inject(BreakpointObserver);

  isDesktop = true;

  constructor() {
    // lg ~ 1024px (como tu ejemplo "hidden lg:flex")
    this.bo.observe(['(min-width: 1024px)']).subscribe((res) => {
      this.isDesktop = res.matches;

      // si cambia de tamaño, ajusta comportamiento
      queueMicrotask(() => {
        if (!this.sidenav) return;
        if (this.isDesktop) this.sidenav.open();
        else this.sidenav.close();
      });
    });
  }

  toggleSidenav() {
    if (!this.isDesktop) this.sidenav.toggle();
  }

  closeOnMobile() {
    if (!this.isDesktop) this.sidenav.close();
  }
}
