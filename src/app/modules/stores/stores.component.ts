import { Input, Component, OnInit, EventEmitter, Output } from '@angular/core'; 
import { StoresService } from 'src/app/services/Stores/stores.service'; 
@Component({
  selector: 'app-stores',
  templateUrl: './stores.component.html',
  styleUrls: ['./stores.component.scss']
})
export class StoresComponent implements OnInit {

  store:any=[]; 

  constructor(public stores:StoresService) { }

  ngOnInit() {
    this.stores.liststores().subscribe((store) => (
      this.store = store 
      ));

    
  }

}
