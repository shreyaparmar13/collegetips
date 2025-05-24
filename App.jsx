import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Send, Menu, Users, Target, BookOpen, Heart, Phone, Mail, MapPin, Star, ArrowRight, Play, ChevronDown, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const CollegeTipsWebsite = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState([
    { type: 'bot', message: "Hi! I'm Eva, your friendly assistant at CollegeTips.in! 👋 How can I help you today?" }
  ]);
  const [userMessage, setUserMessage] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const chatEndRef = useRef(null);
  const [typingEffect, setTypingEffect] = useState(false);

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    setIsMenuOpen(false);
  };

  const botResponses = {
    'internship': "Great question! 🌟 We've successfully placed 1,40,000+ interns across various companies. Our Summer Internship Program 2025 is now open! Would you like me to help you apply?",
    'programs': "We offer amazing programs! 📚\n\n• Summer Internship Program 2025\n• Digital Literacy Program for Parents\n• Lifestyle Classes for Everyone\n• #PetFriendlyIndia Initiative\n\nWhich one interests you most?",
    'career': "Our CT Career program helps students find their dream careers! 🎯 We provide:\n\n• Career counseling\n• College selection guidance\n• Skill development workshops\n• Interview preparation\n\nReady to kickstart your career journey?",
    'contact': "You can reach us at:\n\n📞 +91 7024577333\n📧 mail@collegetips.in\n\nOr visit our offices in Bhopal, Mumbai, Delhi, Pune, and Indore! We're expanding to more cities soon! 🏢",
    'default': "That's interesting! 😊 I can help you with information about our internship programs, career guidance, courses, or anything else about CollegeTips.in. What would you like to know more about?"
  };

  const handleSendMessage = () => {
    if (!userMessage.trim()) return;
    
    const newMessage = { type: 'user', message: userMessage };
    setChatMessages(prev => [...prev, newMessage]);
    
    setTypingEffect(true);
    setTimeout(() => {
      const lowerMessage = userMessage.toLowerCase();
      let response = botResponses.default;
      
      if (lowerMessage.includes('internship') || lowerMessage.includes('intern')) {
        response = botResponses.internship;
      } else if (lowerMessage.includes('program') || lowerMessage.includes('course')) {
        response = botResponses.programs;
      } else if (lowerMessage.includes('career') || lowerMessage.includes('job')) {
        response = botResponses.career;
      } else if (lowerMessage.includes('contact') || lowerMessage.includes('phone') || lowerMessage.includes('address')) {
        response = botResponses.contact;
      }
      
      setChatMessages(prev => [...prev, { type: 'bot', message: response }]);
      setTypingEffect(false);
    }, 1000);
    
    setUserMessage('');
  };

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chatMessages]);

  const stats = [
    { number: '1,40,000+', label: 'Interns Recruited', icon: Users },
    { number: '25,000+', label: 'Community Volunteers', icon: Heart },
    { number: '1 Crore+', label: "Student's Life Impacted", icon: Target }
  ];

  const programs = [
    {
      title: 'CT Career',
      description: 'We help students find their career interests, the right college, abilities to survive the college life and get their dream job through life hack, video content based on survey.',
      image: '🎯'
    },
    {
      title: 'CT Care',
      description: 'CollegeTips has decided to upgrade every city into safest place for your constant fellow amigo. In this campaign we are creating awareness among people to make their city a Pet friendly one.',
      image: '❤️'
    },
    {
      title: 'CT Classes',
      description: 'An Innovation Center for students to enhance their Creative and Tech skills, where they will learn intensively and implement their knowledge independently, in a productive way.',
      image: '📚'
    },
    {
      title: 'CT Connect',
      description: 'The program offers people to connect, share their experiences, create contacts and get exposure which eventually helps them build their careers.',
      image: '🌐'
    }
  ];

  return (
    <div className="min-h-screen bg-white relative overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-green-500 rounded flex items-center justify-center">
                <span className="text-white font-bold text-sm">CT</span>
              </div>
              <span className="text-xl font-bold text-gray-800">CollegeTips.in</span>
            </div>
            
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Programs', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-gray-700 hover:text-green-500 font-medium transition-colors ${
                    activeSection === item.toLowerCase() ? 'text-green-500' : ''
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
            
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-700"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
        
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-4 py-2 space-y-2">
              {['Home', 'About', 'Programs', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left py-2 text-gray-700 hover:text-green-500"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-400 via-green-500 to-green-600 pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white space-y-6 animate-fade-in">
              <div className="text-sm font-medium bg-white/20 rounded-full px-4 py-2 inline-block backdrop-blur-sm">
                CollegeTips.in
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                India's Biggest
                <br />
                <span className="text-yellow-300">Recruiter of</span>
                <br />
                Interns!
              </h1>
              <p className="text-xl text-green-50 max-w-lg">
                We are not a consultancy or aggregator. We hire interns for our own company.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-white text-green-600 px-8 py-3 rounded-full font-semibold hover:bg-green-50 transition-all transform hover:scale-105">
                  ABOUT US
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-green-600 transition-all transform hover:scale-105 flex items-center gap-2">
                  <Play size={16} />
                  MUST WATCH
                </button>
              </div>
              <div className="bg-red-500 text-white px-6 py-3 rounded-full inline-block font-bold animate-pulse">
                SUMMER INTERNSHIP PROGRAM 2025
              </div>
            </div>
            
            <div className="relative">
              <div className="grid grid-cols-2 gap-4 rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 transform -rotate-6 hover:rotate-0 transition-transform">
                  <img src="/api/placeholder/200/150" alt="Team" className="rounded-lg w-full h-32 object-cover" />
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 transform rotate-6 hover:rotate-0 transition-transform mt-8">
                  <img src="/api/placeholder/200/150" alt="Office" className="rounded-lg w-full h-32 object-cover" />
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 transform rotate-3 hover:rotate-0 transition-transform -mt-4">
                  <img src="/api/placeholder/200/150" alt="Events" className="rounded-lg w-full h-32 object-cover" />
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 transform -rotate-3 hover:rotate-0 transition-transform">
                  <img src="/api/placeholder/200/150" alt="Students" className="rounded-lg w-full h-32 object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-4">
            <span className="text-green-400">Our only aim is to make Student's life Easy and Happening</span> 💖
          </h2>
          <h3 className="text-4xl font-bold">How We Do it?</h3>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {programs.map((program, index) => (
              <div
                key={index}
                className="group bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="text-4xl mb-4">{program.image}</div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-green-400 transition-colors">
                  {program.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {program.description}
                </p>
                <button className="mt-4 text-green-400 hover:text-green-300 font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
                  Learn More <ArrowRight size={16} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs for Everyone */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-green-500 font-medium text-lg mb-2">We have something</p>
              <h2 className="text-5xl font-bold text-gray-900 mb-8">
                For
                <br />
                Everyone
              </h2>
              <p className="text-gray-600 mb-8">so Hurry up Guys...Choose the Best Program For Yourself.</p>
              <button className="bg-green-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-600 transition-all transform hover:scale-105">
                Know More
              </button>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              {[
                { title: 'For Students', subtitle: 'Summer Internship Program 2025', icon: '🎓' },
                { title: 'For Parents', subtitle: 'Digital Literacy Program', icon: '👥' },
                { title: 'For Everyone', subtitle: 'Lifestyle Classes', icon: '📱' },
                { title: 'For Society', subtitle: '#PetFriendlyIndia', icon: '🌍' }
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer group"
                >
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <h3 className="font-bold text-gray-900 mb-2 group-hover:text-green-500 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600">{item.subtitle}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-green-500 to-green-600">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-white text-2xl font-light mb-4">Our Magical Figures</h2>
          <h3 className="text-yellow-300 text-4xl font-bold mb-12">We have worked Hard for this</h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="text-yellow-300 text-5xl font-bold mb-2 transform group-hover:scale-110 transition-transform">
                  {stat.number}
                </div>
                <div className="text-white text-lg font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Media Coverage */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">
            WE ARE <span className="text-green-500">QUITE POPULAR!!</span>
          </h2>
          <p className="text-gray-600 mb-12">That's why, We are always in News</p>
          
          <div className="flex justify-center items-center space-x-12 opacity-60 hover:opacity-100 transition-opacity">
            <div className="text-red-600 font-bold text-xl">Business Standard</div>
            <div className="text-blue-800 font-bold text-xl">THE ECONOMIC TIMES</div>
          </div>
        </div>
      </section>

      {/* Life at CollegeTips */}
      <section className="py-20 bg-gradient-to-r from-green-500 to-green-600">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-white text-4xl font-bold mb-12">Life @CollegeTips.in</h2>
          
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { title: 'Gallery', image: '📸' },
              { title: 'Videos', image: '🎥' },
              { title: 'SchoolTips.in', image: '🏫' },
              { title: 'Programs', image: '📚' }
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2 cursor-pointer group"
              >
                <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform">
                  {item.image}
                </div>
                <h3 className="text-white text-xl font-semibold">{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-green-400 font-bold mb-6">OUR HUB:</h3>
              <div className="space-y-4 text-sm">
                <div>
                  <div className="text-green-400 font-medium">Bhopal Office:</div>
                  <div>Third Floor, Above Bread & Better, Near Shivjoy Complex, Gulmohar, Bhopal, Madhya Pradesh 462039</div>
                </div>
                <div>
                  <div className="text-green-400 font-medium">Mumbai Office:</div>
                  <div>74 Technopark, MIDC Gate no 2, Seepz, Andheri East, Mumbai, Maharashtra 400069</div>
                </div>
                <div>
                  <div className="text-green-400 font-medium">Delhi Office:</div>
                  <div>1112, Surya kiran building, Connaught Place, New Delhi, 110001</div>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-4">COLLEGETIPS.IN</h2>
              <p className="text-gray-400 mb-6">a venture of CollegeTips Ed. Tech. Media Pvt. Ltd.</p>
              
              <div className="flex justify-center space-x-4 mb-8">
                <Facebook className="w-8 h-8 p-2 bg-gray-800 rounded-full hover:bg-green-500 cursor-pointer transition-colors" />
                <Twitter className="w-8 h-8 p-2 bg-gray-800 rounded-full hover:bg-green-500 cursor-pointer transition-colors" />
                <Instagram className="w-8 h-8 p-2 bg-gray-800 rounded-full hover:bg-green-500 cursor-pointer transition-colors" />
                <Youtube className="w-8 h-8 p-2 bg-gray-800 rounded-full hover:bg-green-500 cursor-pointer transition-colors" />
              </div>
              
              <div className="border-t border-gray-700 pt-6">
                <h4 className="font-semibold mb-4">WANT TO JOIN COMMUNITY</h4>
                <button className="bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600 transition-colors">
                  Register Now
                </button>
              </div>
            </div>
            
            <div>
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Mail className="text-green-400" size={16} />
                  <span>Message Us</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="text-green-400" size={16} />
                  <span>+91 7024577333</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="text-green-400" size={16} />
                  <span>mail@collegetips.in</span>
                </div>
              </div>
              
              <div className="mt-8 space-y-2 text-sm">
                <div className="hover:text-green-400 cursor-pointer transition-colors">ADVERTISING</div>
                <div className="hover:text-green-400 cursor-pointer transition-colors">CAREER</div>
                <div className="hover:text-green-400 cursor-pointer transition-colors">PRIVACY POLICY</div>
                <div className="hover:text-green-400 cursor-pointer transition-colors">TERMS AND CONDITIONS</div>
                <div className="hover:text-green-400 cursor-pointer transition-colors">REFUND & CANCELLATION</div>
                <div className="text-green-400 font-medium">LATEST UPDATE!</div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-6 text-center text-gray-400">
            <p>Made in India ❤️ CollegeTips.in</p>
          </div>
        </div>
      </footer>

      {/* Chatbot */}
      <div className="fixed bottom-6 right-6 z-50">
        {!isChatOpen && (
          <button
            onClick={() => setIsChatOpen(true)}
            className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 animate-bounce"
          >
            <MessageCircle size={24} />
          </button>
        )}
        
        {isChatOpen && (
          <div className="bg-white rounded-2xl shadow-2xl w-80 h-96 flex flex-col overflow-hidden animate-slide-up">
            <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-4 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-sm font-bold">E</span>
                </div>
                <div>
                  <h3 className="font-semibold">Eva</h3>
                  <p className="text-xs opacity-90">Your CollegeTips Assistant</p>
                </div>
              </div>
              <button
                onClick={() => setIsChatOpen(false)}
                className="hover:bg-white/20 p-1 rounded transition-colors"
              >
                <X size={20} />
              </button>
            </div>
            
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {chatMessages.map((msg, index) => (
                <div
                  key={index}
                  className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-xs p-3 rounded-2xl ${
                      msg.type === 'user'
                        ? 'bg-green-500 text-white rounded-br-md'
                        : 'bg-gray-100 text-gray-800 rounded-bl-md'
                    }`}
                  >
                    <p className="text-sm whitespace-pre-line">{msg.message}</p>
                  </div>
                </div>
              ))}
              {typingEffect && (
                <div className="flex justify-start">
                  <div className="bg-gray-100 p-3 rounded-2xl rounded-bl-md">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={chatEndRef} />
            </div>
            
            <div className="border-t p-4">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={userMessage}
                  onChange={(e) => setUserMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Ask Eva anything..."
                  className="flex-1 border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
                <button
                  onClick={handleSendMessage}
                  className="bg-green-500 hover:bg-green-600 text-white p-2 rounded-full transition-colors"
                >
                  <Send size={16} />
                </button>
              </div>
              <div className="flex gap-2 mt-2 flex-wrap">
                {['Internships', 'Programs', 'Career Help', 'Contact'].map((quickReply) => (
                  <button
                    key={quickReply}
                    onClick={() => setUserMessage(quickReply)}
                    className="text-xs bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full transition-colors"
                  >
                    {quickReply}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
        
        .animate-slide-up {
          animation: slide-up 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default CollegeTipsWebsite;