const addBtn = document.getElementById("addBtn");
const applicationList = document.getElementById("applicationList");

let applications = JSON.parse(localStorage.getItem("applications")) || [];

function saveToLocalStorage() {
  localStorage.setItem("applications", JSON.stringify(applications));
}

function displayApplications() {
  applicationList.innerHTML = "";

  applications.forEach((app, index) => {
    const li = document.createElement("li");

    li.innerHTML = `
      <strong>${app.company}</strong><br>
      ${app.role}<br>
      ${app.date}<br>
      Status: ${app.status}<br>
      <button class="delete-btn" onclick="deleteApplication(${index})">Delete</button>
    `;

    applicationList.appendChild(li);
  });
}

function addApplication() {
  const company = document.getElementById("company").value;
  const role = document.getElementById("role").value;
  const date = document.getElementById("date").value;
  const status = document.getElementById("status").value;

  if (company === "" || role === "" || date === "") {
    alert("Please fill all fields");
    return;
  }

  applications.push({ company, role, date, status });

  saveToLocalStorage();
  displayApplications();

  document.getElementById("company").value = "";
  document.getElementById("role").value = "";
  document.getElementById("date").value = "";
}

function deleteApplication(index) {
  applications.splice(index, 1);
  saveToLocalStorage();
  displayApplications();
}

addBtn.addEventListener("click", addApplication);

displayApplications();