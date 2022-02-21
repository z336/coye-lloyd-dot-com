import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  const router = useRouter();
  return (
    <header className="grid | navigation | border-bottom">
      <div className="brand | no-focus">
        <Link href="/" tabIndex={-1}>
          <a aria-label="Coye lloyd" tabIndex={-1}>
            <Image
              src="/images/coyelloyd.svg"
              alt="The Coye Lloyd logo"
              height={26}
              width={255}
              priority="true"
            />
          </a>
        </Link>
      </div>
      <nav>
        <ul className="flex | primary-navigation">
          <li>
            <Link href="/" className={router.pathname == '/' ? 'active' : ''}>
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link
              href="/bio"
              className={router.pathname == '/bio' ? 'active' : ''}
            >
              <a>Bio</a>
            </Link>
          </li>
          <li>
            <Link
              href="/work"
              className={router.pathname == '/work' ? 'active' : ''}
            >
              <a>Work</a>
            </Link>
          </li>
          <li>
            <Link
              href="/writing"
              className={router.pathname == '/writing' ? 'active' : ''}
            >
              <a>Writing</a>
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className={router.pathname == '/contact' ? 'active' : ''}
            >
              <a>Contact</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
