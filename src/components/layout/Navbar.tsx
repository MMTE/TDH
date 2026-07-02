import { useState, useEffect } from 'react';

interface NavbarProps {
  activePath?: string;
}

const navLinks = [
  { href: '/products', label: 'محصولات' },
  { href: '/solutions', label: 'راهکارها' },
  { href: '/about', label: 'درباره ما' },
  { href: '/contact', label: 'تماس' },
];

export function Navbar({ activePath }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState(activePath || '/');

  useEffect(() => {
    setCurrentPath(window.location.pathname);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  return (
    <>
      <nav
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 10,
          background: 'var(--color-bg)',
          borderBottom: '1px solid var(--color-line)',
        }}
      >
        <div
          className="mx-auto flex items-center justify-between"
          style={{ maxWidth: 1000, padding: '16px 24px' }}
        >
          <a href="/" className="flex items-center gap-2" dir="rtl">
            <div
              style={{
                width: 32,
                height: 32,
                background: 'var(--color-accent)',
                display: 'grid',
                placeItems: 'center',
                flexShrink: 0,
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontWeight: 900,
                  fontSize: 14,
                  color: 'var(--color-bg)',
                  lineHeight: 1,
                  paddingTop: 2,
                  letterSpacing: '-0.02em',
                }}
              >
                TDH
              </span>
            </div>
            <span style={{ fontSize: 14, fontWeight: 600, color: 'var(--color-fg)' }}>
              تکین داده هوشمند
            </span>
          </a>

          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => {
              const isActive = currentPath === link.href;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  style={{
                    fontSize: 14,
                    fontWeight: isActive ? 600 : 400,
                    color: isActive ? 'var(--color-fg)' : 'var(--color-fg-muted)',
                    textDecoration: 'none',
                    transition: 'color 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) e.currentTarget.style.color = 'var(--color-fg)';
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) e.currentTarget.style.color = 'var(--color-fg-muted)';
                  }}
                >
                  {link.label}
                </a>
              );
            })}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <a
              href="/contact"
              style={{
                background: 'var(--color-accent)',
                color: 'var(--color-bg)',
                fontWeight: 600,
                fontSize: 14,
                padding: '8px 16px',
                textDecoration: 'none',
                borderRadius: 4,
              }}
            >
              شروع گفت‌وگو
            </a>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden"
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--color-fg)',
              cursor: 'pointer',
              padding: 8,
            }}
            aria-label="منوی موبایل"
          >
            {isOpen ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="4" y1="8" x2="20" y2="8" />
                <line x1="4" y1="16" x2="20" y2="16" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {isOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            top: 0,
            zIndex: 20,
            background: 'var(--color-bg)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 24,
            direction: 'rtl',
          }}
        >
          <button
            onClick={() => setIsOpen(false)}
            style={{
              position: 'absolute',
              top: 16,
              insetInlineEnd: 16,
              background: 'none',
              border: 'none',
              color: 'var(--color-fg)',
              cursor: 'pointer',
              padding: 8,
            }}
            aria-label="بستن منو"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          {navLinks.map((link) => {
            const isActive = currentPath === link.href;
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                style={{
                  fontSize: 18,
                  fontWeight: isActive ? 600 : 400,
                  color: isActive ? 'var(--color-fg)' : 'var(--color-fg-muted)',
                  textDecoration: 'none',
                }}
              >
                {link.label}
              </a>
            );
          })}

          <a
            href="/contact"
            onClick={() => setIsOpen(false)}
            style={{
              background: 'var(--color-accent)',
              color: 'var(--color-bg)',
              fontWeight: 600,
              fontSize: 14,
              padding: '10px 20px',
              textDecoration: 'none',
              borderRadius: 4,
              marginTop: 8,
            }}
          >
            شروع گفت‌وگو
          </a>
        </div>
      )}
    </>
  );
}
