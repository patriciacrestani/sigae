import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroObjetivosPlanoAcaoComponent } from './cadastro-objetivos-plano-acao.component';

describe('CadastroObjetivosPlanoAcaoComponent', () => {
  let component: CadastroObjetivosPlanoAcaoComponent;
  let fixture: ComponentFixture<CadastroObjetivosPlanoAcaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadastroObjetivosPlanoAcaoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastroObjetivosPlanoAcaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
