const translationDict = {
    'A': '🐸', 'B': '🐢', 'C': '🐍', 'D': '🐛', 'E': '🐜', 'F': '🐞', 'G': '🦎', 'H': '🐊', 'I': '🐉',
    'J': '🐲', 'K': '🦕', 'L': '🦖', 'M': '🐧', 'N': '🐦', 'O': '🐤', 'P': '🐣', 'Q': '🦆', 'R': '🦅',
    'S': '🦉', 'T': '🦇', 'U': '🐺', 'V': '🦊', 'W': '🐱', 'X': '🐶', 'Y': '🦁', 'Z': '🐯',
    'a': '🦄', 'b': '🐷', 'c': '🐸', 'd': '🐢', 'e': '🐍', 'f': '🐛', 'g': '🐜', 'h': '🐞', 'i': '🦎',
    'j': '🐊', 'k': '🐉', 'l': '🐲', 'm': '🦕', 'n': '🦖', 'o': '🐧', 'p': '🐦', 'q': '🐤', 'r': '🐣',
    's': '🦆', 't': '🦅', 'u': '🦉', 'v': '🦇', 'w': '🐺', 'x': '🦊', 'y': '🐱', 'z': '🐶'
};

const reverseTranslationDict = {};
for (const [key, value] of Object.entries(translationDict)) {
    reverseTranslationDict[value] = key;
}

// Additional dictionaries for the new languages (simplified example)
const latinDict = {
    'A': 'A', 'B': 'B', 'C': 'C', 'D': 'D', 'E': 'E', 'F': 'F', 'G': 'G', 'H': 'H', 'I': 'I',
    'J': 'J', 'K': 'K', 'L': 'L', 'M': 'M', 'N': 'N', 'O': 'O', 'P': 'P', 'Q': 'Q', 'R': 'R',
    'S': 'S', 'T': 'T', 'U': 'U', 'V': 'V', 'W': 'W', 'X': 'X', 'Y': 'Y', 'Z': 'Z',
    'a': 'a', 'b': 'b', 'c': 'c', 'd': 'd', 'e': 'e', 'f': 'f', 'g': 'g', 'h': 'h', 'i': 'i',
    'j': 'j', 'k': 'k', 'l': 'l', 'm': 'm', 'n': 'n', 'o': 'o', 'p': 'p', 'q': 'q', 'r': 'r',
    's': 's', 't': 't', 'u': 'u', 'v': 'v', 'w': 'w', 'x': 'x', 'y': 'y', 'z': 'z'
};

// Repeat similar dictionaries for Celtic, Norwegian, Danish, German, and Welsh
const celticDict = { ...latinDict }; // Example, replace with actual Celtic translations
const norwegianDict = { ...latinDict }; // Example, replace with actual Norwegian translations
const danishDict = { ...latinDict }; // Example, replace with actual Danish translations
const germanDict = { ...latinDict }; // Example, replace with actual German translations
const welshDict = { ...latinDict }; // Example, replace with actual Welsh translations

function translateText() {
    const inputText = document.getElementById('inputText').value;
    let translatedText = '';
    let latinText = '';
    let celticText = '';
    let norwegianText = '';
    let danishText = '';
    let germanText = '';
    let welshText = '';

    for (let char of inputText) {
        translatedText += translationDict[char] || char;
        latinText += latinDict[char] || char;
        celticText += celticDict[char] || char;
        norwegianText += norwegianDict[char] || char;
        danishText += danishDict[char] || char;
        germanText += germanDict[char] || char;
        welshText += welshDict[char] || char;
    }

    document.getElementById('outputText').innerText = translatedText;
    document.getElementById('latinText').innerText = 'Latin: ' + latinText;
    document.getElementById('celticText').innerText = 'Celtic: ' + celticText;
    document.getElementById('norwegianText').innerText = 'Norwegian: ' + norwegianText;
    document.getElementById('danishText').innerText = 'Danish: ' + danishText;
    document.getElementById('germanText').innerText = 'German: ' + germanText;
    document.getElementById('welshText').innerText = 'Welsh: ' + welshText;
}

