import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'sort'
})
export class ObjectArraySortPipe implements PipeTransform {

    transform(array: Array<object>, options?: SortOptions): Array<object> {
        console.log(options);
        const properties = options ? options.property.split(".") : [];
        const modifier = options && options.order === "desc" ? -1 : 1;
        return array ? array.sort((a, b) => {
            for (const prop of properties) {
                a = a[prop];
                b = b[prop];
            }
            if (a > b) {
                return 1 * modifier;
            } else if (a < b) {
                return -1 * modifier;
            }
            return 0;
        }) : [];
    }

}

export interface SortOptions {
    order: 'asc' | 'desc',
    property: string
}
