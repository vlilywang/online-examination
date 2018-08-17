
import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map} from 'rxjs/operators';


@Injectable()
export class QuestionService {
    private headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    constructor(
        private http: HttpClient
    ) {}
    getQuestions(page: any, pageSize: any, typeId?: any, beginTime?: any, endTime?: any, keyword?: any): Observable<any> {
        const url = `/api/question`;
        return this.http.get(url, {
            params: {
                page: page || 1,
                pageSize: pageSize || 20,
                typeId: typeId || '',
                beginTime: beginTime || '',
                endTime: endTime || '',
                keyword: keyword || ''
            }
        }).pipe(
            map(res => res)
        );
    }
    deleteQuestion(id: number): Observable<any> {
        const url = `/api/question/delete/id/${id}`;
        return this.http.delete(url).pipe(map((res: any) => {
            return res;
        }));
    }
    deleteQuestions(ids: any): Observable<any> {
        const _deleteIds = ids.toString();
        const url = `/api/question/delete/ids/${_deleteIds}`;
        return this.http.delete(url, { responseType: 'text' as 'text' }).pipe(map((res: any) => {
            return res;
        }));
    }
    addQuestion(title: string, keyword: string, typeId: number, option: string, answer: string): Observable<any> {
        const url = `/api/question`;
        const body = {
            'title': title,
            'keyword': keyword,
            'typeId': typeId,
            'option': option,
            'answer': answer
        };
        return this.http.post(url, body, { headers: this.headers }).pipe(map((res: any) => {
            return res;
        }));
    }
    editQuestion(id: number, title: string, keyword: string, option: string, answer: string): Observable<any> {
        const url = `/api/question${id}`;
        const body = {
            'title': title,
            'keyword': keyword,
            'option': option,
            'answer': answer
        };
        return this.http.put(url, body).pipe(map((res: any) => {
            return res;
        }));
    }

    getQuestion(id: number): Observable<any> {
        const url = `/api/question/${id}`;
        return this.http.get(url).pipe(map((res: any) => {
            return res;
        }));
    }
}

