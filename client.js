$(document).ready(readyNow);

function readyNow() {
    $('#submit').on('click', submitEmployee);
}

let totalMonthlySalary = 0

function submitEmployee() {

    let employee = {
        employeeFirst: $('#employeeFirst').val(),
        employeeLast: $('#employeeLast').val(),
        employeeId: $('#employeeId').val(),
        employeeTitle: $('#employeeTitle').val(),
        employeeSalary: $('#employeeSalary').val()
    }

    $('#employeeData').append(`
    <tr>
    <td>${employee.employeeFirst}</td>
    <td>${employee.employeeLast}</td>
    <td>${employee.employeeId}</td>
    <td>${employee.employeeTitle}</td>
    <td>${employee.employeeSalary}</td>
    <td><button class="delete">Delete</button></td>
    </tr>
    `);

    let employeeMonthly = employeeSalary / 12;

    addTotalMonthly();

    $('.delete').on('click', deleteEmployee);

    $('#employeeFirst').val('');
    $('#employeeLast').val('');
    $('#employeeId').val('');
    $('#employeeTitle').val('');
    $('#employeeSalary').val('');

}

function deleteEmployee() {
    $(this).closest('tr').remove();
}

function addTotalMonthly() {

}