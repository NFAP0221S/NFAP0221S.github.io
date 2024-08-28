import { fetchCategories } from '@/services/categories';
import { NotionDB } from '@/shared/types/notion';
// import { Header } from '@/widgets/header';
// import { Sidebar } from '@/widgets/sidebar';
// import { Footer } from '@/widgets/footer';

import dynamic from 'next/dynamic';

const Header = dynamic(() => import('@/widgets/header').then((mod) => mod.Header));
const Sidebar = dynamic(() => import('@/widgets/sidebar').then((mod) => mod.Sidebar));
const Footer = dynamic(() => import('@/widgets/footer').then((mod) => mod.Footer));

export default async function Layout({ children }: { children: React.ReactNode }) {
  const categoryList: NotionDB[] = await fetchCategories()

  return (
    <div className="relative min-h-screen flex flex-col">
      <div className="flex flex-1 flex-col md:flex-row">

        <LeftBox>
          <Sidebar categoryList={categoryList} />
        </LeftBox>

        <RightBox>
          <Header categoryList={categoryList} />
          <MainBox children={children} />
          <Footer/>
        </RightBox>

      </div>
    </div>
  );
}

const LeftBox = ({ children }: { children: React.ReactNode }) => {
  return (
    <aside className="hidden lg:block w-full lg:w-1/5 ml-12">
      {children}
    </aside>
  );
};
const RightBox = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex-1 p-4 pt-0 lg:pl-0">
      {children}
    </div>
  );
};
const MainBox = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="p-4 mb-4 h-5/6 rounded-lg shadow-md flex-1">
      {children}
    </main>
  );
};
