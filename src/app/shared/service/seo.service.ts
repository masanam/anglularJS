import {Injectable} from '@angular/core'; 
import { Meta, Title } from '@angular/platform-browser';

@Injectable({
    providedIn: 'root'
})
export class SeoService {
  constructor(private title: Title, private meta: Meta) { }


  updateMeta(
    title: string,
    url: string,
    desc: string,
    keyw:string) 
  {
    this.title.setTitle(title);
    this.meta.updateTag({ name: 'title', content: title })
    this.meta.updateTag({ name: 'og:url', content: url })
    this.meta.updateTag({ name: 'description', content: desc })
    this.meta.updateTag({ name: 'keyword', content: keyw })
  }

}