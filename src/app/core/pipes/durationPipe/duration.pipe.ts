import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration'
})

export class durationPipe implements PipeTransform {
    transform(duration) {
        let hours = Math.floor(duration/60);

        if (!hours) {
            return `${duration} min`;
        }
        else {
            let minutes = duration % 60;
            return `${hours}h ${minutes} min`
        }
        
    }


}