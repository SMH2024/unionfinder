import { clsx } from 'clsx'

export function Gradient({ className, ...props }) {
  return (
    <div
      {...props}
      className={clsx(
        className,
        // Smoother horizontal gradient for dynamic feel
        'bg-[linear-gradient(90deg,var(--tw-gradient-stops))] from-[#1e3a8a] via-[#3b82f6] to-[#60a5fa] sm:bg-[linear-gradient(120deg,var(--tw-gradient-stops))]'
      )}
    />
  )
}

export function GradientBackground() {
  return (
    <div className="relative mx-auto max-w-7xl">
      <div
        className={clsx(
          'absolute -right-60 -top-44 h-60 w-[36rem] transform-gpu md:right-0',
          // Radial gradient for focus and modern aesthetic
          'bg-[radial-gradient(circle,var(--tw-gradient-stops))] from-[#00174d] via-[#005d99] to-[#80d4ff]',
          'rounded-full blur-3xl'
        )}
      />
    </div>
  )
}
