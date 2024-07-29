import { ProjectsPage } from '@/components/projects';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Aaron Portfolio',
  description: 'Projects Page',
};

export default function Page() {
  return (
    <main className="h-min-fit-screen mt-16">
      <ProjectsPage />
    </main>
  );
}
