import { Link } from 'react-router-dom';

export default function PageNotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-background">
      <div className="text-center max-w-md">
        <h1 className="text-7xl font-light text-muted-foreground">404</h1>
        <div className="h-0.5 w-16 bg-border mx-auto mt-4"></div>
        <h2 className="mt-6 text-2xl font-bold text-foreground">Sahifa topilmadi</h2>
        <p className="mt-2 text-muted-foreground">Kechirasiz, siz qidirgan sahifa mavjud emas yoki o‘chirilgan.</p>
        <Link
          to="/"
          className="mt-8 inline-flex items-center rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground hover:opacity-90 transition-opacity"
        >
          Bosh sahifaga qaytish
        </Link>
      </div>
    </div>
  );
}