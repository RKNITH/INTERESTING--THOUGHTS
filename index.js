const thoughts = [
    "The only limit to our realization of tomorrow is our doubts of today.",
    "The purpose of our lives is to be happy.",
    "Life is what happens when you're busy making other plans.",
    "Get busy living or get busy dying.",
    "You have within you right now, everything you need to deal with whatever the world can throw at you.",
    "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful. - Albert Schweitzer",
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Success is not the absence of failure; it's the persistence through failure. - Aisha Tyler",
    "Happiness is not something readymade. It comes from your own actions. - Dalai Lama",
    "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
    "The only person you should try to be better than is the person you were yesterday. - Anonymous",
    "It is never too late to be what you might have been. - George Eliot",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
    "In the end, it's not the years in your life that count. It's the life in your years. - Abraham Lincoln",
    "Life is 10% what happens to us and 90% how we react to it. - Charles R. Swindoll",
    "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
    "The only way to achieve the impossible is to believe it is possible. - Charles Kingsleigh",
    "The best time to plant a tree was 20 years ago. The second best time is now. - Chinese Proverb",
    "It always seems impossible until it is done. - Nelson Mandela",
    "Everything you can imagine is real. - Pablo Picasso",
    "Dream big and dare to fail. - Norman Vaughan",
    "It does not matter how slowly you go as long as you do not stop. - Confucius",
    "The only person you should try to be better than is the person you were yesterday. - Anonymous",
    "Life isn't about finding yourself. Life is about creating yourself. - George Bernard Shaw",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "The only limit to our realization of tomorrow is our doubts of today. - Franklin D. Roosevelt",
    "Success is walking from failure to failure with no loss of enthusiasm. - Winston Churchill",
    "In the middle of every difficulty lies opportunity. - Albert Einstein",
    "The only way to do great work is to love what you do. - Steve Jobs",
    "The road to success and the road to failure are almost exactly the same. - Colin R. Davis",
    "Success usually comes to those who are too busy to be looking for it. - Henry David Thoreau",
    "Opportunities don't happen, you create them. - Chris Grosser",
    "Don't be pushed around by the fears in your mind. Be led by the dreams in your heart. - Roy T. Bennett",
    "The only thing standing between you and your goal is the story you keep telling yourself as to why you can't achieve it. - Jordan Belfort",
    "The best revenge is massive success. - Frank Sinatra",
    "Setting goals is the first step in turning the invisible into the visible. - Tony Robbins",
    "Don't let yesterday take up too much of today. - Will Rogers",
    "You are never too old to set another goal or to dream a new dream. - C.S. Lewis",
    "People who are crazy enough to think they can change the world, are the ones who do. - Rob Siltanen",
    "Believe in yourself, take on your challenges, dig deep within yourself to conquer fears. Never let anyone bring you down. You got to keep going. - Chantal Sutherland",
    "The only limit to our realization of tomorrow is our doubts of today. - Franklin D. Roosevelt",
    "It does not matter how slowly you go as long as you do not stop. - Confucius",
    "It always seems impossible until it is done. - Nelson Mandela",
    "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "The only person you should try to be better than is the person you were yesterday. - Anonymous",
    "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
    "In the end, it's not the years in your life that count. It's the life in your years. - Abraham Lincoln",
    "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
    "The best time to plant a tree was 20 years ago. The second best time is now. - Chinese Proverb",
    "Everything you can imagine is real. - Pablo Picasso",
    "Dream big and dare to fail. - Norman Vaughan",
    "It does not matter how slowly you go as long as you do not stop. - Confucius",
    "Life is a journey, not a destination. - Ralph Waldo Emerson",
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Life isn't about finding yourself. Life is about creating yourself. - George Bernard Shaw",
    "The purpose of our lives is to be happy. - Dalai Lama",
    "The biggest adventure you can take is to live the life of your dreams. - Oprah Winfrey",
    "Success is not the key to happiness. Happiness is the key to success. - Albert Schweitzer",
    "Life is 10% what happens to us and 90% how we react to it. - Charles R. Swindoll",
    "In the middle of difficulty lies opportunity. - Albert Einstein",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "The only limit to our realization of tomorrow is our doubts of today. - Franklin D. Roosevelt",
    "The only person you should try to be better than is the person you were yesterday. - Anonymous",
    "Don't be pushed around by the fears in your mind. Be led by the dreams in your heart. - Roy T. Bennett",
    "Life begins at the end of your comfort zone. - Neale Donald Walsch",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "The only way to achieve the impossible is to believe it is possible. - Charles Kingsleigh",
    "Opportunities don't happen, you create them. - Chris Grosser",
    "Don't let yesterday take up too much of today. - Will Rogers",
    "You are never too old to set another goal or to dream a new dream. - C.S. Lewis",
    "People who are crazy enough to think they can change the world, are the ones who do. - Rob Siltanen",
    "Believe in yourself, take on your challenges, dig deep within yourself to conquer fears. Never let anyone bring you down. You got to keep going. - Chantal Sutherland",
    "The only limit to our realization of tomorrow is our doubts of today. - Franklin D. Roosevelt",
    "It does not matter how slowly you go as long as you do not stop. - Confucius",
    "It always seems impossible until it is done. - Nelson Mandela",
    "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
    "The best time to plant a tree was 20 years ago. The second best time is now. - Chinese Proverb",
    "Everything you can imagine is real. - Pablo Picasso",
    "Dream big and dare to fail. - Norman Vaughan",
    "Setting goals is the first step in turning the invisible into the visible. - Tony Robbins",
    "Success usually comes to those who are too busy to be looking for it. - Henry David Thoreau",
    "The best revenge is massive success. - Frank Sinatra",
    "Life is what happens when you're busy making other plans. - Allen Saunders",
    "The only person you should try to be better than is the person you were yesterday. - Anonymous",
    "It is never too late to be what you might have been. - George Eliot",
    "In the end, it's not the years in your life that count. It's the life in your years. - Abraham Lincoln",
    "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
    "The only limit to our realization of tomorrow is our doubts of today. - Franklin D. Roosevelt",
    "The only person you should try to be better than is the person you were yesterday. - Anonymous",
    "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
    "In the end, it's not the years in your life that count. It's the life in your years. - Abraham Lincoln",
    "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
    "The best time to plant a tree was 20 years ago. The second best time is now. - Chinese Proverb",
    "Everything you can imagine is real. - Pablo Picasso",
    "Dream big and dare to fail. - Norman Vaughan",
    "It does not matter how slowly you go as long as you do not stop. - Confucius",
    "जीवन एक अद्वितीय यात्रा है, उसका आनंद लेने का तरीका अपना निर्णय है। - स्वामी विवेकानंद",
    "सपने देखना ही जीवन का सबसे महत्वपूर्ण हिस्सा है। - अब्दुल कलाम",
    "संघर्ष ही जीवन की असली उड़ान है। - अब्दुल कलाम",
    "जीवन में सफलता का अर्थ सिर्फ उसका अनुभव करना नहीं होता, बल्कि उसे दूसरों के साथ बांटना होता है। - सायुजीन जे राय",
    "जीवन का आनंद वहीं मिलता है, जहां हम अपनी इच्छाओं का पालन करते हैं। - स्वामी विवेकानंद",
    "जीवन में सफल होने का मतलब यह नहीं होता कि हमें हमेशा सब कुछ मिल जाता है, बल्कि यह होता है कि हम कभी हार नहीं मानते। - अब्दुल कलाम",
    "अपने सपनों को पूरा करने के लिए हमें हमेशा कठिनाइयों का सामना करना पड़ता है। - सायुजीन जे राय",
    "आपके सपनों को पूरा करने के लिए आपको पहले उनके साथ मिलना होगा। - स्वामी विवेकानंद",
    "जीवन में सफलता के लिए आपको पहले खुद को परिभाषित करना होगा। - स्वामी विवेकानंद",
    "जीवन का सबसे बड़ा सूर्य वह है जो हमारे अंदर होता है। - रबींद्रनाथ टैगोर",
    "असफलता सफलता की माँ है। - अब्दुल कलाम",
    "जीवन एक चुनौती है, उसका सामना करें और आगे बढ़ें। - स्वामी विवेकानंद",
    "अगर आपके पास कोई सपना है, तो उसको पूरा करने के लिए मेहनत की आवश्यकता है। - सायु",
]


function displayThoughts() {
    const thoughtContainer = document.getElementById('thought-container');
    thoughts.forEach(thought => {
        const thoughtElement = document.createElement('div');
        thoughtElement.className = 'thought light-mode';
        thoughtElement.textContent = thought;
        thoughtContainer.appendChild(thoughtElement);
    });
}

function toggleColorMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');
    body.classList.toggle('light-mode');

    const header = document.querySelector('header');
    header.classList.toggle('dark-mode');
    header.classList.toggle('light-mode');

    const footer = document.querySelector('footer');
    footer.classList.toggle('dark-mode');
    footer.classList.toggle('light-mode');

    const thoughts = document.querySelectorAll('.thought');
    thoughts.forEach(thought => {
        thought.classList.toggle('dark-mode');
        thought.classList.toggle('light-mode');
    });

    const button = document.getElementById('color-mode-toggle');
    button.classList.toggle('dark-mode');
    button.classList.toggle('light-mode');
}

// Call the function to display thoughts when the page loads
window.onload = displayThoughts;
