import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class GlobalService {
    constructor (

    ) {}

    params = new Subject();

    setLocal(data) {
        localStorage.setItem('param', data);
    }

    getLocal(data) {
        return localStorage.getItem('param');
    }
}