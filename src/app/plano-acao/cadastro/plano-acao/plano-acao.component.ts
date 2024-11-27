import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { formFieldLimits } from '../../../config/formConfig';
import { ClasseGenerica } from '../../../models/classe-generica';
import { StatusPlanoAcaoEnum } from '../../../enums/status-plano-acao-enum';
import { planoFormConfig } from './plano-acao-form-config';

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
    private route: ActivatedRoute
  ) {
    this.createForm();
    this.obtemStatus();
  }

  createForm() {
    this.planoForm = this.formBuilder.group({
      titulo: ['', Validators.compose([Validators.required, Validators.maxLength(this.planoFormConfig.maxLengths.padrao)])],
      descricao: ['', Validators.compose([Validators.required, Validators.maxLength(this.planoFormConfig.maxLengths.longo)])],
      dataInicio: ['', Validators.required],
      dataTermino: ['', Validators.required],
      status: ['', Validators.required],
    }); 
  }

  obtemStatus() {
    this.status = StatusPlanoAcaoEnum.getStatus();
  }

  avancar() {
    this.router.navigate(['..', 'objetivos'], { relativeTo: this.route });
  }
}
