import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ProgramCode} from './program-code.interface';

@Component({
  selector: 'qs-program-code-list',
  templateUrl: './program-code-list.component.html',
})
export class ProgramCodeListComponent {
  @Input()
  programCodes: ProgramCode[];

  @Output()
  view: EventEmitter<ProgramCode> = new EventEmitter<ProgramCode>();

  constructor() {
    // no op
  }

  select(programCode: ProgramCode): void {
    this.view.emit(programCode);
  }
}
