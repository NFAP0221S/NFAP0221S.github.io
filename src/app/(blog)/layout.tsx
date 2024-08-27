import { fetchCategories } from '@/services/categories';
import { NotionDB } from '@/shared/types/notion';
import { Header } from '@/widgets/header';
import { Sidebar } from '@/widgets/sidebar';
import { MainPage } from '@/pages/main-page';
import { Footer } from '@/widgets/footer';

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
          <Header categoryList={categoryList} />
          {/* <MainPage /> */}
          <main className="p-4 mb-4 h-5/6 rounded-lg shadow-md flex-1">
            {children}
          </main>
          {/* Footer */}
          <FooterWrapper>
            <Footer/>
          </FooterWrapper>
        </MainWrapper>
      </div>

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
    <footer className="p-4 text-center">
      {children}
    </footer>
  );
};
