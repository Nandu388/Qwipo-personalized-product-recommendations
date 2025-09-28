import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MetricCard } from "@/components/MetricCard";
import { ProductCard } from "@/components/ProductCard";
import { SmartRecommendation } from "@/components/SmartRecommendation";
import { SearchInterface } from "@/components/SearchInterface";
import { useToast } from "@/hooks/use-toast";
import {
  Brain,
  TrendingUp,
  Target,
  ShoppingCart,
  DollarSign,
  Zap,
  Shield,
  BarChart3,
  Users,
  Sparkles,
} from "lucide-react";
import heroImage from "@/assets/hero-ai-assistant.jpg";

const Index = () => {
  const { toast } = useToast();
  const [showRecommendation, setShowRecommendation] = useState(false);

  const handleAddToCart = (productName: string) => {
    toast({
      title: "Added to Smart Cart",
      description: `${productName} has been added with AI optimization`,
    });
  };

  const handleSearch = (query: string) => {
    toast({
      title: "AI Search Processing",
      description: `Finding smart recommendations for: ${query}`,
    });
  };

  const handleImageUpload = (file: File) => {
    toast({
      title: "Visual AI Processing",
      description: "Analyzing image for product matches and alternatives...",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-bg">
      {/* Header */}
      <header className="border-b bg-background/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground">Qwipo AI Assistant</h1>
                <p className="text-sm text-muted-foreground">Smarter Buying. Higher Profits.</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Badge variant="default" className="bg-accent text-accent-foreground">
                <Shield className="w-3 h-3 mr-1" />
                Secured
              </Badge>
              <Button variant="hero">
                <ShoppingCart className="w-4 h-4 mr-2" />
                Smart Cart (3)
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <Badge variant="secondary" className="w-fit">
                  <Sparkles className="w-3 h-3 mr-1" />
                  AI-Powered Business Intelligence
                </Badge>
                <h1 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                  Welcome back, <span className="text-primary">Retailer</span>
                </h1>
                <p className="text-xl text-muted-foreground">
                  Your Smart Cart saved you <span className="font-bold text-accent">₹15,240 this week</span> — 
                  part of an estimated <span className="font-bold text-accent">₹1,00,000+ annual profit lift</span> powered by Qwipo AI.
                </p>
              </div>
              
              <div className="grid sm:grid-cols-2 gap-4">
                <MetricCard
                  title="Weekly Savings"
                  value="₹15,240"
                  trend="up"
                  icon={<DollarSign className="w-6 h-6" />}
                />
                <MetricCard
                  title="AI Insights Active"
                  value="3"
                  subtitle="High-demand gaps detected"
                  trend="up"
                  icon={<Target className="w-6 h-6" />}
                />
              </div>
              
              <div className="flex gap-4">
                <Button variant="hero" size="lg">
                  <TrendingUp className="w-5 h-5 mr-2" />
                  Show Smart Recommendations
                </Button>
                <Button variant="outline" size="lg">
                  Skip for Now
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <img
                src={heroImage}
                alt="Qwipo AI Assistant Dashboard"
                className="rounded-xl shadow-glow w-full"
              />
              <div className="absolute inset-0 bg-gradient-primary/10 rounded-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Search Interface */}
      <section className="py-8 px-4">
        <div className="container mx-auto">
          <SearchInterface onSearch={handleSearch} onImageUpload={handleImageUpload} />
        </div>
      </section>

      {/* Smart Recommendations */}
      <section className="py-8 px-4">
        <div className="container mx-auto space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-bold text-foreground">AI-Recommended Products</h2>
            <p className="text-muted-foreground">Smartest 3 picks for your business growth</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <ProductCard
              name="Premium Bluetooth Headphones"
              price="₹2,499"
              originalPrice="₹3,299"
              badge={{ text: "High Reorder", variant: "success" }}
              insights={[
                "82% reorder rate in your zone",
                "₹800 higher margin vs competitors"
              ]}
              onAddToCart={() => handleAddToCart("Premium Bluetooth Headphones")}
            />
            
            <ProductCard
              name="Smart Fitness Tracker"
              price="₹1,899"
              badge={{ text: "Trending", variant: "trending" }}
              insights={[
                "+45% demand rise this week",
                "Higher margin opportunity"
              ]}
              onAddToCart={() => handleAddToCart("Smart Fitness Tracker")}
            />
            
            <ProductCard
              name="Wireless Charging Pad"
              price="₹1,299"
              badge={{ text: "Best Margin", variant: "success" }}
              insights={[
                "₹600 profit per unit",
                "Fast-moving inventory"
              ]}
              onAddToCart={() => handleAddToCart("Wireless Charging Pad")}
            />
          </div>
          
          <Card className="p-6 bg-accent/5 border-accent/20">
            <div className="text-center space-y-4">
              <div className="flex items-center justify-center gap-2">
                <Zap className="w-5 h-5 text-accent" />
                <span className="font-semibold text-accent">Combo Deal Available</span>
              </div>
              <p className="text-foreground">All 3 products for ₹5,297 (Save ₹1,400)</p>
              <Button variant="success" size="lg">
                Add Combo to Cart
              </Button>
            </div>
          </Card>
        </div>
      </section>

      {/* Smart Cart Optimization */}
      {showRecommendation && (
        <section className="py-8 px-4">
          <div className="container mx-auto">
            <SmartRecommendation
              currentProduct={{
                name: "Basic Bluetooth Speaker",
                price: "₹1,999"
              }}
              recommendedProduct={{
                name: "Premium Sound Speaker Pro",
                price: "₹2,299",
                savings: "₹15,000",
                benefits: [
                  "Same buyer demand (verified by 7-day reorder patterns)",
                  "Higher margin: +₹500 profit/unit",
                  "Total projected monthly savings: ₹15,000"
                ]
              }}
              onReplace={() => {
                setShowRecommendation(false);
                toast({
                  title: "Smart Replacement Made",
                  description: "Your cart has been optimized for maximum profit!",
                });
              }}
              onKeep={() => setShowRecommendation(false)}
            />
          </div>
        </section>
      )}

      {/* Business Insights Dashboard */}
      <section className="py-12 px-4 bg-muted/30">
        <div className="container mx-auto space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-bold text-foreground">Your Business Intelligence</h2>
            <p className="text-muted-foreground">AI-powered insights for smarter decisions</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            <MetricCard
              title="Monthly Savings"
              value="₹45,680"
              trend="up"
              icon={<DollarSign className="w-6 h-6" />}
            />
            <MetricCard
              title="Profit Uplift"
              value="18.5%"
              trend="up"
              icon={<TrendingUp className="w-6 h-6" />}
            />
            <MetricCard
              title="Top Seller"
              value="Wireless Buds"
              subtitle="127 units sold"
              icon={<BarChart3 className="w-6 h-6" />}
            />
            <MetricCard
              title="Zone Rank"
              value="#2"
              subtitle="Top performer"
              trend="up"
              icon={<Users className="w-6 h-6" />}
            />
          </div>
          
          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-foreground mb-2">Missed Growth Opportunity</h3>
                <p className="text-muted-foreground">Smart Home Devices demand spiked +65% in your locality this week</p>
              </div>
              <Button variant="hero" onClick={() => setShowRecommendation(true)}>
                Build Smart Order
              </Button>
            </div>
          </Card>
        </div>
      </section>

      {/* Trust & Security Footer */}
      <footer className="py-8 px-4 border-t bg-background">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div className="space-y-2">
              <Shield className="w-8 h-8 text-primary mx-auto" />
              <p className="font-medium">Secured with End-to-End Encryption</p>
            </div>
            <div className="space-y-2">
              <Brain className="w-8 h-8 text-primary mx-auto" />
              <p className="font-medium">AI Powered by 1M+ Data Points</p>
            </div>
            <div className="space-y-2">
              <Target className="w-8 h-8 text-primary mx-auto" />
              <p className="font-medium">Hyper-Localized Insights</p>
            </div>
            <div className="space-y-2">
              <Zap className="w-8 h-8 text-primary mx-auto" />
              <p className="font-medium">Continuous Learning AI</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
