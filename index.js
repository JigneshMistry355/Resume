// const header = "Jignesh Mistry";
// document.getElementById('header-name').textContent = header;

document.addEventListener("DOMContentLoaded", function() {
    const header = "Jignesh Mistry";
    const email = "jvmistry7@gmail.com";
    const phone = "+91 9004555751";
    const linkedin = "LinkedIn";
    const github = "github";
    const summary = "Software developer with a strong foundation in React.js, Angular and Python. Proficient in crafting robust web applications from frontend to backend. Possessing a keen eye for user experience."
    const JAIN = "Jain university, bengaluru";
    const MU = "Mumbai university";
    const M_degree_name = "master of computer application";
    const B_degree_name = "Bachelor of Science"; 
    const checkexplore = "Software Developer Intern | CheckExplore Technologies";

    const exp_text_1 = `Developed a cross-platform mobile application using React Native, leading the design
and creation of the UI and user experience, ensuring responsiveness and performance
optimization across Android and iOS devices. `;

    const exp_text_2 = `Developed robust Angular applications, mastering component structure, data binding, and routing while seamlessly integrating with backend APIs. Demonstrated proficiency in
handling complex UI interactions, state management, and troubleshooting challenges to
deliver high-quality user experiences. `;

    const exp_text_3 = `Utilized Docker to create efficient and scalable application environments, building
images and containers for deployment. Hosted application on Ubuntu server, ensuring
reliable and secure operations.`;

    this.getElementById('header-name').textContent = header.toUpperCase();
    this.getElementById('email').textContent = email;
    this.getElementById('phone').textContent = phone;
    this.getElementById('linkedin').textContent = linkedin;
    this.getElementById('github').textContent = github;
    this.getElementById('summary').textContent = summary;
    this.getElementById('JAIN').textContent = JAIN.toUpperCase();
    this.getElementById('MU').textContent = MU.toUpperCase();
    this.getElementById('master-degree-name').textContent = M_degree_name.toUpperCase();
    this.getElementById('bachelor-degree-name').textContent = B_degree_name.toUpperCase();
    this.getElementById('checkexplore').textContent = checkexplore;
    this.getElementById('exp-para-1').textContent = exp_text_1;
    this.getElementById('exp-para-2').textContent = exp_text_2;
    this.getElementById('exp-para-3').textContent = exp_text_3;

});