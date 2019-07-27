$(document).ready(readyNow);

function readyNow() {
    $('#submit').on('click', submitEmployee);
}

let totalMonthlySalary = 0

function submitEmployee() {
    let employeeFirst = $('#employeeFirst').val();
    let employeeLast = $('#employeeLast').val();
    let employeeId = $('#employeeId').val();
    let employeeTitle = $('#employeeTitle').val();
    let employeeSalary = $('#employeeSalary').val();

    let employeeMonthly = employeeSalary / 12;

    addTotalMonthly();

    $('#employeeData').append(`
    <tr>
    <td>${employeeFirst}</td>
    <td>${employeeLast}</td>
    <td>${employeeId}</td>
    <td>${employeeTitle}</td>
    <td>${employeeSalary}</td>
    <td><button class="delete">Delete</button></td>
    </tr>
    `);

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