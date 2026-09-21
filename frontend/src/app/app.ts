import { Component } from '@angular/core';
import { User } from './user/user';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [User],   // ✅ THIS FIXES YOUR PROBLEM
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}
