import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formLearning',
})
export class FormlPipePipe implements PipeTransform {

  transform(formLearning: string): string {
    // לפי האופן שלמדה, החזרת אייקון מתאים
    switch (formLearning) {
      case 'frontal':
        return 'https://img.lovepik.com/element/45004/4348.png_860.png';
      case 'zoom':
        return 'https://as1.ftcdn.net/jpg/01/79/88/56/220_F_179885610_lpxMP6f5uTxyltL1H1RpPzl9wYGzy8ia.jpg';
      // ניתן להוסיף עוד אופציות לפי הצורך
      default:
        return 'https://img.lovepik.com/element/45008/6606.png_860.png';
    }
    
  }
}
