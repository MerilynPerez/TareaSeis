import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-wordpress',
  templateUrl: './wordpress.page.html',
  styleUrls: ['./wordpress.page.scss'],
})
export class WordpressPage implements OnInit {

  public logoUrl: string = '';
  public news: any[] = [];

  constructor(public http: HttpClient) {
   }

  ngOnInit() {
    this.getWordPressLogo();
    this.getLatestNews();
  }

  getWordPressLogo() {

    this.logoUrl = 'https://variety.com/wp-content/uploads/2014/01/variety-logo.jpg';

  }

  getLatestNews() {
    const url = 'https://variety.com/wp-json/wp/v2/posts?per_page=3';

    this.http.get(url).subscribe((data: any) => {
      this.news = data;
    });
  }

}
