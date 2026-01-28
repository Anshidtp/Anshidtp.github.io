import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Minimize2 } from 'lucide-react';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState([
    {
      type: 'bot',
      text: "Hi! I'm an AI assistant trained on information about this portfolio. Ask me anything about the projects, skills, or experience!",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef(null);

  // Show chatbot popup after 3 seconds on first load
  useEffect(() => {
    const hasShownPopup = sessionStorage.getItem('chatbotPopupShown');
    if (!hasShownPopup) {
      const timer = setTimeout(() => {
        setIsOpen(true);
        sessionStorage.setItem('chatbotPopupShown', 'true');
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, []);

  // Auto-scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Sample responses (Replace with actual RAG chatbot backend later)
  const getBotResponse = (userMessage) => {
    const lowerMessage = userMessage.toLowerCase();

    if (lowerMessage.includes('project') || lowerMessage.includes('work')) {
      return "I have worked on 50+ projects including Neural Architecture Search, Stock Market Prediction, Health Data Visualization, and more. Each project showcases different aspects of AI and data science. Would you like to know more about any specific project?";
    } else if (lowerMessage.includes('skill') || lowerMessage.includes('technology')) {
      return "My technical skills include Python, TensorFlow, PyTorch, AWS, Docker, Kubernetes, and many more. I specialize in Machine Learning, Deep Learning, NLP, Computer Vision, and Big Data Engineering. What specific technology are you interested in?";
    } else if (lowerMessage.includes('experience') || lowerMessage.includes('year')) {
      return "I have 5+ years of experience in AI development and data analysis. I've deployed 12 ML models in production and completed 50+ projects across various domains including healthcare, finance, and e-commerce.";
    } else if (lowerMessage.includes('contact') || lowerMessage.includes('hire') || lowerMessage.includes('email')) {
      return "You can reach me at your.email@example.com or connect with me on LinkedIn and GitHub. I'm currently available for freelance projects and full-time opportunities!";
    } else if (lowerMessage.includes('education') || lowerMessage.includes('degree')) {
      return "I hold an M.S. in Computer Science with specialization in Machine Learning and a B.Tech in Information Technology. I'm also AWS Machine Learning Specialty certified.";
    } else if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey')) {
      return "Hello! How can I help you today? Feel free to ask me about projects, skills, experience, or anything else!";
    } else {
      return "That's an interesting question! While I'm still learning, I can tell you about projects, technical skills, work experience, education, and how to get in touch. What would you like to know?";
    }
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    // Add user message
    const userMessage = {
      type: 'user',
      text: inputValue,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');

    // Simulate bot response after a delay
    setTimeout(() => {
      const botMessage = {
        type: 'bot',
        text: getBotResponse(inputValue),
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
    }, 1000);
  };

  const quickQuestions = [
    "Tell me about your projects",
    "What are your skills?",
    "How can I contact you?",
    "What's your experience?",
  ];

  return (
    <>
      {/* Chat Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-8 right-8 w-16 h-16 rounded-full bg-gradient-to-r from-primary to-secondary text-white shadow-2xl flex items-center justify-center z-50 glow"
          >
            <MessageCircle size={28} />
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-dark animate-pulse"></span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ 
              opacity: 1, 
              y: 0, 
              scale: 1,
              height: isMinimized ? 'auto' : '600px',
            }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            transition={{ type: 'spring', damping: 25 }}
            className="fixed bottom-8 right-8 w-96 glass rounded-2xl border border-primary/30 shadow-2xl z-50 flex flex-col overflow-hidden"
            style={{ maxWidth: 'calc(100vw - 4rem)' }}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-primary to-secondary p-4 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <MessageCircle size={20} />
                </div>
                <div>
                  <h3 className="font-bold">Portfolio Assistant</h3>
                  <p className="text-xs opacity-90">Powered by AI</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setIsMinimized(!isMinimized)}
                  className="p-2 hover:bg-white/20 rounded-lg transition-colors"
                >
                  <Minimize2 size={18} />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-white/20 rounded-lg transition-colors"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Messages */}
            {!isMinimized && (
              <>
                <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-dark/50">
                  {messages.map((message, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-[80%] p-3 rounded-2xl ${
                          message.type === 'user'
                            ? 'bg-gradient-to-r from-primary to-secondary text-white'
                            : 'glass border border-white/10'
                        }`}
                      >
                        <p className="text-sm">{message.text}</p>
                        <p className="text-xs opacity-70 mt-1">
                          {message.timestamp.toLocaleTimeString([], {
                            hour: '2-digit',
                            minute: '2-digit',
                          })}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                  <div ref={messagesEndRef} />
                </div>

                {/* Quick Questions */}
                {messages.length === 1 && (
                  <div className="p-4 bg-dark/30 border-t border-white/10">
                    <p className="text-xs text-gray-400 mb-2">Quick questions:</p>
                    <div className="flex flex-wrap gap-2">
                      {quickQuestions.map((question, index) => (
                        <button
                          key={index}
                          onClick={() => {
                            setInputValue(question);
                            handleSendMessage({ preventDefault: () => {} });
                          }}
                          className="text-xs px-3 py-1 glass rounded-full hover:bg-primary/20 transition-colors"
                        >
                          {question}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Input */}
                <form onSubmit={handleSendMessage} className="p-4 bg-dark/50 border-t border-white/10">
                  <div className="flex space-x-2">
                    <input
                      type="text"
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      placeholder="Ask me anything..."
                      className="flex-1 px-4 py-2 rounded-full glass border border-white/10 focus:border-primary focus:outline-none text-sm"
                    />
                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-2 rounded-full bg-gradient-to-r from-primary to-secondary text-white"
                    >
                      <Send size={20} />
                    </motion.button>
                  </div>
                </form>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;