import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then(m => m.HomePageModule)
      },
      {
        path: 'daftar-berita',
        loadChildren: () => import('../daftar-berita/daftar-berita.module').then(m => m.DaftarBeritaPageModule)
      },
      {
        path: 'kategori',
        loadChildren: () => import('../kategori/kategori.module').then(m => m.KategoriPageModule)
      },
      {
        path: 'baca-berita',
        loadChildren: () => import('../baca-berita/baca-berita.module').then(m => m.BacaBeritaPageModule)
      },
      {
        path: 'cari-berita',
        loadChildren: () => import('../cari-berita/cari-berita.module').then(m => m.CariBeritaPageModule)
      },
      {
        path: 'my-favorite',
        loadChildren: () => import('../my-favorite/my-favorite.module').then(m => m.MyFavoritePageModule)
      },
      {
        path: 'login',
        loadChildren: () => import('../login/login.module').then(m => m.LoginPageModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('../profile/profile.module').then(m => m.ProfilePageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
