/**
 *
 * @param {string} departmentName
 * @param {string} employees
 * @returns {Object}
 */
export default function createEmployeesObject(departmentName, employees) {
  return { [departmentName]: employees };
}
