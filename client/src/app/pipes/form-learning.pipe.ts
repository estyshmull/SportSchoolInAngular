import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formLearning',
})
export class FormlPipePipe implements PipeTransform {

  transform(iconForm: string):string {
    switch (iconForm) {
      case 'frontal':
        return 'fas fa-chalkboard-teacher';
      case 'zoom':
        return 'fas fa-laptop';
      default:
        return 'fas fa-question';
    }
    
  }

}
