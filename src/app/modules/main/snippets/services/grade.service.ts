
import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map} from 'rxjs/operators';


@Injectable()
export class GradeService {
    private headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    constructor(
        private http: HttpClient
    ) {}
    // 根据用户 / 试卷
    getGrades(page: any, pageSize: any, userId?: any, exampaperId?: any, beginTime?: any, endTime?: any): Observable<any> {
        const url = `/api/grade`;
        return this.http.get(url, {
            params: {
                page: page || 1,
                pageSize: pageSize || 20,
                beginTime: beginTime || '',
                endTime: endTime || '',
                userId: userId || '',
                exampaperId: exampaperId || ''
            }
        }).pipe(
            map(res => res)
        );
    }
    endExam(examId: number, studentAnswer: string[]): Observable<any> {
        const url = `/api/grade/end/${examId}`;
        const body = studentAnswer;
        console.log('student answers:' + studentAnswer);
        return this.http.post(url, body, { headers: this.headers }).pipe(map((res: any) => {
            return res;
        }));
    }
    // 获取当前用户参加的所有考试
    getCurrentUserGrades(page: any, pageSize: any, exampaperId?: any, beginTime?: any, endTime?: any ): Observable<any> {
        const url = `/api/grade/current/all`;
        return this.http.get(url, {
            params: {
                page: page || 1,
                pageSize: pageSize || 20,
                beginTime: beginTime || '',
                endTime: endTime || '',
                exampaperId: exampaperId || ''
            }
        }).pipe(map((res: any) => {
            return res;
        }));
    }
}

