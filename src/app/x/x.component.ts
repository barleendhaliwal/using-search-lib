import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Configuration, IDefaultReturnType, IRecentSearchResult } from 'search-lib';

@Component({
  selector: 'app-x',
  templateUrl: './x.component.html',
  styleUrls: ['./x.component.css']
})
export class XComponent implements OnInit {

  config: Configuration<IDefaultReturnType>
  value!:string
  constructor(private fb: FormBuilder) {

    this.config = new Configuration<IDefaultReturnType>({
      displayPropertyName: 'name',
      models: [
        {
          name: "ToDo",
          displayName: "List",
          imageUrl: 'https://picsum.photos/id/1001/50',

        },
        {
          name: "User",
          displayName: "Users",
          imageUrl: 'https://picsum.photos/id/1/50',
         
        },
      ],
      order: [`name ASC`, `description DESC`],
      hideCategorizeButton:true,
     
     

    })
  }

  ngOnInit(): void { }
  logMouseEvent(event:Event| IRecentSearchResult[]){
    console.log(event)
  }
  logEventOrIRecentSearchResultArray(event:Event| IRecentSearchResult[]){
    console.log(event)
  }
}
