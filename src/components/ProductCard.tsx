import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  name: string;
  price: string;
  originalPrice?: string;
  image?: string;
  badge?: {
    text: string;
    variant?: "default" | "success" | "trending";
  };
  insights?: string[];
  onAddToCart: () => void;
  className?: string;
}

export const ProductCard = ({ 
  name, 
  price, 
  originalPrice, 
  image, 
  badge, 
  insights = [], 
  onAddToCart, 
  className 
}: ProductCardProps) => {
  return (
    <Card className={cn("p-4 shadow-card hover:shadow-glow transition-smooth", className)}>
      <div className="space-y-4">
        {image && (
          <div className="aspect-square rounded-lg bg-muted overflow-hidden">
            <img src={image} alt={name} className="w-full h-full object-cover" />
          </div>
        )}
        
        <div className="space-y-2">
          <div className="flex items-start justify-between gap-2">
            <h4 className="font-semibold text-foreground line-clamp-2">{name}</h4>
            {badge && (
              <Badge 
                variant={badge.variant === "success" ? "default" : "secondary"}
                className={cn(
                  badge.variant === "success" && "bg-accent text-accent-foreground",
                  badge.variant === "trending" && "bg-secondary text-secondary-foreground"
                )}
              >
                {badge.text}
              </Badge>
            )}
          </div>
          
          <div className="flex items-baseline gap-2">
            <span className="text-lg font-bold text-foreground">{price}</span>
            {originalPrice && (
              <span className="text-sm text-muted-foreground line-through">{originalPrice}</span>
            )}
          </div>
          
          {insights.length > 0 && (
            <div className="space-y-1">
              {insights.map((insight, index) => (
                <p key={index} className="text-xs text-muted-foreground flex items-center gap-1">
                  <span className="w-1 h-1 bg-accent rounded-full"></span>
                  {insight}
                </p>
              ))}
            </div>
          )}
        </div>
        
        <Button onClick={onAddToCart} variant="success" className="w-full">
          Add to Cart
        </Button>
      </div>
    </Card>
  );
};