import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DadosEnderecoPessoaComponent } from './dados-endereco-pessoa.component';

describe('DadosEnderecoPessoaComponent', () => {
  let component: DadosEnderecoPessoaComponent;
  let fixture: ComponentFixture<DadosEnderecoPessoaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DadosEnderecoPessoaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DadosEnderecoPessoaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
