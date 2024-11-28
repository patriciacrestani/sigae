import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FullCalendarModule } from '@fullcalendar/angular';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { ModalCadastrarEventoComponent } from '../modal-cadastrar-evento/modal-cadastrar-evento.component';
import { EventoService } from '../evento.service';

@Component({
  selector: 'app-agenda',
  standalone: true,
  imports: [CommonModule, FormsModule, FullCalendarModule, CalendarModule, ButtonModule, RouterModule, ModalCadastrarEventoComponent],
  templateUrl: './agenda.component.html',
  styleUrl: './agenda.component.css'
})
export class AgendaComponent {
  @ViewChild("modalCadastrarEvento") modalCadastrarEvento: ModalCadastrarEventoComponent;

  dataSelecionada: Date = new Date();

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
  };

  constructor(private eventoService: EventoService) {}

  criarEvento() {
    this.modalCadastrarEvento.controlaVisibilidade();
  }

  salvaEvento(evento) {
    this.eventoService.salvaEvento(evento);
  }
}
