import { Award, Heart, Shield, ThumbsUp } from 'lucide-react';
import { Metadata } from 'next';
import AboutAnimation from '@/components/AboutAnimation';

export const metadata: Metadata = {
  title: 'About Us | Kubera Mobility Solutions',
  description: 'Learn more about Lakshmi Kubera Enterprises, our mission, and why we are trusted by thousands of customers.',
};

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-bg-alt py-16 lg:py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="text-primary font-bold tracking-wider uppercase mb-4 block text-sm">About Lakshmi Kubera Enterprises</span>
          <h1 className="text-4xl lg:text-5xl font-extrabold text-foreground mb-6">
            Empowering Lives Through Better Mobility
          </h1>
          <p className="text-xl text-muted max-w-3xl mx-auto leading-relaxed">
            We believe that limited mobility shouldn&apos;t limit life. That&apos;s why we&apos;re dedicated to providing high-quality, comfortable, and affordable wheelchairs to those who need them most.
          </p>
        </div>
      </section>

      {/* Our Story / Mission */}
      <section className="py-20 lg:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-6">Our Mission</h2>
            <div className="space-y-6 text-lg text-muted">
              <p>
                As <b>Lakshmi Kubera Enterprises</b> (Kubera Mobility Solutions), we have been proudly serving as <strong>Railway Suppliers since 20 years</strong>. Our deep understanding of large-scale medical and institutional needs enables us to bridge the gap between quality healthcare equipment and accessibility.
              </p>
              <p>
                We carefully curate our catalog, partnering only with trusted manufacturers. As authorized dealers of Wheelchair India and suppliers of Godrej and Wipro medical furniture, every product we offer is selected to provide maximum comfort and reliability for hospitals, NGOs, and institutions.
              </p>
              <p>
                Our knowledgeable staff is always ready to guide you, understanding that each person&apos;s needs are unique and require personalized attention.
              </p>
            </div>
          </div>
          <div className="relative aspect-[4/3] sm:aspect-auto sm:min-h-[500px] rounded-3xl overflow-hidden flex items-center justify-center p-4">
            <AboutAnimation />
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-bg-alt py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">Why We&apos;re Trusted</h2>
            <p className="text-lg text-muted max-w-2xl mx-auto">
              Our core values dictate every aspect of how we operate and serve our customers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Shield size={32} />,
                title: 'Quality Assured',
                desc: 'Every product in our catalog meets strict safety and durability standards.',
                color: 'bg-blue-50 text-blue-600',
              },
              {
                icon: <Heart size={32} />,
                title: 'Care & Compassion',
                desc: 'We treat every customer with the empathy and respect they deserve.',
                color: 'bg-red-50 text-red-500',
              },
              {
                icon: <ThumbsUp size={32} />,
                title: 'Expert Guidance',
                desc: 'Our staff provides honest advice to help you find the right fit.',
                color: 'bg-green-50 text-green-600',
              },
              {
                icon: <Award size={32} />,
                title: 'Best Value',
                desc: 'We offer competitive pricing without ever compromising on quality.',
                color: 'bg-orange-50 text-orange-500',
              },
            ].map((value, idx) => (
              <div key={idx} className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${value.color}`}>
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{value.title}</h3>
                <p className="text-muted leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Coverage / CTA */}
      <section className="py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-foreground mb-6">Serving Nationwide</h2>
        <p className="text-xl text-muted leading-relaxed max-w-3xl mx-auto mb-10">
          We proudly deliver our products across the country, ensuring that high-quality mobility aids are accessible no matter where you live. Our streamlined delivery process and robust packaging guarantee your equipment arrives safely and ready to use.
        </p>
        <div className="flex justify-center">
          <a
            href="https://wa.me/919989908123"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-bold rounded-full text-white bg-primary hover:bg-cta focus:outline-none focus:ring-4 focus:ring-primary/20 transition-all shadow-md hover:-translate-y-1"
          >
            Contact us to check delivery in your area
          </a>
        </div>
      </section>
    </div>
  );
}
