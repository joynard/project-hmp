import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BacaBeritaPageRoutingModule } from './baca-berita-routing.module';

import { BacaBeritaPage } from './baca-berita.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BacaBeritaPageRoutingModule
  ],
  declarations: [BacaBeritaPage]
})
export class BacaBeritaPageModule {}
