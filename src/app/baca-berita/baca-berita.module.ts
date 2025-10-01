import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'; // 1. Pastikan CUSTOM_ELEMENTS_SCHEMA di-import
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
    BacaBeritaPageRoutingModule,
  ],
  declarations: [BacaBeritaPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA] // 2. Pastikan schemas ini ada
})
export class BacaBeritaPageModule {}

