function searchJobs() {
    const searchInput = document.getElementById('job-search-input').value;
    const resultsDiv = document.getElementById('job-results');

    // Mock job data
    const jobs = [
        { title: 'Software Engineer', location: 'Tokyo', description: 'Developing web applications.' },
        { title: 'Project Manager', location: 'Osaka', description: 'Managing projects and teams.' },
        { title: 'Data Analyst', location: 'Kyoto', description: 'Analyzing data for business insights.' },
    ];

    const filteredJobs = jobs.filter(job => job.title.toLowerCase().includes(searchInput.toLowerCase()));

    resultsDiv.innerHTML = '';
    if (filteredJobs.length > 0) {
        filteredJobs.forEach(job => {
            const jobDiv = document.createElement('div');
            jobDiv.className = 'job';
            jobDiv.innerHTML = `<h3>${job.title}</h3><p>${job.location}</p><p>${job.description}</p>`;
            resultsDiv.appendChild(jobDiv);
        });
    } else {
        resultsDiv.innerHTML = '<p>No jobs found</p>';
    }
}
