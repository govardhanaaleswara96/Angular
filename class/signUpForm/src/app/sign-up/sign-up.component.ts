// import { Component } from '@angular/core';
// import { FormBuilder, Validators } from '@angular/forms';
// import { HttpClient } from '@angular/common/http';

// @Component({
//   selector: 'app-sign-up',
//   templateUrl: './sign-up.component.html',
//   styleUrls: ['./sign-up.component.css'],
// })
// export class SignUpComponent {
//   url = 'http://localhost:3000/user';
//   signForm = this.fb.group({
//     name: [null, Validators.required],
//     email: [null, Validators.required],
//     password: [null, Validators.required],
//     cPassword: [null, Validators.required],
//   });

//   hasUnitNumber = false;
//   constructor(private fb: FormBuilder, private http: HttpClient) {}
//   // constructor(private fb:FormBuilder,http: HttpClient) {}

//   onSubmit() {
//     // await this.http
//     //   .post<any>('http://localhost:3000/user', this.signForm.value)
//     //   .subscribe((data) => {
//     //     console.log(data);
//     //   });
//     // await this.http
//     //   .post<any>('https://jsonplaceholder.typicode.com/posts', {
//     //     title: 'Angular POST Request Example',
//     //   })
//     //   .subscribe((data) => {
//     //     this.postId = data.id;
//     //     console.log(data);
//     //   });
//     // try {
//     // console.log(
//     // await this.http.post(this.url, this.signForm.value).toPromise()
//     //   this.http
//     //     .post<any>('http://localhost:3000/user', this.signForm.value)
//     //     .subscribe((data) => {
//     //       console.log(data);
//     //     });
//     //   // );
//     // } catch (error) {
//     //   console.log(error);
//     // }
//     // this.http
//     //   .post("http://localhost:3000/user'", {
//     //     name: 'gova',
//     //     email: 'goabala88@gmail.com',
//     //     pass: '123',
//     //     cPass: '123',
//     //   })
//     //   .subscribe(
//     //     (val) => {
//     //       console.log('POST call successful value returned in body', val);
//     //     },
//     //     (response) => {
//     //       console.log('POST call in error', response);
//     //     },
//     //     () => {
//     //       console.log('The POST observable is now completed.');
//     //     }
//     //   );
//     //create xhr
//     console.log(this.signForm.value);
//     const xhr = new XMLHttpRequest();
//     //open file
//     xhr.open('POST', 'http://localhost:3000/user', true);
//     xhr.setRequestHeader('Content-Type', 'application/json');
//     //onload
//     xhr.onload = () => {
//       if (xhr.status == 200) {
//         console.log(xhr.responseText);
//       }
//     };
//     xhr.send(JSON.stringify(this.signForm.value));
//   }
// }