function reverseTranslateText() {
    const inputTranslatedText = document.getElementById('inputTranslatedText').value;
    let englishText = '';

    for (let char of inputTranslatedText) {
        englishText += reverseTranslationDict[char] || char;
    }

    document.getElementById('outputEnglishText').innerText = englishText;
}

// Add floating phrases to the background
const phrases = [
    "You are beautiful", "You are amazing", "You are unique", "You are strong", 
    "You are loved", "You are special", "You are wonderful", "You are talented", 
    "You are appreciated", "You are brilliant", "You are fantastic", "You are incredible", 
    "You are extraordinary", "You are magnificent", "You are remarkable", "You are awesome",
    "You are inspiring", "You are exceptional", "You are marvelous", "You are phenomenal"
];

const background = document.querySelector('.background-phrases');

for (let i = 0; i < 100; i++) {
    const phraseElement = document.createElement('span');
    phraseElement.textContent = phrases[Math.floor(Math.random() * phrases.length)];
    phraseElement.style.left = Math.random() * 100 + 'vw';
    phraseElement.style.top = Math.random() * 100 + 'vh';
    phraseElement.style.animationDelay = Math.random() * 5 + 's';
    phraseElement.style.opacity = 0.1 + Math.random() * 0.2;
    background.appendChild(phraseElement);
}

// Play ribbit sound and animate button on click
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', () => {
        document.getElementById('ribbitSound').play();
        button.classList.add('hop');
        setTimeout(() => button.classList.remove('hop'), 200);
    });
});

// Animate title with typewriter effect
const titleVariations = [
    "Sutton is incredible", "Sutton is amazing", "Sutton is fantastic", 
    "Sutton is wonderful", "Sutton is brilliant", "Sutton is extraordinary", 
    "Sutton is phenomenal", "Sutton is remarkable", "Sutton is awesome", 
    "Sutton is inspiring", "Sutton is exceptional", "Sutton is magnificent", 
    "Sutton is marvelous", "Sutton is superb", "Sutton is terrific", 
    "Sutton is outstanding", "Sutton is fabulous", "Sutton is breathtaking", 
    "Sutton is stupendous", "Sutton is spectacular"
];

const romanticPhrases = [
    "I really like your butt", "Je t'aime", "Te quiero", "Ich liebe dich", 
    "Ti amo", "Eu te amo", "Jag älskar dig", "Ik hou van jou", 
    "Jeg elsker deg", "Aşkım seni seviyorum"
];

const romanticFonts = [
    "'Dancing Script', cursive", "'Pacifico', cursive", "'Indie Flower', cursive", 
    "'Lobster', cursive", "'Courgette', cursive", "'Great Vibes', cursive", 
    "'Shadows Into Light', cursive", "'Yellowtail', cursive", 
    "'Sacramento', cursive", "'Irish Grover', cursive"
];

let titleIndex = 0;
const animatedTitle = document.getElementById('animatedTitle');
const romanticTitle = document.getElementById('romanticTitle');

function typeWriterEffect(text, i, element, fnCallback) {
    if (i < text.length) {
        element.innerHTML = text.substring(0, i + 1);
        setTimeout(() => typeWriterEffect(text, i + 1, element, fnCallback), 100);
    } else if (typeof fnCallback == 'function') {
        setTimeout(fnCallback, 700);
    }
}

function startTitleAnimation(i) {
    if (i < titleVariations.length) {
        typeWriterEffect(titleVariations[i], 0, animatedTitle, () => startTitleAnimation(i + 1));
    } else {
        setTimeout(() => startTitleAnimation(0), 700);
    }
}

function startRomanticAnimation(i) {
    if (i < romanticPhrases.length) {
        romanticTitle.style.fontFamily = romanticFonts[i];
        typeWriterEffect(romanticPhrases[i], 0, romanticTitle, () => startRomanticAnimation(i + 1));
    } else {
        setTimeout(() => startRomanticAnimation(0), 700);
    }
}

startTitleAnimation(0);
startRomanticAnimation(0);
