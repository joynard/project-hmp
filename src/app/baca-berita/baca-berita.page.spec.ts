import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BacaBeritaPage } from './baca-berita.page';

describe('BacaBeritaPage', () => {
  let component: BacaBeritaPage;
  let fixture: ComponentFixture<BacaBeritaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BacaBeritaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
