const quotes = [
    "Innovation distinguishes a developer from a coder.",
    "I code not just to create, but to inspire.",
    "AI + Creativity = Limitless Possibilities.",
    "Design is intelligence made visible.",
];

const projects = [
    {
        title: "Smart Portfolio",
        desc: "A portfolio that adapts content using AI-generated suggestions and theme switching."
    },
    {
        title: "AI Note Assistant",
        desc: "A web app that summarizes and organizes notes intelligently using AI algorithms."
    },
    {
        title: "Interactive Storybook",
        desc: "A branching narrative web experience that reacts to user choices with AI content."
    },
    {
        title: "Mood-based UI",
        desc: "A dynamic portfolio UI that changes color, layout, and text based on your mood selection."
    }
];

document.getElementById('generate').addEventListener('click', () => {
    const random = quotes[Math.floor(Math.random() * quotes.length)];
    document.getElementById('aiQuote').textContent = `"${random}"`;
});

const container = document.getElementById('projectsContainer');
projects.forEach(p => {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.innerHTML = `<h3>${p.title}</h3><p>${p.desc}</p>`;
    container.appendChild(card);
});
