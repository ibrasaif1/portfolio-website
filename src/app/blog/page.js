import "../globals.css";

export default function Blog() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-brand-light text-brand-dark px-6">
      <div className="w-full max-w-md space-y-6">
        <div className="space-y-1">
          <h1 className="text-2xl font-semibold tracking-tight">Blog</h1>
          <p className="text-brand-dark/60">Coming soon</p>
        </div>
        <a
          href="/"
          className="text-sm text-brand-dark/50 underline-offset-4 hover:text-brand-dark hover:underline transition-colors"
        >
          ← Back
        </a>
      </div>
    </main>
  );
}
