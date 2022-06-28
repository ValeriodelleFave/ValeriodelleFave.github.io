import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Constants } from 'src/constants';

@Injectable()
export class NetworkManager {

  httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" })
  };

  constructor(private http: HttpClient) { }

  get<T>(url: Url, options?: { [key: string]: string }) {
    return this.http.get<T>(Constants.shared.baseUrl + url, { params: options });
  }

}

export type Url = ""
  | "language"
  | "languages"
  | "skills"
  | "contacts"
