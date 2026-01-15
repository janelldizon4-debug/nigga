
function loadAdminPanel() {
    const tbody = document.getElementById("userTable");
    if (!tbody) return;

    tbody.innerHTML = "";

    REGISTERED_KEYS.forEach((user, index) => {
        const tr = document.createElement("tr");

        tr.innerHTML = `
            <td>${user.name}</td>
            <td>${user.accessKey}</td>
            <td>${user.subscription}</td>
            <td>${user.expires}</td>
            <td>${user.revoked ? 'Yes' : 'No'}</td>
            <td>${user.stopped ? 'Yes' : 'No'}</td>
            <td>
                <button onclick="revokeKey(${index})" style="margin-right:5px;">Revoke</button>
                <button onclick="stopKey(${index})">Stop</button>
            </td>
        `;

        tbody.appendChild(tr);
    });
}


function revokeKey(index) {
    const user = REGISTERED_KEYS[index];
    if (!user) return;

    if (confirm(`Are you sure you want to revoke ${user.name}'s key?`)) {
        user.revoked = true;
        loadAdminPanel(); 
        alert(`${user.name}'s key has been revoked!`);
    }
}


function stopKey(index) {
    const user = REGISTERED_KEYS[index];
    if (!user) return;

    if (confirm(`Are you sure you want to stop ${user.name}'s subscription?`)) {
        user.stopped = true;
        loadAdminPanel(); // refresh table
        alert(`${user.name}'s subscription has been stopped!`);
    }
}


document.addEventListener("DOMContentLoaded", () => {
    const adminPanel = document.getElementById("adminPanel");
    if (adminPanel && adminPanel.style.display === "block") {
        loadAdminPanel();
    }
});
