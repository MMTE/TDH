import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentPath, setCurrentPath] = useState('/');

  useEffect(() => {
    // Get current path on client
    setCurrentPath(window.location.pathname);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'خانه' },
    { href: '/products', label: 'محصولات' },
    { href: '/solutions', label: 'راهکارها' },
    { href: '/about', label: 'درباره ما' },
    { href: '/faq', label: 'سوالات متداول' },
    { href: '/contact', label: 'تماس با ما' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-background/95 backdrop-blur-sm border-b border-border'
          : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-18">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <img
              src="/images/logo-transparent.png"
              alt="TDH"
              className="h-12 w-auto"
            />
            <span className="text-xl font-heading font-bold text-primary">
              تکین داده هوشمند
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={cn(
                  'text-sm font-medium transition-colors',
                  currentPath === link.href
                    ? 'text-primary'
                    : 'text-muted-foreground hover:text-primary'
                )}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right Side - CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <Button asChild variant="hero" size="sm">
              <a href="tel:02128428084">تماس با ما</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-primary"
            aria-label="منوی موبایل"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          'lg:hidden fixed inset-x-0 top-18 bg-background border-b border-border transition-all duration-200 overflow-hidden',
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        )}
      >
        <div className="container mx-auto px-6 py-6 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={cn(
                'block text-lg font-medium transition-colors py-2',
                currentPath === link.href
                  ? 'text-primary'
                  : 'text-muted-foreground'
              )}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ))}

          <div className="flex items-center gap-4 pt-4 border-t border-border">
            <Button asChild variant="hero" size="sm" className="flex-1">
              <a href="tel:02128428084">تماس با ما</a>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
