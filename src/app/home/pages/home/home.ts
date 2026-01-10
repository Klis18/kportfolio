import { Component, inject } from '@angular/core';
import { Home as HomeService } from '../../services/home';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styles: ``,
})
export class Home {

  homeService = inject(HomeService);

  toolsList: string[] = this.homeService.getToolsList(); 

}
