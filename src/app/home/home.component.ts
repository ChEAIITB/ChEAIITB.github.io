import { DOCUMENT } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, Component, Inject } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeComponent {
  constructor(@Inject(DOCUMENT) private document: Document) {}
  ngOnInit(): void {
    const counterNum = document.getElementsByClassName("counter-numbers");
        const speed = 15;
        for(var i =0;i<counterNum.length;i++){
          var currentElement = counterNum.item(i) as HTMLElement;
            const updateNumber = () =>{
                const targetNumber = parseInt(currentElement!.dataset['number']!);
                const initialNumber = parseInt(currentElement!.innerText);
                const incrementNumber = Math.trunc(targetNumber/speed);
                if(initialNumber<targetNumber){
                    currentElement.innerText= `${initialNumber+incrementNumber}+`;
                    setTimeout(updateNumber,100);
                }
            };
            updateNumber();
        };
  }
}
