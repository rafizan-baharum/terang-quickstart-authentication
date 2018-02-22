import {Component, OnDestroy, OnInit, ViewContainerRef} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {ActivatedRoute, Router} from '@angular/router';
import {MatDialog, MatDialogConfig} from '@angular/material';
import {ProgramCodeResult} from './program-code-result.interface';
import {CommonService} from '../../services/common.service';
import {ProgramCode} from './program-code.interface';

@Component({
  selector: 'qs-dashboard',
  templateUrl: './dashboard.page.html',
})
export class DashboardPage implements OnInit, OnDestroy {

  programCodeResult$: Observable<ProgramCodeResult>;

  // constructor
  constructor(private commonService: CommonService,
              private router: Router,
              private route: ActivatedRoute,
              private vcf: ViewContainerRef,
              private dialog: MatDialog) {
  }

  loadPosts(): void {
    this.programCodeResult$ = this.commonService.findProgramCodes();
  }

  viewProgramCode(programCode: ProgramCode): void {
    console.log(JSON.stringify(programCode));
    this.router.navigate(['/detail', programCode.code]);
  }

  ngOnInit(): void {
    this.loadPosts();
  }

  ngOnDestroy(): void {
    // no op
  }

  showAddDialog(): void {
    // console.log('showContainerDialog');
    // let config: MatDialogConfig = new MatDialogConfig();
    // config.viewContainerRef = this.vcf;
    // config.role = 'dialog';
    // config.width = '70%';
    // config.height = '60%';
    // config.position = {top: '0px'};
    // this.creatorDialogRef = this.dialog.open(AssetCreatorDialog, config);
    // this.creatorDialogRef.afterClosed().subscribe((res) => {
    //   console.log('close dialog');
    // });
  }
}
