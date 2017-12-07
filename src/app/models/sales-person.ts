import { ITimeGap } from './../interfaces/ITimeGap';
import { ISalesPerson } from "../interfaces/index"; 

export class SalesPerson implements ISalesPerson{

    firstname:string = '';
    lastname:string = '';

    schedule = {
        meetings: [{
            start: 0,
            end: 3,
            client: {
                name: 'abc',
                address: 'complete address'
            },
            location: 'TNA'
        }]
    }

    get fullname(){
        return this.firstname +' ' +  this.lastname;
    }

    isBusyAt(time:ITimeGap):boolean{
        
        for (var index = 0; index < this.schedule.meetings.length; index++) {
            let item = this.schedule.meetings[index];
            if(item.start == time.from || item.end == time.to){
                return true;
            }
        }

        return false;
    }


    constructor(props?){
        this.firstname = props.firstname
        this.lastname = props.lastname
    }
}