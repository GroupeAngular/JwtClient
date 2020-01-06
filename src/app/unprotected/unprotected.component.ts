import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-unprotected',
  templateUrl: './unprotected.component.html',
  styleUrls: ['./unprotected.component.css']
})
export class UnprotectedComponent implements OnInit {

  result: string;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('http://localhost:8080/api/unprotected', {responseType: 'text'}).subscribe(
      r => this.result = r
    );
  }

}
