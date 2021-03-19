import { Injectable } from '@angular/core';
import { GLOBAL } from 'src/app/app-config';
import { Member } from 'src/models/member.model';

@Injectable({
  providedIn: 'root'
})

export class MemberService {
  tab : Member[] = [] ;

  constructor() {
    this.tab = GLOBAL._DB.members;
   }
}
