import {Component, OnDestroy, OnInit, ViewContainerRef} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {ActivatedRoute, Router} from '@angular/router';
import {MatDialog, MatDialogRef} from '@angular/material';
import {ProgramCode} from './program-code.interface';
import {CommonService} from '../../services/common.service';
import {ProgramCodeCreatorDialog} from './program-code-creator.dialog';

@Component({
  selector: 'qs-program-code-detail',
  templateUrl: './program-code-detail.page.html',
})
export class ProgramCodeDetailPage implements OnInit, OnDestroy {

  programCode$: Observable<ProgramCode>;
  creatorDialogRef: MatDialogRef<ProgramCodeCreatorDialog>;

  columns: any[] = [
    {name: 'referenceNo', label: 'Reference No'},
    {name: 'cost', label: 'Cost'},
  ];

  // constructor
  constructor(private commonService: CommonService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  loadAsset(code: string): void {
    console.log('code: ' + code);
    this.programCode$ = this.commonService.findProgramCodeByCode(code);
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: { code: string }) => {
      this.loadAsset(params.code);
    });
  }

  ngOnDestroy(): void {
    // no op
  }

  goBack(): void {
    this.router.navigate(['/dashboard']);
  }
}
