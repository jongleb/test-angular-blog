/* tslint:disable */

declare var Object: any;
export interface NewsInterface {
  title: string;
  description: string;
  date: Date;
  image: string;
  id?: number;
}

export class News implements NewsInterface {
  title: string;
  description: string;
  date: Date;
  image: string;
  id: number;
  constructor(data?: NewsInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `News`.
   */
  public static getModelName() {
    return "News";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of News for dynamic purposes.
  **/
  public static factory(data: NewsInterface): News{
    return new News(data);
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
      name: 'News',
      plural: '/news',
      properties: {
        title: {
          name: 'title',
          type: 'string'
        },
        description: {
          name: 'description',
          type: 'string'
        },
        date: {
          name: 'date',
          type: 'Date'
        },
        image: {
          name: 'image',
          type: 'string'
        },
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
