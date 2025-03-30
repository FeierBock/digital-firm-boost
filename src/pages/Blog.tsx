
import Layout from '@/components/Layout';
import { SectionTitle } from '@/components/ui/section-title';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Link } from 'react-router-dom';
import { CalendarIcon, Clock, Search, Tag } from 'lucide-react';

const BlogPosts = [
  {
    id: 1,
    title: 'Warum kleine Unternehmen eine Website brauchen',
    excerpt: 'In der heutigen digitalen Welt ist eine Website für kleine Unternehmen kein Luxus mehr, sondern eine Notwendigkeit. Erfahren Sie, warum...',
    date: '15.06.2023',
    readTime: '5 min',
    author: 'Sarah Wagner',
    category: 'Webdesign',
    tags: ['Website', 'Kleine Unternehmen', 'Online-Präsenz'],
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d'
  },
  {
    id: 2,
    title: 'Social Media Marketing für Anfänger: Ein Leitfaden',
    excerpt: 'Social Media kann überwältigend sein, besonders für kleine Unternehmen. Hier ist ein einfacher Leitfaden, um Ihnen den Einstieg zu erleichtern...',
    date: '02.07.2023',
    readTime: '8 min',
    author: 'Michael Becker',
    category: 'Social Media',
    tags: ['Social Media', 'Marketing', 'Anfängerleitfaden'],
    image: 'https://images.unsplash.com/photo-1611926653458-09294b3142bf'
  },
  {
    id: 3,
    title: 'DigitalInvest KMU: Wie Sie von staatlicher Förderung profitieren',
    excerpt: 'Das Förderprogramm DigitalInvest KMU bietet kleinen und mittleren Unternehmen finanzielle Unterstützung für Digitalisierungsprojekte...',
    date: '18.07.2023',
    readTime: '6 min',
    author: 'Lisa Schmitt',
    category: 'Förderung',
    tags: ['DigitalInvest', 'Förderung', 'Digitalisierung'],
    image: 'https://images.unsplash.com/photo-1535303311164-664fc9ec6532'
  },
  {
    id: 4,
    title: 'Die 5 häufigsten Fehler bei der Erstellung einer Unternehmenswebsite',
    excerpt: 'Viele Unternehmen machen bei der Erstellung ihrer Website vermeidbare Fehler, die die Benutzererfahrung und das Ranking beeinträchtigen...',
    date: '05.08.2023',
    readTime: '7 min',
    author: 'Sarah Wagner',
    category: 'Webdesign',
    tags: ['Website', 'Fehler', 'SEO'],
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c'
  },
  {
    id: 5,
    title: 'Prozessoptimierung: Wie Sie Ihr Unternehmen effizienter gestalten',
    excerpt: 'Digitale Prozessoptimierung kann Ihrem Unternehmen helfen, Zeit und Ressourcen zu sparen. Hier sind einige Tipps, um anzufangen...',
    date: '22.08.2023',
    readTime: '9 min',
    author: 'Thomas Müller',
    category: 'Prozessoptimierung',
    tags: ['Effizienz', 'Digitalisierung', 'Workflows'],
    image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a'
  },
  {
    id: 6,
    title: 'Die Bedeutung von Mobile-First Design für Ihre Website',
    excerpt: 'Mit der zunehmenden Nutzung von Mobilgeräten ist ein für mobile Geräte optimiertes Webdesign unerlässlich geworden...',
    date: '10.09.2023',
    readTime: '6 min',
    author: 'Sarah Wagner',
    category: 'Webdesign',
    tags: ['Mobile-First', 'Responsive Design', 'UX'],
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c'
  }
];

const categories = [
  { name: 'Webdesign', count: 32 },
  { name: 'Social Media', count: 24 },
  { name: 'SEO', count: 18 },
  { name: 'Prozessoptimierung', count: 15 },
  { name: 'Förderung', count: 10 },
  { name: 'E-Commerce', count: 8 }
];

const popularTags = [
  'Website', 'Social Media', 'SEO', 'Digitalisierung', 'Online-Marketing',
  'E-Commerce', 'Content', 'Google', 'Mobile-First', 'Kundenbindung'
];

