import { Component, OnInit } from '@angular/core';
import { Group } from './Group';

@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.scss']
})
export class CommunityComponent implements OnInit {

  groups: Group[] =[
{
  name:"Harrypohetenses",
  info: "Comunidad dirijida a todos los fans de Harry Potter ",
  people: 234
},
{
  name:"Lovelist",
  info: "Comunidad dirijida los fans de las novelas romanticas y cursis ",
  people: 78
},
{
  name:"Ciencie Fiction Lovers",
  info: "Comunidad dirijida a los amantes de la guerra de las galaxias",
  people: 150
}

  ]

  constructor() { }

  ngOnInit(): void {
  }

}
