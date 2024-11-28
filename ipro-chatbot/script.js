// Intelligence features
const sentiment = {
    positive: ['happy', 'great', 'awesome', 'excellent', 'good', 'love', 'perfect', 'thanks', 'thank'],
    negative: ['bad', 'terrible', 'awful', 'poor', 'wrong', 'hate', 'disappointed', 'broken', 'issue', 'problem'],
    urgent: ['asap', 'emergency', 'urgent', 'quickly', 'fast', 'now'],
    price_conscious: ['expensive', 'cheap', 'afford', 'budget', 'cost', 'save', 'price', 'worth'],
    quality_focused: ['quality', 'best', 'reliable', 'trusted', 'genuine', 'authentic']
};

// Chatbot responses with enhanced intelligence
const responses = {
    greeting: ['Hi there! I\'m your XDroid assistant. To get started, could you tell me your name?'],
    
    nameResponse: name => [
        `Great to meet you, ${name}! What would you like help with today?\n\n1. 📱 Mobile Services:\n   - Repairs\n   - iOS Jailbreaking\n   - Device Softmodding\n\n2. 💻 Mac Services:\n   - OpenCore Legacy Patcher\n   - Performance Optimization\n   - Software Upgrades\n\n3. 🌐 Web & App Development\n4. 📊 Digital Marketing\n5. 🔧 IT Solutions\n\nJust tell me what interests you!`,
        `Welcome, ${name}! How can I assist you today?\n\n1. 📱 Mobile Services:\n   - Device Repairs\n   - Jailbreaking\n   - Softmodding\n\n2. 💻 Mac Services:\n   - OpenCore Modding\n   - System Optimization\n   - Updates & Upgrades\n\n3. 🌐 Web Development\n4. 📊 Marketing Solutions\n5. 🔧 IT Support\n\nWhat would you like to explore?`
    ],

    serviceSelection: {
        mobile: [
            "Which mobile service are you interested in?\n\n1. 📱 Repairs\n   - Screen replacement\n   - Battery upgrade\n   - Hardware fixes\n\n2. 🔓 iOS Jailbreaking\n   - Custom features\n   - App freedom\n   - System modifications\n\n3. ⚡ Softmodding\n   - Performance boost\n   - Battery optimization\n   - Feature unlocking",
            "What would you like to do with your mobile device?\n\n1. 🔧 Repair Service\n   - Fix damage\n   - Replace parts\n   - Upgrade components\n\n2. 🔓 Jailbreak Service\n   - Unlock features\n   - Custom tweaks\n   - Enhanced control\n\n3. ⚡ Softmod Options\n   - Boost performance\n   - Extend battery life\n   - Add features"
        ],
        mac: [
            "What Mac service can I help you with?\n\n1. 🔧 OpenCore Legacy Patcher\n   - Run latest macOS\n   - Enable new features\n   - System compatibility\n\n2. ⚡ Performance Optimization\n   - Speed improvements\n   - Memory management\n   - Storage optimization\n\n3. 🔄 Software Updates\n   - System upgrades\n   - Feature enablement\n   - Compatibility fixes",
            "Choose your Mac service:\n\n1. 💻 OpenCore Modding\n   - Latest macOS support\n   - Feature unlocking\n   - Full compatibility\n\n2. 🚀 System Optimization\n   - Enhanced performance\n   - Resource management\n   - Better efficiency\n\n3. 📱 Software Solutions\n   - Updates & patches\n   - Feature activation\n   - System improvements"
        ],
        web: [
            "What type of web development interests you?\n\n1. 🌐 Custom Website\n2. 🛒 E-commerce Platform\n3. 📱 Responsive Design\n4. 🔄 Platform Migration\n\nLet me know your choice!",
            "Choose your web development needs:\n\n1. 💻 Business Website\n2. 🛍️ Online Store\n3. 📱 Mobile-First Design\n4. 🔄 Website Upgrade\n\nWhat's your preference?"
        ]
    },

    contact: {
        info: [
            "You can reach us through:\n- Email: slim.htid@gmail.com\n- Phone: 07726630323\n- Chat: Right here with me!\n- GitHub: Check out our projects at XDroid2023",
            "Need to get in touch? Here's how:\n- 📧 slim.htid@gmail.com\n- 📱 07726630323\n- 💻 GitHub: XDroid2023\nHow can we help you today?"
        ],
        social: [
            "Join our community! Follow us @XDroid and check out our projects on GitHub under XDroid2023.",
            "Connect with us on GitHub (XDroid2023) and be part of our growing tech community!"
        ]
    },

    mobile: {
        softmod: [
            "Our mobile softmodding services include:\n- Performance optimization\n- Battery life enhancement\n- Custom app configurations\n- Feature unlocking\nWhat would you like to know more about?",
            "We specialize in mobile device optimization through softmodding:\n- Enhanced performance\n- Extended battery life\n- Custom features\n- App compatibility improvements"
        ],
        ios: [
            "Our iOS jailbreaking service helps you:\n- Customize your device\n- Access advanced features\n- Install specialized apps\n- Enhance functionality\nInterested in learning more?",
            "Looking to unlock your iOS device's potential? Our jailbreaking services offer:\n- Complete customization\n- Advanced feature access\n- Expert implementation\n- Ongoing support"
        ],
        repairs: [
            "We offer comprehensive mobile repair services along with optimization solutions. What issues are you experiencing?",
            "From screen repairs to performance optimization, we've got your mobile needs covered. How can we help?"
        ]
    },

    mac: {
        softmod: [
            "Our Mac softmodding service uses OpenCore Legacy Patcher to enable unsupported Macs to run the latest macOS versions. Would you like to know more about the process?",
            "XDroid specializes in breathing new life into older Macs through softmodding. We can help you access the latest features and updates, even on unsupported hardware.",
            "Interested in running the latest macOS on your older Mac? Our expert technicians can help with OpenCore Legacy Patcher implementation."
        ],
        benefits: [
            "Benefits of our Mac softmodding service include:\n- Access to latest macOS features\n- Extended device lifespan\n- Enhanced security updates\n- Improved performance\n- Cost-effective solution",
            "By choosing our softmodding service, you'll get:\n- Professional OpenCore implementation\n- Latest macOS compatibility\n- Guided support throughout the process\n- Tailored solutions for your specific Mac"
        ],
        process: [
            "Our softmodding process involves:\n1. Initial assessment of your Mac\n2. Custom OpenCore configuration\n3. Safe implementation of patches\n4. Thorough testing\n5. Guided support after service",
            "We ensure a safe softmodding process with:\n- Data backup recommendations\n- Custom patch configurations\n- Professional implementation\n- Post-service support"
        ]
    },

    computer: {
        diagnostics: [
            "For Macs, we offer both traditional repairs and advanced softmodding solutions. What issues are you experiencing with your device?",
            "We can help with hardware repairs, upgrades, and even enable unsupported Macs to run the latest macOS. What's your main concern?"
        ],
        repairs: [
            "Based on what you've described, we can help with {issue}. We also offer softmodding services if you're interested in extending your Mac's capabilities.",
            "This sounds like {issue}. Along with repairs, we can discuss our OpenCore Legacy Patcher service if you want to upgrade your Mac's functionality."
        ]
    },

    pro: {
        services: [
            "Our professional services include:\n- Mac softmodding with OpenCore\n- Hardware repairs and upgrades\n- Custom solutions for businesses\n- Technical consulting",
            "For business clients, we offer:\n- Fleet Mac modernization\n- Custom upgrade solutions\n- Professional support\n- Bulk service options"
        ]
    },

    quality: {
        assurance: [
            "At XDroid, we ensure quality through:\n- Expert technicians\n- Proven softmodding methods\n- Thorough testing\n- Ongoing support",
            "Our commitment to quality includes:\n- Safe modification procedures\n- Data protection measures\n- Professional implementation\n- Customer satisfaction guarantee"
        ]
    },

    community: {
        projects: [
            "Share your tech projects with the XDroid community! We love seeing creative solutions and innovations.",
            "Join our community of tech enthusiasts! Share ideas, collaborate on projects, and explore new possibilities together."
        ],
        github: [
            "Check out our GitHub (XDroid2023) for useful apps and scripts to enhance your tech experience!",
            "Visit our GitHub repository (XDroid2023) for open-source tools and projects. We're always adding new content!"
        ]
    },

    services: {
        overview: [
            "XDroid offers comprehensive tech solutions:\n- Mac & Mobile Modding\n- Web Development\n- Mobile App Development\n- Digital Marketing\n- IT Solutions\n- Consultancy Services",
            "Our professional services include:\n- Custom Web Development\n- iOS/Android App Creation\n- Digital Marketing & SEO\n- IT Infrastructure\n- Tech Consultancy\n- Device Modding"
        ],
        web: [
            "Our web development services include:\n- Custom Website Creation\n- E-commerce Solutions\n- Responsive Design\n- Platform Migration\n- Performance Optimization",
            "Looking for a powerful web presence? We offer:\n- Bespoke Website Development\n- E-commerce Platforms\n- CMS Integration\n- SEO Optimization\n- Mobile-First Design"
        ],
        apps: [
            "Our mobile app development services cover:\n- iOS App Development\n- Android App Creation\n- Cross-Platform Solutions\n- App Optimization\n- Ongoing Support",
            "Need a mobile app? We specialize in:\n- Native iOS/Android Apps\n- User-Friendly Interfaces\n- Performance Optimization\n- Regular Updates\n- Technical Support"
        ],
        marketing: [
            "Boost your online presence with our digital marketing services:\n- SEO Optimization\n- Social Media Management\n- Content Creation\n- Brand Strategy\n- Analytics & Reporting",
            "Our digital marketing solutions include:\n- Search Engine Optimization\n- Social Media Campaigns\n- Content Strategy\n- Brand Development\n- Performance Tracking"
        ],
        it: [
            "Enhance your IT infrastructure with our solutions:\n- System Integration\n- Network Setup\n- Security Implementation\n- Cloud Migration\n- Technical Support",
            "Our IT services cover:\n- Infrastructure Planning\n- Network Management\n- Security Solutions\n- Cloud Services\n- 24/7 Support"
        ]
    },

    quotes: {
        request: [
            "Ready to get started? To receive a quote:\n- Email: slim.htid@gmail.com\n- Phone: 07726630323\nPlease include your project details for a tailored estimate.",
            "For a personalized quote, reach out via:\n- 📧 slim.htid@gmail.com\n- 📱 07726630323\nWe'll respond promptly with detailed pricing."
        ],
        process: [
            "Our quote process is simple:\n1. Share your project details\n2. Initial consultation\n3. Requirements analysis\n4. Custom quote preparation\n5. Project timeline planning",
            "To provide an accurate quote, we:\n1. Review your requirements\n2. Discuss specific needs\n3. Analyze project scope\n4. Calculate resources needed\n5. Prepare detailed estimate"
        ]
    },

    default: name => [
        `${name}, I can help with Mac modding, iOS jailbreaking, mobile optimization, and more. What interests you?`,
        `How can I assist you today, ${name}? From device modding to repairs, we're here to help!`,
        `${name}, explore our range of services - Mac softmodding, iOS jailbreaking, mobile optimization, or join our tech community!`
    ]
};

