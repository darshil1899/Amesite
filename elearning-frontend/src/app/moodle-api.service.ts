// moodle-api.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class MoodleApiService {
  private apiUrl = 'https://your-moodle-server-url.com'; // Replace with your Moodle API endpoint URL

  constructor(private http: HttpClient) {}

  // Function to push grade data to Moodle
  pushGradeToMoodle(gradeData: any): Observable<any> {
    const url = `${this.apiUrl}/your-moodle-endpoint-for-pushing-grade`; // Replace with your Moodle API endpoint for pushing grades

    // Replace 'your-moodle-token' with your Moodle token (authentication)
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer your-moodle-token',
      }),
    };

    return this.http.post(url, gradeData, httpOptions).pipe(
      catchError((error) => {
        // Handle any errors that occur during the API call
        console.error('Error pushing grade to Moodle:', error);
        throw error;
      })
    );
  }
}
