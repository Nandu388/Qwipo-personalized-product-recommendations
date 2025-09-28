import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, Camera, Mic, Sparkles } from "lucide-react";

interface SearchInterfaceProps {
  onSearch: (query: string) => void;
  onImageUpload: (file: File) => void;
}

export const SearchInterface = ({ onSearch, onImageUpload }: SearchInterfaceProps) => {
  const [query, setQuery] = useState("");
  
  const quickSuggestions = [
    "Electronics under ₹10,000",
    "Trending home decor",
    "High margin snacks",
    "Seasonal clothing"
  ];

  const handleSearch = () => {
    if (query.trim()) {
      onSearch(query);
    }
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      onImageUpload(file);
    }
  };

  return (
    <Card className="p-6 shadow-card">
      <div className="space-y-4">
        <div className="flex items-center gap-2 mb-4">
          <Sparkles className="w-5 h-5 text-primary" />
          <h3 className="font-semibold text-foreground">AI-Powered Product Search</h3>
        </div>
        
        <div className="flex gap-2">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Ask for products, margins, trends..."
              className="pl-10"
              onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
            />
          </div>
          <Button onClick={handleSearch} variant="hero">
            Search
          </Button>
        </div>
        
        <div className="flex gap-2">
          <label className="cursor-pointer">
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
            />
            <Button variant="outline" asChild>
              <span className="flex items-center gap-2">
                <Camera className="w-4 h-4" />
                Upload Image
              </span>
            </Button>
          </label>
          
          <Button variant="outline" className="flex items-center gap-2">
            <Mic className="w-4 h-4" />
            Voice Search
          </Button>
        </div>
        
        <div className="space-y-2">
          <p className="text-sm text-muted-foreground">Quick suggestions:</p>
          <div className="flex flex-wrap gap-2">
            {quickSuggestions.map((suggestion, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-smooth"
                onClick={() => setQuery(suggestion)}
              >
                {suggestion}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
};