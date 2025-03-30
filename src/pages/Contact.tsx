
import { useState } from 'react';
import Layout from '@/components/Layout';
import { SectionTitle } from '@/components/ui/section-title';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from '@/components/ui/use-toast';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const formSchema = z.object({
  name: z.string().min(2, {
    message: 'Bitte geben Sie einen gültigen Namen ein.',
  }),
  email: z.string().email({
    message: 'Bitte geben Sie eine gültige E-Mail-Adresse ein.',
  }),
  phone: z.string().optional(),
  company: z.string().optional(),
  subject: z.string().min(1, {
    message: 'Bitte wählen Sie einen Betreff aus.',
  }),
  message: z.string().min(10, {
    message: 'Ihre Nachricht sollte mindestens 10 Zeichen lang sein.',
  }),
  privacy: z.boolean().refine(val => val === true, {
    message: 'Sie müssen der Datenschutzerklärung zustimmen, um fortzufahren.',
  }),
});

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      company: '',
      subject: '',
      message: '',
      privacy: false,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log(values);
      
      toast({
        title: 'Nachricht gesendet!',
        description: 'Vielen Dank für Ihre Anfrage. Wir werden uns so schnell wie möglich bei Ihnen melden.',
        variant: 'default',
      });
      
      form.reset();
      setIsSubmitting(false);
    }, 1500);
  }

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-28 pb-20 bg-gradient-to-r from-brand-50 to-accent2-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Kontaktieren Sie uns</h1>
            <p className="text-lg text-gray-600">
              Haben Sie Fragen oder möchten Sie mehr über unsere Dienstleistungen erfahren? 
              Wir sind für Sie da!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg flex items-start">
              <div className="mr-4">
                <div className="w-12 h-12 rounded-full bg-brand-100 flex items-center justify-center">
                  <Mail className="text-brand-600" size={24} />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">E-Mail</h3>
                <p className="text-gray-600 mb-1">Allgemeine Anfragen:</p>
                <a href="mailto:info@digitalfirmboost.de" className="text-brand-600 hover:underline">
                  info@digitalfirmboost.de
                </a>
                <p className="text-gray-600 mt-3 mb-1">Support:</p>
                <a href="mailto:support@digitalfirmboost.de" className="text-brand-600 hover:underline">
                  support@digitalfirmboost.de
                </a>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg flex items-start">
              <div className="mr-4">
                <div className="w-12 h-12 rounded-full bg-brand-100 flex items-center justify-center">
                  <Phone className="text-brand-600" size={24} />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Telefon</h3>
                <p className="text-gray-600 mb-1">Büro:</p>
                <a href="tel:+491234567890" className="text-brand-600 hover:underline">
                  +49 123 456 7890
                </a>
                <p className="text-gray-600 mt-3 mb-1">Kundenservice:</p>
                <a href="tel:+491234567891" className="text-brand-600 hover:underline">
                  +49 123 456 7891
                </a>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg flex items-start">
              <div className="mr-4">
                <div className="w-12 h-12 rounded-full bg-brand-100 flex items-center justify-center">
                  <MapPin className="text-brand-600" size={24} />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Adresse</h3>
                <p className="text-gray-600">
                  DigitalFirmBoost GmbH<br />
                  Musterstraße 123<br />
                  12345 Musterstadt<br />
                  Deutschland
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Hours */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto bg-gray-50 p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <Clock className="text-brand-600 mr-3" size={24} />
              <h3 className="text-xl font-semibold">Geschäftszeiten</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-gray-700 font-medium mb-2">Montag - Freitag:</p>
                <p className="text-gray-600">9:00 - 18:00 Uhr</p>
              </div>
              <div>
                <p className="text-gray-700 font-medium mb-2">Samstag & Sonntag:</p>
                <p className="text-gray-600">Geschlossen</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Map Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle
            title="Schreiben Sie uns"
            subtitle="Füllen Sie das Formular aus, und wir werden uns so schnell wie möglich bei Ihnen melden."
            centered
            className="mb-12"
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name *</FormLabel>
                          <FormControl>
                            <Input placeholder="Ihr Name" {...field} />
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
                          <FormLabel>E-Mail *</FormLabel>
                          <FormControl>
                            <Input placeholder="Ihre E-Mail-Adresse" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Telefon</FormLabel>
                          <FormControl>
                            <Input placeholder="Ihre Telefonnummer" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="company"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Unternehmen</FormLabel>
                          <FormControl>
                            <Input placeholder="Ihr Unternehmen" {...field} />
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
                        <FormLabel>Betreff *</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Wählen Sie einen Betreff" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="allgemeine-anfrage">Allgemeine Anfrage</SelectItem>
                            <SelectItem value="website-erstellung">Website-Erstellung</SelectItem>
                            <SelectItem value="social-media">Social Media Management</SelectItem>
                            <SelectItem value="prozessoptimierung">Prozessoptimierung</SelectItem>
                            <SelectItem value="digitalinvest">DigitalInvest KMU Beratung</SelectItem>
                            <SelectItem value="support">Support</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nachricht *</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Wie können wir Ihnen helfen?" 
                            className="min-h-32" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="privacy"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel>
                            Ich stimme der <a href="/privacy-policy" className="text-brand-600 hover:underline">Datenschutzerklärung</a> zu *
                          </FormLabel>
                          <FormMessage />
                        </div>
                      </FormItem>
                    )}
                  />

                  <Button 
                    type="submit" 
                    className="w-full bg-brand-600 hover:bg-brand-700"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Wird gesendet...' : 'Nachricht senden'}
                  </Button>
                </form>
              </Form>
            </div>

            <div className="relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2428.654039440255!2d13.372469776816182!3d52.50793287205802!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a851cbdd6cfe0f%3A0xb4b0903f299dec1!2sBrandenburger%20Tor!5e0!3m2!1sde!2sde!4v1688899853429!5m2!1sde!2sde"
                width="100%"
                height="450"
                style={{ border: 0, borderRadius: '0.5rem' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Office Location"
                className="shadow-md"
              ></iframe>
              
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-brand-400 rounded-lg opacity-20 blur-xl"></div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent2-400 rounded-full opacity-20 blur-xl"></div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
