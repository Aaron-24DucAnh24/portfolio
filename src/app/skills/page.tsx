import { SkillsPage } from '@/components/skills';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Aaron Portfolio',
  description: 'Skills Page',
};

export default function Page() {
  return (
    <main className="h-min-fit-screen mt-16">
      <SkillsPage />
    </main>
  );
}
