import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CariBeritaPage } from './cari-berita.page';

describe('CariBeritaPage', () => {
  let component: CariBeritaPage;
  let fixture: ComponentFixture<CariBeritaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CariBeritaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
