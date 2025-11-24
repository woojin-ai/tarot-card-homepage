// ====================================
// Tarot Cards Data
// ====================================
const tarotCards = [
    { id: 0, name: "The Fool", symbol: "0", keywords: ["시작", "순수함", "자유"], 
      interpretation: "새로운 시작을 의미합니다. 순수한 마음으로 미지의 세계로 나아가는 용기가 필요한 시기입니다. 두려움을 내려놓고 자유롭게 당신의 길을 걸어가세요." },
    { id: 1, name: "The Magician", symbol: "I", keywords: ["창조", "의지", "재능"], 
      interpretation: "당신 안에 모든 가능성이 있습니다. 당신의 재능과 의지로 원하는 것을 창조할 수 있는 시기입니다. 자신감을 가지고 행동하세요." },
    { id: 2, name: "The High Priestess", symbol: "II", keywords: ["직관", "신비", "지혜"], 
      interpretation: "내면의 목소리에 귀 기울이세요. 직관과 잠재의식이 당신에게 중요한 메시지를 전하고 있습니다. 조용히 명상하는 시간이 필요합니다." },
    { id: 3, name: "The Empress", symbol: "III", keywords: ["풍요", "모성", "자연"], 
      interpretation: "풍요와 번영의 시기가 다가옵니다. 사랑과 돌봄으로 주변을 가꾸면 더 큰 결실을 맺을 것입니다. 자연과 연결되세요." },
    { id: 4, name: "The Emperor", symbol: "IV", keywords: ["권위", "안정", "리더십"], 
      interpretation: "구조와 질서가 필요한 시기입니다. 리더십을 발휘하고 확고한 기반을 다지세요. 책임감 있는 결정이 중요합니다." },
    { id: 5, name: "The Hierophant", symbol: "V", keywords: ["전통", "교육", "영성"], 
      interpretation: "전통적인 가치와 지혜를 존중하세요. 멘토나 스승으로부터 배울 것이 있습니다. 영적인 성장을 추구하는 시기입니다." },
    { id: 6, name: "The Lovers", symbol: "VI", keywords: ["사랑", "선택", "조화"], 
      interpretation: "중요한 선택의 순간입니다. 마음과 이성의 조화를 이루고, 사랑과 관계에 집중하세요. 당신의 가치관과 일치하는 선택을 하세요." },
    { id: 7, name: "The Chariot", symbol: "VII", keywords: ["의지", "승리", "전진"], 
      interpretation: "강한 의지와 결단력으로 목표를 향해 나아가세요. 장애물을 극복하고 승리를 거둘 시기입니다. 자제력과 집중력이 핵심입니다." },
    { id: 8, name: "Strength", symbol: "VIII", keywords: ["용기", "인내", "자제"], 
      interpretation: "진정한 힘은 부드러움에서 나옵니다. 인내심과 자제력으로 어려움을 극복하세요. 내면의 야수를 길들이는 시기입니다." },
    { id: 9, name: "The Hermit", symbol: "IX", keywords: ["성찰", "고독", "내면"], 
      interpretation: "내면을 탐구하고 자아를 발견하는 시기입니다. 혼자만의 시간이 필요합니다. 고독 속에서 진리를 찾으세요." },
    { id: 10, name: "Wheel of Fortune", symbol: "X", keywords: ["운명", "변화", "순환"], 
      interpretation: "인생의 순환을 받아들이세요. 변화의 바람이 불고 있습니다. 운명의 흐름을 타고 새로운 기회를 잡으세요." },
    { id: 11, name: "Justice", symbol: "XI", keywords: ["정의", "균형", "진실"], 
      interpretation: "공정하고 균형잡힌 판단이 필요합니다. 진실이 드러나고 정의가 실현되는 시기입니다. 책임감 있게 행동하세요." },
    { id: 12, name: "The Hanged Man", symbol: "XII", keywords: ["희생", "관점", "정지"], 
      interpretation: "새로운 관점으로 상황을 바라보세요. 때로는 멈추고 기다리는 것이 답입니다. 희생과 헌신이 더 큰 깨달음을 가져올 것입니다." },
    { id: 13, name: "Death", symbol: "XIII", keywords: ["변화", "끝", "재탄생"], 
      interpretation: "끝은 새로운 시작입니다. 과거를 놓아주고 변화를 받아들이세요. 재탄생과 혁신의 시기가 다가옵니다." },
    { id: 14, name: "Temperance", symbol: "XIV", keywords: ["조화", "균형", "절제"], 
      interpretation: "균형과 절제가 중요합니다. 극단을 피하고 중용을 지키세요. 대립하는 것들을 조화롭게 융합하는 시기입니다." },
    { id: 15, name: "The Devil", symbol: "XV", keywords: ["집착", "욕망", "속박"], 
      interpretation: "물질적 욕망과 집착에서 벗어나세요. 당신을 묶고 있는 것이 무엇인지 깨달아야 합니다. 자유를 되찾을 시간입니다." },
    { id: 16, name: "The Tower", symbol: "XVI", keywords: ["파괴", "각성", "해방"], 
      interpretation: "급격한 변화와 예상치 못한 사건이 일어날 수 있습니다. 허물어지는 것은 새로운 기반을 다지기 위함입니다. 각성의 순간입니다." },
    { id: 17, name: "The Star", symbol: "XVII", keywords: ["희망", "영감", "치유"], 
      interpretation: "희망의 빛이 보입니다. 영감과 치유의 시기가 왔습니다. 별빛을 따라 당신의 꿈을 향해 나아가세요." },
    { id: 18, name: "The Moon", symbol: "XVIII", keywords: ["환상", "불안", "직관"], 
      interpretation: "불확실성과 혼란의 시기입니다. 환상과 현실을 구분하세요. 직관을 믿되 신중하게 행동하세요." },
    { id: 19, name: "The Sun", symbol: "XIX", keywords: ["성공", "기쁨", "활력"], 
      interpretation: "성공과 행복이 가득한 시기입니다. 긍정적인 에너지가 넘칩니다. 자신감을 가지고 빛을 발하세요." },
    { id: 20, name: "Judgement", symbol: "XX", keywords: ["심판", "각성", "재생"], 
      interpretation: "과거를 평가하고 새로운 각성을 맞이하는 시기입니다. 중대한 결정을 내릴 때입니다. 재생과 부활의 기회가 옵니다." },
    { id: 21, name: "The World", symbol: "XXI", keywords: ["완성", "성취", "통합"], 
      interpretation: "여정이 완성되고 목표가 달성됩니다. 모든 것이 하나로 통합되는 시기입니다. 성취감을 느끼고 다음 단계를 준비하세요." }
];

