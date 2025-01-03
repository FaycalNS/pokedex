interface LoadingSpinnerProps {
  color?: string;
  size?: number;
}
export function LoadingSpinner({ color = "themeMainColor", size = 4 }: LoadingSpinnerProps) {
  return (
    <div
    data-testid="loading-spinner"
      className={`animate-spin rounded-full 
        h-${size} w-${size} 
        border-2 
        border-${color}
        border-t-transparent`}
    />
  );
}
