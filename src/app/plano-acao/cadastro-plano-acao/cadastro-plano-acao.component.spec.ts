import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroPlanoAcaoComponent } from './cadastro-plano-acao.component';

describe('CadastroPlanoAcaoComponent', () => {
  let component: CadastroPlanoAcaoComponent;
  let fixture: ComponentFixture<CadastroPlanoAcaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadastroPlanoAcaoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastroPlanoAcaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
