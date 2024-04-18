import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ContactMessage } from '../../model/Data.model';
import { DataService } from '../../service/Data/data.service';

@Component({
  selector: 'app-fontionnalites',
  templateUrl: './fontionnalites.component.html',
  styleUrls: ['./fontionnalites.component.css']
})
export class FontionnalitesComponent implements OnInit {
  gridData!: Observable<ContactMessage[]>

  constructor(private dataService: DataService) { 
    this.gridData = this.dataService.currentMessages;
  }

  ngOnInit(): void {
  }

}
