/* ─────────────────────────────────────────────────────────────
   SOY KIM — 프로젝트별 '전문 정보' (v24)
   projects.js의 기본 정보(제목·설명·단계·링크)에 덧붙이는 내용입니다.
   id 별로: 연도, 기간/맥락, 도구, 핵심 숫자, 인사이트(한 줄 배움), 갤러리 라벨
   → 문장을 고치고 싶으면 이 파일만 열어서 수정하면 됩니다.
   ───────────────────────────────────────────────────────────── */
window.SOY_PRO = {
  fashion:{
    context:'드라마 의상팀 → 스타일리스트 팀(프리랜서)',
    tools:['시안 작업','컨셉 설정','비주얼 무드 제시','의상 픽업 · 사입','착장 피팅','현장 팔로우'],
    stats:[['07','매거진 시리즈'],['05','드라마'],['01','브랜드 캠페인'],['77','아카이브 컷']],
    statement:'옷을 고르는 일이 아니라, 한 프레임 안에서 무엇이 먼저 읽힐지를 설계하는 일.',
    media:['VOGUE','Harper’s BAZAAR','Singles','BoldPage','MEN Noblesse','Olive Young Magazine','NETFLIX','ENA','MBC','tvN'],
    insight:'현장에서 배운 건 옷이 아니라 "한 프레임 안에서 무엇이 먼저 읽히는가"였습니다. 그 감각이 이후 모든 비주얼 기획의 출발점이 됐습니다.',
    hero:'assets/projects/styling/credits_hero.jpg',
    heroAlt:'Selected Credits — 레퍼런스 월',
    /* 내가 하는 일 — 6단계. 단계마다 대표 컷 1장 */
    process:[
      {no:'01',title:'시안 작업',en:'Reference',desc:'촬영 의도와 인물에 맞춰 룩 레퍼런스를 모으고 컷별 시안을 정리합니다.',img:'assets/projects/styling/process/step_01.jpg'},
      {no:'02',title:'컨셉 설정',en:'Concept',desc:'매체의 톤과 인물의 캐릭터가 만나는 지점을 한 문장으로 잡습니다.',img:'assets/projects/styling/process/step_02.jpg'},
      {no:'03',title:'비주얼 무드 제시',en:'Mood',desc:'컬러 · 소재 · 실루엣의 방향을 무드보드로 제안하고 팀과 합의합니다.',img:'assets/projects/styling/process/step_03.jpg'},
      {no:'04',title:'의상 픽업 · 사입',en:'Sourcing',desc:'쇼룸 · 브랜드 · 빈티지에서 의상을 픽업하고 필요한 아이템을 사입합니다.',img:'assets/projects/styling/process/step_04.jpg'},
      {no:'05',title:'착장 피팅',en:'Fitting',desc:'인물에게 직접 입혀 보며 기장 · 핏 · 레이어드를 컷 단위로 맞춥니다.',img:'assets/projects/styling/process/step_05.jpg'},
      {no:'06',title:'현장 팔로우',en:'On set',desc:'촬영 현장에서 컷마다 룩을 관리하고 즉석에서 조정합니다.',img:'assets/projects/styling/process/step_06.jpg'}
    ],
    cta:{label:'Selected Credits 전체 보기',url:'credits.html'}
  },
  pudding:{
    context:'오리지널 캐릭터 IP · 개인 기획',
    tools:['Midjourney','3D 클레이 룩','캐릭터 시트','Notion 세계관 문서'],
    stats:[['05','캐릭터'],['01','디저트 왕국 세계관'],['3D','클레이 질감 기준']],
    insight:'캐릭터는 생김새보다 "성격이 만든 소품"으로 기억됩니다. 다섯 캐릭터마다 토핑·소지품·말버릇을 먼저 정하고, 형태는 그 다음이었습니다.'
  },
  wizard:{
    deck:{dir:'assets/decks/wizard',count:18},
    context:'React 웹 · 비공식 팬 프로젝트',
    tools:['React','HashRouter','JSON 상품 데이터','GitHub Pages','Midjourney'],
    stats:[['39','상품'],['05','컬렉션'],['04','상품 상세 탭']],
    insight:'"효과와 대가"라는 원작의 규칙을 쇼핑몰 UX(진열대 · 상세 · 관심 목록)로 옮기니 세계관이 설명 없이도 전달됐습니다.'
  },
  gyeong:{
    deck:{dir:'assets/decks/gyeong',count:28},
    context:'동아일보 미디어 프론티어 부트캠프 · 3인 팀 프로젝트',
    tools:['HTML / CSS / JS','사료 리서치','신문 타이포그래피','지도 · 라디오 인터랙션'],
    stats:[['1930','년대 지면 재현'],['03','인 팀'],['04','탐색 모드']],
    insight:'역사 콘텐츠의 신뢰는 "어디까지가 사료이고 어디부터가 재현인지"를 화면에서 구분해 주는 데서 나옵니다.'
  },
  memory:{
    deck:{dir:'assets/decks/memory',count:23},
    context:'AI 서비스 기획 · 데모 구현',
    tools:['n8n','OpenAI API','Supabase','Lovable'],
    stats:[['03','기억 등급 (확실 · 불확실 · 미확인)'],['02','생성 가드 (Image Guard · Prompt Lock)'],['Private','스토리지 + Signed URL']],
    insight:'AI 서비스에서 가장 어려운 설계는 "하지 않게 만드는 것"이었습니다. 없는 기억을 지어내지 않도록 파이프라인 단계마다 잠금을 두었습니다.'
  },
  stones:{
    deck:{dir:'assets/decks/stones',count:21},
    context:'데이터 분석 개인 프로젝트 · 앱 콘셉트',
    tools:['NASA 운석 데이터','Python 데이터 분석','캐릭터 기획','PPT → 앱 콘셉트'],
    stats:[['45,716','개 표본 데이터'],['01','입양소 세계관'],['3D','지구본 → 캐릭터 앱']],
    insight:'데이터는 "운석이 어디에 떨어졌나"가 아니라 "사람이 어디를 찾아봤나"를 말하고 있었습니다. 편향을 발견한 순간 분석이 이야기가 됐습니다.'
  },
  vinyl:{
    deck:{dir:'assets/decks/vinyl',count:28},
    context:'음악 데이터 인터랙션 · 프론트엔드 리디자인',
    tools:['음악 차트 데이터','HTML / CSS / JS','Claude Code','인터랙션 설계'],
    stats:[['LP','슬리브 · 바늘 인터랙션'],['03','모듈 (디깅 · 매칭 · 청취 여권)']],
    insight:'숫자를 보여주는 대신 "레코드를 고르는 손"을 설계했습니다. 데이터 프로젝트도 촉각이 있으면 기억에 남습니다.'
  },
  simmyo:{
    deck:{dir:'assets/decks/simmyo',count:23},
    context:'경성야록 스핀오프 · 캐릭터 기획',
    tools:['캐릭터 설정','1930년대 경성 리서치','웹 구현','장면 에셋 제작'],
    stats:[['01','고양이 심묘'],['1930','년대 경성'],['06','장면 에셋']],
    insight:'"그림에서 확인 가능한 것만 설정으로 남긴다"는 원칙이 캐릭터를 과장 없이 오래 가게 했습니다.',
    galleryLabel:'심묘 포즈 · 장면 에셋'
  },
  music:{
    deck:{dir:'assets/decks/music',count:20},
    context:'AI 음악 컨텍스트 엔진 · MVP 배포',
    tools:['n8n','AI API','Netlify','음악 아카이브 큐레이션'],
    stats:[['01','곡 → 역사 · 가사 · 영상 · 장비'],['MVP','웹 배포']],
    insight:'한 곡을 검색하면 그 곡의 시대 · 가사 · 라이브 · 장비까지 펼쳐지는 구조. 음악을 "듣는 데이터"가 아니라 "맥락"으로 다루고 싶었습니다.'
  },
  research:{
    context:'열린 아카이브 · 진행 중',
    tools:['Midjourney','프롬프트 실험','UI 프로토타이핑','데이터 분석'],
    stats:[['04','실험 노트 표지'],['∞','진행 중']],
    insight:'작동하는 결과물과 배운 것을 분리해 기록하면, 실패한 실험도 포트폴리오가 됩니다.',
    galleryLabel:'실험 노트 표지 시리즈'
  }
};

