import { Pipe, PipeTransform } from '@angular/core';
import { StatusType } from '../enums/status-type';
@Pipe({
    standalone: true,
    name: 'exponentialStrength'
})
export class StatusColorPipe implements PipeTransform {
    transform(value: StatusType, args?: any): string {
        switch(value) {
            default: case StatusType.INFO: return window.getComputedStyle(document.body).getPropertyValue('--info');
            case StatusType.DEBUG: return window.getComputedStyle(document.body).getPropertyValue('--debug');
            case StatusType.ERROR: return window.getComputedStyle(document.body).getPropertyValue('--error');
            case StatusType.FATAL: return window.getComputedStyle(document.body).getPropertyValue('--fatal');
            case StatusType.SUCCESS: return window.getComputedStyle(document.body).getPropertyValue('--success');
            case StatusType.WARNING: return window.getComputedStyle(document.body).getPropertyValue('--warning');
        }
    }
}