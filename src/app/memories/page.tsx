import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Memories from '@/components/Memories';

export const metadata: Metadata = {
  title: 'Memories & Milestones — Puli Bharat',
  description: 'Hackathons, Mentorships, Global Programs & Community Moments of Puli Bharat',
};

export default function MemoriesPage() {
  return (
    <div className="min-h-screen selection:bg-accent selection:text-white overflow-x-hidden pt-28 sm:pt-36 pb-20">
      <Header />
      <main className="section-padding">
        <Memories />
      </main>
      <Footer />
    </div>
  );
}
