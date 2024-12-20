import { Injectable,Inject,PLATFORM_ID } from '@angular/core';
import { Router } from '@angular/router';
import { Buffer } from "buffer";
import { isPlatformBrowser } from '@angular/common';
const TOKEN_KEY = "token";

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  private isBrowser: boolean;

  constructor(private router: Router,@Inject(PLATFORM_ID) private platformId: Object)
  {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  public setToken(token: string) {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);

  }
  public getToken(): string | null {
    if (this.isBrowser){
    return window.sessionStorage.getItem(TOKEN_KEY);
    }
    else{
      return "";
    }

  }

  public isLogged(): boolean {
    if (this.getToken())
      {
        return true;
      }
      return false;
    }

    public login(token: string) {
       this.setToken(token);
       this.router.navigate(["/dashboard"]).then(() => {
        window.location.reload();
      });
    }

    public logout() {
      window.sessionStorage.clear();
      this.router.navigate(["/login"]).then(() => {
        window.location.reload();
      });
    }

    private decodePayload(token: string): any {
      const payload = token!.split(".")[1];
      const payloadDecoded = Buffer.from(payload, 'base64').toString('ascii');
      const values = JSON.parse(payloadDecoded);
      return values;
    }

    public getCodigo(): string {
      const token = this.getToken();
      if (token) {
        const values = this.decodePayload(token);
        return values.id;
      }
      return "";
    }

    public getEmail(): string {
      const token = this.getToken();
      if (token) {
      const values = this.decodePayload(token);
      return values.sub;
      }
      return "";
    }

    public getName(): string {
      const token = this.getToken();
      if (token) {
      const values = this.decodePayload(token);
      return values.nombre;
      }
      return "";
    }

    public getId(): string {
      const token = this.getToken();
      if (token) {
      const values = this.decodePayload(token);
      return values.id;
      }
      return "";
    }

    public getRole(): string {
      const token = this.getToken();
      if (token) {
      const values = this.decodePayload(token);
      return values.roles;
      }
      return "";
    }

    public isLoggedCliente(): boolean {
      if (this.getRole() == "USER")
        {
          return true;
        }
        return false;
    }
}
