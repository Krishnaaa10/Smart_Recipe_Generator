# 🧠 Smart Recipe Generator  
### *Discover your perfect meal in seconds!*
<img width="1900" height="1079" alt="image" src="https://github.com/user-attachments/assets/de19795d-8288-4bed-b16a-3137b4103ace" />


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

```
smart-recipe-generator/
│
├── public/
├── src/
│   ├── assets/
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── package.json
├── vite.config.js
├── tailwind.config.js
├── README.md
└── .gitignore
```

---

## 🧠 Recipe Matching Logic  

Each recipe in the built-in database (30+ Indian dishes) includes ingredients, instructions, nutrition, difficulty, and dietary tags.  
The algorithm compares user-selected ingredients with each recipe’s list, computes a **match percentage**, sorts recipes by relevance, and filters them according to cooking time, difficulty, and dietary preferences.

---

## ⚡ How to Run Locally

1.  **Clone the repository**
    ```bash
    git clone [https://github.com/your-username/smart-recipe-generator.git](https://github.com/your-username/smart-recipe-generator.git)
    cd smart-recipe-generator
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Run the development server**
    ```bash
    npm run dev
    ```

4.  **Open in browser**
    `http://localhost:5173`

---

## 🚀 Deployment

The app is deployed on Vercel for seamless CI/CD and scalability.

🔗 **Live URL:** [https://smart-recipe-generator-lemon.vercel.app](https://smart-recipe-generator-lemon.vercel.app)

To redeploy manually:
```bash
vercel deploy

---

```markdown
## 👨‍💻 Developer

Shrikrishna Patel
Software Engineer | Frontend Developer | Tech Enthusiast

📧 [krishnaspattel@gmail.com]

💻 [GitHub](https://github.com/Krishnaaa10)

🔗 [LinkedIn](https://www.linkedin.com/in/shrikrishnapatel10/)

---

⭐ If you found this project inspiring, give it a star on GitHub! ⭐
