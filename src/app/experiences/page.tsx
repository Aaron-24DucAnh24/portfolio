import { ExperiencePage } from '@/components/experiences';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Aaron Portfolio',
  description: 'Project Page',
};

export default function Page() {
  return (
    <main className="h-min-fit-screen mt-16">
      <ExperiencePage />
    </main>
  );
}
