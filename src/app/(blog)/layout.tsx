import '@/app/globals.css';
import React from 'react';
import Header from './_components/Header';
import Sidebar from './_components/sidebar/Sidebar';
import Footer from './_components/Footer';
import { _Sheet } from './_components/_Sheet';
import { fetchCategories } from '@/services/categories';
import { NotionDB } from '@/shared/types/notion';

export default async function Layout({ children }: { children: React.ReactNode }) {
  const categoryList: NotionDB[] = await fetchCategories()

  return (
    <div className='relative flex min-h-screen flex-col'>
      <Header />
      <main className='flex-1'>
        <div className='boder-b'>
          <div className='container flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10'>
            <Sidebar categoryList={categoryList} />
            {/* <main className="relative py-6 lg:gap-10 lg:py-8 xl:grid xl:grid-cols-[1fr_100px]"> 메인 옆 오른쪽 side 그리드 필요할 경우 이것 사용 */}
            <main className='relative py-6 lg:gap-10 lg:py-8 xl:grid xl:grid-cols-[1fr]'>
              <div className='flex flex-col flex-1' style={{ maxWidth: '1200px' }}>
                <div className='flex items-center top-14 z-30'>
                  <div className='p-2 md:hidden cursor-pointer'>
                    <_Sheet categoryList={categoryList} />
                  </div>
                </div>
                <main className="flex-1 overflow-y-auto" title='Posts'>
                  {children}
                </main>
              </div>
            </main>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
