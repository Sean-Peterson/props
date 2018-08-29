import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { BeersComponent } from './beers/beers.component';
import { CultureComponent } from './culture/culture.component';
<<<<<<< HEAD
import { BeerlistComponent } from './beerlist/beerlist.component';
=======
import { PubComponent } from './pub/pub.component';
import { AlehouseComponent } from './alehouse/alehouse.component';
import { TaproomComponent } from './taproom/taproom.component';
>>>>>>> 703c1adc2864445dd8c26dfe7cf85fd67e59ec77

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
  },
  {
<<<<<<< HEAD
    path: 'beerlist',
    component: BeerlistComponent
=======
    path: 'pub',
    component: PubComponent
  },
  {
    path: 'alehouse',
    component: AlehouseComponent
  },
  {
    path: 'taproom',
    component: TaproomComponent
>>>>>>> 703c1adc2864445dd8c26dfe7cf85fd67e59ec77
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
