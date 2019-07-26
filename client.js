$(document).ready(readyNow);

function readyNow() {
    $('#submit').on('click', submitEmployee);
    $('.delete').find().on('click', deleteEmployee);
}

let totalMonthlySalary = 0

function submitEmployee() {
    let employeeFirst = $('#employeeFirst').val();
    let employeeLast = $('#employeeLast').val();
    let employeeId = $('#employeeId').val();
    let employeeSalary = $('#employeeFirst').val();

    let employeeMonthly = employeeSalary / 12;

    $('#employeeData').append(`
    <tr>
    <td>${employeeFirst}</td>
    <td>${employeeLast}</td>
    <td>${employeeId}</td>
    <td>${employeeSalary}</td>
    <td><button class="delete">Delete</button></td>
    </tr>
    `);

    addTotalMonthly(employeeMonthly);
}

function deleteEmployee() {
    console.log('delete');
    $(this).parent().remove();
}

function addTotalMonthly() {

}