// Enhanced keyword detection
const keywords = {
    greeting: ['hello', 'hi', 'hey', 'howdy', 'greetings', 'morning', 'afternoon', 'evening'],
    farewell: ['bye', 'goodbye', 'see you', 'cya', 'farewell', 'later', 'night'],
    thanks: ['thank', 'thanks', 'appreciate', 'grateful'],
    repairs: ['repair', 'fix', 'broken', 'damage', 'not working', 'issue', 'problem'],
    mobile: ['phone', 'smartphone', 'iphone', 'android', 'samsung', 'screen', 'battery', 'charging', 'jailbreak', 'ios', 'softmod', 'optimization'],
    computer: ['pc', 'laptop', 'desktop', 'mac', 'windows', 'computer', 'slow', 'virus', 'crash'],
    console: ['playstation', 'xbox', 'nintendo', 'ps4', 'ps5', 'switch', 'console', 'gaming', 'controller'],
    pro: ['professional', 'business', 'custom', 'enterprise', 'server', 'network'],
    pricing: ['price', 'cost', 'rate', 'much', 'quote', 'expensive', 'cheap', 'affordable', 'discount', 'student', 'fee', 'pricing'],
    quality: ['quality', 'warranty', 'genuine', 'authentic', 'reliable', 'trusted', 'guarantee'],
    community: ['community', 'tutorial', 'guide', 'learn', 'workshop', 'event', 'resource', 'forum', 'github', 'project', 'collaborate', 'share', 'xdroid2023'],
    parts: ['part', 'component', 'piece', 'replacement', 'spare', 'genuine'],
    value: ['value', 'worth', 'deal', 'bargain', 'save', 'saving', 'affordable'],
    location: ['where', 'location', 'address', 'directions', 'visit', 'shop'],
    mac: ['mac', 'opencore', 'softmod', 'patcher', 'macos'],
    contact: ['email', 'phone', 'contact', 'reach', 'slim.htid', '07726630323'],
    services: ['web', 'development', 'app', 'marketing', 'seo', 'it', 'consulting', 'solution'],
    quotes: ['quote', 'price', 'estimate', 'cost', 'pricing', 'budget']
};

