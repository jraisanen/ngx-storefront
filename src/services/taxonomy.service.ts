import { Injectable } from '@angular/core';
import { Params } from '@angular/router';
import { Taxonomy } from '../models/taxonomy.model';

@Injectable({ providedIn: 'root' })
export class SfTaxonomyService {
  findCategory(categories: Taxonomy[], params: Params): Taxonomy | undefined {
    let category: Taxonomy | undefined;

    Object.values(params).forEach((param, index) => {
      let cs = categories;
      if (index) {
        cs = cs.filter(c => category && category.id === c.parent);
      }
      category = cs.find(c => c.key === param);
    });

    return category;
  }
}
