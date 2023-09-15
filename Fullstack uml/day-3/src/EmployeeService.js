import axios from 'axios'

const URL = 'http://localhost:8080/boutique';

class EmployeeService{

    getAllEmployees(){
        return axios.get('http://localhost:8080/boutique/get')
    }

    createEmployee(employee){
        return axios.post(URL,employee)
    }

    getEmployeeById(employeeId){
        return axios.get(URL + '/' + employeeId);
    }

    updateEmployee(employeeId, employee){
        return axios.put(URL + '/' +employeeId, employee);
    }

    deleteEmployee(employeeId){
        return axios.delete(URL + '/' + employeeId);
    }
    deleteAllCostume(employeeId){
        return axios.delete(URL);
    }
}

export default new EmployeeService();