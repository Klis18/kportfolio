import { Component, computed, inject, signal } from '@angular/core';
import { Home as HomeService } from '../../services/home';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styles: ``,
})
export class Home {

  homeService = inject(HomeService);
  toolsList = computed(this.homeService.getToolsList());
  //toolsList: string[] = this.homeService.getToolsList(); 
  name = signal('Kenia Nieves');
  profession = signal('Analista QA & Desarrolladora Front-End');
  initialMessage = signal('Aseguro calidad del producto mientras construyo interfaces funcionales y escalables.');

}
