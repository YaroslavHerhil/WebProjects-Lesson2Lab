import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RandomService {



    private baseUrl:string = "https://api.random.org/json-rpc/4/invoke";

    constructor(private http:HttpClient) { }

    public get<T>(endpoint:string):Observable<T>
    {
        return this.http.get<T>(`${this.baseUrl}/${endpoint}`)
    }
    public post<T>(data:any ,endpoint:string = ""):Observable<T>
    {
        return this.http.post<T>(`${this.baseUrl}`, data);
    }
    public put<T>(data:any ,endpoint:string):Observable<T>
    {
        return this.http.put<T>(`${this.baseUrl}/${endpoint}`, data);
    }
    public delete<T>(endpoint:string):Observable<T>
    {
        return this.http.delete<T>(`${this.baseUrl}/${endpoint}`);
    }
}
