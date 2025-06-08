import { Component } from "@angular/core";
import { FormsModule }   from "@angular/forms";
import { WhileDirective } from "./while.directive";
      
class Item{
    purchase: string;
    done: boolean;
    price: number;
      
    constructor(purchase: string, price: number) {
   
        this.purchase = purchase;
        this.price = price;
        this.done = false;
    }
}
  
@Component({
    selector: "purchase-app",
    standalone: true,
    imports: [FormsModule, WhileDirective],
    template: `
        <h1> Список покупок </h1>
        <div>
            <p>
                <label>Товар</label><br>
                <input [(ngModel)]="text" />
            </p>
            <p>
                <label>Цена</label><br>
                <input [class] = "input_gold ? 'gold': ''" type="number" [(ngModel)]="price" />
            </p>
            <button (click)="checkClick($event)">Добавить</button>
            <button (click)="addItem(text, price)">Добавить</button>
            <p>
                <label>IsGold: </label>
                <input type="checkbox" [(ngModel)]="input_gold" />
            </p>
        </div>
        <p>
            <h3>Количество {{items.length}}</h3>
        <table>
            <thead>
                <tr>
                    <th>Предмет</th>
                    <th>Цена</th>
                    <th>Куплено</th>
                </tr>
            </thead>
            <tbody>
            @for (item of items; track item.purchase) {
                <tr>
                    <td>{{item.purchase}}</td>
                    <td>{{item.price}}</td>
                    <td><input type="checkbox" [(ngModel)]="item.done" /></td>
                </tr>
            }
            </tbody>
        </table>
        <p *while="condition">
        Первый параграф
        </p>
        <p *while="!condition">
        Второй параграф
        </p>
        <button (click)="toggle()">Toggle</button>
        `,
    styleUrls: ['./app.component.css']
})
export class AppComponent { 
    text: string = "";
    price: number = 0;
    input_gold: boolean = false;
    condition = true;

    toggle(){
        this.condition=!this.condition;
    }
      
    items: Item[] = 
    [
        { purchase: "Хлеб", done: false, price: 15.9 },
        { purchase: "Масло", done: false, price: 60 },
        { purchase: "Картофель", done: true, price: 22.6 },
        { purchase: "Сыр", done: false, price:310 }
    ];
    checkClick($event: any): void
    {
        console.log($event);
    }
    addItem(text: string, price: number): void {
          
        if(text==null || text.trim()=="" || price==null)
            return;
        var lastItem = this.items.find((i)=> i.purchase === text);
        if(lastItem == null)
        {
            this.items.push(new Item(text, price));
            return;
        }
        lastItem.price += price;
    }
}