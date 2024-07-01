/**
 * Gets a list of student IDs from an array of student objects.
 * @param {Array} array - The array of student objects.
 * @returns {Array} An array of student IDs.
 * @author Phinehas Macharia <https://github.com/MachariaP>
 */

const getListStudentIds = (array) => {
  if (!Array.isArray(array)) {
    return [];
  }
  return array.map((student) => student.id);
};

export default getListStudentIds;
