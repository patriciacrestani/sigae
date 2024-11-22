import { CommonModule } from '@angular/common';
import { Component, inject, ViewContainerRef } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, MenubarModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  private viewContainerRef = inject(ViewContainerRef);
  
  items: MenuItem[] = [
    {
      label: 'Pessoas',
      icon: 'pi pi-user',
      route: '/pessoas',
      visible: false
    },
    
    {
      label: 'Agenda',
      icon: 'pi pi-calendar',
      route: '/agenda',
      visible: false
    },
    
    {
      label: 'Plano de ação',
      icon: 'pi pi-copy',
      route: '/plano-acao',
      visible: false
    },

    {
      label: 'Quit',
      icon: 'pi pi-power-off',
      style: { "margin-left": 'auto' },
      visible: false,
      command: () => {
        this.logout();
      }
    },

    {
      label: 'Login',
      style: { "margin-left": 'auto' },
      visible: true,
      command: () => {
        this.injectLogin();
      }
    },
  ];

  logout() {
    console.log("logout");
  }

  injectLogin(){
    const componentRef = this.viewContainerRef.createComponent(LoginComponent)
    componentRef.instance.closed.subscribe( () => {
      componentRef.destroy();
    });
  }
}
