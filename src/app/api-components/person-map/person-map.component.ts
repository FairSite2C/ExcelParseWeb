import { Component, OnInit, Input, Output, ChangeDetectionStrategy} from '@angular/core';
import {
  HttpClient, HttpRequest,
  HttpResponse, HttpEvent, HttpEventType
} from '@angular/common/http';

import { Observable } from 'rxjs';
//just change something
import {
  CompanyService,
  MasterMapService,
  PersonService,
  ImportService,
  SaleService
} from '../../api/services';

import {
  MasterMap,
  MasterMaps,
  Person,
  PersonMap,
  PersonMaps,
  PersonMapAdd,
  Company,
  ReturnResponsePersonMap,
  ReturnResponsePerson,
  ReturnResponseCompany,
  Companies,
  Sale,
  Sales,
  SearchParameter,
  SortParameter,
  StdCollectionInputs,
  StdCollectionInputsId,
} from '../../api/models';

@Component({
  selector: 'person-map',
  templateUrl: './person-map.component.html',
  changeDetection:ChangeDetectionStrategy.Default
})

export class PersonMapComponent implements OnInit {

  constructor(

    private co:       CompanyService,
    private mm:       MasterMapService,
    private p:        PersonService,
    public s:         SaleService,
    public im:        ImportService,
    public http:      HttpClient
  ) { }

  public phase: number = 0;
  private maxPhase: number = 3;

  public useMap: string = "1";

  public person: Person = {name:'',companyId:2,email:''};
  public company: Company  = {name:''};;
  
  public companies: Company[];
  public masterMap: MasterMap;
  public masterMaps: MasterMap[];
  public personMap: PersonMap;
  public personMaps: PersonMap[];
  public personMapAdd: PersonMapAdd;

  public errs: string[] = [];
 
  async ngOnInit() {

    await this.loadMasterMaps();
    await this.loadPerson(2);
    
    this.phase = 1;
  }
 
  public async loadPerson(id:number){
   
    await this.p.GetPerson(id).toPromise()
      .then((data: ReturnResponsePerson) => {
        if (data.success){
          this.person = data.result;
          this.loadCompany();
        }else{
          this.errs = data.errors;
        }
      })
      .catch((data) =>{
        //should do something
      });
  }

  public async loadCompany(){

    await this.co.GetCompany(this.person.companyId).toPromise()
      .then((data: ReturnResponseCompany) => {
        if (data.success){
          this.company = data.result;
        }else{
          this.errs = data.errors;
        }
      })
      .catch((data) => {
        //should do something
      });
  }

  public async loadMasterMaps(){

    var sci: StdCollectionInputs = {};
    await this.mm.GetAll(sci).toPromise()
      .then((data: MasterMaps) => {
        if (data.success){
          this.masterMaps = data.items;
          this.masterMap = this.masterMaps[0];
        }else{
          this.errs = data.errors;
        }
      })
      .catch((data) => {
        //should do something
      });
  }

  public async loadPersonMaps(){

    var sci: StdCollectionInputsId = {id:this.masterMap.id};
    if (this.useMap == "1"){
      await this.p.GetAllMaps(sci).toPromise()
        .then((data: PersonMaps) => {
          if (data.success){
            this.personMaps = data.items;
            this.personMap = this.personMaps[0];
          }else{
            this.errs = data.errors;
          }
        })
        .catch((data) => {
          //should do something
        });
    }else{
      var sci: StdCollectionInputsId = {
        id:this.person.companyId,
        searchParameters:[]
      };
      sci.searchParameters.push({column:'masterMapId',compare:1,value:this.masterMap.id});
      await this.co.GetAllMaps(sci).toPromise()
        .then((data: PersonMaps) => {
          if (data.success){
            this.personMaps = data.items;
          }else{
            this.errs = data.errors;
          }
        })
        .catch((data) => {
          //should do something
        });
    }
  }

  public sampleUploaded: boolean = false;
  public theirHeaders: string[];
  public addMap: PersonMapAdd;

  public async addNew(){
    
    this.theirHeaders = [];
    
    this.addMap = {
      name: '',
      personId: this.person.id,
      masterMapId: this.masterMap.id,
      columns: []
    }

    this.masterMap.columns.forEach((col) =>{
        this.addMap.columns.push(
          {
            ourHeader: col.header,
            theirHeader: ''
          }
        )
    });

    this.sampleUploaded = false;
    this.phase = 4;
  }
  
  public async saveNew(){
  
    if (this.addMap.name == ''){
       this.errs.push("Name is required");
    }

    this.addMap.columns.forEach((col) =>{
        
        if (col.theirHeader == "xyz123") col.theirHeader = '';
        if( this.masterMap.columns.find(o => o.header === col.ourHeader).required 
        && col.theirHeader == ''){
           this.errs.push( col.ourHeader + " is required");

        };
    });

    if (this.errs.length == 0){
       await this.p.AddMap(this.addMap).toPromise()
       .then((data: ReturnResponsePersonMap) => {
        if (data.success){
          this.loadPersonMaps();
          this.phase = 2;
        }else{
            this.errs = data.errors;     
        }
      })
      .catch((data) =>{
        //should do something
      });    
    }
  }

  public async clickPrevious(){

    if (this.phase > 1){
      this.errs = [];
      this.phase--;
    } 
  }
  
  public async clickNext(){

    var phaseToBe : number;
  
    if (this.phase < this.maxPhase){
 
      this.errs = [];
      phaseToBe = ++this.phase;
      switch(phaseToBe){
        case 1:
          break;
        case 2:
          await this.loadPersonMaps();
          break;
        case 3:
          break;
      }
      this.phase = phaseToBe;
    } 
  }

