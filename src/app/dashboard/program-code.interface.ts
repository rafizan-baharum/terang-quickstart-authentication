import {ProgramType} from './program-type.enum';
export interface ProgramCode {
  id: number;
  code: string;
  description: string;
  programType: ProgramType;
}
