import { cn } from "@/lib/utils";

const Loader = ({ className, text }: { className?: string, text?: string }) => {
  return (
    <div className={cn("flex flex-col items-center justify-center gap-4 py-10", className)}>
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-tr from-primary to-primary/50 animate-spin">
        <div className="h-9 w-9 rounded-full bg-background"></div>
      </div>
      {text && <p className="text-muted-foreground">{text}</p>}
    </div>
  );
};

export default Loader; 