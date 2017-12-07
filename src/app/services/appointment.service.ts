import { Injectable } from '@angular/core';
import { ISalesPerson } from '../interfaces/index';
import { SalesPerson } from '../models/index';

import { salesPersons } from '../data/index';
@Injectable()

export class AppointmentService {

    salesPerson: ISalesPerson


    constructor() {

    }

    getSalesPerson():ISalesPerson[]{
        return salesPersons.map(element => new SalesPerson(element));
    }


}