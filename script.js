// Parse the JSON data
const data = {
    "employees": [
      {
        "id": 1,
        "name": "Mr. A",
        "designation": "Senior Developer",
        "skills": ["JavaScript", "Python", "Java"],
        "projects": [
          {
            "name": "Project A",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "team": [
              {"name": "Alice", "role": "Developer"},
              {"name": "Bob", "role": "Designer"},
              {"name": null, "role": "Tester"}
            ],
            "tasks": [
              {"id": 1, "name": "Task 1", "status": "In Progress"},
              {"id": 2, "name": "Task 2", "status": "Completed"},
              {"id": 3, "name": "Task 3", "status": null}
            ]
          },
          {
            "name": "Project B",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "team": [
              {"name": "Alice", "role": "Developer"},
              {"name": null, "role": "Designer"}
            ],
            "tasks": [
              {"id": 1, "name": "Task 1", "status": "In Progress"},
              {"id": 2, "name": "Task 2", "status": "In Progress"},
              {"id": 3, "name": "Task 3", "status": "undefined"}
            ]
          }
        ]
      },
      {
        "id": 2,
        "name": "Mr. B",
        "designation": null,
        "skills": ["HTML", "CSS", "Photoshop"],
        "projects": [
          {
            "name": "Project C",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "team": [
              {"name": "David", "role": "Developer"},
              {"name": "Eve", "role": "Designer"}
            ],
            "tasks": []
          }
        ]
      }
    ]
  };
  
  // Function to calculate the team size for a project
  function calculateTeamSize(project) {
    return project.team.filter(member => member.name !== null).length;
  }
  
  // Function to calculate the number of completed tasks for a project
  function calculateCompletedTasks(project) {
    return project.tasks.filter(task => task.status === "Completed").length;
  }
  
  // Display all projects in a table
  function displayProjects(projects) {
    const projectsTable = document.getElementById("projectsTable");
    projectsTable.innerHTML = "";
  
    // Create table headers
    const headersRow = document.createElement("tr");
    const nameHeader = document.createElement("th");
    nameHeader.textContent = "Project Name";
    headersRow.appendChild(nameHeader);
    const teamSizeHeader = document.createElement("th");
    teamSizeHeader.textContent = "Team Size";
    headersRow.appendChild(teamSizeHeader);
    const completedTasksHeader = document.createElement("th");
    completedTasksHeader.textContent = "Completed Tasks";
    headersRow.appendChild(completedTasksHeader);
    projectsTable.appendChild(headersRow);
  
    // Create table rows for each project
    projects.forEach(project => {
      const projectRow = document.createElement("tr");
  
      const nameCell = document.createElement("td");
      nameCell.textContent = project.name;
      projectRow.appendChild(nameCell);
  
      const teamSizeCell = document.createElement("td");
      const teamSize = calculateTeamSize(project);
      teamSizeCell.textContent = teamSize;
      projectRow.appendChild(teamSizeCell);
  
      const completedTasksCell = document.createElement("td");
      const completedTasks = calculateCompletedTasks(project);
      completedTasksCell.textContent = completedTasks;
      projectRow.appendChild(completedTasksCell);
  
      projectsTable.appendChild(projectRow);
    });
  }
  
  // Display all projects on page load
  displayProjects(data.employees.flatMap(employee => employee.projects));
  