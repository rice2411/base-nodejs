
export interface IValidation {
  createValidation: (entity: any, errorCodes: string[]) => boolean;
  updateValidation: (entity: any, errorCodes: string[]) => boolean;
}
