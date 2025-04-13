
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail, MapPin, Phone } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  subject: z.string().min(5, {
    message: "Subject must be at least 5 characters.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

const Contact = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // In a real application, you would send this data to your backend
    console.log(values);
    toast({
      title: "Message Sent",
      description: "We have received your message and will respond shortly.",
    });
    form.reset();
  }

  return (
    <div className="min-h-screen bg-obsidian flex flex-col">
      <Navbar />
      
      <div className="py-8 bg-gradient-to-b from-obsidian-dark to-obsidian">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-playfair font-bold mb-2">Contact Us</h1>
          <p className="text-silver text-lg">We'd love to hear from you</p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-12 flex-grow">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="gothic-card p-6 space-y-8">
              <h2 className="text-2xl font-playfair font-bold mb-6">Get in Touch</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-blood/20 p-3 rounded-full mr-4">
                    <Mail className="text-blood h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-playfair text-lg mb-1">Email Us</h3>
                    <p className="text-silver">info@obsidianheart.com</p>
                    <p className="text-silver">support@obsidianheart.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blood/20 p-3 rounded-full mr-4">
                    <Phone className="text-blood h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-playfair text-lg mb-1">Call Us</h3>
                    <p className="text-silver">+1 (555) 123-4567</p>
                    <p className="text-silver">Mon-Fri: 9AM - 5PM</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blood/20 p-3 rounded-full mr-4">
                    <MapPin className="text-blood h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-playfair text-lg mb-1">Visit Us</h3>
                    <p className="text-silver">123 Shadow Lane</p>
                    <p className="text-silver">Gothville, GV 98765</p>
                  </div>
                </div>
              </div>
              
              <div className="py-6">
                <h3 className="font-playfair text-lg mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="bg-obsidian-light hover:bg-blood/20 text-silver hover:text-white p-2 rounded-full transition-colors">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path>
                    </svg>
                  </a>
                  <a href="#" className="bg-obsidian-light hover:bg-blood/20 text-silver hover:text-white p-2 rounded-full transition-colors">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"></path>
                    </svg>
                  </a>
                  <a href="#" className="bg-obsidian-light hover:bg-blood/20 text-silver hover:text-white p-2 rounded-full transition-colors">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="gothic-card p-6">
              <h2 className="text-2xl font-playfair font-bold mb-6">Send Us a Message</h2>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Your name" 
                              {...field} 
                              className="bg-obsidian-light border-obsidian-dark focus:border-blood"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Your email" 
                              {...field} 
                              className="bg-obsidian-light border-obsidian-dark focus:border-blood"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Subject</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Message subject" 
                            {...field} 
                            className="bg-obsidian-light border-obsidian-dark focus:border-blood"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Your message" 
                            {...field} 
                            className="bg-obsidian-light border-obsidian-dark focus:border-blood min-h-[150px]"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button type="submit" className="blood-btn w-full sm:w-auto">
                    Send Message
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
        
        {/* FAQ Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-playfair font-bold text-center mb-8">Frequently Asked Questions</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="gothic-card p-6">
              <h3 className="font-playfair text-xl mb-3 text-blood">What are your shipping rates?</h3>
              <p className="text-silver">We offer free shipping on orders over $50. For orders under $50, shipping rates start at $5.99 depending on your location.</p>
            </div>
            
            <div className="gothic-card p-6">
              <h3 className="font-playfair text-xl mb-3 text-blood">Do you ship internationally?</h3>
              <p className="text-silver">Yes, we ship to most countries worldwide. International shipping rates vary by location and will be calculated at checkout.</p>
            </div>
            
            <div className="gothic-card p-6">
              <h3 className="font-playfair text-xl mb-3 text-blood">What is your return policy?</h3>
              <p className="text-silver">We accept returns within 30 days of delivery. Items must be unused and in their original packaging. Please contact us before returning any items.</p>
            </div>
            
            <div className="gothic-card p-6">
              <h3 className="font-playfair text-xl mb-3 text-blood">How can I track my order?</h3>
              <p className="text-silver">Once your order ships, you will receive a confirmation email with tracking information. You can also track your order through your account dashboard.</p>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Contact;
