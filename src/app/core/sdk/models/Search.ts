/* tslint:disable */

declare var Object: any;
export interface SearchInterface {
  id?: number;
}

export class Search implements SearchInterface {
  id: number;
  constructor(data?: SearchInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Search`.
   */
  public static getModelName() {
    return "Search";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Search for dynamic purposes.
  **/
  public static factory(data: SearchInterface): Search{
    return new Search(data);
  }  
  /**
  * @method getModelDefinition
  * @author Julien Ledun
  * @license MIT
  * This method returns an object that represents some of the model
  * definitions.
  **/
  public static getModelDefinition() {
    return {
      name: 'Search',
      plural: '/search',
      properties: {
        id: {
          name: 'id',
          type: 'number'
        },
      },
      relations: {
      }
    }
  }
}
