
import { Link, useParams } from 'react-router-dom';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@/components/ui/breadcrumb';
import { CalendarIcon, Clock, ChevronLeft, Tag, User } from 'lucide-react';
import { BlogPosts } from '@/data/blogData';
import CtaSection from '@/components/CtaSection';

const BlogDetail = () => {
  const { id } = useParams();
  const postId = parseInt(id || '1');
  
  // Find the current post
  const post = BlogPosts.find(post => post.id === postId);
  
  if (!post) {
    return (
      <Layout>
        <div className="container mx-auto px-4 md:px-6 py-20 mt-10">
          <div className="text-center py-20">
            <h1 className="text-3xl font-bold mb-4">Artikel nicht gefunden</h1>
            <p className="mb-6">Der gesuchte Artikel existiert leider nicht.</p>
            <Button asChild>
              <Link to="/blog">Zurück zum Blog</Link>
            </Button>
          </div>
        </div>
      </Layout>
    );
  }
  
  // Find related posts (same category or common tags)
  const relatedPosts = BlogPosts
    .filter(p => p.id !== postId && (
      p.category === post.category || 
      p.tags.some(tag => post.tags.includes(tag))
    ))
    .slice(0, 3);
  
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-28 pb-12 bg-gradient-to-r from-brand-50 to-accent2-50">
        <div className="container mx-auto px-4 md:px-6">
          <Breadcrumb className="mb-6">
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Startseite</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink href="/blog">Blog</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink>{post.title.substring(0, 20)}...</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
          
          <div className="max-w-4xl mx-auto">
            <Badge className="bg-brand-500 text-white hover:bg-brand-600 mb-4">
              <Link to={`/blog/category/${post.category.toLowerCase()}`}>
                {post.category}
              </Link>
            </Badge>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">{post.title}</h1>
            
            <div className="flex flex-wrap items-center text-sm text-gray-500 gap-4 mb-6">
              <div className="flex items-center">
                <User size={16} className="mr-2" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center">
                <CalendarIcon size={16} className="mr-2" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center">
                <Clock size={16} className="mr-2" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <div className="mb-8 rounded-lg overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-auto"
                />
              </div>
              
              <div className="prose prose-lg max-w-none">
                <p className="font-medium text-lg mb-6 text-gray-700">{post.excerpt}</p>
                
                {/* Render article content from HTML string */}
                <div dangerouslySetInnerHTML={{ __html: post.content }} />
              </div>
              
              {/* Tags */}
              <div className="mt-10 flex flex-wrap gap-2 items-center">
                <Tag size={18} className="text-gray-500" />
                {post.tags.map((tag, idx) => (
                  <Link 
                    key={idx} 
                    to={`/blog?tag=${tag.toLowerCase()}`}
                    className="bg-gray-50 hover:bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm transition-colors"
                  >
                    {tag}
                  </Link>
                ))}
              </div>
              
              {/* Navigation links */}
              <div className="flex justify-between mt-10 pt-8 border-t">
                <Button 
                  variant="outline" 
                  className="gap-2"
                  asChild
                >
                  <Link to="/blog">
                    <ChevronLeft size={16} />
                    Zurück zum Blog
                  </Link>
                </Button>
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Author Info */}
              <div className="mb-8 bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Über den Autor</h3>
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-full bg-gray-300 flex-shrink-0 overflow-hidden">
                    <img 
                      src={`https://ui-avatars.com/api/?name=${encodeURIComponent(post.author)}&background=random`}
                      alt={post.author}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-medium text-lg">{post.author}</h4>
                    <p className="text-gray-600 text-sm mt-1">Experte für {post.category} mit langjähriger Erfahrung in der digitalen Branche.</p>
                  </div>
                </div>
              </div>
              
              {/* Related Posts */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">Ähnliche Artikel</h3>
                <div className="space-y-4">
                  {relatedPosts.length > 0 ? (
                    relatedPosts.map((relatedPost) => (
                      <div key={relatedPost.id} className="flex gap-3">
                        <div className="flex-shrink-0 w-20 h-20 rounded overflow-hidden">
                          <img 
                            src={relatedPost.image} 
                            alt={relatedPost.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="font-medium line-clamp-2">
                            <Link 
                              to={`/blog/${relatedPost.id}`}
                              className="hover:text-brand-600 transition-colors"
                            >
                              {relatedPost.title}
                            </Link>
                          </h4>
                          <div className="flex items-center text-xs text-gray-500 mt-1">
                            <CalendarIcon size={12} className="mr-1" />
                            <span>{relatedPost.date}</span>
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <p className="text-gray-500">Keine ähnlichen Artikel gefunden.</p>
                  )}
                </div>
              </div>
              
              {/* Topics/Categories */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">Themen</h3>
                <div className="flex flex-wrap gap-2">
                  {/* Link to category page */}
                  <Link 
                    to={`/blog/category/${post.category.toLowerCase()}`}
                    className="bg-brand-100 text-brand-700 hover:bg-brand-200 px-3 py-1 rounded-full text-sm transition-colors"
                  >
                    {post.category}
                  </Link>
                </div>
              </div>
              
              {/* Newsletter */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Newsletter</h3>
                <p className="text-gray-600 mb-4">
                  Abonnieren Sie unseren Newsletter und erhalten Sie die neuesten Updates direkt in Ihr Postfach.
                </p>
                <div className="space-y-3">
                  <input 
                    type="email" 
                    placeholder="Ihre E-Mail-Adresse" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  />
                  <Button className="w-full bg-brand-600 hover:bg-brand-700">
                    Abonnieren
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <CtaSection
        title="Haben Sie Fragen zu diesem Thema?"
        description="Kontaktieren Sie uns für eine kostenlose Beratung rund um Ihre digitale Präsenz. Unsere Experten helfen Ihnen gerne weiter."
        primaryButtonText="Kontakt aufnehmen"
        primaryButtonLink="/contact"
        secondaryButtonText="Mehr erfahren"
        secondaryButtonLink="/services"
        backgroundClass="bg-gradient-to-r from-brand-50 to-accent2-50"
      />
    </Layout>
  );
};

export default BlogDetail;
