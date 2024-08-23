import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";

interface SubTitle {
  id: string;
  title: string;
}

interface MainTitle {
  id: string;
  title: string;
  subTitles: SubTitle[];
}

interface AccordionUIProps {
  items: MainTitle[];
}

export default function AccordionUI({ items }: AccordionUIProps) {
  // 모든 아코디언이 초기화 시 열리도록 모든 키를 배열로 전달
  const defaultExpandedKeys = items.map((item) => item.id);

  return (
    <Accordion selectionMode="multiple" defaultExpandedKeys={defaultExpandedKeys}>
      {items.map((mainItem) => (
        <AccordionItem key={mainItem.id} aria-label={mainItem.title} title={mainItem.title}>
          <div className="pl-4">
            {mainItem.subTitles.map((subItem) => (
              <div key={subItem.id} className="pb-2">
                {subItem.title}
              </div>
            ))}
          </div>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
