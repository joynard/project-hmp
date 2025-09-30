// Pastikan file: daftar-berita-routing.module.ts seperti ini

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DaftarBeritaPage } from './daftar-berita.page';

const routes: Routes = [
  {
    // Untuk akses dari menu bar (tanpa parameter)
    path: '',
    component: DaftarBeritaPage
  },
  {
    // Untuk akses dari halaman kategori (dengan parameter)
    path: ':categoryId',
    component: DaftarBeritaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DaftarBeritaPageRoutingModule {}