/* tslint:disable */

declare var Object: any;
export interface EventsInterface {
  title: string;
  image: string;
  date_start: Date;
  date_end: Date;
  description: string;
  id?: number;
}

export class Events implements EventsInterface {
  title: string;
  image: string;
  date_start: Date;
  date_end: Date;
  description: string;
  id: number;
  constructor(data?: EventsInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Events`.
   */
  public static getModelName() {
    return "Events";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Events for dynamic purposes.
  **/
  public static factory(data: EventsInterface): Events{
    return new Events(data);
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
      name: 'Events',
      plural: '/events',
      properties: {
        title: {
          name: 'title',
          type: 'string'
        },
        image: {
          name: 'image',
          type: 'string'
        },
        date_start: {
          name: 'date_start',
          type: 'Date'
        },
        date_end: {
          name: 'date_end',
          type: 'Date'
        },
        description: {
          name: 'description',
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
