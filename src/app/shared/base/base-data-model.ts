/**
 * Interface for the base data model (or the request, send or get, entity value).
 *
 * You need to create a enum (K in this class context) that has like value a string.
 *
 * Ex.:
 *  enum Foo {
 *    FIRST_OPTION: '1',
 *    SECOND_OPTION: '2',
 *    THIRD_OPTION: 'third'
 *    (...)
 *  }
 *
 *  For create with some value (all or one property)
 *
 *  Ex.:
 *  const item: Foo = new Foo ({
 *    1: 'a',
 *    third: 'c'
 *    (...)
 *  }
 */
export abstract class BaseDataModel<K extends string, V> {
  /** Reference for the value of model object **/
  private _value: Partial<Record<K, V>>;

  /**
   * Default class constructor.
   * @param value
   */
  constructor(
    value: Partial<Record<K, V>> = null
  ) {
    this._value = value;
  }

  /**
   * Get value.
   * @return: Partial<Record<K, V>> with the value of hole object.
   */
  public getValue(): Partial<Record<K, V>> {
    return this._value;
  }

  /**
   * Get a element from the object.
   * @param key
   * @return: Partial<Record<K, V>> with the value of object in the key passed.
   */
  public getItem(key: any): Partial<Record<K, V>> {
    return this._value[key];
  }

  /**
   * Set value
   * @param value: Partial<Record<K, V>> with the new value.
   */
  public setValue(value: Partial<Record<K, V>>): void {
    this._value = value;
  }

  /**
   * Patch a object value.
   * @param key: string for getting the object value.
   * @param value: data that will be update.
   */
  public patchValue(key: any, value: any): void {
    this._value[key] = value;
  }
}

/**
 * Use to get generic enum reference on the object.
 * @param object
 */
// declare function randomKey<T>(object: T): keyof T;


