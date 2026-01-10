import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Home {

  baseImgs: string = '/images/tools/';
  tools:string[] = [
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
  ];



  convertToImageRoute(imageText:string):string{
    return this.baseImgs+imageText+'.svg';
  }

  getToolsList(): string[]{
    let tList: string[] = [];
    this.tools.forEach((tool) => 
    {
      const toolImg = this.convertToImageRoute(tool);
      tList.push(toolImg);
    });
    return tList;
  }
  
}
