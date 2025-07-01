
import { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
// import AIChatbot from '@/components/shared/AIChatbot';

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
      {/* <AIChatbot /> */}
    </div>
  );
};

export default MainLayout;
