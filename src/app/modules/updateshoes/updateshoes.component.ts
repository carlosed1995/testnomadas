import { Input, Component, OnInit, EventEmitter, Output } from '@angular/core';
import {FormBuilder ,  FormGroup, FormControl,Validators } from '@angular/forms'; 
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/Auth/auth.service';
import { ShoesService } from 'src/app/services/Shoes/shoes.service';
import { SuppliersService } from 'src/app/services/suppliers/suppliers.service';
import { ListUsesService } from 'src/app/services/ListUses/list-uses.service'; 
import { SellersService } from 'src/app/services/Sellers/sellers.service';
import { StoresService } from 'src/app/services/Stores/stores.service'; 

@Component({
  selector: 'app-updateshoes',
  templateUrl: './updateshoes.component.html',
  styleUrls: ['./updateshoes.component.scss']
})
export class UpdateshoesComponent implements OnInit {

  form: FormGroup;
  id:any; 
  shoes:any;
  sexes:any=[]; 
  suppliers:any=[];
  sellers:any=[];
  stores:any=[];
  @Input() error: string | null;
  @Output() submitEM = new EventEmitter();

  constructor(fb: FormBuilder, public login:AuthService,
              private router: Router,public shoesServ: ShoesService,
              public route: ActivatedRoute,public sellerServ:SellersService,
              public supplierServ: SuppliersService, private listUses: ListUsesService,
              public storeServ: StoresService) { 

                this.form =  fb.group({
                  color: ["", Validators.required],
                  size: ["", Validators.required],
                  sexid: ["", Validators.required],
                  storeid: ["", Validators.required],
                  sellerid: ["", Validators.required],
                  supplierid: ["", Validators.required],
                  quantity: ["", Validators.required],
                  brand: ["", Validators.required],
                  price: ["", Validators.required], 
              });
    
  }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get("id");
    this.shoesServ.detailshoes(this.id).subscribe((shoes) => (
      this.shoes = shoes 
      ));
   
  
        this.listUses.listsexes().subscribe((sexes) => (
          this.sexes = sexes 
        ));
  
        this.sellerServ.listseller().subscribe((sellers) => (
          this.sellers = sellers 
        ));
  
        this.storeServ.liststores().subscribe((stores) => (
          this.stores = stores 
        ));
  
        this.supplierServ.listsuppliers().subscribe((suppliers) => (
          this.suppliers = suppliers 
       ));
        
  }

  submit(){
   
    if (this.form.valid) { 
      const shoes = this.form.value; 
       this.shoesServ.updateShoes(this.form.value).subscribe(shoes => location.reload(),(err) => {alert(err.error)});
    }

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

  selectStore(id){

    var props = ['id', 'name'];
    var result = this.stores.filter(function(o1){ 
      return o1.id === id;
    }).map(function(o){ 
      return props.reduce(function(newo, name){
          newo[name] = o[name];
          return newo;
      }, {});
    });

   return result[0].name;

  } 

  onDeleteShoes(id){
    if (confirm(`¿ Esta seguro de eliminar este zapato ?`)) {
      this.shoesServ.delete(id);
    }
  }

  selectSupplier(id){

    var props = ['id', 'name'];
    var result = this.suppliers.filter(function(o1){ 
      return o1.id === id;
    }).map(function(o){ 
      return props.reduce(function(newo, name){
          newo[name] = o[name];
          return newo;
      }, {});
    });

   return result[0].name;

  } 

  selectSeller(id){

    var props = ['id', 'name'];
    var result = this.sellers.filter(function(o1){ 
      return o1.id === id;
    }).map(function(o){ 
      return props.reduce(function(newo, name){
          newo[name] = o[name];
          return newo;
      }, {});
    });

   return result[0].name;

  } 
 

}
