import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy'
})

export class orderByPipe implements PipeTransform {
    transform(array, args = 'startDate') {
        
        array.sort( (a: any, b:any) => {
            if (a[args] < b[args]) {
                return 1;
            } else if (a[args] > b[args]) {
                return -1;
            } else {
                return 0;
            }
        });
        
        //reverse array to have courses sorted alphabetically ascending
        if (args === 'title') array = array.reverse(); 
        return array;

    }
}