// ====================================
// State Management
// ====================================
let currentCategory = 'love';
let selectedCard = null;
let cardsRevealed = false;

// ====================================
// Initialize
// ====================================
document.addEventListener('DOMContentLoaded', () => {
    initializeCardDeck();
    initializeCategoryButtons();
});

// ====================================
// Card Deck Functions
// ====================================
function initializeCardDeck() {
    const cardDeck = document.getElementById('cardDeck');
    cardDeck.innerHTML = '';
    
    // Shuffle and select 12 cards for display
    const shuffledCards = shuffleArray([...tarotCards]).slice(0, 12);
    
    shuffledCards.forEach((card, index) => {
        const cardElement = createCardElement(card, index);
        cardDeck.appendChild(cardElement);
    });
}

function createCardElement(card, index) {
    const cardDiv = document.createElement('div');
    cardDiv.className = 'tarot-card';
    cardDiv.style.animationDelay = `${index * 0.1}s`;
    
    cardDiv.innerHTML = `
        <div class="card-inner">
            <div class="card-face card-back">
                <div class="card-back-design">✧</div>
            </div>
            <div class="card-face card-front">
                <div style="font-size: 2.5rem; margin-bottom: 0.5rem;">${card.symbol}</div>
                <div>${card.name}</div>
            </div>
        </div>
    `;
    
    cardDiv.addEventListener('click', () => selectCard(card, cardDiv));
    
    return cardDiv;
}

function selectCard(card, cardElement) {
    if (selectedCard) return; // Prevent multiple selections
    
    selectedCard = card;
    
    // Flip the selected card
    cardElement.classList.add('flipped');
    
    // Wait for flip animation, then show result
    setTimeout(() => {
        showResult(card);
    }, 800);
}

// ====================================
// Result Display
// ====================================
function showResult(card) {
    const resultContainer = document.getElementById('resultContainer');
    const cardImage = document.getElementById('selectedCardImage');
    const cardName = document.getElementById('selectedCardName');
    const interpretationText = document.getElementById('interpretationText');
    
    // Set card details
    cardImage.innerHTML = `
        <div style="font-size: 4rem;">${card.symbol}</div>
    `;
    cardName.textContent = card.name;
    interpretationText.textContent = card.interpretation;
    
    // Update keywords
    const keywordsContainer = document.querySelector('.result-keywords');
    keywordsContainer.innerHTML = card.keywords.map(keyword => 
        `<span class="keyword">${keyword}</span>`
    ).join('');
    
    // Show result with animation
    resultContainer.style.display = 'flex';
}

