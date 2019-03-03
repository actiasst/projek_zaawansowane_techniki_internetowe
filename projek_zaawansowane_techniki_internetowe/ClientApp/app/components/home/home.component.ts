import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms'

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    public start: string = "";

    loginForm: FormGroup;
    public logged: boolean = false;

    constructor(private formBuilder: FormBuilder) {
        this.loginForm = this.formBuilder.group({
            login: [""],
            password: [""]
        })
    }

    simpleFunction(): void {
        console.log(this.loginForm.controls.login.value)
        console.log(this.loginForm.controls.password.value)
        if (this.loginForm.controls.login.value == "admin" && this.loginForm.controls.password.value == "admin")
            this.logged = true;
        else
            this.logged = false;
    }
    ngOnInit() {
        this.start = "start"; // przyk³ad inicjalizacji na pocz¹tku programu, musi zawieraæ implements OnInit()
    }
}
