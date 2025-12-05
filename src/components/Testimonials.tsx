import { TestimonialsSection } from './ui/testimonials-with-marquee';

const testimonials = [
  {
    author: {
      name: 'Rajesh Kumar',
      handle: 'Business Owner',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    },
    text: 'Safe Hands Finserv helped me get a business loan within 48 hours. The process was smooth and transparent. Highly recommended for anyone looking for quick loans!',
  },
  {
    author: {
      name: 'Priya Sharma',
      handle: 'Software Engineer',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face',
    },
    text: 'I needed a personal loan urgently and Safe Hands delivered. Amazing customer service and the interest rates were very competitive. Very satisfied with their service.',
  },
  {
    author: {
      name: 'Vikram Reddy',
      handle: 'Entrepreneur',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
    },
    text: 'The team at Safe Hands Finserv is professional and helpful. They guided me through the entire home loan process and got me the best deal. Thank you!',
  },
  {
    author: {
      name: 'Anjali Patel',
      handle: 'Home Buyer',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face',
    },
    text: 'Got my home loan approved in record time! The team was supportive throughout the process. Great experience with Safe Hands Finserv.',
  },
  {
    author: {
      name: 'Rahul Mehta',
      handle: 'Startup Founder',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    },
    text: 'As a startup founder, I needed quick funding. Safe Hands Finserv understood my needs and provided excellent business loan solutions. Highly recommended!',
  },
  {
    author: {
      name: 'Sneha Desai',
      handle: 'Student',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
    },
    text: 'The education loan process was seamless. They helped me secure funding for my studies abroad. Thank you Safe Hands Finserv for making my dreams come true!',
  },
];

export default function Testimonials() {
  return (
    <TestimonialsSection
      title="What Our Customers Say"
      description="Don't just take our word for it - hear from our satisfied customers"
      testimonials={testimonials}
    />
  );
}
