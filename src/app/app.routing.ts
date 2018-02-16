import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { BeersComponent } from './beers/beers.component';
import { CultureComponent } from './culture/culture.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'menu',
    component: MenuComponent
  },
  {
    path: 'beers',
    component: BeersComponent
  },
  {
    path: 'culture',
    component: CultureComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
