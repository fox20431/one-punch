import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PagedPosts, Post } from '../post';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

    constructor(private http: HttpClient) {}

    posts: Array<Post> = undefined

    ngOnInit(): void {
        let pagedPostsObs = this.http.get("/posts?page=0&size=10")
        pagedPostsObs.subscribe((data: PagedPosts) => {this.posts = data.content})
    }
    
}
