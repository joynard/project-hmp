import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CariBeritaPage } from './cari-berita.page';

const routes: Routes = [
  {
    path: '',
    component: CariBeritaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CariBeritaPageRoutingModule {}
