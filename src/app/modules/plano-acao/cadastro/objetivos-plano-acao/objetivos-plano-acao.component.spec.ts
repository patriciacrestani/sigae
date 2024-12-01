import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjetivosPlanoAcaoComponent } from './objetivos-plano-acao.component';

describe('ObjetivosPlanoAcaoComponent', () => {
  let component: ObjetivosPlanoAcaoComponent;
  let fixture: ComponentFixture<ObjetivosPlanoAcaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ObjetivosPlanoAcaoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObjetivosPlanoAcaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
