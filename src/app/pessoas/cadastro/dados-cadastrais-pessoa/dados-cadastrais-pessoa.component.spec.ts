import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DadosCadastraisPessoaComponent } from './dados-cadastrais-pessoa.component';

describe('DadosCadastraisPessoaComponent', () => {
  let component: DadosCadastraisPessoaComponent;
  let fixture: ComponentFixture<DadosCadastraisPessoaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DadosCadastraisPessoaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DadosCadastraisPessoaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
