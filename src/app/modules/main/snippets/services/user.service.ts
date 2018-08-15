
import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map} from 'rxjs/operators';


@Injectable()
export class UserService {
    constructor(
        private http: HttpClient
    ) {}
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
}

