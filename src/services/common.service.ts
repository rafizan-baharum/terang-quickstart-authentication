import {Injectable} from '@angular/core';
import {Response} from '@angular/http';
import {environment} from '../environments/environment';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {AuthHttp} from 'angular2-jwt';
import {ProgramCodeResult} from '../app/dashboard/program-code-result.interface';
import {ProgramCode} from '../app/dashboard/program-code.interface';

@Injectable()
export class CommonService {

  constructor(private http: AuthHttp) {
    // no op
  }

  findProgramCodes(): Observable<ProgramCodeResult> {
    return this.http.get(environment.endpoint + '/api/common/programCodes?page=1')
      .map((res: Response) => <ProgramCodeResult>res.json());
  }

  findProgramCodeByCode(code: string): Observable<ProgramCode> {
    return this.http.get(environment.endpoint + '/api/common/programCodes/' + code)
      .map((res: Response) => <ProgramCode>res.json());
  }
}
