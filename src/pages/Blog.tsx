import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { formatDistanceToNow } from "date-fns";
import Navigation from "@/components/ui/navigation";
import Footer from "@/components/sections/Footer";

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  featured_image_url: string | null;
  created_at: string;
}

const Blog = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('id, title, slug, excerpt, featured_image_url, created_at')
        .eq('published', true)
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching posts:', error);
      } else {
        setPosts(data || []);
      }
      setLoading(false);
    };

    fetchPosts();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="container mx-auto px-6 py-24">
          <div className="text-center">Loading...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-6 py-24">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gradient mb-6">
              Fluxara Blog
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Insights, innovations, and industry trends in sustainable AI technology
            </p>
          </div>

          <div className="grid gap-8">
            {posts.map((post) => (
              <Card key={post.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <Badge variant="secondary">
                      {formatDistanceToNow(new Date(post.created_at), { addSuffix: true })}
                    </Badge>
                  </div>
                  <CardTitle className="text-2xl">
                    <Link
                      to={`/blog/${post.slug}`}
                      className="hover:text-primary transition-colors"
                    >
                      {post.title}
                    </Link>
                  </CardTitle>
                  {post.excerpt && (
                    <CardDescription className="text-base">
                      {post.excerpt}
                    </CardDescription>
                  )}
                </CardHeader>
                <CardContent>
                  <Link
                    to={`/blog/${post.slug}`}
                    className="text-primary hover:underline font-medium"
                  >
                    Read more →
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          {posts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground">No blog posts found.</p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;