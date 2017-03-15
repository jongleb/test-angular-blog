import {Pipe} from '@angular/core';


@Pipe({
  name: 'search',
  pure: false
})
export class SearchPipe {
  public transform(collection: any[], args: any): any {
    console.log(collection, args);
    if (args.searchStr === null || args.searchStr === '') {
      return collection;
    }
    return collection.filter(item => {
      if (args.searchProp instanceof Array) {
        return args.searchProp
          .map(param => {
            if (item.hasOwnProperty(param)) {
              return this.isFounded(item[param], args.searchStr);
            }
            return false;
          })
          .reduce((a, b) => a || b);
      }

      if (!item[args.searchProp]) {
        return false;
      }
      return this.isFounded(item[args.searchProp], args.searchStr);
    });
  }

  private isFounded(str: string, searchStr: string): boolean {
    return str.toLowerCase()
        .indexOf(searchStr.toLowerCase()) !== -1;
  }

}
