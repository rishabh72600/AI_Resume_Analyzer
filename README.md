<div align="center">
  <h1>🌴 AI RESUME ANALYZER 🌴</h1>
  <p>A Tool for Resume Analysis, Predictions and Recommendations</p>
  
  <!--links-->
  <h4>
    <a href="#preview-">View Demo</a>
    <span> · </span>
    <a href="#setup--installation-">Installation</a>
    <span> · </span>
    <a href="mailto:rishabh72600@gmail.com?subject=I%20Want%20The%20Project%20Report%20of%20AI-RESUME-ANALYZER%20(2022%20 %2023)&body=Here%20Are%20My%20Details%20%F0%9F%98%89%0D%0A%0D%0AOrganization%2FCollege%20Name%3A%20%0D%0A%0D%0AFull%20Name%3A%20%0D%0A%0D%0AGitHub%20Profile%20%3A%20%0D%0A%0D%0AFrom%20where%20did%20you%20get%20to%20know%20about%20this%20project%3A%0D%0A%0D%0APurpose%20of%20asking%20project%20report%20(describe)%3A%0D%0A%0D%0A%0D%0AIf%20the%20above%20information%20satisfy%20your%20identity%20you%20will%20get%20the%20report%20to%20your%20email.">Project Report</a>
  </h4>
  <p>
    <small align="justify">
Built with 🤍 by
      <a href="https://rishabhraj.netlify.app/">Rishabh Raj</a> through
      <a href="https://www.linkedin.com/in/mrbriit/">Dr Bright --(Data Scientist)</a>
     </small>
  </p>
  <small align="justify">🚀 A Project Submitted for the partial fulfilment of the degree B.sc CS at 
    <a href="https://kirticollege.edu.in/">Kirti College</a> during academic year 2022-23
  </small>
</div><br/><br/>

## About the Project 🥱
<div align="center">
    <br/><img src="https://raw.githubusercontent.com/rishabh72600/AI-Resume-Analyzer/main/screenshots/RESUME.png" alt="screenshot" /><br/><br/>
    <p align="justify"> 
      A tool which parses information from a resume using natural language processing and finds the keywords, cluster them onto sectors based on their keywords. 
      And lastly show recommendations, predictions, analytics to the applicant / recruiter based on keyword matching.
    </p>
</div>

## Scope 😲
i. It can be used for getting all the resume data into a structured tabular format and csv as well, so that the organization can use those data for analytics purposes

ii. By providing recommendations, predictions and overall score user can improve their resume and can keep on testing it on our tool

iii. And it can increase more traffic to our tool because of user section

iv. It can be used by colleges to get insight of students and their resume before placements

v. Also, to get analytics for roles which users are mostly looking for

vi. To improve this tool by getting feedbacks

<!-- TechStack -->
## Tech Stack 🍻
<details>
  <summary>Frontend</summary>
  <ul>
    <li><a href="https://reactjs.org/">React</a></li>
    <li><a href="https://getbootstrap.com/">Bootstrap</a></li>
    <li><a href="https://react-bootstrap.github.io/">React Bootstrap</a></li>
  </ul>
</details>

<details>
  <summary>Backend</summary>
  <ul>
    <li><a href="https://spring.io/projects/spring-boot">Spring Boot</a></li>
    <li><a href="https://www.java.com/">Java</a></li>
    <li><a href="https://jwt.io/">JWT</a></li>
  </ul>
</details>

<details>
<summary>Database</summary>
  <ul>
    <li><a href="https://www.mysql.com/">MySQL</a></li>
  </ul>
</details>

<details>
<summary>Modules</summary>
  <ul>
    <li><a href="https://pandas.pydata.org/">pandas</a></li>
    <li><a href="https://github.com/OmkarPathak/pyresparser">pyresparser</a></li>
    <li><a href="https://pypi.org/project/pdfminer3/">pdfminer3</a></li>
    <li><a href="https://plotly.com/">Plotly</a></li>
    <li><a href="https://www.nltk.org/">NLTK</a></li>
  </ul>
</details>

<!-- Features -->
## Features 🤦‍♂️
### Client: -
- Fetching Location and Miscellaneous Data

  Using Parsing Techniques to fetch
- Basic Info
- Skills
- Keywords

Using logical programs, it will recommend
- Skills that can be added
- Predicted job role
- Course and certificates
- Resume tips and ideas
- Overall Score
- Interview & Resume tip videos

### Admin: -
- Get all applicant’s data into tabular format
- Download user’s data into csv file
- View all saved uploaded pdf in Uploaded Resume folder
- Get user feedback and ratings
  
  Pie Charts for: -
- Ratings
- Predicted field / roles
- Experience level
- Resume score
- User count
- City
- State
- Country

### Feedback: -
- Form filling
- Rating from 1 – 5
- Show overall ratings pie chart
- Past user comments history 

## Requirements 😅
### Have these things installed to make your process smooth 
1) Python (3.9.12) https://www.python.org/downloads/release/python-3912/
2) MySQL https://www.mysql.com/downloads/
3) Visual Studio Code **(Prefered Code Editor)** https://code.visualstudio.com/Download
4) Visual Studio build tools for C++ https://aka.ms/vs/17/release/vs_BuildTools.exe

