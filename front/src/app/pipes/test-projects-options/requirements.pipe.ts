import { Pipe, PipeTransform } from "@angular/core";

@Pipe({name: 'requirements'})
export class RequirementsTestProjectsOptionsPipe implements PipeTransform {
    constructor() {
    }
    transform(value: string) {
        return parseInt(value.match(/"requirementsEnabled";i:(.*?);/)[1]);
    }
}
