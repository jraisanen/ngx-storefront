import { Injectable } from '@angular/core';
import { Menu } from '../types/menu';

@Injectable({ providedIn: 'any' })
export class SfMenuService {
  columnItems(items: Menu[], column: number): Menu[] {
    return items.filter((item: Menu) => item.column === column);
  }
}
