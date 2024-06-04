import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto flex justify-between items-center py-4">
        <div className="text-2xl font-bold">
          <Link href="/">VegDelights</Link>
        </div>
        <nav className="flex space-x-4">
          <Link href="/about" className="text-gray-600 hover:text-gray-900">About</Link>
          <Link href="/recipes" className="text-gray-600 hover:text-gray-900">Recipes</Link>
          <Link href="/order" className="text-gray-600 hover:text-gray-900">Order</Link>
          <Link href="/contact" className="text-gray-600 hover:text-gray-900">Contact</Link>
          <Link href="/auth/login" className="text-gray-600 hover:text-gray-900">Login</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
