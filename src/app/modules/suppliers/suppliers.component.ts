import { Input, Component, OnInit, EventEmitter, Output } from '@angular/core';
import {FormBuilder ,  FormGroup, FormControl,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SuppliersService } from 'src/app/services/suppliers/suppliers.service';
import { ListUsesService } from 'src/app/services/ListUses/list-uses.service';
import { ShoesService } from 'src/app/services/Shoes/shoes.service';

@Component({
  selector: 'app-suppliers',
  templateUrl: './suppliers.component.html',
  styleUrls: ['./suppliers.component.scss']
})
export class SuppliersComponent implements OnInit {
  suppliers:any=[];
  typeshoes:any=[];

  constructor(public supplier:SuppliersService, private listUses: ListUsesService) { }

  ngOnInit() {
    this.supplier.listsuppliers().subscribe((suppliers) => (
      this.suppliers = suppliers 
      ));

      this.listUses.listshoestypes().subscribe((typeshoes) => (
        this.typeshoes = typeshoes 
        ));
  }

  selectShoes(id){

    var props = ['id', 'type'];

    var result = this.typeshoes.filter(function(o1){ 
          return o1.id === id;
  }).map(function(o){ 
      return props.reduce(function(newo, type){
          newo[type] = o[type];
          return newo;
      }, {});
  });

 return result[0].type;

  }


}
