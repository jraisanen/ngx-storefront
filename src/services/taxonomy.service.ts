import { Injectable } from '@angular/core';
import { Params } from '@angular/router';
import { SfTaxonomy, SfTaxonomyModel } from '../models/taxonomy.model';

@Injectable({ providedIn: 'root' })
export class SfTaxonomyService {
  findCategory(categories: SfTaxonomy[], params: Params): SfTaxonomy {
    let category: SfTaxonomy = new SfTaxonomyModel();

    Object.values(params).forEach((param, index) => {
      let cs = categories;
      if (index) {
        cs = cs.filter(c => category && category.id === c.parent);
      }
      category = cs.find(c => c.key === param) || category;
    });

    return category;
  }
}
