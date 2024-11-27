import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProblemaPlanoAcaoComponent } from './problema-plano-acao.component';

describe('ProblemaPlanoAcaoComponent', () => {
  let component: ProblemaPlanoAcaoComponent;
  let fixture: ComponentFixture<ProblemaPlanoAcaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProblemaPlanoAcaoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProblemaPlanoAcaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
