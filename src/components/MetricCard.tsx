import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface MetricCardProps {
  title: string;
  value: string;
  subtitle?: string;
  trend?: "up" | "down" | "neutral";
  className?: string;
  icon?: React.ReactNode;
}

export const MetricCard = ({ title, value, subtitle, trend, className, icon }: MetricCardProps) => {
  return (
    <Card className={cn("p-6 shadow-card hover:shadow-glow transition-smooth", className)}>
      <div className="flex items-start justify-between">
        <div className="space-y-2">
          <p className="text-sm font-medium text-muted-foreground">{title}</p>
          <div className="flex items-baseline gap-2">
            <h3 className="text-2xl font-bold text-foreground">{value}</h3>
            {trend && (
              <span
                className={cn(
                  "text-xs font-medium px-2 py-1 rounded-full",
                  trend === "up" && "bg-accent/20 text-accent",
                  trend === "down" && "bg-destructive/20 text-destructive",
                  trend === "neutral" && "bg-muted text-muted-foreground"
                )}
              >
                {trend === "up" && "↗"}
                {trend === "down" && "↘"}
                {trend === "neutral" && "→"}
              </span>
            )}
          </div>
          {subtitle && <p className="text-sm text-muted-foreground">{subtitle}</p>}
        </div>
        {icon && <div className="text-primary opacity-80">{icon}</div>}
      </div>
    </Card>
  );
};