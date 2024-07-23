document.addEventListener('DOMContentLoaded', async () => {
    const jobList = document.getElementById('job-list');
    const response = await fetch('/api/workers');
    const workers = await response.json();
    
    jobList.innerHTML = workers.map(worker => `
      <div class="worker">
        <img src="${worker.worker_image}" alt="${worker.job_title}">
        <h3>${worker.job_title}</h3>
        <p>Location: ${worker.location}</p>
        <p>Age: ${worker.age}</p>
        <p>Years of Experience: ${worker.years_of_experience}</p>
        <p>Rating: ${worker.rating}</p>
      </div>
    `).join('');
  });
  