import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { IStudentModel } from "../model/IStudentModel";
import { Observable, catchError, throwError } from "rxjs";

@Injectable()
export class StudentService
{
    
    baseUrl = 'http://localhost:3000/student';

    constructor(private httpClient: HttpClient) 
    {
    }

    getStudents(): Observable<IStudentModel[]> 
    {
        return this.httpClient.get<IStudentModel[]>(this.baseUrl)
        .pipe(catchError(this.handleError));
    }

    private handleError(errorResponse: HttpErrorResponse) {
        if (errorResponse.error instanceof ErrorEvent) {
            console.error('Client Side Error :', errorResponse.error.message);
        } else {
            console.error('Server Side Error :', errorResponse);
        }
        return throwError('There is a problem with the service. We are notified & working on it. Please try again later.');
    }

    getStudent(id: number): Observable<IStudentModel> 
    {
        return this.httpClient.get<IStudentModel>(`${this.baseUrl}/${id}`)
            .pipe(catchError(this.handleError));
    }

    updateStudent(student: IStudentModel): Observable<void> {
        return this.httpClient.put<void>(`${this.baseUrl}/${student.id}`, student, 
        {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        })
            .pipe(catchError(this.handleError));
    }

    addStudent(student: IStudentModel): Observable<IStudentModel> {
        return this.httpClient.post<IStudentModel>(this.baseUrl, student, {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        })
        .pipe(catchError(this.handleError));
    }

    deleteStudent(id: number|null): Observable<void> {
        return this.httpClient.delete<void>(`${this.baseUrl}/${id}`)
            .pipe(catchError(this.handleError));
    }


} 