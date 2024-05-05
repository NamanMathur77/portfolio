import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FileReadServiceService } from './services/file-read-service.service';
import { SkillsComponent } from './skills/skills.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SkillsComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'portfolio_templates';
  userData: any;
  selectedOption= 0;

  constructor(private fileReadService:FileReadServiceService){}

  ngOnInit(): void {
    this.fileReadService.getJSON().subscribe(data=>{
      this.userData = data;
    })
  }

  selectOption(option:any){
    this.selectedOption = option
  }
}
