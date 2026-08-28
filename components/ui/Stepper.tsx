import { type LucideIcon } from "lucide-react";

interface Step {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface StepperProps {
  steps: Step[];
}

export function Stepper({ steps }: StepperProps) {
  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
      {steps.map((step, index) => (
        <div key={step.title} className="relative flex flex-col items-center text-center">
          {index < steps.length - 1 && (
            <div className="absolute left-[calc(50%+2rem)] top-8 hidden h-0.5 w-[calc(100%-4rem)] bg-accent/20 lg:block" />
          )}
          <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-accent text-white shadow-lg shadow-accent/30">
            <step.icon className="h-7 w-7" />
            <span className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full bg-accent-dark text-xs font-bold">
              {index + 1}
            </span>
          </div>
          <h3 className="mt-4 font-semibold text-accent-dark">{step.title}</h3>
          <p className="mt-2 text-sm text-text-muted">{step.description}</p>
        </div>
      ))}
    </div>
  );
}
