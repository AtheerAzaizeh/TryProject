document.getElementById('cv-form').addEventListener('submit', async (e) => {
  e.preventDefault();

  const token = sessionStorage.getItem('token');
  if (!token) {
    document.getElementById('cv-error').textContent = 'You must be logged in to submit a CV.';
    return;
  }

  const personalDetails = {
    first_name: document.getElementById('first_name').value,
    last_name: document.getElementById('last_name').value,
    date_of_birth: document.getElementById('date_of_birth').value,
    profile_image_url: document.getElementById('profile_image_url').value,
    location: document.getElementById('location').value,
    phone_number: document.getElementById('phone_number').value,
  };

  const education = {
    institution_name: document.getElementById('institution_name').value,
    degree: document.getElementById('degree').value,
    field_of_study: document.getElementById('field_of_study').value,
    start_date: document.getElementById('start_date').value,
    end_date: document.getElementById('end_date').value,
  };

  const workExperience = {
    company_name: document.getElementById('company_name').value,
    job_title: document.getElementById('job_title').value,
    start_date: document.getElementById('start_date_work').value,
    end_date: document.getElementById('end_date_work').value,
    skills: document.getElementById('skills').value,
  };

  try {
    const response = await fetch('http://localhost:3000/api/cvs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({ personalDetails, education, workExperience })
    });

    if (!response.ok) {
      throw new Error('Failed to submit CV');
    }

    alert('CV submitted successfully');
  } catch (error) {
    document.getElementById('cv-error').textContent = 'Failed to submit CV. Please try again.';
  }
});
