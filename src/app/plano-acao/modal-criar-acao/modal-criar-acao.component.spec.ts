import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCriarAcaoComponent } from './modal-criar-acao.component';

describe('ModalCriarAcaoComponent', () => {
  let component: ModalCriarAcaoComponent;
  let fixture: ComponentFixture<ModalCriarAcaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalCriarAcaoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalCriarAcaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
