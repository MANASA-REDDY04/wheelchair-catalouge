import { Mail, MapPin, Phone, MessageSquare } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | Kubera Mobility Solutions',
  description: 'Get in touch with Lakshmi Kubera Enterprises for inquiries, recommendations or support.',
};

export default function ContactPage() {
  return (
    <div className="bg-bg-alt py-12 min-h-[calc(100vh-80px)]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-foreground mb-4">Contact US</h1>
          <p className="text-xl text-muted max-w-2xl mx-auto">
            Have a question or need help finding the perfect wheelchair? We are here to assist you quickly and effectively.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="grid md:grid-cols-2 lg:gap-0 lg:divide-x divide-gray-100">
            {/* Direct Contact Options */}
            <div className="p-8 lg:p-12">
              <h2 className="text-2xl font-bold text-foreground mb-8 text-center md:text-left">Let&apos;s Talk</h2>
              <div className="space-y-6">
                <a
                  href="https://wa.me/919989908123"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center p-6 bg-accent-green hover:bg-[#D1F2DF] rounded-2xl transition-all shadow-sm group hover:-translate-y-1"
                >
                  <div className="w-14 h-14 bg-white/60 rounded-xl flex items-center justify-center text-green-600 mr-5 group-hover:scale-110 transition-transform shadow-sm">
                    <MessageSquare size={28} />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground text-lg mb-1">WhatsApp Us</h3>
                    <p className="text-green-800 font-medium">Fastest response time</p>
                  </div>
                </a>

                <a
                  href="tel:+919989908123"
                  className="w-full flex items-center p-6 bg-accent-blue hover:bg-[#D5E9FF] rounded-2xl transition-all shadow-sm group hover:-translate-y-1"
                >
                  <div className="w-14 h-14 bg-white/60 rounded-xl flex items-center justify-center text-primary mr-5 group-hover:scale-110 transition-transform shadow-sm">
                    <Phone size={28} />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground text-lg mb-1">Call Us</h3>
                    <p className="text-blue-800 font-medium">+91 9989908123</p>
                  </div>
                </a>

                <a
                  href="mailto:a.ekansh@yahoo.com"
                  className="w-full flex items-center p-6 bg-orange-50 hover:bg-orange-100 rounded-2xl transition-all shadow-sm group hover:-translate-y-1"
                >
                  <div className="w-14 h-14 bg-white/60 rounded-xl flex items-center justify-center text-orange-500 mr-5 group-hover:scale-110 transition-transform shadow-sm">
                    <Mail size={28} />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground text-lg mb-1">Email</h3>
                    <p className="text-orange-800 font-medium break-all">a.ekansh@yahoo.com</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Visit Us Information */}
            <div className="p-8 lg:p-12 bg-gray-50/50 flex flex-col justify-center">
              <h2 className="text-2xl font-bold text-foreground mb-8 text-center md:text-left">Visit Us</h2>
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 space-y-6 flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-accent-blue/50 rounded-full flex items-center justify-center text-primary/80 mb-2">
                  <MapPin size={40} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-3">Our Office</h3>
                  <p className="text-muted leading-relaxed max-w-xs mx-auto text-lg">
                    10-5-78, Tukaram Gate North,<br />
                    Lallaguda, Secunderabad,<br />
                    Telangana, India
                  </p>
                </div>
                <div className="pt-6 border-t border-gray-100 w-full mt-4">
                  <h4 className="font-semibold text-foreground mb-2 text-sm uppercase tracking-wider">Business Hours</h4>
                  <p className="text-muted">Monday - Saturday</p>
                  <p className="font-bold text-primary text-lg mt-1 mb-6">9:00 AM - 7:00 PM</p>
                  
                  <div className="w-full h-64 rounded-2xl overflow-hidden border border-gray-200">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1305.1234270576585!2d78.522456873173!3d17.44212302808924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9bcd7a500d1d%3A0x62d064f44b7e1fcc!2s10-5-578%2C%20Tukaram%20Gate%20Main%20Rd%2C%20Mamidpalli%2C%20Malkajgiri%2C%20Hyderabad%2C%20Secunderabad%2C%20Telangana%20500017!5e1!3m2!1sen!2sin!4v1774780188022!5m2!1sen!2sin" width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
