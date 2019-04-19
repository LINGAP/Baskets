import { Component, OnInit } from '@angular/core';
import { ModalController} from '@ionic/angular';
import { ItemDataService } from '../services/item-data.service'
@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.page.html',
  styleUrls: ['./about-us.page.scss'],
})
export class AboutUsPage implements OnInit {
  ngOnInit() {
  }
  newItem:any;
  page:number=1;
  searchText:string;
  shownItems:{};

  constructor(public itemData:ItemDataService){
    this.newItem='';
    this.shownItems = this.itemData.shoppingList;
  }

  addNewItem(){
    this.itemData.addNewItem(1,this.newItem);
    this.newItem='';
  }

  delete(){
    this.itemData.delete(1);
  }

   async displayDetail(item){
    this.itemData.displayDetail(item.value);
   }

   moveToShoppingList(){
     this.itemData.massMoveItem(1);
   }

   swipeToshoppingList(key){
     this.itemData.__swipe(key,0);
   }

   trackByListType(index:number,item){
     return item.key+item.value.list;
   }

   searchTag(){
     this.shownItems = this.itemData.searchTag(1,this.searchText);
   }


}
