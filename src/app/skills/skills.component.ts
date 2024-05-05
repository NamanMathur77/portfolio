import { Component, OnInit } from '@angular/core';
import { FileReadServiceService } from '../services/file-read-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent implements OnInit {
  constructor(private fileReadService:FileReadServiceService){}

  skills:any
  ngOnInit(): void {
    this.fileReadService.getJSON().subscribe(data=>{
      this.skills = data.skills;
    })
  }

}
