import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { ApisTime } from '../interfaces/apis';

@Component({
  selector: 'app-clima',
  templateUrl: './clima.page.html',
  styleUrls: ['./clima.page.scss'],
})
export class ClimaPage implements OnInit {

  public tiempo!: ApisTime;
  public timeType: string = '';
  public img: string = '';

  constructor(public api: ApiService) { }

  ngOnInit() {
    this.api.getTime().subscribe(data => {
      this.tiempo = data;
      if(data.current_weather.weathercode <= 48 || data.current_weather.weathercode === 0){
        this.timeType = 'Esta soleado';
        this.img = 'https://static.vecteezy.com/system/resources/previews/022/394/347/non_2x/blue-sky-with-clouds-anime-style-background-with-shining-sun-and-white-fluffy-clouds-sunny-day-sky-scene-cartoon-illustration-vector.jpg';
      }else if(data.current_weather.weathercode >= 51){
        this.timeType = 'Esta lloviendo';
        this.img = 'https://i.pinimg.com/originals/c5/58/64/c55864efb7332dd9a4096a55fa0382ee.jpg';
      }else{
        this.timeType = 'Es el fin del mundo';
      }
    });
  }

  

}