// Analyze message sentiment
function analyzeSentiment(message) {
    const lowerMessage = message.toLowerCase();
    if (sentiment.positive.some(word => lowerMessage.includes(word))) return 'positive';
    if (sentiment.negative.some(word => lowerMessage.includes(word))) return 'negative';
    if (sentiment.urgent.some(word => lowerMessage.includes(word))) return 'urgent';
    if (sentiment.price_conscious.some(word => lowerMessage.includes(word))) return 'price_conscious';
    if (sentiment.quality_focused.some(word => lowerMessage.includes(word))) return 'quality_focused';
    return 'neutral';
}

// Get context from message
function getMessageContext(message) {
    const lowerMessage = message.toLowerCase();
    
    // Contact information
    if (lowerMessage.includes('email') || lowerMessage.includes('phone') || lowerMessage.includes('contact')) {
        return 'contact.info';
    }
    
    // GitHub and community
    if (lowerMessage.includes('github') || lowerMessage.includes('xdroid2023')) {
        return 'community.github';
    }
    
    // Mobile and iOS specific
    if (lowerMessage.includes('jailbreak') || lowerMessage.includes('ios') || lowerMessage.includes('iphone')) {
        return 'mobile.ios';
    }
    
    if (lowerMessage.includes('mobile') || lowerMessage.includes('phone') || lowerMessage.includes('android')) {
        if (lowerMessage.includes('repair')) return 'mobile.repairs';
        return 'mobile.softmod';
    }
    
    // Add Mac-specific keywords
    if (lowerMessage.includes('mac') || lowerMessage.includes('opencore') || lowerMessage.includes('softmod') || 
        lowerMessage.includes('patcher') || lowerMessage.includes('macos')) {
        if (lowerMessage.includes('how') || lowerMessage.includes('process')) return 'mac.process';
        if (lowerMessage.includes('benefit') || lowerMessage.includes('why')) return 'mac.benefits';
        return 'mac.softmod';
    }
    
    // Service-specific contexts
    if (lowerMessage.includes('web') || lowerMessage.includes('website')) {
        return 'services.web';
    }
    if (lowerMessage.includes('app') || lowerMessage.includes('application')) {
        return 'services.apps';
    }
    if (lowerMessage.includes('marketing') || lowerMessage.includes('seo')) {
        return 'services.marketing';
    }
    if (lowerMessage.includes('it') || lowerMessage.includes('infrastructure')) {
        return 'services.it';
    }
    
    // Quote-related contexts
    if (lowerMessage.includes('quote') || lowerMessage.includes('price') || 
        lowerMessage.includes('cost') || lowerMessage.includes('estimate')) {
        if (lowerMessage.includes('how') || lowerMessage.includes('process')) {
            return 'quotes.process';
        }
        return 'quotes.request';
    }

    for (const [category, words] of Object.entries(keywords)) {
        if (words.some(word => lowerMessage.includes(word))) {
            return category;
        }
    }
    return 'general';
}

