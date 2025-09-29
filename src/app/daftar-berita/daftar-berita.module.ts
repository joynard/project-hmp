import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DaftarBeritaPageRoutingModule } from './daftar-berita-routing.module';

import { DaftarBeritaPage } from './daftar-berita.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DaftarBeritaPageRoutingModule
  ],
  declarations: [DaftarBeritaPage]
})
export class DaftarBeritaPageModule {}
