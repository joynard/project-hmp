import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BacaBeritaPage } from './baca-berita.page';

const routes: Routes = [
  {
    path: '',
    component: BacaBeritaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BacaBeritaPageRoutingModule {}
