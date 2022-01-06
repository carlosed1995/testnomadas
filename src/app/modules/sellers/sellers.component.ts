import { Input, Component, OnInit, EventEmitter, Output } from '@angular/core';
import {FormBuilder ,  FormGroup, FormControl,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SellersService } from 'src/app/services/Sellers/sellers.service';
import { ListUsesService } from 'src/app/services/ListUses/list-uses.service';

@Component({
  selector: 'app-sellers',
  templateUrl: './sellers.component.html',
  styleUrls: ['./sellers.component.scss']
})
export class SellersComponent implements OnInit {
  sellers:any=[];
  sexes:any=[];

  constructor(public seller:SellersService, private listUses: ListUsesService) { }

  ngOnInit() {
    this.seller.listseller().subscribe((sellers) => (
      this.sellers = sellers 
      ));

      this.listUses.listsexes().subscribe((sexes) => (
        this.sexes = sexes 
        ));
  }

  selectSx(id){

    var props = ['id', 'sex'];

    var result = this.sexes.filter(function(o1){ 
          return o1.id === id;
  }).map(function(o){ 
      return props.reduce(function(newo, sex){
          newo[sex] = o[sex];
          return newo;
      }, {});
  });

 return result[0].sex;

  }

}
 