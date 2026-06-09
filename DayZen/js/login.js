document.addEventListener("DOMContentLoaded", function() {
    const quotes = [
        { text: "The secret of getting ahead is getting started.", author: "Mark Twain" },
        { text: "Your time is limited, so don't waste it living someone else's life.", author: "Steve Jobs" },
        { text: "The best way to predict your future is to create it.", author: "Abraham Lincoln" },
        { text: "Focus on being productive instead of busy.", author: "Tim Ferriss" },
        { text: "Simplicity is the ultimate sophistication.", author: "Leonardo da Vinci" },
        { text: "Do not wait to strike till the iron is hot; but make it hot by striking.", author: "William Butler Yeats" },
        { text: "The way to get started is to quit talking and begin doing.", author: "Walt Disney" },
        { text: "He who has a why to live can bear almost any how.", author: "Friedrich Nietzsche" },
        { text: "Peace is a journey of a thousand miles and it must be taken one step at a time.", author: "Lyndon B. Johnson" },
        { text: "Yesterday I was clever, so I wanted to change the world. Today I am wise, so I am changing myself.", author: "Rumi" }
    ];
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const selectedQuote = quotes[randomIndex];
    document.getElementById("dynamic-quote").textContent = `"${selectedQuote.text}"`;
    document.getElementById("quote-author").textContent = `— ${selectedQuote.author}`;
    document.getElementById("loginForm").addEventListener("submit", function (e) {
        e.preventDefault();
        const enteredEmail = document.getElementById("loginEmail").value.trim();
        const enteredPassword = document.getElementById("loginPassword").value.trim();
        const storedEmail = localStorage.getItem("registeredEmail");
        const storedPassword = localStorage.getItem("registeredPassword");
        const errorDiv = document.getElementById("loginError");
        if (enteredEmail === storedEmail && enteredPassword === storedPassword) {
            window.location.href = "../pages/indexacc.html";
        } else {
            errorDiv.innerText = "Invalid credentials or account not found.";
            errorDiv.style.display = "block";
        }
    });
});