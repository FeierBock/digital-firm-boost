
import { useState, useEffect } from 'react';
import { useParams, useSearchParams, Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import { SectionTitle } from '@/components/ui/section-title';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { CalendarIcon, Clock, Search, Tag } from 'lucide-react';
import { BlogPosts, categories, popularTags } from '@/data/blogData';
import { 
  Pagination, 
  PaginationContent, 
  PaginationItem, 
  PaginationLink, 
  PaginationNext, 
  PaginationPrevious,
  PaginationEllipsis 
} from '@/components/ui/pagination';

const Blog = () => {
  const { category, tag } = useParams();
  const [searchParams] = useSearchParams();
  const queryTag = searchParams.get('tag');
  const [searchTerm, setSearchTerm] = useState('');
  const [activePage, setActivePage] = useState(1);
  const postsPerPage = 6;

  // Filter posts based on category, tag, or search term
  const filteredPosts = BlogPosts.filter(post => {
    const matchesCategory = category ? post.category.toLowerCase() === category.toLowerCase() : true;
    const matchesTag = tag || queryTag ? post.tags.some(t => 
      t.toLowerCase() === (tag || queryTag)?.toLowerCase()
    ) : true;
    const matchesSearch = searchTerm 
      ? post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
      : true;
    
    return matchesCategory && matchesTag && matchesSearch;
  });

  // Pagination
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const currentPosts = filteredPosts.slice(
    (activePage - 1) * postsPerPage, 
    activePage * postsPerPage
  );

  // Reset to page 1 when filters change
  useEffect(() => {
    setActivePage(1);
  }, [category, tag, queryTag, searchTerm]);

  // Get page title based on filters
  const getPageTitle = () => {
    if (category) return `Kategorie: ${category}`;
    if (tag) return `Tag: ${tag}`;
    if (queryTag) return `Tag: ${queryTag}`;
    return 'Unser Blog';
  };

  // Generate pagination items
  const renderPaginationItems = () => {
    // For small number of pages, show all
    if (totalPages <= 7) {
      return Array.from({ length: totalPages }, (_, i) => (
        <PaginationItem key={i}>
          <PaginationLink 
            isActive={activePage === i + 1}
            onClick={() => setActivePage(i + 1)}
          >
            {i + 1}
          </PaginationLink>
        </PaginationItem>
      ));
    }

    // For larger number of pages, show with ellipsis
    const items = [];

    // Always show first page
    items.push(
      <PaginationItem key={1}>
        <PaginationLink 
          isActive={activePage === 1}
          onClick={() => setActivePage(1)}
        >
          1
        </PaginationLink>
      </PaginationItem>
    );

    // Show ellipsis if active page is > 3
    if (activePage > 3) {
      items.push(
        <PaginationItem key="ellipsis-1">
          <PaginationEllipsis />
        </PaginationItem>
      );
    }

    // Show pages around active page
    const startPage = Math.max(2, activePage - 1);
    const endPage = Math.min(totalPages - 1, activePage + 1);

    for (let i = startPage; i <= endPage; i++) {
      items.push(
        <PaginationItem key={i}>
          <PaginationLink 
            isActive={activePage === i}
            onClick={() => setActivePage(i)}
          >
            {i}
          </PaginationLink>
        </PaginationItem>
      );
    }

    // Show ellipsis if active page is < totalPages - 2
    if (activePage < totalPages - 2) {
      items.push(
        <PaginationItem key="ellipsis-2">
          <PaginationEllipsis />
        </PaginationItem>
      );
    }

    // Always show last page
    items.push(
      <PaginationItem key={totalPages}>
        <PaginationLink 
          isActive={activePage === totalPages}
          onClick={() => setActivePage(totalPages)}
        >
          {totalPages}
        </PaginationLink>
      </PaginationItem>
    );

    return items;
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-28 pb-20 bg-gradient-to-r from-brand-50 to-accent2-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{getPageTitle()}</h1>
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
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>

              {/* Filtered results info */}
              {(category || tag || queryTag) && (
                <div className="mb-6 flex justify-between items-center">
                  <div>
                    <p className="text-sm text-gray-500">
                      {filteredPosts.length} Artikel gefunden
                    </p>
                  </div>
                  <Button variant="ghost" asChild>
                    <Link to="/blog">Alle Artikel anzeigen</Link>
                  </Button>
                </div>
              )}

              {/* Blog posts grid */}
              {currentPosts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {currentPosts.map((post) => (
                    <Card key={post.id} className="card-hover overflow-hidden">
                      <div className="relative h-48 overflow-hidden">
                        <img 
                          src={post.image} 
                          alt={post.title}
                          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                        />
                        <div className="absolute top-0 right-0 m-3">
                          <Badge className="bg-brand-500 text-white hover:bg-brand-600">
                            <Link to={`/blog/category/${post.category.toLowerCase()}`}>
                              {post.category}
                            </Link>
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
              ) : (
                <div className="text-center py-12">
                  <h3 className="text-xl font-medium mb-4">Keine Artikel gefunden</h3>
                  <p className="text-gray-500 mb-6">Wir konnten keine Artikel finden, die Ihren Filterkriterien entsprechen.</p>
                  <Button asChild>
                    <Link to="/blog">Alle Artikel anzeigen</Link>
                  </Button>
                </div>
              )}

              {/* Pagination - Using the shadcn/ui pagination component */}
              {totalPages > 1 && (
                <div className="mt-10">
                  <Pagination>
                    <PaginationContent>
                      <PaginationItem>
                        <PaginationPrevious 
                          onClick={() => setActivePage(prev => Math.max(prev - 1, 1))}
                          className={activePage === 1 ? 'pointer-events-none opacity-50' : ''}
                        />
                      </PaginationItem>
                      
                      {renderPaginationItems()}
                      
                      <PaginationItem>
                        <PaginationNext 
                          onClick={() => setActivePage(prev => Math.min(prev + 1, totalPages))}
                          className={activePage === totalPages ? 'pointer-events-none opacity-50' : ''}
                        />
                      </PaginationItem>
                    </PaginationContent>
                  </Pagination>
                </div>
              )}
              
              {/* Page counter */}
              {totalPages > 1 && (
                <div className="text-center mt-4 text-sm text-gray-500">
                  Seite {activePage} von {totalPages}
                </div>
              )}
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
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>

              {/* Categories */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">Kategorien</h3>
                <ul className="space-y-2">
                  {categories.map((categoryItem, index) => (
                    <li key={index}>
                      <Link 
                        to={`/blog/category/${categoryItem.name.toLowerCase()}`}
                        className={`flex justify-between items-center py-2 px-3 hover:bg-gray-50 rounded-md transition-colors ${
                          category?.toLowerCase() === categoryItem.name.toLowerCase() ? 'bg-gray-50' : ''
                        }`}
                      >
                        <span className="text-gray-700">{categoryItem.name}</span>
                        <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                          {categoryItem.count}
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
                  {popularTags.map((tagItem, index) => (
                    <Link 
                      key={index} 
                      to={`/blog/tag/${tagItem.toLowerCase()}`}
                      className={`${
                        tag?.toLowerCase() === tagItem.toLowerCase() || queryTag?.toLowerCase() === tagItem.toLowerCase()
                          ? 'bg-brand-100 text-brand-700'
                          : 'bg-gray-50 hover:bg-gray-100 text-gray-700'
                      } px-3 py-1 rounded-full text-sm transition-colors`}
                    >
                      {tagItem}
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
                        <Link to="/blog/category/social-media">
                          Social Media
                        </Link>
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
