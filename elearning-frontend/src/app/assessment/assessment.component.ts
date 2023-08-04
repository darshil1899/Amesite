// assessment.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-assessment',
  templateUrl: './assessment.component.html',
  styleUrls: ['./assessment.component.css'],
})
export class AssessmentComponent implements OnInit {
  assessmentForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    // Initialize your form with question and answer groups
    this.assessmentForm = this.formBuilder.group({
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

  submitAssessment() {
    console.log('Submit button clicked!'); // Debug statement
    const assessmentData = this.assessmentForm.value;
    console.log(assessmentData); // Verify form data in the console
    // Rest of the code...
  }
}
