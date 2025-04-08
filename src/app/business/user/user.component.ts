import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule, HttpClientModule], 
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'], 
})
export class UserComponent implements OnInit {
  users: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('assets/users.json').subscribe(data => {
      this.users = data;
    });
  }
}