let userName = '';
let conversationState = 'greeting';
let selectedService = '';
let messageHistory = [];

// Add message to chat
function addMessage(message, sender = 'bot') {
    const messagesDiv = document.getElementById('chat-messages');
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${sender}`;
    
    // Convert newlines to <br> tags and preserve spacing
    const formattedMessage = message.replace(/\n/g, '<br>');
    messageDiv.innerHTML = formattedMessage;
    
    messagesDiv.appendChild(messageDiv);
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
}

// Get random response from array
function getRandomResponse(array) {
    return array[Math.floor(Math.random() * array.length)];
}

// Handle sending message
function getBotResponse(input) {
    if (!userName) {
        userName = input.split(' ')[0];
        conversationState = 'service_selection';
        return getRandomResponse(responses.nameResponse(userName));
    }

    if (conversationState === 'service_selection') {
        const lowerInput = input.toLowerCase();
        
        // Mobile services selection
        if (lowerInput.includes('mobile') || lowerInput.includes('phone') || lowerInput.includes('1')) {
            selectedService = 'mobile';
            conversationState = 'specific_service';
            return getRandomResponse(responses.serviceSelection.mobile);
        }
        
        // Mac services selection
        if (lowerInput.includes('mac') || lowerInput.includes('computer') || lowerInput.includes('2')) {
            selectedService = 'mac';
            conversationState = 'specific_service';
            return getRandomResponse(responses.serviceSelection.mac);
        }
        
        // Web development selection
        if (lowerInput.includes('web') || lowerInput.includes('3')) {
            selectedService = 'web';
            conversationState = 'specific_service';
            return getRandomResponse(responses.serviceSelection.web);
        }
        
        // If no clear selection, provide service overview
        return `${userName}, I'd be happy to help! Could you please specify which service you're interested in?\n\n1. 📱 Mobile Services\n2. 💻 Mac Services\n3. 🌐 Web Development\n4. 📊 Digital Marketing\n5. 🔧 IT Solutions`;
    }

    if (conversationState === 'specific_service') {
        const context = getMessageContext(input);
        if (context.startsWith(selectedService)) {
            return getServiceResponse(context, input);
        }
    }

    // Default to normal context-based responses
    return getContextBasedResponse(input);
}

function getServiceResponse(context, input) {
    const lowerInput = input.toLowerCase();
    
    if (selectedService === 'mobile') {
        if (lowerInput.includes('repair') || lowerInput.includes('1')) {
            return getRandomResponse(responses.mobile.repairs);
        }
        if (lowerInput.includes('jailbreak') || lowerInput.includes('2')) {
            return getRandomResponse(responses.mobile.ios);
        }
        if (lowerInput.includes('softmod') || lowerInput.includes('3')) {
            return getRandomResponse(responses.mobile.softmod);
        }
    }
    
    if (selectedService === 'mac') {
        if (lowerInput.includes('opencore') || lowerInput.includes('1')) {
            return getRandomResponse(responses.mac.softmod);
        }
        if (lowerInput.includes('performance') || lowerInput.includes('2')) {
            return getRandomResponse(responses.mac.process);
        }
        if (lowerInput.includes('software') || lowerInput.includes('3')) {
            return getRandomResponse(responses.mac.benefits);
        }
    }
    
    // Return context-based response if no specific match
    return getContextBasedResponse(input);
}

function getContextBasedResponse(input) {
    const sentiment = analyzeSentiment(input);
    const context = getMessageContext(input);
    messageHistory.push({ input, context, sentiment });

    // Handle sentiment-based responses
    if (sentiment !== 'neutral') {
        const sentimentResponse = getRandomResponse(responses.followUp[sentiment]);
        if (Math.random() < 0.3) { // 30% chance to add sentiment response
            return sentimentResponse;
        }
    }

    // Price-conscious customer handling
    if (sentiment.includes('price_conscious')) {
        return getRandomResponse(responses.pricing.general);
    }

    // Quality-focused customer handling
    if (sentiment.includes('quality_focused')) {
        return getRandomResponse(responses.quality.assurance);
    }

    // Service-specific responses
    if (currentService) {
        const serviceResponses = responses[currentService];
        if (serviceResponses) {
            if (context === 'repairs') {
                return getRandomResponse(serviceResponses.diagnostics);
            }
            if (context === currentService) {
                return getRandomResponse(serviceResponses.recommendation).replace('{solution}', 
                    getContextualSolution(currentService, messageHistory));
            }
        }
    }

    // Handle specific contexts
    if (context === 'pricing') {
        if (input.toLowerCase().includes('student')) {
            return getRandomResponse(responses.pricing.student);
        }
        if (input.toLowerCase().includes('part')) {
            return getRandomResponse(responses.pricing.parts);
        }
        return getRandomResponse(responses.pricing.general);
    }

    if (context === 'quality') {
        return getRandomResponse(responses.quality.assurance);
    }

    if (context === 'community') {
        if (input.toLowerCase().includes('event')) {
            return getRandomResponse(responses.community.events);
        }
        if (input.toLowerCase().includes('tutorial') || input.toLowerCase().includes('guide')) {
            return getRandomResponse(responses.community.resources);
        }
        return getRandomResponse(responses.community.info);
    }

    // Handle Mac-specific responses
    if (context.startsWith('mac.')) {
        const [category, subCategory] = context.split('.');
        return getRandomResponse(responses[category][subCategory]);
    }

    // General response handling
    if (context === 'farewell') return getRandomResponse(responses.farewell(userName));
    if (context === 'thanks') return getRandomResponse(responses.thanks(userName));
    
    // If no specific context, use default response
    return getRandomResponse(responses.default(userName));
}

function getContextualSolution(service, history) {
    const solutions = {
        mobile: ['our premium screen repair service', 'our battery replacement service', 'our water damage recovery service'],
        computer: ['our performance optimization package', 'our custom PC building service', 'our data recovery service'],
        console: ['our console modification service', 'our hardware upgrade package', 'our repair and maintenance service'],
        pro: ['our enterprise support package', 'our custom business solution', 'our professional upgrade service']
    };
    return solutions[service][Math.floor(Math.random() * solutions[service].length)];
}

// Make functions available globally
window.selectCategory = function(category) {
    if (!userName) {
        addMessage("Hi! Before we explore our services, could you tell me your name?", 'bot');
        return;
    }

    selectedService = category;
    conversationState = 'specific_service';
    
    let response;
    switch(category) {
        case 'mobile':
            response = getRandomResponse(responses.serviceSelection.mobile);
            break;
        case 'mac':
            response = getRandomResponse(responses.serviceSelection.mac);
            break;
        case 'web':
            response = getRandomResponse(responses.serviceSelection.web);
            break;
        case 'marketing':
            response = `${userName}, here are our digital marketing services:\n\n1. 📊 SEO Optimization\n   - Search ranking improvement\n   - Keyword optimization\n   - Traffic analysis\n\n2. 📱 Social Media\n   - Content management\n   - Campaign creation\n   - Engagement tracking\n\n3. 📝 Content Creation\n   - Blog writing\n   - Social posts\n   - Marketing copy`;
            break;
        case 'it':
            response = `${userName}, here are our IT solutions:\n\n1. 🔧 System Integration\n   - Network setup\n   - Cloud migration\n   - Infrastructure planning\n\n2. 🔒 Security\n   - Threat protection\n   - Data backup\n   - Access control\n\n3. 💻 Support\n   - 24/7 assistance\n   - Remote help\n   - On-site service`;
            break;
        default:
            response = getRandomResponse(responses.default(userName));
    }
    
    addMessage(response, 'bot');
}

// Initialize chat when page loads
window.onload = () => {
    // Add event listener for user input
    document.getElementById('user-input').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            const input = this.value.trim();
            if (input) {
                addMessage(input, 'user');
                this.value = '';
                setTimeout(() => {
                    const botResponse = getBotResponse(input);
                    addMessage(botResponse);
                }, 500);
            }
        }
    });

    // Show initial greeting
    setTimeout(() => {
        addMessage(getRandomResponse(responses.greeting));
    }, 500);
};