## Setup & Installation 👀

### Prerequisites
- Java 17 or higher
- MySQL 8.0 or higher
- Node.js 16 or higher
- Maven 3.6 or higher

### Backend Setup
1. Navigate to the backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
mvn clean install
```

3. Set up MySQL database:
- Create a database named `ai_resume_analyzer`
- Run the schema.sql script to create tables
- Update `src/main/resources/application.properties` with your MySQL credentials

4. Run the Spring Boot application:
```bash
mvn spring-boot:run
```

### Frontend Setup
1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the React application:
```bash
npm start
```

The application will be available at:
- Frontend: http://localhost:3000
- Backend: http://localhost:8080

## Known Error 🤪
If ``GeocoderUnavailable`` error comes up then just check your internet connection and network speed

## Issue While Installation and Set-up 🤧
Check-out installation [Video](https://youtu.be/WFruijLC1Nc)

Feel Free to <a href="mailto:rishabh72600@gmail.com?subject=I%20have%20an%20issue%20while%20setup%2Finstalling%20of%20AI%20RESUME%20ANALYZER&body=Name%3A%20-%0D%0A%0D%0ADesignation%3A%20-%0D%0A%0D%0APlease%20describe%20your%20problem%20in%20brief%20with%20attached%20photos%20of%20error">Send mail</a>

## Usage
- After the setup it will do stuff's automatically
- You just need to upload a resume and see it's magic
- Try first with my resume uploaded in ``Uploaded_Resumes`` folder
- Admin userid is ``admin`` and password is ``admin@resume-analyzer``

<!-- Roadmap -->
## Roadmap 🛵
* [x] Predict user experience level.
* [x] Add resume scoring criteria for skills and projects.
* [x] Added fields and recommendations for web, android, ios, data science.
* [ ] Add more fields for other roles, and its recommendations respectively. 
* [x] Fetch more details from users resume.
* [ ] View individual user details.

## Contributing 🤘
Pull requests are welcome. 

For major changes, please open an issue first to discuss what you would like to change.

I've attached the <a href="https://github.com/rishabh72600/AI-Resume-Analyzer/blob/main/RESUME%20ANALYSER%20SYNOPSIS.pdf">synopsis</a> of the project

If you want the full report of project
<a href="mailto:rishabh72600@gmail.com?subject=I%20Want%20The%20Project%20Report%20of%20AI-RESUME-ANALYZER%20(2022%20-%2023)&body=Here%20Are%20My%20Details%20%F0%9F%98%89%0D%0A%0D%0AOrganization%2FCollege%20Name%3A%20%0D%0A%0D%0AFull%20Name%3A%20%0D%0A%0D%0AGitHub%20Profile%20%3A%20%0D%0A%0D%0AFrom%20where%20did%20you%20get%20to%20know%20about%20this%20project%3A%0D%0A%0D%0APurpose%20of%20asking%20project%20report%20(describe)%3A%0D%0A%0D%0A%0D%0AIf%20the%20above%20information%20satisfy%20your%20identity%20you%20will%20get%20the%20report%20to%20your%20email.">Email Me</a> ``it's FREE``

## Acknowledgement 🤗
- <a href="https://www.linkedin.com/in/mrbriit/">Dr Bright</a> - <a href="https://www.udemy.com/course/the-full-stack-data-scientist-bootcamp/">(The Full Stack Data Scientist BootCamp)</a>
- <a href="https://www.academia.edu/32543544/Resume_Parser_with_Natural_Language_Processing">Resume Parser with Natural Language Processing</a>
- <a href="https://github.com/OmkarPathak/pyresparser">pyresparser</a>

## Preview 👽

### Client Side

**Main Screen**

![Screenshot](https://github.com/rishabh72600/AI-Resume-Analyzer/blob/main/screenshots/user/1-main-screen.png?raw=true)

**Resume Analysis**

![Screenshot](https://github.com/rishabh72600/AI-Resume-Analyzer/blob/main/screenshots/user/2-analysis.jpg?raw=true)

**Skill Recommendation**

![Screenshot](https://github.com/rishabh72600/AI-Resume-Analyzer/blob/main/screenshots/user/3-recom.png?raw=true)

**Course Recommendation**

![Screenshot](https://github.com/rishabh72600/AI-Resume-Analyzer/blob/main/screenshots/user/4-recom.png?raw=true)

**Tips and Overall Score**

![Screenshot](https://github.com/rishabh72600/AI-Resume-Analyzer/blob/main/screenshots/user/5-tipsscore.png?raw=true)

**Video Recommendation**

![Screenshot](https://github.com/rishabh72600/AI-Resume-Analyzer/blob/main/screenshots/user/6-recom.png?raw=true)

### Feedback

**Feedback Form**

![Screenshot](https://github.com/rishabh72600/AI-Resume-Analyzer/blob/main/screenshots/feedback/1-form.png?raw=true)

**Overall Rating Analysis and Comment History**

![Screenshot](https://github.com/rishabh72600/AI-Resume-Analyzer/blob/main/screenshots/feedback/2-analytics.png?raw=true)

### Built with 🤍 AI RESUME ANALYZER by <a href="https://rishabhraj.netlify.app/">Rishabh Raj</a>
