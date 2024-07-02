function getStudentIdsSum(students) {
  if (!Array.isArray(students)) {
    return 0;
  }
  return students.reduce((acc, cur) => acc + cur.id, 0);
}

export default getStudentIdsSum;
