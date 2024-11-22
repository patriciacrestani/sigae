import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroPlanoPlanoAcaoComponent } from './cadastro-plano-plano-acao.component';

describe('CadastroPlanoPlanoAcaoComponent', () => {
  let component: CadastroPlanoPlanoAcaoComponent;
  let fixture: ComponentFixture<CadastroPlanoPlanoAcaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadastroPlanoPlanoAcaoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastroPlanoPlanoAcaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
