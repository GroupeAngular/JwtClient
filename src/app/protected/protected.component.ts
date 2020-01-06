import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-protected',
  templateUrl: './protected.component.html',
  styleUrls: ['./protected.component.css']
})
export class ProtectedComponent implements OnInit {

  result: string;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<string>('http://localhost:8080/api/protected').subscribe(
      r => this.result = r
    );
  }

}
