// As a registered user, I want to post my own projects to ask for funding.

 // in the profile form, we need to know if the project needs funding, project name, project description

const profileForm = async (event) => {
  event.preventDefault();

  const projectName = document.querySelector('#projectName');
  const projectDescription = document.querySelector('#projectDescription');
  const projectFunding = document.querySelector('#projectFunding');

  if (projectName && projectDescription && projectFunding) {
    const response = await fetch(`/api/projects`, {
      method: 'POST',
      body: JSON.stringify({ projectName, projectDescription, projectFunding }),
      headers: { 'Content-Type': 'application/json', 
    },
    });

    if (response.ok) {
    window.location.href = '/profile';
    } else {
      alert('Application failed to create your project');
    }
  }
};

// Now we need to create a delete button

const deleteButton = async (event) => {
  // we need to dynamically remove class for the project id
  if (event.target.hasAttribute('project-id')) {
    const id = event.target.getAttribute('project-id');

    const response = await fetch(`/api/projects/${id}`, {
      method: 'DELETE',
    });

if (response.ok) {
    window.location.href = '/profile';
    } else {
      alert('Application failed to delete your project');
    }
  }
};


document.querySelector('#whatever_HandleBar_Name_For_Project_Form').addEventListener('submit', profileForm);


document.querySelector('#whatever_HandleBar_Name_For_List_of_Projects').addEventListener('submit', deleteButton);