function closeResult() {
    const resultContainer = document.getElementById('resultContainer');
    resultContainer.style.display = 'none';
    resetReading();
}

function resetReading() {
    selectedCard = null;
    cardsRevealed = false;
    const resultContainer = document.getElementById('resultContainer');
    resultContainer.style.display = 'none';
    initializeCardDeck();
}

// ====================================
// Category Selection
// ====================================
function initializeCategoryButtons() {
    const categoryButtons = document.querySelectorAll('.category-btn');
    
    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            button.classList.add('active');
            
            // Update current category
            currentCategory = button.dataset.category;
            
            // Reset the reading
            resetReading();
        });
    });
}

// ====================================
// Utility Functions
// ====================================
function shuffleArray(array) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}

function scrollToReading() {
    const readingSection = document.getElementById('reading');
    readingSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// ====================================
// Smooth Scroll for Navigation
// ====================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// ====================================
// Navbar Scroll Effect
// ====================================
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.nav');
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        nav.style.padding = '1rem 0';
        nav.style.background = 'rgba(10, 10, 26, 0.95)';
    } else {
        nav.style.padding = '1.5rem 0';
        nav.style.background = 'rgba(10, 10, 26, 0.8)';
    }
    
    lastScroll = currentScroll;
});

// ====================================
// Parallax Effect for Hero Orb
// ====================================
window.addEventListener('scroll', () => {
    const orb = document.querySelector('.hero-orb');
    const scrolled = window.pageYOffset;
    const rate = scrolled * 0.5;
    
    if (orb) {
        orb.style.transform = `translate(-50%, calc(-50% + ${rate}px))`;
    }
});

// ====================================
// Card Entrance Animation
// ====================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease-out forwards';
        }
    });
}, observerOptions);

// Observe all card info items
document.querySelectorAll('.card-info-item').forEach(item => {
    observer.observe(item);
});

// ====================================
// Constellation Effect on Mouse Move
// ====================================
let mouseX = 0;
let mouseY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX / window.innerWidth;
    mouseY = e.clientY / window.innerHeight;
    
    const stars = document.querySelector('.stars');
    const stars2 = document.querySelector('.stars2');
    const stars3 = document.querySelector('.stars3');
    
    if (stars) {
        stars.style.transform = `translate(${mouseX * 20}px, ${mouseY * 20}px)`;
    }
    if (stars2) {
        stars2.style.transform = `translate(${mouseX * -15}px, ${mouseY * -15}px)`;
    }
    if (stars3) {
        stars3.style.transform = `translate(${mouseX * 10}px, ${mouseY * 10}px)`;
    }
});

// ====================================
// Random Sparkle Effect
// ====================================
function createSparkle() {
    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle';
    sparkle.style.cssText = `
        position: fixed;
        width: 4px;
        height: 4px;
        background: white;
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        left: ${Math.random() * window.innerWidth}px;
        top: ${Math.random() * window.innerHeight}px;
        animation: sparkle-fade 2s ease-out forwards;
        box-shadow: 0 0 10px rgba(255, 255, 255, 0.8);
    `;
    
    document.body.appendChild(sparkle);
    
    setTimeout(() => {
        sparkle.remove();
    }, 2000);
}

// Add sparkle animation to CSS dynamically
if (!document.querySelector('#sparkle-styles')) {
    const style = document.createElement('style');
    style.id = 'sparkle-styles';
    style.textContent = `
        @keyframes sparkle-fade {
            0% {
                opacity: 0;
                transform: scale(0);
            }
            50% {
                opacity: 1;
                transform: scale(1);
            }
            100% {
                opacity: 0;
                transform: scale(0);
            }
        }
    `;
    document.head.appendChild(style);
}

// Create sparkles periodically
setInterval(createSparkle, 2000);

// ====================================
// Console Easter Egg
// ====================================
console.log('%c✧ Mystical Tarot ✧', 'font-size: 24px; font-weight: bold; color: #d4af37; text-shadow: 0 0 10px rgba(212, 175, 55, 0.5);');
console.log('%c별빛 속에서 당신의 운명을 찾아보세요', 'font-size: 14px; color: #c0c0c0;');