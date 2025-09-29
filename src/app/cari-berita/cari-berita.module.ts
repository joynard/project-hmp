import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CariBeritaPageRoutingModule } from './cari-berita-routing.module';

import { CariBeritaPage } from './cari-berita.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CariBeritaPageRoutingModule
  ],
  declarations: [CariBeritaPage]
})
export class CariBeritaPageModule {}
