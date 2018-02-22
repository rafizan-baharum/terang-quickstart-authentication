import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatDialogRef, MatSnackBar} from '@angular/material';
import {ProgramType} from './program-type.enum';
import {ProgramCode} from './program-code.interface';
import {CommonService} from '../../services/common.service';

@Component({
  selector: 'qs-program-code-creator',
  templateUrl: './program-code-creator.dialog.html',
})
export class ProgramCodeCreatorDialog implements OnInit {

  editorForm: FormGroup;

  // constructor
  constructor(private commonService: CommonService,
              private router: Router,
              private route: ActivatedRoute,
              private snackBar: MatSnackBar,
              private formBuilder: FormBuilder,
              private dialog: MatDialogRef<ProgramCodeCreatorDialog>) {
  }

  ngOnInit(): void {
    this.editorForm = this.formBuilder.group({
      code: ['', Validators.required],
      description: ['', [(Validators.required)]],
      category: [ProgramType.SOCIAL, [(Validators.required)]],
    });
  }

  save(programCode: ProgramCode): void {
    console.log(JSON.stringify(programCode));
    this.dialog.close();
  }
}
