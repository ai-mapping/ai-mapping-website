import Link from 'next/link';
import { siteConfig } from '@/config/site';

export default function NotFound() {
  return (
    <div className="container mx-auto px-4 md:px-6 lg:px-8 flex flex-col items-center justify-center min-h-[60vh] py-20">
      <div className="bg-surface rounded-lg shadow-lg p-8 border border-neutral-dark text-center max-w-xl w-full">
        <h1 className="text-4xl font-bold text-white mb-6">404</h1>
        <h2 className="text-2xl font-semibold text-primary mb-4">Page Not Found</h2>
        <p className="text-neutral mb-8">
          The page you are looking for doesn&apos;t exist or is currently under development.
        </p>
        <Link 
          href="/"
          className="bg-primary text-black font-bold px-6 py-3 rounded-lg hover:bg-primary-light hover:shadow-[0_0_20px_rgba(0,191,255,0.4)] transition-all duration-300 inline-block"
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
}