import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const plans = [
  {
    name: "Basic",
    price: "$10/month",
    features: ["Feature 1", "Feature 2", "Feature 3"],
  },
  {
    name: "Standard",
    price: "$20/month",
    features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4"],
  },
  {
    name: "Premium",
    price: "$30/month",
    features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4", "Feature 5"],
  },
];

const ProductPlans = () => {
  return (
    <div className="container mx-auto p-4">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold">Our Product Plans</h1>
        <p className="text-lg text-muted-foreground">Choose the plan that fits your needs</p>
      </header>
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {plans.map((plan) => (
          <Card key={plan.name} className="mx-auto w-full max-w-sm">
            <CardHeader>
              <CardTitle>{plan.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">{plan.price}</p>
              <ul className="list-disc list-inside mt-4">
                {plan.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="primary" className="w-full">Select Plan</Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Plan selected: {plan.name}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </CardFooter>
          </Card>
        ))}
      </section>
      <footer className="text-center mt-8">
        <p className="text-lg">Need help? <a href="/support" className="text-primary">Contact Support</a></p>
      </footer>
    </div>
  );
};

export default ProductPlans;