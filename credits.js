/* SOY KIM — Selected Credits 전용 페이지
   이미지 목록은 projects.js(SOY_PROJECTS의 fashion 항목)를 그대로 읽어옵니다.
   여기에는 각 시리즈의 설명(룩 노트)과 화면 구성만 있습니다. */
(function(){
 const enc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 const SIZES=window.SOY_IMAGE_SIZES||{};
 const ratio=src=>{const s=SIZES[src];return s?`${s[0]} / ${s[1]}`:'4 / 5';};
 const arNum=src=>{const s=SIZES[src];return s?(s[0]/s[1]).toFixed(4):'0.8';};
 const isLandscape=src=>{const s=SIZES[src];return s?s[0]>s[1]:false;};
 const fashion=(window.SOY_PROJECTS||[]).find(p=>p.id==='fashion')||{credits:[],galleryGroups:[]};

 /* ── 시리즈별 설명. key는 projects.js의 title과 동일 ── */
 const NOTES={
  "강유석 · BoldPage":{
   kind:'COVER STORY',
   headline:'소년의 장난기와 테일러링의 긴장',
   note:'크레용으로 쓴 로고, 미니어처 하우스와 젤리 소품 — 유희적인 세트 위에 블루 스트라이프 셔츠와 데님으로 소년성을 먼저 깔고, 흑백 컷의 레더 재킷과 보더 니트를 지나, 마지막 전신 컷에서 오버사이즈 블랙 수트에 테라코타 셔츠와 블랙 타이로 톤이 올라갑니다. 한 권 안에서 "가벼움 → 클래식"으로 이동하는 룩의 리듬이 이 커버 스토리의 핵심입니다.',
   behind:'현장 프린트 벽과 구두 라인업 — 컷 순서를 맞추고 룩마다 신발을 매치하던 준비 과정의 기록입니다.',
   lead:0
  },
  "구교환 · VOGUE":{
   kind:'ENSEMBLE EDITORIAL',
   headline:'올블랙 앙상블, 실루엣으로 구분하는 개인',
   note:'〈군체〉 출연진 단체 화보. 전원 블랙으로 톤을 묶되 레더·울·새틴처럼 질감과 기장을 달리해 한 프레임 안에서 각 인물의 실루엣이 따로 읽히는 구성입니다. 딥 그린 조명 컷에서는 광택 소재가 빛을 받는 방식이 곧 캐릭터의 온도가 됩니다.',
   lead:0
  },
  "차준환 · Singles":{
   kind:'MAGAZINE EDITORIAL',
   headline:'블랙 → 화이트 → 블루, 열한 컷의 온도 변화',
   note:'스튜디오의 블랙 수트에서 시작해 화이트 셔츠·팬츠의 깨끗한 중반부를 지나, 야외 자연광 아래 블루 스트라이프와 체크 셔츠로 풀어지는 구성입니다. 피겨 선수의 몸이 가진 선을 살리는 방향 — 어깨를 흘린 재킷, 바닥에 닿는 기장의 팬츠로 길이가 강조된 룩들입니다.',
   lead:0
  },
  "신승호 · Harper’s BAZAAR":{
   kind:'MONOCHROME EDITORIAL',
   headline:'흑백 안에서 질감으로 말하기',
   note:'단체 컷의 긴 드레이프와 레더, 솔로 컷의 블랙 티셔츠와 와이드 팬츠. 컬러가 없을 때 스타일링은 광택·주름·기장의 대비로 남습니다. 가장 단순한 룩이 가장 앞에 서는 화보입니다.',
   lead:0
  },
  "하정우 · VOGUE":{
   kind:'CINEMATIC EDITORIAL',
   headline:'영화의 한 장면처럼 — 화이트 수트와 서사적 소품',
   note:'계단, 여권, 마주 앉은 인물. 화보 자체가 짧은 영화처럼 구성된 작업입니다. 화이트 수트에 블랙 타이, 스트라이프 셔츠에 서스펜더처럼 클래식한 남성복 어휘를 쓰되, 흑백 톤 안에서 명암이 강하게 떨어지는 소재들로 짜인 룩입니다.',
   lead:0
  },
  "올리브영 매거진 · 3 Men’s Style in Spring":{
   kind:'BRAND MAGAZINE EDITORIAL',
   headline:'흰 배경 위의 세 가지 봄 — 컬러 포인트로 나누는 남성복',
   note:'올리브영 매거진의 봄 남성 스타일 화보. 순백 배경에 레드·블루·스트라이프 니트처럼 한 룩에 포인트 컬러를 하나씩만 두고, 소품(화분·복싱 글러브·러닝 박스)으로 세 가지 라이프스타일을 구분하는 구성입니다. 가볍고 경쾌한 톤이 핵심입니다.',
   lead:0
  },
  "하정우 · 맨 노블레스 × 랄프 로렌 퍼플 라벨":{
   kind:'COVER STORY · RALPH LAUREN PURPLE LABEL',
   headline:'헤리티지 인테리어 속 테일러링의 밀도',
   note:'타탄 체크 재킷과 벨벳 팬츠, 네이비 수트, 카멜 톤의 더블 재킷 — 퍼플 라벨의 컬렉션을 클래식한 서재와 호텔 공간 안에서 보여주는 커버 스토리입니다. 공간의 색(마호가니·골드·버건디)과 옷의 색이 서로를 밀어내지 않도록 룩마다 배경과의 대비가 다르게 잡혀 있습니다.',
   lead:0
  }
 };
 const CAMPAIGN_NOTE={
  kind:'BROOKS BROTHERS × Harper’s BAZAAR',
  headline:'프레피 코드를 배우의 온도로 다시 쓰기',
  note:'레드·그린 컬러 블록 세트 안에서 케이블 니트, BB 로고 스웨터, 네이비 블레이저와 버뮤다 쇼츠처럼 브랜드의 가장 고전적인 아이템을 꺼내 구교환 특유의 느슨하고 장난스러운 무드로 재조합한 캠페인입니다. 브랜드의 정체성은 지키면서 인물이 옷을 입은 "사람"으로 보이게 하는 것이 이 작업의 방향이었습니다.',
  lead:0
 };
 const DRAMA_META={
  '연애대전':{channel:'NETFLIX',role:'의상팀'},
  '얼어죽을 연애따위':{channel:'ENA',role:'의상팀'},
  '넘버스':{channel:'MBC',role:'배우 담당 참여'},
  '연예인 매니저로 살아남기':{channel:'tvN',role:'배우 담당 참여'},
  '아이돌아이':{channel:'ENA · 지니TV',role:'배우 담당 참여'}
 };

 /* ── 이미지 블록 ── */
 const thumb=(src,alt,caption,group,i)=>`<button type="button" class="cr-thumb" data-src="${enc(src)}" data-alt="${enc(alt)}" data-caption="${enc(caption)}" data-group="${enc(group)}" data-index="${i}" style="aspect-ratio:${ratio(src)};--ar:${arNum(src)}" aria-label="${enc(alt)} 확대"><img src="${enc(src)}" alt="${enc(alt)}" loading="lazy" decoding="async"></button>`;

 function seriesBlock(group,idx,meta,extra='',no=null){
  const imgs=group.images||[];
  const leadIdx=Math.min(meta.lead??0,imgs.length-1);
  const lead=imgs[leadIdx];
  const rest=imgs.filter((_,i)=>i!==leadIdx);
  const gid='series-'+idx;
  const cap=i=>`${group.title} · ${i+1} / ${imgs.length}`;
  const leadWide=isLandscape(lead);
  return `<article class="cr-series" id="${enc(gid)}">
   <div class="cr-series-head">
    <div class="cr-series-meta"><span class="cr-series-no">${String((no??idx)+1).padStart(2,'0')}</span><span class="cr-series-pub">${enc(group.publication||'')}</span>${meta.year?`<span class="cr-series-year">${enc(meta.year)}</span>`:''}</div>
    <h3 class="cr-series-title">${enc(group.title)}</h3>
    <p class="cr-series-kind">${enc(meta.kind||group.subtitle||'')}</p>
   </div>
   <div class="cr-series-body">
    <div class="cr-series-text">
     <h4>${enc(meta.headline||'')}</h4>
     <p>${enc(meta.note||'')}</p>
     ${meta.behind?`<p class="cr-series-behind"><span>BEHIND</span>${enc(meta.behind)}</p>`:''}
     ${extra}
     <span class="cr-series-count">${String(imgs.length).padStart(2,'0')} IMAGES · 사진을 누르면 크게 볼 수 있어요</span>
    </div>
    <div class="cr-series-media">
     <div class="cr-lead ${leadWide?'cr-lead--wide':''}">${thumb(lead,`${group.title} 대표 컷`,cap(leadIdx),gid,leadIdx)}</div>
     ${rest.length?`<div class="cr-slider"><div class="cr-slider-track" tabindex="0" aria-label="${enc(group.title)} 나머지 컷 — 좌우로 넘겨 보기">${rest.map(src=>{const i=imgs.indexOf(src);return thumb(src,`${group.title} 화보 컷 ${i+1}`,cap(i),gid,i);}).join('')}<button type="button" class="cr-more" data-more="${enc(gid)}"><span>더보기</span><i>${String(imgs.length).padStart(2,'0')} cuts ↗</i></button></div><div class="cr-slider-nav"><button type="button" class="cr-slider-btn" data-step="-1" aria-label="이전">←</button><button type="button" class="cr-slider-btn" data-step="1" aria-label="다음">→</button></div></div>`:''}
    </div>
   </div>
  </article>`;
 }

 /* ── 렌더: 배우별 묶음 + 톤 순서 ── */
 const E='assets/projects/styling/editorial/',S='assets/projects/styling/';
 const PERSONS=[
  {name:'강유석',en:'Kang Youseok',tone:'Pastel → Leather',series:[
   {title:'강유석 · BoldPage',publication:'BOLDPAGE',images:[S+'bold_01.jpg',S+'bold_03.jpg',S+'bold_05_title.jpg',S+'bold_06_beauty.jpg',S+'bold_02.jpg',S+'bold_04.jpg',S+'bold_07_car.jpg',S+'bold_08_leather.jpg',S+'bold_fullbody.jpg',S+'bold_bts_03.jpg',S+'bold_bts_01.jpg',S+'bold_bts_02.jpg']}
  ]},
  {name:'차준환',en:'Cha Junhwan',tone:'Cover · Daylight',series:[
   {title:'차준환 · Singles',publication:'SINGLES',images:[E+'cha_singles_cover.jpg',E+'cha_singles_04.webp',E+'cha_singles_05.webp',E+'cha_singles_06.webp',E+'cha_singles_09.webp',E+'cha_singles_10.webp',E+'cha_singles_11.webp',E+'cha_singles_02.webp',E+'cha_singles_03.webp',E+'cha_singles_01.webp',E+'cha_singles_07.webp',E+'cha_singles_08.webp']}
  ]},
  {name:'올리브영 매거진',en:'Olive Young Magazine',tone:'White · Pop color',series:[
   {title:'올리브영 매거진 · 3 Men’s Style in Spring',publication:'OLIVE YOUNG MAGAZINE',images:['assets/projects/styling/oliveyoung/oy_lead.jpg','assets/projects/styling/oliveyoung/oy_02.jpg','assets/projects/styling/oliveyoung/oy_01.jpg','assets/projects/styling/oliveyoung/oy_09.jpg','assets/projects/styling/oliveyoung/oy_04.jpg','assets/projects/styling/oliveyoung/oy_05.jpg','assets/projects/styling/oliveyoung/oy_06.jpg','assets/projects/styling/oliveyoung/oy_07.jpg','assets/projects/styling/oliveyoung/oy_03.jpg','assets/projects/styling/oliveyoung/oy_12.jpg','assets/projects/styling/oliveyoung/oy_13.jpg','assets/projects/styling/oliveyoung/oy_10.jpg','assets/projects/styling/oliveyoung/oy_11.jpg']}
  ]},
  {name:'구교환',en:'Koo Kyohwan',tone:'Color block → Dark',series:[
   {title:'구교환 × 브룩스브라더스',publication:'HARPER’S BAZAAR × BROOKS BROTHERS',campaign:true,images:[S+'koo_bb_lead.jpg',S+'koo_04.jpg',S+'koo_07.jpg',S+'koo_09.jpg',S+'koo_08.jpg',S+'koo_06.jpg',S+'koo_10.jpg',S+'koo_01.jpg',S+'koo_05.jpg',S+'koo_02.jpg',S+'koo_03.jpg'],links:[{label:'하퍼스 바자 화보 기사',url:'https://www.harpersbazaar.co.kr/article/1900044'}]},
   {title:'구교환 · VOGUE',publication:'VOGUE',images:[E+'koo_collective_lead.jpg',E+'koo_collective_01.webp',E+'koo_collective_03.webp',E+'koo_collective_04.webp',E+'koo_collective_02.webp']}
  ]},
  {name:'하정우',en:'Ha Jungwoo',tone:'Warm classic → Monochrome',series:[
   {title:'하정우 · 맨 노블레스 × 랄프 로렌 퍼플 라벨',publication:'MEN NOBLESSE',images:[S+'men_lead.jpg',S+'men_05.jpg',S+'men_02.jpg',S+'men_07.jpg',S+'men_08.jpg',S+'men_03.jpg',S+'men_10.jpg',S+'men_06.jpg',S+'men_09.jpg',S+'men_04.jpg',S+'men_01.jpg']},
   {title:'하정우 · VOGUE',publication:'VOGUE',images:[E+'ha_vogue_lead.jpg',E+'ha_vogue_02.webp',E+'ha_vogue_03.webp',E+'ha_vogue_01.webp',E+'ha_vogue_04.webp']}
  ]},
  {name:'신승호',en:'Shin Seungho',tone:'Monochrome',series:[
   {title:'신승호 · Harper’s BAZAAR',publication:'BAZAAR',images:[E+'shin_bazaar_lead.jpg',E+'shin_bazaar_03.webp',E+'shin_bazaar_01.webp']}
  ]}
 ];
 NOTES["구교환 × 브룩스브라더스"]=Object.assign({},CAMPAIGN_NOTE,{lead:0});
 let seriesCounter=0;
 document.getElementById('editorialSeries').innerHTML=PERSONS.map((person,pi)=>`<section class="cr-person" id="person-${pi}">
   <header class="cr-person-head"><span class="cr-person-no">${String(pi+1).padStart(2,'0')}</span><h3>${enc(person.name)} <em>${enc(person.en)}</em></h3><span class="cr-person-tone">${enc(person.tone)}</span><span class="cr-person-count">${String(person.series.reduce((n,s)=>n+s.images.length,0)).padStart(2,'0')} CUTS</span></header>
   ${person.series.map(s=>{const meta=Object.assign({lead:0},NOTES[s.title]||{kind:s.subtitle||''});const extra=(s.links||[]).length?`<div class="cr-links">${s.links.map(l=>`<a href="${enc(l.url)}" target="_blank" rel="noopener noreferrer">${enc(l.label)} <span aria-hidden="true">↗</span></a>`).join('')}</div>`:'';return seriesBlock(s,seriesCounter++,meta,extra);}).join('')}
  </section>`).join('');
 const campaign=[]; // 캠페인은 구교환 묶음 안으로 이동
 const campaignEl=document.getElementById('campaignSeries'); if(campaignEl) campaignEl.closest('section').remove();
 const dramas=(fashion.credits||[]).filter(c=>c.group==='drama');
 document.getElementById('dramaGrid').innerHTML=dramas.map((c,i)=>{const m=DRAMA_META[c.title]||{};return `<article class="cr-drama">
   <div class="cr-drama-poster">${thumb(c.image,c.alt||c.title+' 포스터',`${c.title} · ${i+1} / ${dramas.length}`,'drama',i)}</div>
   <div class="cr-drama-copy"><span class="cr-drama-ch">${enc(m.channel||'')}</span><strong>${enc(c.title)}</strong><span>${enc(m.role||c.meta||'')}</span></div>
  </article>`;}).join('');

 /* ── 무대: &TEAM 큐시트 ── */
 const stage=(fashion.credits||[]).filter(c=>c.group==='performance');
 const T='assets/projects/styling/andteam/';
 const rng=(tag,n)=>Array.from({length:n},(_,i)=>T+`${tag}_${String(i+1).padStart(2,'0')}.jpg`);
 const CUES=[
  {no:'CUE 01',title:'Stage 1',en:'Music Show',look:'스웨이드 베스트 · 스카프 · 레이어드 셔츠',note:'계단 세트. 브라운 스웨이드와 네이비 니트 베스트, 옐로 스카프 — 따뜻한 톤 안에서 멤버마다 질감을 다르게.',video:{label:'무대 영상 재생',url:'https://www.youtube.com/watch?v=1XNv2OuPJjI'},lead:T+'stage1_lead.jpg',images:rng('stage1',27)},
  {no:'CUE 02',title:'Stage 2',en:'Music Show',look:'블랙 테일러링 · 플로럴 자수 · 터키석 버튼',note:'흰 벽 앞 블랙 더블 재킷에 흰 꽃 자수와 터키석 버튼. 무채색 위에 디테일 하나로 캐릭터를 만드는 룩.',video:{label:'뮤직뱅크 무대 재생',url:'https://www.youtube.com/watch?v=KMzV5SQDZJo'},lead:T+'stage2_lead.jpg',images:rng('stage2',13)},
  {no:'CUE 03',title:'Bewitched — 라이브 클립',en:'Live Clip',look:'올블랙 · 실버 하드웨어 · 크롬하츠',note:'어두운 세트에 블랙 니트와 레더, 실버 스터드·체인. 카메라가 가까이 붙는 라이브 클립이라 디테일이 곧 룩이 됩니다.',video:{label:'공식 라이브 클립 재생',url:'https://www.youtube.com/watch?v=Z7tiMUiSORo'},lead:T+'clip_lead.jpg',images:rng('clip',37)}
 ];
 const ytId=u=>{const m=String(u).match(/[?&]v=([\w-]{6,})/);return m?m[1]:null;};
 document.getElementById('stageBlock').innerHTML=`<div class="cue-sheet">
  <div class="cue-head"><span class="cue-onair"><i></i>ON AIR</span><strong>&amp;TEAM · Bewitched</strong><span class="cue-meta">HYBE LABELS JAPAN · 3 CUES · ${CUES.reduce((n,c)=>n+c.images.length+1,0)} CUTS</span></div>
  ${CUES.map((c,ci)=>{const gid='cue-'+ci;const all=[c.lead,...c.images];const cap=i=>`${c.title} · ${i+1} / ${all.length}`;return `<section class="cue">
   <div class="cue-col-no"><span class="cue-no">${enc(c.no)}</span><span class="cue-en">${enc(c.en)}</span></div>
   <div class="cue-col-text"><h3>${enc(c.title)}</h3><p class="cue-look"><span>LOOK</span>${enc(c.look)}</p><p class="cue-note">${enc(c.note)}</p><div class="cr-links"><a href="${enc(c.video.url)}" target="_blank" rel="noopener noreferrer" class="cue-play"><i>▶</i>${enc(c.video.label)}</a></div></div>
   <div class="cue-col-media">
    <div class="cue-lead">${thumb(c.lead,`${c.title} 대표 컷`,cap(0),gid,0)}</div>
    <div class="cr-slider"><div class="cr-slider-track" tabindex="0">${c.images.map((src,i)=>thumb(src,`${c.title} 컷 ${i+2}`,cap(i+1),gid,i+1)).join('')}<button type="button" class="cr-more" data-more="${enc(gid)}"><span>더보기</span><i>${String(all.length).padStart(2,'0')} cuts ↗</i></button></div><div class="cr-slider-nav"><button type="button" class="cr-slider-btn" data-step="-1" aria-label="이전">←</button><button type="button" class="cr-slider-btn" data-step="1" aria-label="다음">→</button></div></div>
   </div>
  </section>`;}).join('')}
 </div>`;
 /* ── 요약 숫자 ── */
 const allSeries=PERSONS.flatMap(p=>p.series);const totalImgs=allSeries.reduce((n,s)=>n+s.images.length,0)+dramas.length+CUES.reduce((n,c)=>n+c.images.length+1,0);
 const stats=[[String(allSeries.length).padStart(2,'0'),'화보 · 캠페인 시리즈'],[String(dramas.length).padStart(2,'0'),'드라마'],['03','무대 · 라이브 클립'],[String(totalImgs),'아카이브 컷']];
 document.getElementById('crStats').innerHTML=stats.map(([n,l])=>`<li><strong>${n}</strong><span>${l}</span></li>`).join('');

 /* ── 슬라이더 화살표 · 더보기 ── */
 document.addEventListener('click',e=>{
  const b=e.target.closest('.cr-slider-btn');
  if(b){const track=b.closest('.cr-slider').querySelector('.cr-slider-track');const first=track.querySelector('.cr-thumb');const w=first?first.getBoundingClientRect().width+12:300;track.scrollBy({left:w*2*(+b.dataset.step),behavior:'smooth'});return;}
  const m=e.target.closest('.cr-more');
  if(m){const all=[...document.querySelectorAll(`.cr-thumb[data-group="${CSS.escape(m.dataset.more)}"]`)].sort((a,b)=>+a.dataset.index-+b.dataset.index);open(all.map(x=>({src:x.dataset.src,alt:x.dataset.alt,caption:x.dataset.caption})),0);}
 });
 /* ── 라이트박스 ── */
 const lb=document.getElementById('crLightbox'),lbImg=document.getElementById('crLightboxImage'),lbCap=document.getElementById('crLightboxCaption'),lbPrev=document.getElementById('crLightboxPrev'),lbNext=document.getElementById('crLightboxNext'),lbClose=document.getElementById('crLightboxClose');
 let items=[],index=0,lastFocus=null;
 function show(){const it=items[index];lbImg.src=it.src;lbImg.alt=it.alt;lbCap.textContent=it.caption;lbPrev.hidden=lbNext.hidden=items.length<2;}
 function open(list,i){items=list;index=i;lastFocus=document.activeElement;show();lb.hidden=false;document.body.classList.add('is-dialog-open');lbClose.focus();}
 function close(){lb.hidden=true;document.body.classList.remove('is-dialog-open');lbImg.src='';lastFocus?.focus?.();}
 document.addEventListener('click',e=>{
  const t=e.target.closest('.cr-thumb');if(!t)return;
  const all=[...document.querySelectorAll(`.cr-thumb[data-group="${CSS.escape(t.dataset.group)}"]`)].sort((a,b)=>+a.dataset.index-+b.dataset.index);
  const list=all.map(b=>({src:b.dataset.src,alt:b.dataset.alt,caption:b.dataset.caption}));
  open(list,all.indexOf(t));
 });
 lbClose.addEventListener('click',close);
 lb.addEventListener('click',e=>{if(e.target===lb)close();});
 lbPrev.addEventListener('click',()=>{index=(index-1+items.length)%items.length;show();});
 lbNext.addEventListener('click',()=>{index=(index+1)%items.length;show();});
 document.addEventListener('keydown',e=>{if(lb.hidden)return;if(e.key==='Escape')close();if(e.key==='ArrowLeft')lbPrev.click();if(e.key==='ArrowRight')lbNext.click();});

 /* ── 상단 진행 바 + 현재 섹션 표시 ── */
 const prog=document.getElementById('crProgress');
 const navLinks=[...document.querySelectorAll('.cr-bar-nav a')];
 const secs=navLinks.map(a=>document.querySelector(a.getAttribute('href')));
 function onScroll(){
  const h=document.documentElement;const p=h.scrollTop/(h.scrollHeight-h.clientHeight||1);prog.style.transform=`scaleX(${p})`;
  document.getElementById('crBar').classList.toggle('is-scrolled',h.scrollTop>40);
  let cur=-1;secs.forEach((s,i)=>{if(s&&s.getBoundingClientRect().top<=140)cur=i;});
  navLinks.forEach((a,i)=>a.classList.toggle('is-current',i===cur));
 }
 document.addEventListener('scroll',onScroll,{passive:true});onScroll();

 /* ── 등장 애니메이션 ── */
 if('IntersectionObserver' in window&&!matchMedia('(prefers-reduced-motion:reduce)').matches){
  const io=new IntersectionObserver(es=>es.forEach(en=>{if(en.isIntersecting){en.target.classList.add('is-in');io.unobserve(en.target);}}),{rootMargin:'0px 0px -8% 0px',threshold:.08});
  document.querySelectorAll('.cr-series,.cr-drama,.cr-stage,.cr-section-head').forEach(el=>{el.classList.add('will-in');io.observe(el);});
 }
})();
