import { CommonModule } from '@angular/common';
import { Component, inject, ViewContainerRef } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { LoginComponent } from '../login/login.component';
import { AuthenticationService } from '../login/authentication.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, MenubarModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  private viewContainerRef = inject(ViewContainerRef);
  
  items: MenuItem[] ;

  constructor(private authenticationService: AuthenticationService) { 
    this.preencheMenu();
  }
  
  preencheMenu() {
    this.items = [
      {
        label: 'Pessoas',
        icon: 'pi pi-user',
        route: '/pessoas',
        visible: !!this.checkAuthentication()
      },
      
      {
        label: 'Agenda',
        icon: 'pi pi-calendar',
        route: '/agenda',
        visible: !!this.checkAuthentication()
      },
      
      {
        label: 'Plano de ação',
        icon: 'pi pi-copy',
        route: '/plano-acao',
        visible: !!this.checkAuthentication()
      },
  
      {
        label: 'Quit',
        icon: 'pi pi-power-off',
        style: { "margin-left": 'auto' },
        visible: !!this.checkAuthentication(),
        command: () => {
          this.logout();
        }
      },
  
      {
        label: 'Login',
        style: { "margin-left": 'auto' },
        visible: !this.checkAuthentication(),
        command: () => {
          this.injectLogin();
        }
      },
    ];
  }

  checkAuthentication(): boolean {
    return this.authenticationService.checkAuthentication();
  }

  logout() {
    this.authenticationService.logout();
    this.preencheMenu();
  }

  injectLogin(){
    const componentRef = this.viewContainerRef.createComponent(LoginComponent)
    componentRef.instance.closed.subscribe( () => {
      this.preencheMenu();
      componentRef.destroy();
    });
  }
}
