import { EducationPage } from '@/components/education';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Aaron Portfolio',
  description: 'Education Page',
};

export default function Page() {
  return (
    <main className="h-min-fit-screen mt-16">
      <EducationPage />
    </main>
  );
}
