import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DadosContatoPessoaComponent } from './dados-contato-pessoa.component';

describe('DadosContatoPessoaComponent', () => {
  let component: DadosContatoPessoaComponent;
  let fixture: ComponentFixture<DadosContatoPessoaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DadosContatoPessoaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DadosContatoPessoaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
