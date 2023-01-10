import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

    constructor(private http: HttpClient) {}

    ngOnInit(): void {
        let pagedPostsObs = this.http.get("/posts?page=0&size=10")
        pagedPostsObs.subscribe((data) => {console.log(data)})
        throw new Error('Method not implemented.');
    }
    
}
