$(document).ready(readyNow);

function readyNow() {
    $('#submit').on('click', submitEmployee);
}

let totalMonthly = 0

function submitEmployee() {

    let employee = {
        employeeFirst: $('#employeeFirst').val(),
        employeeLast: $('#employeeLast').val(),
        employeeId: $('#employeeId').val(),
        employeeTitle: $('#employeeTitle').val(),
        employeeSalary: $('#employeeSalary').val()
    }

    $('#employeeInfo').append(`
    <tr>
    <td>${employee.employeeFirst}</td>
    <td>${employee.employeeLast}</td>
    <td>${employee.employeeId}</td>
    <td>${employee.employeeTitle}</td>
    <td class="salary">${employee.employeeSalary}</td>
    <td><button class="delete">Delete</button></td>
    </tr>
    `);

    totalMonthly += $('#employeeSalary').val() / 12;

    addSalary();

    $('.delete').on('click', deleteEmployee);

    $('#employeeFirst').val('');
    $('#employeeLast').val('');
    $('#employeeId').val('');
    $('#employeeTitle').val('');
    $('#employeeSalary').val('');

}

function addSalary() {
    console.log('totalMonthly at add:', totalMonthly);
    $('#totalMonthly').text(totalMonthly);

    if (totalMonthly >= 20000) {
        $('.totalSalarySum').css('background-color', 'red');
    }
}

function deleteEmployee() {
    totalMonthly -= $(this).closest('td').prev('td').text();
    console.log('totalMonthly at delete:', totalMonthly);
    $('#totalMonthly').text(totalMonthly);

    $(this).closest('tr').remove();

    if (totalMonthly < 20000) {
        $('.totalMonthlySum').css('background-color', '');
    }

}