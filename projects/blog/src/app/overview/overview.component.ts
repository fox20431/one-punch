import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PagedPosts, Post } from '../post';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

    constructor(private http: HttpClient) {}

    posts: Array<Post> = undefined

    ngOnInit(): void {
        let pagedPostsObs = this.http.get("/api/posts?page=0&size=10&overview=true")
        pagedPostsObs.subscribe((data: PagedPosts) => {this.posts = data.content})
    }
    
}
