import { PortfolioData } from './types';

export const portfolioData: PortfolioData = {
  name: "MANDA RAJU",
  role: "B.Tech Student | Aspiring Data Analyst",
  about: "I am a dedicated 3rd year B.Tech student at Samskruti College of Engineering and Technology with a strong passion for data analytics. I enjoy uncovering patterns in data and am constantly learning new tools and techniques to transform raw information into meaningful insights.",
  email: "mandaraju.c753@gmail.com",
  location: "India",
  resumeUrl: "#",
  skills: [
    {
      category: "Programming Languages",
      items: [
        { name: "Python", proficiency: 90 },
        { name: "SQL", proficiency: 85 },
        { name: "R", proficiency: 75 },
        { name: "C++", proficiency: 70 }
      ]
    },
    {
      category: "Data Visualization",
      items: [
        { name: "Tableau", proficiency: 85 },
        { name: "Power BI", proficiency: 80 },
        { name: "Matplotlib", proficiency: 90 },
        { name: "Seaborn", proficiency: 90 }
      ]
    },
    {
      category: "Machine Learning Libraries",
      items: [
        { name: "Scikit-learn", proficiency: 85 },
        { name: "Pandas", proficiency: 95 },
        { name: "NumPy", proficiency: 90 },
        { name: "Keras", proficiency: 65 }
      ]
    },
    {
      category: "Statistical Software & Tools",
      items: [
        { name: "Excel", proficiency: 95 },
        { name: "Google Analytics", proficiency: 75 },
        { name: "MySQL", proficiency: 85 },
        { name: "Jupyter Notebook", proficiency: 90 }
      ]
    }
  ],
  education: [
    {
      degree: "Bachelor of Technology (3rd Year)",
      institution: "Samskruti College of Engineering and Technology",
      period: "2023 - 2027",
      description: "Focusing on Computer Science and Engineering with a specialization in Data Science and Analytics."
    }
  ],
  certifications: [
    {
      name: "Virtual Internship Program with ServiceNow and SmartBridge",
      issuer: "ServiceNow & SmartBridge",
      date: "2023",
      link: "https://skillwallet.smartinternz.com/internship/certificate/b818123d4596c686bf837ce0d839a9af"
    },
    {
      name: "Virtual Internship from EduSkills AICTE",
      issuer: "EduSkills & AICTE",
      date: "2023",
      link: "#"
    }
  ],
  achievements: [
    {
      title: "Data Fundamentals from IBM",
      description: "Successfully completed the Data Fundamentals course from IBM, demonstrating core competencies in data analysis and management.",
      date: "2023",
      link: "https://www.credly.com/badges/76baa761-4944-4af3-baff-64b8993ceac7/public_url"
    },
    {
      title: "EduSkills AICTE Internship Details",
      description: "Certificate ID: e622bd797558f0aab626af216bec9fc3 | Student ID: STU662c8c42ee2071714195522",
      date: "2023"
    }
  ],
  projects: [
    {
      id: "1",
      title: "E-commerce Churn Prediction",
      description: "Developed a random forest model to predict customer churn with 89% accuracy, leading to a 15% increase in retention. This project involved extensive feature engineering and hyperparameter tuning.",
      tags: ["Python", "Scikit-learn", "SQL"],
      images: [
        "https://picsum.photos/seed/churn1/800/600",
        "https://picsum.photos/seed/churn2/800/600",
        "https://picsum.photos/seed/churn3/800/600"
      ],
      link: "#",
      repo: "#"
    },
    {
      id: "2",
      title: "Global Supply Chain Dashboard",
      description: "Interactive Tableau dashboard monitoring real-time logistics across 4 continents for a Fortune 500 client. Integrated multiple data sources including SAP and Oracle.",
      tags: ["Tableau", "ETL", "Excel"],
      images: [
        "https://picsum.photos/seed/supply1/800/600",
        "https://picsum.photos/seed/supply2/800/600"
      ],
      link: "#"
    },
    {
      id: "3",
      title: "Stock Market Sentiment Analysis",
      description: "NLP project analyzing Twitter sentiment to correlate with daily stock price movements of tech giants. Used VADER and TextBlob for sentiment scoring.",
      tags: ["NLP", "Python", "API"],
      images: [
        "https://picsum.photos/seed/stock1/800/600",
        "https://picsum.photos/seed/stock2/800/600",
        "https://picsum.photos/seed/stock3/800/600"
      ],
      repo: "#"
    }
  ],
  socials: [
    {
      platform: "LinkedIn",
      url: "https://www.linkedin.com/in/manda-raju-b88772372/",
      icon: "Linkedin"
    },
    {
      platform: "GitHub",
      url: "https://github.com/MandaRaju-1",
      icon: "Github"
    },
    {
      platform: "Twitter",
      url: "https://x.com/MRaju56299",
      icon: "Twitter"
    }
  ]
};
