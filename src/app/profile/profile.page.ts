import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, ReactiveFormsModule} from '@angular/forms';
import { DataService } from '../servises/data.service';

@Component({
  selector: 'slides',
  templateUrl: 'profile.page.html',
  styleUrls: ['profile.page.scss'],
})
export class ProfilePage implements OnInit {

  slideOpts = {
    effect: 'flip'
  };

  myForm : FormGroup 
  
  constructor(private infoServ: DataService, private fB: FormBuilder) {
  }

  ngOnInit() {
    this.infoServ.getData().then((data) => {
      this.myForm = this.fB.group({
        status: [data.status],
        age: [data.age],
        city: [data.city],
        duty: [data.duty],
        music: [data.music],
        film: [data.film],
        serial: [data.serial],
        book: [data.book],
        game: [data.game],
        hobby: [data.hobby],
        quote: [data.quote],
        politicalViews: [data.politicalViews],
        ideology: [data.ideology],
        purposeOfLife: [data.purposeOfLife],
        mainInPeople: [data.mainInPeople],
        lifestyle: [data.lifestyle],
        inspiration: [data.inspiration]
      });
    }) 
  }
}
