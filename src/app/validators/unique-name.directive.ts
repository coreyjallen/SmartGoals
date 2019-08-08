import { Directive, Input } from '@angular/core';
import { Validator, NG_VALIDATORS, AbstractControl, ValidatorFn } from '@angular/forms';

export function uniqueNameValidator(existingNames: String[]): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} | null => { 
        const isDuplicate = control.value? existingNames.includes(control.value.trim()): false;
        return isDuplicate ? {'duplicateName': true } : null;
    };
}

@Directive({
    selector: '[uniqueNameValidator]',
    providers: [{ provide: NG_VALIDATORS, useExisting: UniqueNameValidatorDirective, multi: true}]
})
export class UniqueNameValidatorDirective implements Validator {
    @Input('uniqueNameValidator') existingNames: String;

    validate(control: AbstractControl): {[key: string]: any} | null {
        return this.existingNames ? uniqueNameValidator(this.existingNames.split(','))(control) : null
    }
}