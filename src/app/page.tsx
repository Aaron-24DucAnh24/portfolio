import { HomePage } from '@/components/home';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Aaron Portfolio',
  description: 'Home Page',
};

export default function Home() {
  return (
    <main className="h-fit-screen mt-16">
      <HomePage />
    </main>
  );
}
