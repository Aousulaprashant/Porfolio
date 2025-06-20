// src/data/projects.js
const projects = [
  {
    title: "Dev-Sea – Developer Q&A Platform",
    image: "/projects/DevSec.png",
    description:
      "A full-stack Q&A platform for developers with rich text editing, keyword search, and modular REST APIs. Includes secure Firebase login and scalable MongoDB schema.",
    stack: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "Firebase"],
    github: "https://github.com/Aousulaprashant/Dev-Sea",
    demo: "https://dev-sea-nru4.vercel.app/",
  },
  {
    title: "MOODsync – Mood-Based Music Engine",
    image: "/projects/MoodSync.png",
    description:
      "Real-time music recommendations based on facial expressions and text sentiment. Designed for cabs, flights & personal use with YouTube & Deezer API integrations.",
    stack: [
      "React.js",
      "Node.js",
      "Express.js",
      "Face-API.js",
      "Firebase",
      "YouTube API",
    ],
    github:
      "https://github.com/Aousulaprashant/MOodsync-Real-Time-Mood-Based-Music-Engine-for-Cabs-Flights-Personal-Use/tree/main",
    demo: "https://m-oodsync-real-time-mood-based-musi-two.vercel.app/",
  },
  {
    title: "Multiple Disease Prediction System",
    image: "/projects/ML-multiDiseasePredictionSystem.png",
    description:
      "Streamlit-based ML web app to predict Diabetes, Heart Disease & Parkinson’s using Logistic Regression & SVM. Deployed on Streamlit Cloud.",
    stack: ["Python", "Streamlit", "Scikit-learn", "Pandas", "NumPy", "SVM"],
    github:
      "https://github.com/Aousulaprashant/Multiple-Disease-Prediction-System-ML",
    demo: "https://multiple-disease-prediction-system-mlgit-a32er9hkm3gwg99tftmb2.streamlit.app/",
  },
  {
    title: "Blog Application",
    image: "/projects/blog.png",
    description:
      "A full-stack blog platform with create, read, update, and delete functionality. Includes user authentication, MongoDB integration, and a commenting feature.",
    stack: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT"],
    github: "https://github.com/Aousulaprashant",
    demo: "https://prashanth-blogspro.netlify.app/",
  },
  {
    title: "Chat App",
    image: "/projects/chat.png",
    description:
      "A real-time chat app with secure Firebase authentication and Cloud Firestore for message storage. Fully responsive for desktop and mobile devices.",
    stack: ["React.js", "Firebase", "Cloud Firestore"],
    github: "https://github.com/Aousulaprashant",
    demo: "https://chatapp-35724.web.app/",
  },
  {
    title: "Predicting Employee Attrition",
    image: "/projects/employeeML.png",
    description:
      "An ML app to predict employee attrition using SVC and XGBoost with feature engineering, label encoding, and hyperparameter tuning. Deployed on Streamlit Cloud.",
    stack: [
      "Python",
      "Streamlit",
      "SVC",
      "XGBoost",
      "Pandas",
      "NumPy",
      "Scikit-learn",
    ],
    github:
      "https://github.com/Aousulaprashant/Predicting-Employee-Attrition-ML",
    demo: "https://predicting-employee-attrition-mlgit-rsqxhncdhztsgtwg3pq2ka.streamlit.app/",
  },
  {
    title: "Customer Feedback Analysis",
    image: "/projects/customer.png",
    description:
      "Analyzed airline reviews using NLP and Agglomerative Clustering. Used TF-IDF, PCA, and dendrograms to visualize clusters and derive customer insights.",
    stack: ["Python", "NLP", "Scikit-learn", "Pandas", "nltk", "PCA"],
    github:
      "https://github.com/Aousulaprashant/Customer-Feedback-Analysis-AgglomerativeClustering",
    demo: "", // No deployed link mentioned
  },
  {
    title: "Big Mart Sales Prediction",
    image: "/projects/bigMart.png",
    description:
      "Sales forecasting model using XGBoost Regressor. Included data cleaning, encoding, and feature selection to improve prediction accuracy.",
    stack: ["Python", "Scikit-learn", "Pandas", "XGBoost"],
    github: "https://github.com/Aousulaprashant/Big-Mart-Sales-Prediction-ML",
    demo: "", // No deployed link mentioned
  },
];

export default projects;
