import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})
export class MemberListComponent implements OnInit {
dataSource: any[] = [
  {
    id: '123',
    cin:  '11093299',
    name: 'khalil',
    type: 'teacher',
    cv: '.pdf',
    createdDate: '02/03/2021'
  },
  {
    id: '123',
    cin:  '11093299',
    name: 'khalil',
    type: 'teacher',
    cv: '.pdf',
    createdDate: '02/03/2021'
  },
  {
    id: '123',
    cin:  '11093299',
    name: 'nawel',
    type: 'teacher',
    cv: '.pdf',
    createdDate: '02/03/2021'
  },
  {
    id: '123',
    cin:  '11093299',
    name: 'ayman',
    type: 'teacher',
    cv: '.pdf',
    createdDate: '02/03/2021'
  },
  {
    id: '123',
    cin:  '11093299',
    name: 'hedi',
    type: 'teacher',
    cv: '.pdf',
    createdDate: '02/03/2021'
  }
];
  constructor() { }

  ngOnInit(): void {
  }

}
