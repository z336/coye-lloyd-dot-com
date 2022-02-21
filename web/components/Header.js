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
            <Link href="/">
              <a className={router.pathname == '/' ? 'active' : ''}>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/bio">
              <a className={router.pathname == '/bio' ? 'active' : ''}>Bio</a>
            </Link>
          </li>
          <li>
            <Link href="/work">
              <a className={router.pathname == '/work' ? 'active' : ''}>Work</a>
            </Link>
          </li>
          <li>
            <Link href="/writing">
              <a className={router.pathname == '/writing' ? 'active' : ''}>
                Writing
              </a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a className={router.pathname == '/contact' ? 'active' : ''}>
                Contact
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