const Blog = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-28 pb-20 bg-gradient-to-r from-brand-50 to-accent2-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Unser Blog</h1>
            <p className="text-lg text-gray-600">
              Aktuelle Tipps, Trends und Informationen rund um Webdesign, 
              Social Media, Prozessoptimierung und digitale Förderung.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Content Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Search bar for mobile */}
              <div className="mb-8 lg:hidden">
                <div className="relative">
                  <Search className="absolute left-3 top-3 text-gray-400" size={18} />
                  <Input 
                    placeholder="Suchen..." 
                    className="pl-10 bg-gray-50 border-gray-200"
                  />
                </div>
              </div>

              {/* Blog posts grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {BlogPosts.map((post) => (
                  <Card key={post.id} className="card-hover overflow-hidden">
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                      <div className="absolute top-0 right-0 m-3">
                        <Badge className="bg-brand-500 text-white hover:bg-brand-600">
                          {post.category}
                        </Badge>
                      </div>
                    </div>
                    <CardHeader className="pt-5 pb-2">
                      <Link 
                        to={`/blog/${post.id}`}
                        className="text-xl font-semibold hover:text-brand-600 transition-colors line-clamp-2"
                      >
                        {post.title}
                      </Link>
                    </CardHeader>
                    <CardContent className="pb-3">
                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center text-sm text-gray-500">
                        <div className="flex items-center mr-4">
                          <CalendarIcon size={14} className="mr-1" />
                          <span>{post.date}</span>
                        </div>
                        <div className="flex items-center">
                          <Clock size={14} className="mr-1" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="pt-0">
                      <Button asChild variant="link" className="p-0 text-brand-600 hover:text-brand-700">
                        <Link to={`/blog/${post.id}`}>
                          Weiterlesen
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>

              {/* Pagination */}
              <div className="mt-10 flex justify-center">
                <div className="flex space-x-1">
                  <Button variant="outline" className="border-gray-200">
                    Zurück
                  </Button>
                  <Button variant="outline" className="border-gray-200 bg-brand-50 text-brand-600">
                    1
                  </Button>
                  <Button variant="outline" className="border-gray-200">
                    2
                  </Button>
                  <Button variant="outline" className="border-gray-200">
                    3
                  </Button>
                  <Button variant="outline" className="border-gray-200">
                    Weiter
                  </Button>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Search */}
              <div className="mb-8 hidden lg:block">
                <h3 className="text-xl font-semibold mb-4">Suche</h3>
                <div className="relative">
                  <Search className="absolute left-3 top-3 text-gray-400" size={18} />
                  <Input 
                    placeholder="Suchen..." 
                    className="pl-10 bg-gray-50 border-gray-200"
                  />
                </div>
              </div>

              {/* Categories */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">Kategorien</h3>
                <ul className="space-y-2">
                  {categories.map((category, index) => (
                    <li key={index}>
                      <Link 
                        to={`/blog/category/${category.name.toLowerCase()}`}
                        className="flex justify-between items-center py-2 px-3 hover:bg-gray-50 rounded-md transition-colors"
                      >
                        <span className="text-gray-700">{category.name}</span>
                        <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                          {category.count}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Popular Tags */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">Beliebte Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {popularTags.map((tag, index) => (
                    <Link 
                      key={index} 
                      to={`/blog/tag/${tag.toLowerCase()}`}
                      className="bg-gray-50 hover:bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm transition-colors"
                    >
                      {tag}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Featured Post */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">Empfohlener Artikel</h3>
                <Card className="overflow-hidden card-hover">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1611926653458-09294b3142bf" 
                      alt="Social Media Marketing für Anfänger"
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                    <div className="absolute top-0 right-0 m-3">
                      <Badge className="bg-brand-500 text-white hover:bg-brand-600">
                        Social Media
                      </Badge>
                    </div>
                  </div>
                  <CardHeader className="pt-4 pb-2">
                    <Link 
                      to="/blog/2"
                      className="text-lg font-semibold hover:text-brand-600 transition-colors"
                    >
                      Social Media Marketing für Anfänger: Ein Leitfaden
                    </Link>
                  </CardHeader>
                  <CardContent className="pb-4">
                    <div className="flex items-center text-sm text-gray-500">
                      <div className="flex items-center mr-4">
                        <CalendarIcon size={14} className="mr-1" />
                        <span>02.07.2023</span>
                      </div>
                      <div className="flex items-center">
                        <Clock size={14} className="mr-1" />
                        <span>8 min</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Newsletter Subscription */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Newsletter</h3>
                <p className="text-gray-600 mb-4">
                  Abonnieren Sie unseren Newsletter und erhalten Sie die neuesten Updates direkt in Ihr Postfach.
                </p>
                <div className="space-y-3">
                  <Input placeholder="Ihre E-Mail-Adresse" className="bg-white" />
                  <Button className="w-full bg-brand-600 hover:bg-brand-700">
                    Abonnieren
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
