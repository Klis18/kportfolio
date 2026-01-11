import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styles: ``,
})
export class About {

  aboutText = signal<string>(
   '👋 Soy Kenia Nieves, QA y Front-End Developer.'
  +'  No solo desarrollo interfaces, me aseguro de que funcionen correctamente.'
  +'  Cuento con experiencia en pruebas manuales y automatizadas, definición de casos de prueba, historias de usuario y gestión de bugs.'
  +'  Gracias a mi enfoque en calidad desde el desarrollo, ayudo a reducir errores, retrabajos y mejorar la experiencia del usuario final.'
  )

  tags = signal<string[]>([
    'JavaScript', 
    'Typescript', 
    'C#', 
    'Angular', 
    'Github',
    'Tailwind CSS', 
    'Selenium', 
    'Cypress', 
    'Postman', 
    'JMeter',
    'Jira',
    'Trello',
    'Notion'
  ])
}
