import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent {
    name = '';
    date = '';
    amount: number | string = '';
    height: number | string = '';
    miles: number | string = '';

    car = {
        make: 'Tata',
        model: 'Punch',
        year: 2023,
    };

    onNameChange = (value: string) => {
        this.name = value;
    };

    onDateChange = (value: string) => {
        this.date = value;
    };

    onAmountChange = (value: string) => {
        this.amount = parseFloat(value);
    };

    onHeightChange = (value: string) => {
        this.height = parseFloat(value);
    };

    onMilesChange = (value: string) => {
        this.miles = parseFloat(value);
    };
}
