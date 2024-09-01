import { fetchCategories } from '@/shared/services/categories';
import { NotionDB } from '@/shared/types/notion';
import { Header } from '@/widgets/header';
import { Sidebar } from '@/widgets/sidebar';
import { Footer } from '@/widgets/footer';

const Layout = async ({ children }: { children: React.ReactNode }) => {
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

export default Layout

const LeftBox = ({ children }: { children: React.ReactNode }) => {
  return (
    <aside className="hidden lg:block w-full lg:w-1/5 ml-12">
      {children}
    </aside>
  );
};
const RightBox = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex-1 p-4 pt-0 lg:pl-0 w-[70%]">
      {children}
    </div>
  );
};
const MainBox = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="p-4 mb-4 h-[90%] flex-1 max-w-full">
      {children}
    </main>
  );
};