/* 소개 섹션 (연도 표기 없음 — 사용자 요청) */
window.SOY_ABOUT = {
  tagline:'스타일링 현장에서 출발해, 이미지와 인터랙티브 콘텐츠를 기획합니다.',
  mission:'드라마 · 매거진 · 무대 현장에서 "한 프레임 안에서 무엇이 먼저 읽히는가"를 익혔습니다. 지금은 그 감각을 캐릭터 IP, 역사 콘텐츠, AI 서비스 기획으로 옮기고 있습니다. 예쁜 것을 만드는 데서 멈추지 않고, 왜 그렇게 보여야 하는지까지 설계하는 사람이고 싶습니다.',
  focus:['비주얼 디렉션 · 스타일링','캐릭터 · 세계관 기획','인터랙티브 웹 콘텐츠','AI 자동화 · 데이터 기반 기획'],
  experience:[
    ['AI 교육 · 부트캠프','AI 활용 실무 교육 · 동아일보 미디어 프론티어 부트캠프','AI 서비스 기획, 데이터 분석, 웹 프로토타이핑 프로젝트 10건'],
    ['무대','스타일리스트 팀 · 아이돌 무대','&TEAM 음악방송 무대 · 라이브 클립 의상 준비, 컨셉 기획 참여'],
    ['스타일리스트','스타일리스트 팀 (프리랜서)','ENA 〈얼어죽을 연애따위〉 의상팀, 광고 · 매거진 커버 · 브랜드 캠페인, 남성 배우 현장 팔로우'],
    ['드라마','드라마 의상팀','넷플릭스 〈연애대전〉 의상팀'],
    ['브랜드 · VMD','도호 (여성복) · 매장 관리자 → VMD','오프라인 부진 시기 온라인 전환을 맡아 상품 촬영 · 업로드 · 운영, 매출 상승']
  ],
  education:[['패션디자인 전공 (2년제) 졸업','졸업 패션쇼 · 졸업 논문 발표']],
  tools:['Midjourney','n8n','Supabase','OpenAI API','Lovable','Claude Code','HTML / CSS / JS','React','Python (데이터 분석)','Notion'],
  contact:[{label:'GitHub',url:'https://github.com/ejdms499-wq'},{label:'ejdms499@naver.com',url:'mailto:ejdms499@naver.com'}]
};
