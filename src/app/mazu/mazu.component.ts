import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-mazu',
  templateUrl: './mazu.component.html',
  styleUrls: ['./mazu.component.css']
})
export class MazuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onClickMe() {
    alert("白沙媽已收到信眾的願望，目前求掛人數眾多，請稍後...")
  }


}
