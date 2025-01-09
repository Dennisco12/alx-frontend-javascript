/**
 *
 * @param {Object} employeesList - Contains the department
 * name as key and an array of employees as value
 * @returns {Object}
 */
export default function createReportObject(employeesList) {
  return {
    allEmployees: { ...employeesList },
    getNumberOfDepartments: (employeesList) => Object.keys(employeesList).length,
  };
}
