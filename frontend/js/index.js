document.addEventListener('DOMContentLoaded', function() {
  const jobList = document.getElementById('job-list');

  async function fetchAndExtractJobData() {
    try {
      const response = await fetch('https://jobicy.com/api/v2/remote-jobs?count=50&geo=israel'); 
      const data = await response.json();
  
      const jobList = data.jobs.map(job => ({
        jobTitle: job.jobTitle,
        companyName: job.companyName
      }));
  
      displayJobs(jobList);
    } catch (error) {
      console.error('Error fetching job data:', error);
    }
  }

  function displayJobs(jobs) {
    if (jobs.length === 0) {
      jobList.innerHTML = '<p>No jobs available at the moment.</p>';
      return;
    }

    jobs.forEach(job => {
      const jobItem = document.createElement('div');
      jobItem.classList.add('job-item');
      jobItem.innerHTML = `
        <h3>${job.jobTitle}</h3>
        <p><strong>Company:</strong> ${job.companyName}</p>
      `;
      jobList.appendChild(jobItem);
    });
  }

  fetchAndExtractJobData();
});
