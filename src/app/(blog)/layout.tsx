import { fetchCategories } from "@/shared/services/categories";
import { NotionDB } from "@/shared/types/notion";
import { Header } from "@/widgets/header";
import { Sidebar } from "@/widgets/sidebar";
import { Footer } from "@/widgets/footer";
import { ScrollToTopButton } from "@/widgets/scroll-to-top";

const Layout = async ({ children }: { children: React.ReactNode }) => {
  const categoryList: NotionDB[] = await fetchCategories();

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-1">
        {/* Sidebar */}
        <Sidebar categoryList={categoryList} />
        {/* Main content */}
        {children}
      </div>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default Layout;
