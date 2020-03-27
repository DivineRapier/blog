import { Component, OnInit } from '@angular/core';
import { PostsService, Metadata } from 'app/metadata.service';
// import { Metadata, PostsService } from '../../posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  metadata: Metadata[];

  constructor(private postsService: PostsService) { }

  ngOnInit(): void {
    this.postsService.getPostList().subscribe((metadata: Metadata[]) => this.metadata = metadata);
  }
}
