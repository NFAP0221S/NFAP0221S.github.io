
// 노션에서 단일 제목 객체의 타입
export interface NotionTitle {
  plain_text: string;
}

// 노션에서 단일 multi_select 객체의 타입
export interface NotionMultiSelect {
  name: string;
}

// 노션에서 단일 rich_text 객체의 타입
export interface NotionRichText {
  plain_text: string;
}

// 데이터베이스 항목의 속성을 나타내는 타입
export interface NotionDBProperties {
  category: {
    title: NotionTitle[];
  };
  group: {
    multi_select: NotionMultiSelect[];
  };
  level: {
    rich_text: NotionRichText[];
  };
  render: {
    rich_text: NotionRichText[];
  };
}

// 데이터베이스의 단일 항목을 나타내는 타입
export interface NotionDB {
  subCategories: any;
  id: string;
  properties: NotionDBProperties;
}

// 노션 페이지 응답의 타입
export interface NotionPage {
  // 필요에 따라 페이지 응답에서 기대하는 특정 필드를 추가하세요
  [key: string]: any;
}

// 노션에서 단일 블록의 타입
export interface NotionBlock {
  // 필요에 따라 블록 응답에서 기대하는 특정 필드를 추가하세요
  [key: string]: any;
}

// 블록 자식 목록 쿼리의 결과 타입
export interface NotionBlockList {
  results: NotionBlock[];
  next_cursor: string | null;
}
