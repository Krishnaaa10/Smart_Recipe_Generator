# 🧠 Smart Recipe Generator  
### *Discover your perfect meal in seconds!*

![Smart Recipe Generator Banner](https://raw.githubusercontent.com/your-username/smart-recipe-generator/main/public/banner.png)  
*(Replace with a screenshot of your app!)*  

---

## 🌐 Live Demo  
🔗 **[Visit the Deployed App on Vercel](https://smart-recipe-generator-lemon.vercel.app)**  

---

## 📜 Project Overview  

**Smart Recipe Generator** is a responsive web application that helps users discover recipes based on the ingredients they already have and their dietary preferences.  
It quickly suggests multiple dishes with step-by-step instructions and nutritional information, saving time and reducing food waste.  

This project was developed as part of a **Software Engineering Technical Assessment**, built end-to-end in under 8 hours to demonstrate practical problem-solving, clean UI design, and efficient code structure.

---

## ⚙️ Key Features  

### 🥕 Ingredient Input  
- Type and select ingredients from suggestions  
- Add or remove ingredients easily  
- Choose dietary preferences (Vegetarian, Vegan, Gluten-Free)  

### 🍲 Recipe Generation  
- Suggests recipes based on ingredient matches  
- Displays match percentage dynamically  
- Shows detailed steps and nutritional values  

### 🔍 Filters & Customization  
- Filter recipes by:  
  - Difficulty (Easy / Medium / Hard)  
  - Cooking time (10–120 minutes)  
  - Dietary preferences  
- Adjust serving sizes dynamically  

### ⭐ User Feedback  
- Rate recipes (1 – 5 stars)  
- Save favorites ❤️  
- Smart suggestions based on favorites and ratings  

### 🎨 UI / UX  
- Gradient-based modern interface  
- Fully responsive for mobile and desktop  
- Built with **TailwindCSS** for elegant design  

---

## 🧩 Tech Stack  

| Layer | Technology | Purpose |
|:------|:------------|:---------|
| Frontend | **React + Vite** | High-performance, modular frontend |
| Styling | **TailwindCSS** | Modern, responsive styling |
| Icons | **Lucide React** | Lightweight icon library |
| Hosting | **Vercel** | Free, production-grade hosting |

---

## 🧪 Project Structure  

smart-recipe-generator/
│
├── public/ # Static assets
├── src/
│ ├── assets/ # Images / icons
│ ├── App.jsx # Core React logic
│ ├── main.jsx # Entry point
│ ├── index.css # Global styles
│
├── package.json
├── vite.config.js
├── tailwind.config.js
├── README.md
└── .gitignore


---

## 🧠 Recipe Matching Logic  

Each recipe in the built-in database (30+ Indian dishes) includes ingredients, instructions, nutrition, difficulty, and dietary tags.  
The algorithm compares user-selected ingredients with each recipe’s list, computes a **match percentage**, sorts recipes by relevance, and filters them according to cooking time, difficulty, and dietary preferences.

---

## ⚡ How to Run Locally  

1. **Clone the repository**  
   ```bash
   git clone https://github.com/your-username/smart-recipe-generator.git
   cd smart-recipe-generator


Install dependencies

npm install


Run the development server

npm run dev


Open in browser

http://localhost:5173

🚀 Deployment

The app is deployed on Vercel for seamless CI/CD and scalability.
🔗 Live URL: https://smart-recipe-generator-lemon.vercel.app

To redeploy manually:

vercel deploy

📈 Evaluation Criteria Mapping
Requirement	Implementation
Ingredient Input	Text-based search with smart suggestions
Recipe Matching	Ingredient overlap + ranking algorithm
Filters	Difficulty, cook time, dietary preferences
Nutrition Info	Displayed per recipe
Ratings & Favorites	Built-in feedback system
UI / UX	Gradient-rich, responsive design
Hosting	Deployed on Vercel
Database	Local JSON dataset (30 recipes)
✍️ Author’s Approach (≈ 200 Words)

The Smart Recipe Generator was built to simulate a real-world product challenge — blending design thinking, logic, and usability.
I started by constructing a well-structured dataset of Indian recipes containing ingredients, steps, and nutritional data.
An ingredient-based matching algorithm was implemented to compute recipe relevance, enabling quick discovery based on user input.

I chose React + Vite for performance and TailwindCSS for rapid, responsive styling.
Interactive features such as ratings, favorites, and serving adjustments personalize the user experience.
To ensure accessibility and speed, the app was deployed on Vercel, providing automatic builds and a live URL.

Given more time, the project will evolve with image-based ingredient recognition (AI/ML) and a Flask / Node backend for persistent user data.
This project demonstrates my ability to translate business requirements into a polished, production-ready, and user-friendly application within tight timelines.

👨‍💻 Developer

Shrikrishna Patel
Software Engineer | Frontend Developer | Tech Enthusiast

📧 krishnaspattel@gmail.com

💻 [https://github.com/Krishnaaa10](https://github.com/Krishnaaa10)

🔗 [https://linkedin.com/in/your-linkedin-id](https://www.linkedin.com/in/shrikrishnapatel10/)

⭐ If you found this project inspiring, give it a star on GitHub! ⭐

