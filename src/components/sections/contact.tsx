import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import emailjs from 'emailjs-com';

export function ContactSection() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Prepare the data to send
    const emailData = {
      from_name: formData.name, // Sender's name
      to_name: "Nexas Digi Solutions", // Your company name or recipient's name
      from_email: formData.email, // Sender's email
      message: formData.message, // Message content
    };

    // Send email using EmailJS
    emailjs.send("service_tvzgu6h", "template_2a721jg", emailData, "D1-NUU45OQwZXrdq-")
      .then((response) => {
        console.log('Email sent successfully!', response.status, response.text);
        toast({
          title: "Message Sent",
          description: "Your message has been sent successfully!",
        });
        // Reset form
        setFormData({
          name: "",
          email: "",
          message: ""
        });
      })
      .catch((error) => {
        console.error('Failed to send email:', error);
        toast({
          title: "Error",
          description: "There was an error sending your message. Please try again later.",
        });
      });
  };

  return <section className="py-20 bg-[#0B0014]" id="contact">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-cyan-400 mb-2 block">Contact Us</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Let's Start Your Project
          </h2>
          <p className="text-purple-300 max-w-2xl mx-auto">
            Ready to transform your digital presence? Get in touch with us today.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-white mb-6">Get in Touch</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-purple-950/30 border border-purple-800/20">
                  <Phone className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Phone</h4>
                  <a href="tel:+91XXXXXXXXXX" className="text-purple-300 hover:text-purple-200 transition">
                    +91 XXXXXXXX80
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-purple-950/30 border border-purple-800/20">
                  <Mail className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Email</h4>
                  <a href="mailto:nexasdigisolutions@gmail.com" className="text-purple-300 hover:text-purple-200 transition">
                    nexasdigisolutions@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-purple-950/30 border border-purple-800/20">
                  <MapPin className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Location</h4>
                  <p className="text-purple-300">Vizianagaram, Andhra Pradesh
                </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-purple-950/20 p-8 rounded-2xl border border-purple-800/20">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input 
                  placeholder="Your Name" 
                  className="bg-purple-950/30 border-purple-800/20 text-white placeholder:text-purple-400"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>
              <div>
                <Input 
                  type="email" 
                  placeholder="Your Email" 
                  className="bg-purple-950/30 border-purple-800/20 text-white placeholder:text-purple-400"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>
              <div>
                <Textarea 
                  placeholder="Your Message" 
                  className="bg-purple-950/30 border-purple-800/20 text-white placeholder:text-purple-400 min-h-[150px]"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                />
              </div>
              <Button type="submit" className="w-full bg-cyan-400 hover:bg-green-500 text-gray-900 font-medium">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>;
}
