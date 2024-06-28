/**
 * Represents a Currency class.
 */
export default class Currency {
  /**
   * Creates a new Currecy class.
   *
   * @param {String} code - Code of currency.
   * @param {String} name - Names of currency.
   */
  constructor(code, name) {
    this.code = code;
    this.name = name;
  }

  /**
   * Gets the code.
   */
  get code() {
    return this._code;
  }

  /**
   * sets the code of currency.
   */

  set code(value) {
    if (typeof value !== 'string') {
      throw new TypeError('code must be a string');
    }
    this._code = value;
  }

  /**
   * Gets the name of currency.
   */
  get name() {
    return this._name;
  }

  /**
   * sets the name of currency.
   */

  set name(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = value;
  }

  /**
   * Creates the full string representation of this Currency.
   * @returns {String}
   */
  displayFullCurrency() {
    return `${this.name} (${this.code})`;
  }
}
