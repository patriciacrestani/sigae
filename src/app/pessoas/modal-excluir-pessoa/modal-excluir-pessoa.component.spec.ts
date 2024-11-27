import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalExcluirPessoaComponent } from './modal-excluir-pessoa.component';

describe('ModalExcluirPessoaComponent', () => {
  let component: ModalExcluirPessoaComponent;
  let fixture: ComponentFixture<ModalExcluirPessoaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalExcluirPessoaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalExcluirPessoaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
