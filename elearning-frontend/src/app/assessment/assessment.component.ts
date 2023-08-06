import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-assessment',
  templateUrl: './assessment.component.html',
  styleUrls: ['./assessment.component.css'],
})
export class AssessmentComponent implements OnInit {
  assessmentForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.assessmentForm = this.formBuilder.group({
      userId: new FormControl(''),
      assessmentId: new FormControl(''),
      question1: this.formBuilder.group({
        question: 'What is the capital of France?',
        answer: new FormControl(''),
      }),
      question2: this.formBuilder.group({
        question: 'What is 2 + 2?',
        answer: new FormControl(''),
      }),
      // Question 3
      question3: this.formBuilder.group({
        question: 'What is the capital of Germany?',
        answer: new FormControl(''),
      }),
      // Question 4
      question4: this.formBuilder.group({
        question: 'What is 3 + 3?',
        answer: new FormControl(''),
      }),
    });
  }

  async submitAssessment() {
    // Calculate the grade based on the selected answers
    const grade = this.calculateGrade(this.assessmentForm.value);

    // Get the user ID and assessment ID from the form
    const { userId, assessmentId } = this.assessmentForm.value;

    // Send grade data to backend API to store in the database
    try {
      const response = this.http
        .post('http://localhost:3000/api/store-grade', {
          user_id: userId,
          assessment_id: assessmentId,
          grade: grade,
        })
        .subscribe((response) => {
          console.log(response);
        });
      this.snackBar.open('Grade data has been successfully saved!', 'Close', {
        duration: 5000, // Duration in milliseconds (optional)
      });
    } catch (error) {
      console.error('Error storing grade data:', error);
      // Handle error (if necessary)
    }
  }

  calculateGrade(assessmentData: any): number {
    const correctAnswers: Record<string, string> = {
      question1: 'paris',
      question2: '4',
      question3: 'berlin',
      question4: '6',
    };

    // Calculate the number of correct answers
    let correctCount = 0;
    for (const question in correctAnswers) {
      if (assessmentData[question]?.answer === correctAnswers[question]) {
        correctCount++;
      }
    }

    // Calculate the percentage of correct answers
    const totalQuestions = Object.keys(correctAnswers).length;
    const percentage = (correctCount / totalQuestions) * 100;
    return Math.round(percentage);
  }
}
