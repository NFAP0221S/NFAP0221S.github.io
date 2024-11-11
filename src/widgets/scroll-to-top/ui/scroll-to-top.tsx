'use client'

import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { Button } from "@/shared/ui/button";

export const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // 스크롤 위치를 감지하는 함수
  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    // 스크롤 위치가 100px 이상일 때 버튼을 표시
    if (currentScrollPos > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // 컴포넌트가 마운트될 때 스크롤 이벤트 리스너 추가
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    
    // 컴포넌트가 언마운트될 때 이벤트 리스너 제거
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // isVisible이 true일 때만 버튼을 렌더링
  return (
    isVisible && (
      <Button className="fixed bottom-4 right-4" onClick={scrollToTop}>
        <ArrowUp className="h-4 w-4" />
      </Button>
    )
  );
};
