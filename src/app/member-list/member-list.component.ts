import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})
export class MemberListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'cin', 'name', 'type', 'cv' , 'createdDate'];
dataSource: any[] = [
  {
    id: '123',
    cin:  '11093299',
    name: 'khalil',
    type: 'teacher',
    cv: 'cv1.pdf',
    createdDate: '02/03/2021'
  },
  {
    id: '123',
    cin:  '11093299',
    name: 'khalil',
    type: 'teacher',
    cv: 'cv2.pdf',
    createdDate: '02/03/2021'
  },
  {
    id: '123',
    cin:  '11093299',
    name: 'nawel',
    type: 'teacher',
    cv: 'cv3.pdf',
    createdDate: '02/03/2021'
  },
  {
    id: '123',
    cin:  '11093299',
    name: 'ayman',
    type: 'teacher',
    cv: 'cv4.pdf',
    createdDate: '02/03/2021'
  },
  {
    id: '123',
    cin:  '11093299',
    name: 'hedi',
    type: 'teacher',
    cv: 'cv5.pdf',
    createdDate: '02/03/2021'
  }
];
  constructor() { }

  ngOnInit(): void {
  }

}
