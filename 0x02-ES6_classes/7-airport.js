/**
 * Represents a  class.
 */
export default class Airport {
  /**
   * Creates a new Airport class.
   *
   * @param {String} code - Code of Airport.
   * @param {String} name - Names of Airport.
   */
  constructor(name, code) {
    this.name = name;
    this.code = code;
  }

  /**
   * Gets the name of Airport.
   */
  get name() {
    return this._name;
  }

  /**
   * sets the name of Airport.
   */

  set name(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = value;
  }

  /**
   * Gets the code of airport.
   */
  get code() {
    return this._code;
  }

  /**
   * sets the code of airport.
   */

  set code(value) {
    if (typeof value !== 'string') {
      throw new TypeError('code must be a string');
    }
    this._code = value;
  }

  get [Symbol.toStringTag]() {
    return this._code;
  }
}
