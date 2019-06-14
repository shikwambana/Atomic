/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable()
export class registerService {

    myheaders: HttpHeaders
    url = 'http://localhost:24483/api/register';
    // url = 'http://35.233.234.181/mapi/register';

    header = "Access-Control-Allow-Origin: *";

    constructor(private http : HttpClient){
        this.myheaders = new HttpHeaders();
    }

    register(details){
        console.log(details)

        let headers = new HttpHeaders({
            'Access-Control-Allow-Origin': '*'
        });
        let options = { headers: headers };
        let body = details;

        return this.http.post(this.url, body, options).subscribe(res => {
            console.log('response',res)
        }, err =>{
            console.log(err)
        }) ;
    }
}
