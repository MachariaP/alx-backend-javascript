/**
 * Contains the miscellaneous route handlers.
 * @author Onsongo Onditi <https://github.com/Pronothurah>
 */
class AppController {
  static getHomepage(request, response) {
    response.status(200).send('Hello Holberton School!');
  }
}

export default AppController;
module.exports = AppController;
