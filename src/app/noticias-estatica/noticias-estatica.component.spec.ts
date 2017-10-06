import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticiasEstaticaComponent } from './noticias-estatica.component';

describe('NoticiasEstaticaComponent', () => {
  let component: NoticiasEstaticaComponent;
  let fixture: ComponentFixture<NoticiasEstaticaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoticiasEstaticaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoticiasEstaticaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
