import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcoesPlanoAcaoComponent } from './acoes-plano-acao.component';

describe('AcoesPlanoAcaoComponent', () => {
  let component: AcoesPlanoAcaoComponent;
  let fixture: ComponentFixture<AcoesPlanoAcaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcoesPlanoAcaoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcoesPlanoAcaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
