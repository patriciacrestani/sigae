import { CommonModule } from '@angular/common';
import { Component, signal, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FullCalendarModule } from '@fullcalendar/angular';
import { Calendar, CalendarOptions, EventApi } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { ModalCadastrarEventoComponent } from '../modal-cadastrar-evento/modal-cadastrar-evento.component';
import { EventoService } from '../evento.service';
import { Evento } from '../../../models/evento';

@Component({
  selector: 'app-agenda',
  standalone: true,
  imports: [CommonModule, FormsModule, FullCalendarModule, CalendarModule, ButtonModule, RouterModule, ModalCadastrarEventoComponent],
  templateUrl: './agenda.component.html',
  styleUrl: './agenda.component.css'
})
export class AgendaComponent {
  @ViewChild("modalCadastrarEvento") modalCadastrarEvento: ModalCadastrarEventoComponent;

  dataSelecionada: Date = new Date('11-28-2024');
  eventos: Evento[];
  eventosDoDia: Evento[];

  calendarOptions: CalendarOptions = {
    plugins: [dayGridPlugin],
    locale: "pt-br",
    initialView: 'dayGridMonth',
    weekends: true,
    events: [
      { title: 'Meeting', start: new Date() }
    ],
    buttonText: {
      today:    'hoje',
      month:    'mês',
      week:     'semana',
      day:      'dia',
      list:     'lista'
    },
    headerToolbar: {
      left: 'title',
      center: '',
      right: 'prev next'
    }, 
    height: "100%",
    eventsSet: this.getEventos.bind(this)
  };
  
  currentEvents = signal<EventApi[]>([]);

  constructor(
    private eventoService: EventoService,
  ) {
    this.getEventos();
  }

  formataData(data): string {
    let datas = data.split('/');
    let dataFormatada = datas[1] + "-" + datas[0] + "-" + datas[2];
    return dataFormatada;
  }

  mapeiaEventosParaCalendario(novosEventos?) {
    let eventosParaAdicao = novosEventos ? novosEventos : this.eventos;
    let eventosMapeados = eventosParaAdicao.map(evento => {
      return {
        title: evento.titulo,
        start: new Date(this.formataData(evento.data))
      } as EventApi
    });
    this.currentEvents.set(eventosMapeados);
  }

  mapeiaEventosDoDia() {
    this.eventosDoDia = this.eventos.filter(evento => evento.data == this.dataSelecionada.getDate().toLocaleString())
  }

  getEventos() {
    this.eventos = this.eventoService.getEventos();
    if(this.possuiEventos()) {
      this.mapeiaEventosParaCalendario();
    }
  }

  possuiEventos(): boolean {
    return(!!this.eventos && this.eventos.length > 0); 
  }

  possuiEventosDoDia(): boolean {
    return(!!this.eventosDoDia && this.eventosDoDia.length > 0); 
  }

  criarEvento() {
    this.modalCadastrarEvento.controlaVisibilidade();
  }

  salvaEvento(evento) {
    this.eventoService.salvaEvento(evento);
  }
}
