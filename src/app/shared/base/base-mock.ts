/**
 * A base class for mock some models on this system.
 */
import {BaseData} from './base-data';

export class BaseMock<T extends BaseData> {
  /** Ref for the array with the object for the mocks */
  private itemsMock: Array<T>;

  /**
   * Default class constructor.
   */
  constructor(
    private item: T = null
  ) {
    this.itemsMock = new Array<T>();

    if (item) {
      this.insertItem(item);
    }

    console.log(this.itemsMock);
  }

  /**
   * Generate a UID for the mock.
   */
  private generateId(): number {
    let aux = 0;
    this.itemsMock.forEach((item) => {
      if (item['id'] > aux) {
        aux = item['id'];
      }
    });

    return aux + 1;
  }

  /**
   * Get all mocks on the array.
   * @return: Array<BaseData>
   */
  public getItemsMock(): Array<T> {
    return this.itemsMock;
  }

  /**
   * Insert item on the mocks array.
   * @param item: BaseData with the value that will be inserted.
   * @return: BaseData with the value of object that was instead.
   */
  public insertItem(item: T): T {
    item['id'] = this.generateId();
    this.itemsMock.push(item);
    return Object.assign({}, item);
  }

  /**
   * Update a mock item on the array.
   * @param item: BaseData with the item value that will change.
   * @return: BaseData with the item that was updated.
   */
  public updateItem(item: T): T {
    this.itemsMock.forEach((p, index) => {
      if (p['id'] === item['id']) {
        this.itemsMock[index] = item;
      }
    });

    return Object.assign({}, item);
  }

  /**
   * Find the mock by the id generated for him.
   * @param id: number | string with the id for the mock.
   * @return: BaseData with the reference for the item.
   */
  public findById(id: number | string): T {
    const item = this.itemsMock.find((res) => res['id'] === id);
    return Object.assign({}, item);
  }

  /**
   * Delete a item on the mocks array,
   * @param id: number | string with the index of the item that will be deleted.
   * @return: BaseData with the value of the object that was deleted.
   */
  public delete(id: number | string): T {
    let aux = null;
    let pos = -1;

    this.itemsMock.forEach((p, index) => {
      if (p['id'] === id) {
        aux = this.itemsMock[index];
        pos = index;
      }
    });

    if (pos > -1) {
      this.itemsMock.splice(pos, 1);
    }

    return Object.assign({}, aux);
  }
}
