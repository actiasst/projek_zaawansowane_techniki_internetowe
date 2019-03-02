import { Component } from '@angular/core';

@Component({
    selector: 'counter',
    templateUrl: './counter.component.html'
})
export class CounterComponent {
    public currentCount = 0;
    public message: string = "Hello World";
    public incrementCounter() {
        this.currentCount++;
        console.log(this.message);
        var newObject = new MyClass("Hello");
        newObject.display();
    }
}

export class MyClass {
    public name: string;
    constructor(name: string) {
        this.name = name;
    }
    display(): void {
        console.log(this.name);
    }
}
