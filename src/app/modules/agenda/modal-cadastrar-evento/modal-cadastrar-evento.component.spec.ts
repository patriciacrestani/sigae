import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCadastrarEventoComponent } from './modal-cadastrar-evento.component';

describe('ModalCadastrarEventoComponent', () => {
  let component: ModalCadastrarEventoComponent;
  let fixture: ComponentFixture<ModalCadastrarEventoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalCadastrarEventoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalCadastrarEventoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
