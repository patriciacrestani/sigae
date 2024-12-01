import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { planoFormConfig } from './plano-acao-form-config';
import { PlanoAcaoService } from '../../plano-acao.service';
import { StatusPlanoAcaoEnum } from '../../../../enums/status-plano-acao-enum';
import { ClasseGenerica } from '../../../../models/classe-generica';
import { Plano } from '../../../../models/plano-acao';

@Component({
  selector: 'app-plano-acao',
  standalone: false,
  templateUrl: './plano-acao.component.html',
  styleUrl: './plano-acao.component.css'
})
export class PlanoAcaoComponent {
  planoForm: FormGroup;
  status: ClasseGenerica[];
  planoFormConfig = planoFormConfig;
  
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private planoAcaoService: PlanoAcaoService
  ) {
    this.createForm();
    this.obtemStatus();
  }

  buscaPlanoSalva() {
    if(!!this.planoAcaoService.getPlano()) {
      let plano = new Plano();
      plano.map(this.planoAcaoService.getPlano());
      this.atualizaFormulario(plano);
    }
  }

  createForm() {
    this.planoForm = this.formBuilder.group({
      titulo: ['', Validators.compose([Validators.required, Validators.maxLength(this.planoFormConfig.maxLengths.padrao)])],
      descricao: ['', Validators.maxLength(this.planoFormConfig.maxLengths.longo)],
      dataInicio: ['', Validators.required],
      dataTermino: ['', Validators.required],
      status: ['', Validators.required],
    }); 
  }

  atualizaFormulario(plano: Plano) {
    Object.keys(this.planoForm.controls).forEach(campo => {
      if(!!plano[campo]) {
        switch(campo) {
          case 'status':
            this.planoForm.get(campo).setValue(plano[campo].id);
            break;
          default:
            this.planoForm.get(campo).setValue(plano[campo]);
            break;
        }
      }
    })
  }

  obtemStatus() {
    this.status = StatusPlanoAcaoEnum.getStatus();
    console.log(this.status);
  }

  desabilitaAvancar(): boolean {
    return this.planoForm.invalid;
  }

  avancar() {
    let plano = new Plano();
    plano.map(this.planoForm.getRawValue());
    this.planoAcaoService.salvaPlano(plano);
    this.router.navigate(['..', 'objetivos'], { relativeTo: this.route });
  }
}
