import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, TrendingUp, Target } from "lucide-react";

interface SmartRecommendationProps {
  currentProduct: {
    name: string;
    price: string;
  };
  recommendedProduct: {
    name: string;
    price: string;
    savings: string;
    benefits: string[];
  };
  onReplace: () => void;
  onKeep: () => void;
}

export const SmartRecommendation = ({ 
  currentProduct, 
  recommendedProduct, 
  onReplace, 
  onKeep 
}: SmartRecommendationProps) => {
  return (
    <Card className="p-6 border-l-4 border-l-accent shadow-success">
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Target className="w-5 h-5 text-accent" />
          <h3 className="font-semibold text-foreground">Smart Cart Optimization</h3>
          <Badge variant="default" className="bg-accent text-accent-foreground">
            AI Suggestion
          </Badge>
        </div>
        
        <div className="grid md:grid-cols-3 gap-4 items-center">
          <div className="text-center">
            <p className="text-sm text-muted-foreground">Current Choice</p>
            <p className="font-medium">{currentProduct.name}</p>
            <p className="text-lg font-bold">{currentProduct.price}</p>
          </div>
          
          <div className="flex justify-center">
            <ArrowRight className="w-6 h-6 text-primary" />
          </div>
          
          <div className="text-center">
            <p className="text-sm text-muted-foreground">Smarter Alternative</p>
            <p className="font-medium">{recommendedProduct.name}</p>
            <p className="text-lg font-bold text-accent">{recommendedProduct.price}</p>
          </div>
        </div>
        
        <div className="bg-accent/10 p-4 rounded-lg">
          <div className="flex items-center gap-2 mb-2">
            <TrendingUp className="w-4 h-4 text-accent" />
            <span className="font-medium text-accent">Projected Benefits:</span>
          </div>
          <ul className="space-y-1">
            {recommendedProduct.benefits.map((benefit, index) => (
              <li key={index} className="text-sm text-foreground flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                {benefit}
              </li>
            ))}
          </ul>
          <p className="text-sm font-medium text-accent mt-2">
            Total monthly savings: {recommendedProduct.savings}
          </p>
        </div>
        
        <div className="flex gap-3">
          <Button variant="success" onClick={onReplace} className="flex-1">
            Replace & Save {recommendedProduct.savings}
          </Button>
          <Button variant="outline" onClick={onKeep}>
            Keep My Choice
          </Button>
        </div>
      </div>
    </Card>
  );
};