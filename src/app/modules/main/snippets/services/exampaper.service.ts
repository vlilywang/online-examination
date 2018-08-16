
import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map} from 'rxjs/operators';


@Injectable()
export class ExampaperService {
    private headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    constructor(
        private http: HttpClient
    ) {}
    getExampapers(page: any, pageSize: any, beginTime?: any, endTime?: any, keyword?: any): Observable<any> {
        const url = `/api/exampaper`;
        return this.http.get(url, {
            params: {
                page: page || 1,
                pageSize: pageSize || 20,
                beginTime: beginTime || '',
                endTime: endTime || '',
                keyword: keyword || ''
            }
        }).pipe(
            map(res => res)
        );
    }
    deleteExampaper(id: number): Observable<any> {
        const url = `/api/exampaper/delete/id/${id}`;
        return this.http.delete(url).pipe(map((res: any) => {
            return res;
        }));
    }
    deleteExampapers(ids: any): Observable<any> {
        const _deleteIds = ids.toString();
        const url = `/api/exampaper/delete/ids/${_deleteIds}`;
        return this.http.delete(url, { responseType: 'text' as 'text' }).pipe(map((res: any) => {
            return res;
        }));
    }
    addExampaper(title: string, keyword: string, singleAmount: number, multiAmount: number, judgeAmount: number): Observable<any> {
        const url = `/api/exampaper`;
        const body = {
            'title': title,
            'keyword': keyword,
            'singleAmount': singleAmount,
            'multiAmount': multiAmount,
            'judgeAmount': judgeAmount
        };
        return this.http.post(url, body, { headers: this.headers }).pipe(map((res: any) => {
            return res;
        }));
    }
    getExampaper(id: number): Observable<any> {
        const url = `/api/exampaper/${id}`;
        return this.http.get(url).pipe(map((res: any) => {
            return res;
        }));
    }
}

