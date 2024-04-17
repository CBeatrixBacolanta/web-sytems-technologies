document.addEventListener("DOMContentLoaded", function() {
    const registrationForm = document.getElementById("registrationForm");
    const userTableBody = document.querySelector('#userTable tbody');

    registrationForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const role = document.getElementById('role').value;

        if (!name || !email || role === 'select') {
            alert("Please fill in all fields and select a valid role.");
            return;
        }

        appendRowToTable(name, email, role);

        // Reset the form fields after submission
        registrationForm.reset();
    });

    function appendRowToTable(name, email, role) {
        const newRow = document.createElement('tr');
        newRow.innerHTML = `
            <td class="border p-2">${userTableBody.children.length + 1}</td>
            <td class="border p-2">${name}</td>
            <td class="border p-2">${email}</td>
            <td class="border p-2">${role}</td>
            <td class="border p-2">
                <button class="bg-blue-500 text-white p-1 edit-btn"><i class="fa fa-edit"></i></button>
                <button class="bg-red-500 text-white p-1 delete-btn"><i class="fa fa-trash"></i></button>
            </td>
        `;
        userTableBody.appendChild(newRow);

        // Add event listeners to the new row's buttons
        const editButton = newRow.querySelector('.edit-btn');
        const deleteButton = newRow.querySelector('.delete-btn');

        editButton.addEventListener('click', function() {
            // Retrieve data from the row
            const cells = newRow.querySelectorAll('td');
            const name = cells[1].textContent;
            const email = cells[2].textContent;
            const role = cells[3].textContent;

            // Fill the form fields with the data from the table row so it can be edited
            document.getElementById('name').value = name;
            document.getElementById('email').value = email;
            document.getElementById('role').value = role;

            // Remove the row from the table
            newRow.remove();
        });

        deleteButton.addEventListener('click', function() {
            // Remove the row from the table
            newRow.remove();
        });
    }
});
