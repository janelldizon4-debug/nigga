
function loadAdminPanel() {
    const tbody = document.getElementById("userTable");
    tbody.innerHTML = "";

    REGISTERED_KEYS.forEach((user, index) => {
        const tr = document.createElement("tr");

        tr.innerHTML = `
            <td>${user.name}</td>
            <td>${user.accessKey}</td>
            <td>${user.subscription}</td>
            <td>${user.expires}</td>
            <td>${user.revoked}</td>
            <td>${user.stop}</td>
            <td>
                <button onclick="revokeKey(${index})">Revoke</button>
                <button onclick="toggleStop(${index})">Stop/Resume</button>
            </td>
        `;

        tbody.appendChild(tr);
    });
}


function revokeKey(index) {
    const user = REGISTERED_KEYS[index];
    if(confirm(`Are you sure you want to revoke ${user.name}'s key?`)) {
        user.revoked = true;
        loadAdminPanel();
        alert(`${user.name}'s key has been revoked!`);
    }
}


function toggleStop(index) {
    const user = REGISTERED_KEYS[index];
    user.stop = !user.stop;
    loadAdminPanel();
}