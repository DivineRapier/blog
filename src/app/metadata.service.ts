import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private client: HttpClient) { }

  getPostList() {
    console.log('get /assets/metadata/data.json');
    return this.client.get<Metadata[]>('/assets/metadata/data.json');
  }
}

export interface Metadata {
   name: String;
   path: String;
   tags: String[];
}