import * as React from "react";
import { cn } from "../../lib/utils.js";

const TabsContext = React.createContext({
  value: "",
  onValueChange: () => {},
});

function Tabs({ value, onValueChange, defaultValue, className, children, ...props }) {
  const [currentValue, setCurrentValue] = React.useState(value || defaultValue || "");

  const handleValueChange = (val) => {
    setCurrentValue(val);
    if (onValueChange) onValueChange(val);
  };

  React.useEffect(() => {
    if (value !== undefined) setCurrentValue(value);
  }, [value]);

  return (
    <TabsContext.Provider value={{ value: currentValue, onValueChange: handleValueChange }}>
      <div className={cn("w-full", className)} {...props}>
        {children}
      </div>
    </TabsContext.Provider>
  );
}

function TabsList({ className, ...props }) {
  return (
    <div
      className={cn(
        "inline-flex items-center justify-center rounded-xl bg-amber-100/60 p-1 text-stone-600 border border-amber-200/50",
        className
      )}
      {...props}
    />
  );
}

function TabsTrigger({ value, className, children, ...props }) {
  const { value: selectedValue, onValueChange } = React.useContext(TabsContext);
  const isSelected = selectedValue === value;

  return (
    <button
      type="button"
      onClick={() => onValueChange(value)}
      className={cn(
        "inline-flex items-center justify-center whitespace-nowrap rounded-lg px-3.5 py-1.5 text-xs font-semibold ring-offset-white transition-all focus-visible:outline-none cursor-pointer",
        isSelected
          ? "bg-white text-amber-950 shadow-xs font-bold"
          : "text-stone-600 hover:text-stone-900 hover:bg-white/50",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

function TabsContent({ value, className, children, ...props }) {
  const { value: selectedValue } = React.useContext(TabsContext);
  if (selectedValue !== value) return null;

  return (
    <div
      className={cn(
        "mt-3 ring-offset-white focus-visible:outline-none animate-fadeIn",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export { Tabs, TabsList, TabsTrigger, TabsContent };
