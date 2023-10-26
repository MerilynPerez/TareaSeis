import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { ApisUniversidades } from '../interfaces/apis';

@Component({
  selector: 'app-universidad',
  templateUrl: './universidad.page.html',
  styleUrls: ['./universidad.page.scss'],
})
export class UniversidadPage implements OnInit {

  public pais: string = '';
  public universidades: ApisUniversidades[] = [];
  
  constructor(public api: ApiService) { }

  ngOnInit() {
  }
  getUniversidades(){
    this.api.getUNI(this.pais).subscribe((data) => {
      this.universidades = data;
    });
  }

}
