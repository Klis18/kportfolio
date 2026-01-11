import { Injectable, signal, WritableSignal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Home {

    baseImgs: string = '/images/tools/';

    tools = signal<string[]>([
    'angular',
    'apachejmeter',
    'cplusplus',
    'cypress',
    'dbeaver',
    'figma',
    'github',
    'javascript',
    'jira',
    'notion',
    'postman',
    'selenium',
    'trello',
    'typescript'
  ]);



  convertToImageRoute(imageText:string):string{
    return this.baseImgs+imageText+'.svg';
  }

  getToolsList(): WritableSignal<string[]>{
    let tList = signal<string[]>([]);
    this.tools().map((tool) => {
      tList.update(tools => [...tools, this.convertToImageRoute(tool)])
    })
    return tList;
  }
  
}
