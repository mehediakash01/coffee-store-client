import React, { useState } from 'react';
import { Coffee, Award, Users, Heart, Clock, MapPin, Phone, Mail } from 'lucide-react';

export default function AboutUs() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const values = [
    {
      icon: <Coffee className="w-8 h-8" />,
      title: "Premium Quality",
      description: "We source the finest coffee beans from sustainable farms around the world, ensuring every cup is exceptional."
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Passion for Coffee",
      description: "Our expert baristas craft each beverage with love and precision, turning coffee into an art form."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Community First",
      description: "We're more than a coffee shop - we're a gathering place where friendships bloom over great coffee."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Award Winning",
      description: "Recognized for excellence in coffee roasting and customer service by industry experts worldwide."
    }
  ];

  const stats = [
    { number: "15+", label: "Years Experience" },
    { number: "50K+", label: "Happy Customers" },
    { number: "25+", label: "Coffee Varieties" },
    { number: "100%", label: "Organic Beans" }
  ];

  const team = [
    {
      name: "Sarah Johnson",
      role: "Master Roaster",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop"
    },
    {
      name: "Michael Chen",
      role: "Head Barista",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
    },
    {
      name: "Emma Rodriguez",
      role: "Coffee Sommelier",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop"
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[500px] bg-gradient-to-r from-amber-900 to-amber-700 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1600')] bg-cover bg-center mix-blend-overlay"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 h-full flex flex-col justify-center items-center text-center text-white">
          <p className="text-amber-300 text-sm font-medium mb-4 tracking-wider">DISCOVER OUR STORY</p>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">About Our Coffee Journey</h1>
          <p className="text-xl md:text-2xl max-w-3xl text-gray-200">
            Brewing excellence since 2009, one cup at a time
          </p>
        </div>
      </div>

      {/* Story Section */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story Began With a Simple Dream</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              What started as a small corner café has grown into a beloved community hub where coffee enthusiasts gather to experience the perfect brew. Our journey began with a passion for exceptional coffee and a commitment to creating meaningful connections.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Every morning, we roast our beans fresh, ensuring that each cup captures the unique flavors and aromas that make specialty coffee extraordinary. We travel the world to find the finest beans, building relationships with farmers who share our dedication to quality.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Today, we're proud to serve our community not just coffee, but an experience that brightens days and brings people together. From the first sip to the last, we're here to make every moment special.
            </p>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1511920170033-f8396924c348?w=800&h=600&fit=crop" 
              alt="Coffee Shop Interior"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-8 -left-8 bg-amber-600 text-white p-8 rounded-xl shadow-xl">
              <p className="text-5xl font-bold">15+</p>
              <p className="text-lg">Years of Excellence</p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gradient-to-br from-amber-50 to-orange-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-5xl md:text-6xl font-bold text-amber-700 mb-2">{stat.number}</p>
                <p className="text-gray-700 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What We Stand For</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our values guide everything we do, from sourcing beans to serving customers
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div key={index} className="text-center p-6 rounded-xl hover:bg-amber-50 transition group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 text-amber-700 rounded-full mb-4 group-hover:bg-amber-600 group-hover:text-white transition">
                {value.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
              <p className="text-gray-600 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Expert Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The passionate people behind every perfect cup
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition group">
                <div className="relative overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-80 object-cover group-hover:scale-110 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition"></div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-amber-600 font-medium">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="bg-gradient-to-r from-amber-600 to-orange-600 rounded-3xl p-12 text-white">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold mb-6">Visit Us Today</h2>
              <p className="text-amber-50 mb-8 text-lg">
                Experience the difference that passion and quality make. We can't wait to serve you!
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold mb-1">Location</p>
                    <p className="text-amber-50">123 Coffee Street, Downtown, NY 10001</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold mb-1">Hours</p>
                    <p className="text-amber-50">Mon-Fri: 7am - 8pm</p>
                    <p className="text-amber-50">Sat-Sun: 8am - 6pm</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold mb-1">Phone</p>
                    <p className="text-amber-50">(555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold mb-1">Email</p>
                    <p className="text-amber-50">hello@coffeeshop.com</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
              <div className="space-y-4">
                <input 
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  placeholder="Your Name" 
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-amber-100 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
                <input 
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  placeholder="Your Email" 
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-amber-100 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
                <textarea 
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  placeholder="Your Message" 
                  rows="4"
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-amber-100 focus:outline-none focus:ring-2 focus:ring-white/50 resize-none"
                ></textarea>
                <button 
                  onClick={handleSubmit}
                  className="w-full bg-white text-amber-600 font-bold py-3 rounded-lg hover:bg-amber-50 transition"
                >
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}