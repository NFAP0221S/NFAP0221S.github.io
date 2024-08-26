import React from 'react';
import Footer from './_components/Footer';
import { _Sheet } from './_components/_Sheet';
import { fetchCategories } from '@/services/categories';
import { NotionDB } from '@/shared/types/notion';
import { Header } from '@/widgets/header';
import { Sidebar } from '@/widgets/sidebar';
import { ScrollArea } from '@/shared/ui/scroll-area';
import { ScrollShadow } from '@nextui-org/react';
import Home from './page';
import { MainPage } from '@/pages/main-page';

export default async function Layout({ children }: { children: React.ReactNode }) {
  const categoryList: NotionDB[] = await fetchCategories()

  return (
    <div className="relative min-h-screen flex flex-col">

      {/* 사이드바, 메인(해더, 콘텐츠) */}
      <div className="flex flex-1 flex-col md:flex-row">
        <SidebarWrapper>
          <Sidebar categoryList={categoryList} />
        </SidebarWrapper>

        <MainWrapper>
          <Header />
          <MainPage />
        </MainWrapper>
      </div>

      {/* Footer */}
      <FooterWrapper>
        <p>© 리모델링 중...</p>
      </FooterWrapper>
    </div>
  );
}

const SidebarWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <aside className="hidden lg:block w-full lg:w-1/5 ml-4">
      {children}
    </aside>
  );
};
const MainWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex-1 p-4 pt-0 lg:pl-0">
      {children}
    </div>
  );
};
const FooterWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <footer className="p-4 bg-gray-200 text-center">
      {children}
    </footer>
  );
};
