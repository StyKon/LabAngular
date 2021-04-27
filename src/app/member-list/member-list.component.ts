import { Component, OnInit } from '@angular/core';
import { Member } from 'src/models/member.model';
import { MemberService } from 'src/services/member.service';
import { GLOBAL } from '../app-config';
@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})
export class MemberListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'cin', 'name', 'type', 'cv' , 'createdDate','action'];
  dataSource : Member[] = [] ;
  constructor(private memberService: MemberService) { }

  ngOnInit(): void {
    this.dataSource = this.memberService.tab;
  }
  OnRemoveAccount(id:any)
{
  this.memberService.RemoveMemberById(id).then
  (()=>this.fetchDataSource())
}
  fetchDataSource() : void {
    this.memberService.GetAllMembers().then((data)=> this.dataSource=data);
  }
  applyFilter(){
    
  }
}
