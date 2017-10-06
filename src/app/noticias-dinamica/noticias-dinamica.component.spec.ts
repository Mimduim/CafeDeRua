import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticiasDinamicaComponent } from './noticias-dinamica.component';

describe('NoticiasDinamicaComponent', () => {
  let component: NoticiasDinamicaComponent;
  let fixture: ComponentFixture<NoticiasDinamicaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoticiasDinamicaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoticiasDinamicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
