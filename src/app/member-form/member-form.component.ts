import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MemberService } from 'src/services/member.service';

@Component({
  selector: 'app-member-form',
  templateUrl: './member-form.component.html',
  styleUrls: ['./member-form.component.css']
})
export class MemberFormComponent implements OnInit {
  form :any;
  currentItem: any;
  currentItemId: string ="";
  constructor(private memberService :  MemberService ,
    private router: Router ,
    private activatedRoute : ActivatedRoute) { }
    isFormInEditMode():boolean{

      return (!!this.currentItemId);
    }
  ngOnInit(): void {
    this.currentItemId = this.activatedRoute.snapshot.params.id;
    if (!!this.currentItemId){
      this.memberService.getMemberById (this.currentItemId).then(
      item => {
        this.currentItem = item;
        this.initForm(item);
      });
    }
    else {
      this.initForm(null)

    }
  }

  initForm (item : any) : void {
    this.form = new FormGroup(
   {
    cin : new FormControl (item?.cin , [Validators.required]),
    name : new FormControl (item?.name, [Validators.required]),
    cv : new FormControl (item?.cv, []),
    type : new FormControl (item?.type, [Validators.required]),
    });
   }

  onSubmit():void{

    console.log(this.form.value);
    const memberToSave = {...this.currentItem,...this.form.value}
    this.memberService.SaveMember(memberToSave).then
      (() =>this.router.navigate(['']));

  }

}
