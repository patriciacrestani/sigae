import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroAcoesPlanoAcaoComponent } from './cadastro-acoes-plano-acao.component';

describe('CadastroAcoesPlanoAcaoComponent', () => {
  let component: CadastroAcoesPlanoAcaoComponent;
  let fixture: ComponentFixture<CadastroAcoesPlanoAcaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadastroAcoesPlanoAcaoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastroAcoesPlanoAcaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