  fileToUpload:File;

  uploadUrl: string = this.co.rootUrl + '/import/getSheetHeaders';
  
  postForHeaders(files: FileList) {
    this.fileToUpload = files.item(0); 
    let formData = new FormData(); 
    formData.append('file', this.fileToUpload, this.fileToUpload.name); 
    
    this.http.post(
      this.uploadUrl, 
      formData).toPromise()
      .then((data: string[]) => {
        this.theirHeaders = data;
        this.sampleUploaded = true;
      })
      .catch((data) =>{
        //should do something
      });    
  }

  postSheets(files: FileList) {
    this.uploadUrl = this.co.rootUrl + '/import/upload/xl';
    this.fileToUpload = files.item(0); 
    let formData = new FormData(); 
    formData.append('file', this.fileToUpload, this.fileToUpload.name); 
    formData.append('personMapId',this.personMap.id.toString());
    formData.append('personId',this.person.id.toString());
    
    this.http.post(
      this.uploadUrl, 
      formData).toPromise()
      .then((data: string[]) => {
        this.theirHeaders = data;
        this.sampleUploaded = true;
      })
      .catch((data) =>{
        //should do something
      });    
  }

  multiple:boolean = false;
  showFile: boolean = false;
  fileUploads: Observable<string[]>;
  
  @Input() fileUpload: string;
 
  caption:string;

  selectedFiles: FileList;
  currentFileUpload: File;
  progress: { percentage: number } = { percentage: 0 };
 
  selectFile(event) {
    this.selectedFiles = event.target.files;
  }
 
  upload() {
    this.progress.percentage = 0;
 
    this.currentFileUpload = this.selectedFiles.item(0);
    this.pushFile(this.currentFileUpload).subscribe(event => {
      if (event.type === HttpEventType.UploadProgress) {
        this.progress.percentage = Math.round(100 * event.loaded / event.total);
      } else if (event instanceof HttpResponse) {
        console.log('File is completely uploaded!');
      }
    });
 
    this.selectedFiles = undefined;
  }

  pushFile(file: File): Observable<HttpEvent<{}>> {
    const formData: FormData = new FormData();
     
    formData.append('file', file);
 
    const req = new HttpRequest('POST', this.uploadUrl, formData, {
      reportProgress: true,
      responseType: 'text'
    });
 
    return this.http.request(req);

  }

  public sales: Sales = {} ;

  public saleSearch : StdCollectionInputs = {
    searchParameters: [
        {column: 'patient_Last', compare: 1, value: 'Jones',               or: false},
        {column: 'patient_City', compare: 1, value: 'Roseville',               or: false}
        //{column: 'createdt',    compare: 4, value: '2018-12-25', or: false}
    ],
    sortParameters: [
        {column: 'patient_Last',  desc:false},
        {column: 'patient_First', desc:false}
    ]
  };

  // start copy for parameter input

  deleteSearchRow(row:number) {
    this.saleSearch.searchParameters.splice(row, 1) 
  }

  addSearchRow(row:number) {
    var sp: SearchParameter = {
      column: this.lowerFirstLetter(this.masterMap.columns[0].columnName),
      compare:1,
      value:null
    }
  
    this.saleSearch.searchParameters.splice(row+1, 0, sp);
 
  }
 
  deleteSortRow(row:number) {
    this.saleSearch.sortParameters.splice(row, 1) 
  }

  addSortRow(row:number) {

    var sp: SortParameter = {
      column: this.lowerFirstLetter(this.masterMap.columns[0].columnName),
      desc:false
    }
  
    this.saleSearch.sortParameters.splice(row+1, 0, sp);
  }

  // stop copy for input parameters

  async searchSales(){

    this.saleSearch.offset = 0;

    await this.s.GetAll(this.saleSearch).toPromise()
    .then((data: Sales) => {
      if (data.success){
        this.sales = data;
        this.sales.feedback = "bam";
        this.phase = 5;          
      }else{
        this.errs = data.errors;
      }
    })
    .catch((error: any) => {
      this.errs = [];
      switch(error.status){
        case 400:
          this.errs = error.error.errors;
          break;
        case 500:
          this.errs.push(error.message);
          break;
        case 404:
          this.errs.push("site down");
          break;
      }
   
    //should do something
    })
  }

  getRowValue(row, key:string){
 
    return row[this.lowerFirstLetter(key)];
  }

  lowerFirstLetter(str) {
    return str.charAt(0).toLowerCase() + str.slice(1);
  }
   
  async pageSales(page:number){

    var offset: string = "";

    switch(page){
      case 1:
        offset = this.sales.paging.first;
        break;
      case 2:
        offset = this.sales.paging.prev;
        break;
      case 3:
        offset = this.sales.paging.next;
        break;
      case 4:
        offset = this.sales.paging.last;
        break;
    }

    this.saleSearch.offset = Number(offset);
    
    await this.s.GetAll(this.saleSearch).toPromise()
    .then((data: Sales) => {
      this.errs = [];
      if (data.success){
        this.sales = data;          
      }else{
        this.errs = data.errors;
      }
    })
    .catch((error: any) => {
      this.errs = [];
      switch(error.status){
        case 400:
          this.errs = error.error.errors;
          break;
        case 500:
          this.errs.push(error.message);
          break;
        case 404:
          this.errs.push("site down");
          break;

      }
   
    //should do something
    })
  }
}
