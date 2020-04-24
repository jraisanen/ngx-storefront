import { Injectable } from '@angular/core';
import { SfMenu } from '../types/menu';

@Injectable({ providedIn: 'any' })
export class SfMenuService {
  columnItems(items: SfMenu[], column: number): SfMenu[] {
    return items.filter(item => item.column === column);
  }
}
