import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { objetivoFormConfig } from './objetivos-plano-acao-form-config';
import { PlanoAcaoService } from '../../plano-acao.service';
import { Plano } from '../../../models/plano-acao';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-objetivos-plano-acao',
  standalone: false,
  templateUrl: './objetivos-plano-acao.component.html',
  styleUrl: './objetivos-plano-acao.component.css'
})
export class ObjetivosPlanoAcaoComponent {
  objetivoForm: FormGroup;
  objetivoFormConfig = objetivoFormConfig;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private planoAcaoService: PlanoAcaoService
  ) { 
    this.createForm();
  }

  createForm() {
    this.objetivoForm = this.formBuilder.group({
      objetivos: this.formBuilder.array([])
    });
    this.adicionaObjetivo();
    this.buscaPlanoSalvo();
  }
  
  buscaPlanoSalvo() {
    if(!!this.planoAcaoService.getPlanos()) {
      let plano = new Plano();
      plano.map(this.planoAcaoService.getPlanos());
      this.atualizaFormulario(plano);
    }
  }
  
  atualizaFormulario(plano: Plano) {
    if(!plano || !plano.objetivos) {
      return;
    }

    if(!!plano.objetivos && plano.objetivos.length > 0) {
      for (let index = 0; index < plano.objetivos.length; index++) {
        if(index == 0) {
          this.objetivos.at(0).get("titulo").setValue(plano.objetivos[0].titulo);
        } else {
          this.adicionaObjetivo(plano.objetivos[index]);
        }
      }
    } 
  }


  get objetivos(): FormArray {
    return this.objetivoForm.get("objetivos") as FormArray;
  }

  adicionaObjetivo(objetivo?) {
    this.objetivos.push(
      this.formBuilder.group({
        titulo: [objetivo ? objetivo.titulo : "", Validators.compose([Validators.required, Validators.maxLength(objetivoFormConfig.maxLengths.curto)])]
      })
    );
  }

  exibeBotaoRemoverObjetivo(): boolean {
    return (this.objetivos.length > 1);
  }

  removeObjetivo(index: number) {
    if(this.objetivos && this.objetivos.length > 0){
      this.objetivos.removeAt(index);
    }
  }

  desabilitaAvancar(): boolean {
    return this.objetivoForm.invalid;
  }

  getDadosForm() {
    let dadosContato = this.objetivoForm.getRawValue();
    dadosContato.telefones = dadosContato.telefones.map(telefone => telefone.telefone);
    return dadosContato;
  }

  avancar() {
    let plano = new Plano();
    plano.mapObjetivos(this.getDadosForm());
    this.planoAcaoService.salvaPlano(plano);
    this.router.navigate(['..', 'acoes'], { relativeTo: this.route });
  }
}
