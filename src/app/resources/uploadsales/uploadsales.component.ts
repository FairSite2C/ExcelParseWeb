// import { Component, OnInit, Input } from '@angular/core';
// import { Observable } from 'rxjs';
// // import { UploadfileService } from '../../../service/upload/uploadfile.service'
// import { HttpResponse, HttpEventType } from '@angular/common/http';

// @Component({
//   selector: 'app-uploadsales',
//   templateUrl: './uploadsales.component.html',
//   styleUrls: ['./uploadsales.component.css']
// })
// export class UploadsalesComponent implements OnInit {
//   showFile = false;
//   fileUploads: Observable<string[]>;
//   @Input() fileUpload: string;
  
//   selectedFiles: FileList;
//   currentFileUpload: File;
//   progress: { percentage: number } = { percentage: 0 };

//   constructor() { }
  
//   ngOnInit() { }

//   showFiles(enable: boolean) {
//     this.showFile = enable;
 
//     if (enable) {
//       // this.fileUploads = this.uploadfile.getFiles();
//     }
//   }
//   selectFile(event) {
//     this.selectedFiles = event.target.files;
//   }
 
//   upload() {
//     this.progress.percentage = 0;
 
//     this.currentFileUpload = this.selectedFiles.item(0);
//     this.uploadfile.pushFileToStorage(this.currentFileUpload).subscribe(event => {
//       if (event.type === HttpEventType.UploadProgress) {
//         this.progress.percentage = Math.round(100 * event.loaded / event.total);
//       } else if (event instanceof HttpResponse) {
//         console.log('File is completely uploaded!');
//       }
//     });
 
//     this.selectedFiles = undefined;
//   }
// }
