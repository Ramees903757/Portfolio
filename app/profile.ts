export type Project = {
  id: string; title: string; category: string; tools: string[]; summary: string;
  sections: { title: string; text: string }[]; result: string | null;
  screenshots: { src: string; alt: string }[] | null; repositoryUrl: string | null; liveUrl: string | null; downloadUrl: string | null;
  findings: string | null; datasetSize: string | null; reportingPeriod: string | null; datasetSource: string | null; kpiFormulas: string | null; measuredImprovements: string | null;
};
const optionalAssets = { screenshots: null, repositoryUrl: null, liveUrl: null, downloadUrl: null, findings: null, datasetSize: null, reportingPeriod: null, datasetSource: null, kpiFormulas: null, measuredImprovements: null };
export const profile = {
  name: 'Mohammed Ramees Ummer',
  title: 'Data Analyst | Business & MIS Reporting',
  location: 'Abu Dhabi, UAE',
  headline: 'Turning sales and operational data into clear business decisions.',
  introduction: 'I’m Mohammed Ramees Ummer, a Data Analyst with experience in retail analytics, MIS reporting, and dashboard development. I use Excel, SQL, Power BI, and Python to analyze sales, inventory, and operational data, automate recurring reports, and support management decisions.',
  availability: 'Open to Data Analyst, Business Analyst, Junior Data Analyst, and MIS Analyst opportunities.',
  contact: { email: 'ramizumar@gmail.com', linkedin: 'https://www.linkedin.com/in/mohammedrameesummer', github: 'https://github.com/Ramees903757', phone: '+971 528577441', showPhone: false },
  resume: null as string | null,
  evidence: [
    { value: '30%', label: 'reduction in reporting time', source: 'Reporting automation at Vestano International.' },
    { value: '6', label: 'retail and hospitality locations', source: 'Sales and store-performance reporting at Vestano International.' },
    { value: '10K+', label: 'rows analyzed', source: 'Data preparation and analysis during the iDatalytics internship.' },
  ],
  practice: [
    { title: 'Management and MIS Reporting', text: 'Prepared weekly and monthly reporting on sales performance, stock movement, operational KPIs, and store-wise performance to support management and operations decisions.' },
    { title: 'Inventory and Stock Variance Analysis', text: 'Analyzed inventory data during stock audits to identify variance, shrinkage, and stock discrepancies across retail locations.' },
    { title: 'Wastage and Product-Loss Analysis', text: 'Analyzed dump and wastage data to identify expiry-related product loss, operational trends, and inventory inefficiencies.' },
    { title: 'Reporting Automation', text: 'Automated and optimized reporting and data extraction using Excel, SQL, Power BI, and Python, with a reported 30% reduction in reporting time.' },
  ],
  experience: [
    { title: 'Data Analyst', company: 'Vestano International Pvt.Ltd', dates: 'August 2025 – Present', location: 'Kozhikode, Kerala, India', focus: 'Retail analytics & management reporting', points: [
      'Analyzed daily transaction and sales data across 6 supermarkets, hypermarkets, and restaurants for sales and store-performance reporting.',
      'Developed weekly and monthly MIS reports covering sales, stock movement, operational KPIs, and store-wise performance.',
      'Analyzed inventory for stock audits, variance, shrinkage, and discrepancies.',
      'Analyzed dump and wastage data to identify product-loss trends and inventory inefficiencies.',
      'Automated reporting and data extraction using Excel, SQL, Power BI, and Python, reducing reporting time by 30%.',
    ] },
    { title: 'Data Science Intern', company: 'iDatalytics', dates: 'January 2025 – July 2025', location: 'Calicut, Kerala, India', focus: 'Data preparation, dashboards & analysis', points: [
      'Extracted, transformed, cleaned, and analyzed 10K+ rows across 14+ columns using SQL, Pandas, and NumPy.',
      'Developed interactive Power BI dashboards for KPI tracking and recurring reporting, reducing manual analysis time by 30%.',
      'Performed exploratory data analysis, data validation, and statistical analysis.',
      'Developed and deployed Flask-based ML/GenAI REST APIs, reducing application latency by 40%.',
    ] },
    { title: 'Junior Software Developer', company: 'Pennonn Technologies Pvt. Ltd', dates: 'July 2023 – August 2024', location: 'Kochi, Kerala, India', focus: 'Supporting experience · applications, databases & data workflows', points: [
      'Developed responsive React.js web applications and Node.js REST APIs.',
      'Optimized MongoDB queries using Mongoose.',
      'Worked with AWS EC2, Netlify, and CI/CD pipelines for deployment and maintenance.',
    ] },
  ],
  skills: [
    { title: 'Analytics and BI', items: ['Excel', 'SQL', 'MySQL', 'Power BI', 'DAX', 'Power Query', 'Python', 'Pandas', 'NumPy'] },
    { title: 'Business Reporting and Analysis', items: ['MIS Reporting', 'KPI Reporting', 'Sales Analysis', 'Inventory Analysis', 'Variance Analysis', 'Data Cleaning', 'Data Validation', 'Data Visualization', 'Exploratory Data Analysis'] },
    { title: 'Data Preparation and Reporting Systems', items: ['ETL', 'Data Modeling', 'Dashboard Development', 'Report Automation'] },
    { title: 'Supporting Development and Tools', items: ['React.js', 'Node.js', 'MongoDB', 'Mongoose', 'REST APIs', 'Flask', 'Streamlit', 'Git', 'GitHub', 'Jupyter Notebook', 'AWS EC2', 'Netlify', 'CI/CD'] },
  ],
  secondarySkills: ['Machine Learning', 'NLP', 'Computer Vision', 'Deep Learning', 'GenAI'],
  about: 'My background combines business-focused analytics with software development. At Vestano International, I work with retail and operational data to prepare MIS reports, analyze sales and inventory, and improve recurring reporting. My earlier data science internship and software development experience give me additional grounding in data preparation, databases, and application workflows. I’m seeking opportunities where I can turn business data into clear, useful reporting and analysis.',
  education: { degree: 'Bachelor of Engineering in Mechanical Engineering', institution: 'Srinivas Institute of Technology', dates: '2018–2022' },
  certificate: { title: 'Data Science with Gen AI Certificate', date: 'January 2025', issuer: null as string | null, credentialId: null as string | null, verificationUrl: null as string | null },
  contactHeading: 'Let’s discuss your next analytics hire.',
  contactText: 'I’m open to Data Analyst, Business Analyst, Junior Data Analyst, and MIS Analyst opportunities. Reach out to discuss how my experience in reporting, sales analysis, inventory analysis, and dashboards could support your team.',
};
export const projects: Project[] = [
  { ...optionalAssets, id: 'coffee-shop', title: 'Coffee Shop Sales Dashboard', category: 'Business Intelligence / Sales Analytics', tools: ['Excel', 'SQL', 'Power BI', 'DAX'], summary: 'An interactive Power BI dashboard for analyzing coffee shop sales performance, product trends, customer activity, and business KPIs.', result: null,
    sections: [
      { title: 'Objective', text: 'Analyze retail sales performance and present business KPIs through an interactive dashboard.' },
      { title: 'Data Preparation', text: 'Cleaned and transformed retail sales data using SQL and Excel.' },
      { title: 'Analysis', text: 'Created DAX measures and calculated metrics to evaluate sales trends, performance indicators, and business patterns.' },
      { title: 'Deliverable', text: 'An interactive Power BI dashboard covering sales performance, product trends, customer activity, and key business KPIs.' },
    ],
  },
  { ...optionalAssets, id: 'healthcare', title: 'Health Care Utilization Prediction', category: 'Machine Learning / Healthcare', tools: ['Python', 'Scikit-learn', 'Flask', 'RFE', 'Random Forest', 'Lasso', 'Gradient Boosting Classifier'], summary: 'Cleaned healthcare datasets and performed feature reduction using RFE and Lasso. Built and deployed a Flask-based ML API integrated with a user-facing dashboard for real-time healthcare insights.', result: null,
    sections: [
      { title: 'Data Preparation', text: 'Cleaned healthcare datasets and performed feature reduction using RFE and Lasso.' },
      { title: 'Deliverable', text: 'A Flask-based ML API integrated with a user-facing dashboard for real-time healthcare insights.' },
    ],
  },
  { ...optionalAssets, id: 'tea-leaf', title: 'Tea Leaf Disease Classification Using CNN and ML', category: 'Computer Vision / Classification', tools: ['Python', 'CNN', 'Scikit-learn', 'Random Forest', 'LightGBM', 'XGBoost', 'LBP', 'HOG'], summary: 'Developed a CNN-based tea leaf disease classification model and evaluated additional ML algorithms with LBP and HOG feature extraction.', result: '18% improvement in F1-score, as stated in the resume.',
    sections: [
      { title: 'Approach', text: 'Developed a CNN-based tea leaf disease classification model and evaluated additional ML algorithms with LBP and HOG feature extraction.' },
    ],
  },
];

