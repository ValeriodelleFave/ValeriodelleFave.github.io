import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class NetworkManager {

  httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" })
  };

  constructor(private http: HttpClient) { }

  get<T>(url: Url, options?: { [key: string]: string }) {
    let devUrl = "http://localhost:3000/portfolio/" + url;
    let prodUrl = "https://my-endpoints.herokuapp.com/portfolio/" + url;
    return this.http.get<T>(devUrl, { params: options });
  }

}

export type Url = ""
  | "language"
  | "languages"
  | "skills"
  | "contacts"
