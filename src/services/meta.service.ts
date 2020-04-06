import { Inject, Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Data } from '@angular/router';
import { MetaTag } from '../constants/meta';
import { Environment } from '../types/environment';

@Injectable({ providedIn: 'root' })
export class SfMetaService {
  set data(data: Data) {
    this.description = data.description;
    this.title = `${data.title} | ${this.env.appName}`;
    this.url = `${this.env.appUrl}/${data.url}`;
  }

  private set description(description: string) {
    this.metaService.updateTag({ name: MetaTag.Description, content: description });
    this.metaService.updateTag({ property: MetaTag.OgDescription, content: description });
    this.metaService.updateTag({ itemprop: MetaTag.Description, content: description });
  }

  private set title(title: string) {
    this.titleService.setTitle(title);
    this.metaService.updateTag({ property: MetaTag.OgTitle, content: title });
    this.metaService.updateTag({ itemprop: MetaTag.Name, content: title });
  }

  private set url(url: string) {
    this.metaService.updateTag({ property: MetaTag.OgUrl, content: url });
  }

  constructor(
    @Inject('env') private readonly env: Environment,
    private readonly metaService: Meta,
    private readonly titleService: Title,
  ) {}
}
