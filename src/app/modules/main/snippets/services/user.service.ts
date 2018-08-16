
import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map} from 'rxjs/operators';


@Injectable()
export class UserService {
    private headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    constructor(
        private http: HttpClient
    ) {
    }
    getUsers(page: any, pageSize: any, role?: any, beginTime?: any, endTime?: any, keyword?: any): Observable<any> {
        const url = `/api/user`;
        return this.http.get(url, {
            params: {
                page: page || 1,
                pageSize: pageSize || 20,
                roleId: role || '',
                beginTime: beginTime || '',
                endTime: endTime || '',
                keyword: keyword || ''
            }
        }).pipe(
            map(res => res)
        );
    }
    deleteUser(id: number): Observable<any> {
        const url = `/api/user/delete/id/${id}`;
        return this.http.delete(url).pipe(map((res: any) => {
            return res;
        }));
    }
    deleteUsers(ids: any): Observable<any> {
        const _deleteIds = ids.toString();
        const url = `/api/user/delete/ids/${_deleteIds}`;
        return this.http.delete(url, { responseType: 'text' as 'text' }).pipe(map((res: any) => {
            return res;
        }));
    }
    addUser(username: string, name: string, roleId: number): Observable<any> {
        const url = `/api/user`;
        const body = {
            'username': username,
            'name': name,
            'roleId': roleId
        };
        return this.http.post(url, body, { headers: this.headers }).pipe(map((res: any) => {
            return res;
        }));
    }
    editUser(id: number, name: string, roleId: number): Observable<any> {
        const url = `/api/user/${id}`;
        const body = {
            'name': name,
            'roleId': roleId
        };
        return this.http.put(url, body).pipe(map((res: any) => {
            return res;
        }));
    }
    editCurrentPassword(oldPassword: string, newPassword: string): Observable<any> {
        const url = `/api/user/password`;
        const body = {
            'oldPassword': oldPassword,
            'newPassword': newPassword
        };
        return this.http.put(url, body).pipe(map((res: any) => {
            return res;
        }));
    }
    editUserPassword(id: number, newPassword: string): Observable<any> {
        const url = `/api/user/${id}/password`;
        const body = {
            'newPassword': newPassword
        };
        return this.http.put(url, body).pipe(map((res: any) => {
            return res;
        }));
    }
    getUser(id: number): Observable<any> {
        const url = `/api/user/${id}`;
        return this.http.get(url).pipe(map((res: any) => {
            return res;
        }));
    }
}

