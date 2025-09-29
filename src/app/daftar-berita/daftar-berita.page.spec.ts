import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DaftarBeritaPage } from './daftar-berita.page';

describe('DaftarBeritaPage', () => {
  let component: DaftarBeritaPage;
  let fixture: ComponentFixture<DaftarBeritaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DaftarBeritaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
