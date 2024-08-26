import React from 'react';
import Footer from './_components/Footer';
import { _Sheet } from './_components/_Sheet';
import { fetchCategories } from '@/services/categories';
import { NotionDB } from '@/shared/types/notion';
import { Header, NtHeader } from '@/widgets/header';
import { Sidebar } from '@/widgets/sidebar';
import { ScrollArea } from '@/shared/ui/scroll-area';
import { ScrollShadow } from '@nextui-org/react';

export default async function Layout({ children }: { children: React.ReactNode }) {
  const categoryList: NotionDB[] = await fetchCategories()

//   return (
//     <div className='relative flex h-full w-full overflow-hidden'>
//       {/* <Header /> */}
//       <Sidebar categoryList={categoryList} />
//       <NtHeader />
//       <main className='flex-1'>
//         <div className='boder-b'>
//           <div className='container flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10'>
//             {/* <main className="relative py-6 lg:gap-10 lg:py-8 xl:grid xl:grid-cols-[1fr_100px]"> 메인 옆 오른쪽 side 그리드 필요할 경우 이것 사용 */}
//             <main className='relative py-6 lg:gap-10 lg:py-8 xl:grid xl:grid-cols-[1fr]'>
//               <div className='flex flex-col flex-1' style={{ maxWidth: '1200px' }}>
//                 <div className='flex items-center top-14 z-30'>
//                   <div className='p-2 md:hidden cursor-pointer'>
//                     <_Sheet categoryList={categoryList} />
//                   </div>
//                 </div>
//                 <main className="flex-1 overflow-y-auto" title='Posts'>
//                   {children}
//                 </main>
//               </div>
//             </main>
//           </div>
//         </div>
//       </main>
//       <Footer />
//     </div>
//   );
// }

return (
  <div className="relative min-h-screen flex flex-col">
    {/* Wrapper/Container */}
    <div className="flex flex-1 flex-col md:flex-row">
      
      {/* Sidebar (왼쪽) */}
      <aside className="hidden lg:block w-full lg:w-1/5 ml-4">
          <Sidebar categoryList={categoryList} />
      </aside>

      {/* Main Content Area (오른쪽) */}
      <div className="flex-1 p-4 pt-0 lg:pl-0">
        {/* Header */}
        <NtHeader />
        
        {/* Main Content */}
        <main className="p-4 bg-white rounded-lg shadow-md flex-1" style={{ paddingBottom: '4rem' }}>
          {children}
        </main>
      </div>
    </div>

    {/* Footer */}
    <footer className="p-4 bg-gray-200 text-center">
      <p>© 2023 Your Company. All rights reserved.</p>
    </footer>
  </div>
);
}
