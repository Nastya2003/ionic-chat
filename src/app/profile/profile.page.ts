import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import { DataService } from '../servises/data.service';

@Component({
  selector: 'slides',
  templateUrl: 'profile.page.html',
  styleUrls: ['profile.page.scss'],
})
export class ProfilePage implements OnInit {
  public info = [
    {
      field: 'About me',
      value: ''
    },
    {
      field: 'status',
      value: 'bunny'
    },
    {
      field: 'age',
      value: '15'
    },
    {
      field: 'city',
      value: 'Moscow'
    },
    {
      field: 'duty',
      value: 'schoolgirl'
    }
  ];

  public interests = [
    {
      field: 'My interests',
      value: ''
    },
    {
      field: 'music',
      value: 'rock'
    },
    {
      field: 'films',
      value: 'Requiem for a Dream'
    },
    {
      field: 'serials',
      value: 'none'
    },
    {
      field: 'books',
      value: 'Pet Sematary'
    },
    {
      field: 'games',
      value: '2048'
    },
    {
      field: 'quotes',
      value: 'I`m not a slave to a world that doesn`t give a shit'
    },
    {
      field: 'description',
      value: 'bunny_girl'
    }
  ]

  public position = [
    {
      field: 'My life position',
      value: ''
    },
    {
      field: 'political views',
      value: '-'
    },
    {
      field: 'ideology',
      value: 'freethinker'
    },
    {
      field: 'purpose of life',
      value: 'make people happy'
    },
    {
      field: 'main in people',
      value: 'openness'
    },
    {
      field: 'lifestyle',
      value: 'healthy'
    },
    {
      field: 'inspiration',
      value: 'nature'
    }
  ]

  slideOpts = {
    effect: 'flip'
  };

  myForm : FormGroup 
  
  constructor(private infoServ: DataService, private fB: FormBuilder) {
  }

  ngOnInit() {
    this.infoServ.getData().then((data) => {
       this.myForm = this.fB.group({
        aboutMe: [data.aboutMe],
        status: [data.status],
        age: [data.age],
        city: [data.city],
        duty: [data.duty],
      });
    }) 
  }
}
