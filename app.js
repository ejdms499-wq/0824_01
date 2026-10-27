/* SOY KIM — 메인 페이지 (v27 · Lookbook Glass)
   projects.js(기본 정보) + content.js(전문 정보)를 읽어 화면을 만듭니다.
   - 프로젝트는 4개 카테고리로 묶어서 보여줍니다
   - 프로젝트마다 이미지 좌/우를 번갈아 배치(에디토리얼 리듬)
   - SELECTED CREDITS는 '내가 하는 일 6단계'로 구성 */
(function(){
 const enc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 const projects=window.SOY_PROJECTS||[];
 const PRO=window.SOY_PRO||{};
 const ABOUT=window.SOY_ABOUT||{};
 const SIZES=window.SOY_IMAGE_SIZES||{};
 const ar=src=>{const s=SIZES[src];return s?`${s[0]} / ${s[1]}`:'4 / 5';};

 /* 카테고리 순서와 라벨 */
 const CATS=[
  {key:'history',no:'01',ko:'역사 · 세계관 콘텐츠',en:'History & Worldbuilding',lead:'1930년 경성을 손끝으로 펼치고, 고양이 한 마리를 따라 걷는다.'},
  {key:'ip',no:'02',ko:'캐릭터 IP',en:'Character IP',lead:'성격부터 정하고 생김새는 나중에.'},
  {key:'aiservice',no:'03',ko:'AI 서비스 기획',en:'AI Service Design',lead:'하지 않게 만드는 설계.'},
  {key:'data',no:'04',ko:'데이터 스토리텔링',en:'Data Storytelling',lead:'숫자를 손에 쥐면 이야기가 된다.'},
  {key:'fashion',no:'05',ko:'패션 · 스타일링',en:'Fashion & Styling',lead:'한 프레임에서 무엇이 먼저 읽히는가.'}
 ];

 const byCat=k=>projects.filter(p=>p.category===k);

 /* ── Hero 요약 ── */
 {const hs=document.getElementById('heroStats');if(hs)hs.innerHTML=[[String(projects.length).padStart(2,'0'),'프로젝트'],[String(CATS.length).padStart(2,'0'),'카테고리'],['77','크레딧 아카이브 컷'],['∞','진행 중인 실험']].map(([n,l])=>`<div><strong>${enc(n)}</strong><span>${enc(l)}</span></div>`).join('');}

 /* ── About ── */
 document.getElementById('aboutGrid').innerHTML=`
  <div class="about-main">
   <figure class="about-portrait"><div class="about-portrait-frame"><img src="assets/about/portrait.jpg" alt="김소이" onerror="this.parentElement.classList.add('is-empty')"></div><figcaption><span>Kim Soy</span><span>Seoul</span></figcaption></figure>
   <p class="about-tagline">${enc(ABOUT.tagline)}</p>
   <p class="about-mission">${enc(ABOUT.mission)}</p>
   <ul class="about-focus">${(ABOUT.focus||[]).map((f,i)=>`<li><span>0${i+1}</span>${enc(f)}</li>`).join('')}</ul>
  </div>
  <div class="about-side">
   <div class="about-block"><h3>Experience</h3><ol class="timeline">${(ABOUT.experience||[]).map(([y,t,d])=>`<li><span class="tl-year">${enc(y)}</span><div><strong>${enc(t)}</strong><p>${enc(d)}</p></div></li>`).join('')}</ol></div>
   <div class="about-block"><h3>Education</h3><ul class="plain">${(ABOUT.education||[]).map(([t,d])=>`<li><strong>${enc(t)}</strong><p>${enc(d)}</p></li>`).join('')}</ul></div>
   <div class="about-block"><h3>Skills &amp; Tools</h3><ul class="chips">${(ABOUT.tools||[]).map(t=>`<li>${enc(t)}</li>`).join('')}</ul></div>
  </div>`;

 /* ── 프로젝트 목차 (카테고리별) ── */
 const row=p=>`<li><a href="#project-${enc(p.id)}"><span class="pi-no">${enc(p.number)}</span><span class="pi-title">${enc(p.title)}</span><span class="pi-year">${enc(p.year||'')}</span><span class="pi-arrow" aria-hidden="true">↓</span></a></li>`;
 const indexHtml=CATS.map(c=>{const list=byCat(c.key);if(!list.length)return '';return `<li class="pindex-group"><div class="pindex-group-head"><span class="pindex-group-no">${c.no}</span><strong>${enc(c.ko)}</strong><em>${enc(c.en)}</em><span class="pindex-group-count">${String(list.length).padStart(2,'0')}</span></div><ol class="pindex-rows">${list.map(row).join('')}</ol></li>`;}).join('');
 {const pl=document.getElementById('pindexList');if(pl)pl.innerHTML=indexHtml;}
 document.getElementById('indexPanelList').innerHTML=`<ol class="pindex-list pindex-list--panel">${indexHtml}</ol>`;

 /* ── 공통 조각 ── */
 const thumb=(src,alt,cap,group,i,cls='')=>`<button type="button" class="thumb ${cls}" data-src="${enc(src)}" data-alt="${enc(alt)}" data-caption="${enc(cap)}" data-group="${enc(group)}" data-index="${i}" aria-label="${enc(alt)} 확대"><img src="${enc(src)}" alt="${enc(alt)}" loading="lazy" decoding="async"></button>`;
 const linkBtn=l=>{const ext=/^https?:/.test(l.url);const deck=/Deck|기획서/.test(l.label);const cls=l.kind==='site'||l.kind==='video'?'btn btn--dark':deck?'btn btn--deck':'btn';const label=deck?`<i class="deck-ic" aria-hidden="true"></i>${enc(l.label)}`:enc(l.label);return `<a class="${cls}" href="${enc(l.url)}" ${ext?'target="_blank" rel="noopener noreferrer"':''}>${label} <span aria-hidden="true">↗</span></a>`;};
 const marks='<i class="mark mark--tl"></i><i class="mark mark--tr"></i><i class="mark mark--bl"></i><i class="mark mark--br"></i>';

 /* ── SELECTED CREDITS 전용 블록 ── */
 function creditsBlock(p,pro){
  const pages=[
   ['assets/projects/styling/editorial/cha_singles_cover.jpg','SINGLES','차준환 · 커버','Top / 블루 니트 탱크 · Belt / 블랙 레더'],
   ['assets/projects/styling/bold_01.jpg','BOLDPAGE','강유석 · 커버 스토리','Shirt / 블루 스트라이프 · Mood / 소년성'],
   ['assets/projects/styling/oliveyoung/oy_lead.jpg','OLIVE YOUNG','브랜드 화보','Knit / 레드 · 블루 · Pants / 그레이'],
   ['assets/projects/styling/editorial/ha_vogue_lead.jpg','VOGUE','하정우 · 에디토리얼','Shirt / 화이트 · Jacket / 블랙'],
   ['assets/projects/styling/koo_bb_lead.jpg','BROOKS BROTHERS','구교환 · 캠페인','Blazer / 네이비 · Shirt / 핑크 옥스퍼드'],
   ['assets/projects/styling/editorial/shin_bazaar_lead.jpg',"HARPER'S BAZAAR",'신승호 · 에디토리얼','Tee / 블랙 · Mood / 모노크롬'],
   ['assets/projects/styling/andteam/stage1_lead.jpg','&TEAM · BEWITCHED','Stage 1 · 음악방송','Vest / 브라운 스웨이드 · Scarf / 옐로'],
   ['assets/projects/styling/andteam/clip_lead.jpg','&TEAM · BEWITCHED','Live clip','Knit / 올블랙 · Hardware / 실버'],
   ['assets/projects/styling/andteam/stage2_lead.jpg','&TEAM · BEWITCHED','Stage 2 · 음악방송','의상 준비 참여']
  ];
  return `<section class="proj proj--credits" id="project-${enc(p.id)}" aria-labelledby="t-${enc(p.id)}">
   <div class="wrap">
    <header class="proj-head">
     <div class="proj-meta"><span class="proj-no">${enc(p.number)}</span><span class="proj-cat">${enc(p.categoryLabel)}</span><span class="proj-year">${enc(pro.context||'')}</span></div>
     <h2 id="t-${enc(p.id)}" class="proj-title">Selected <em>Credits</em></h2>
     <p class="proj-sub">${enc(pro.statement||'')}</p>
    </header>
    <div class="mag" id="mag">
     <div class="mag-stage">
      ${pages.map(([src,pub,who,look],i)=>`<article class="mag-page ${i===0?'is-on':''}" data-i="${i}"><figure class="mag-pic"><img src="${src}" alt="${enc(who)}" loading="${i<2?'eager':'lazy'}"></figure><div class="mag-txt"><span class="mag-no">${String(i+1).padStart(2,'0')} / ${String(pages.length).padStart(2,'0')}</span><h3>${enc(pub)}</h3><p class="mag-who">${enc(who)}</p><p class="mag-look">${enc(look)}</p><p class="mag-role">스타일링 팀 참여 · 시안 · 픽업 사입 · 피팅 · 현장 팔로우</p><a class="btn btn--dark" href="credits.html">크레딧 전부 보기 — 77컷 ↗</a></div></article>`).join('')}
     </div>
     <div class="mag-nav"><button type="button" class="mag-btn" data-d="-1" aria-label="이전">←</button><div class="mag-dots">${pages.map((_,i)=>`<i class="${i===0?'is-on':''}" data-i="${i}"></i>`).join('')}</div><button type="button" class="mag-btn" data-d="1" aria-label="다음">→</button><span class="mag-hint">← → 키로도 넘깁니다</span></div>
    </div>
   </div>
  </section>`;
 }
 function projectBlock(p,pro,flip){
  const links=[...(pro.cta?[{label:pro.cta.label,url:pro.cta.url,kind:'site'}]:[]),...(p.links||[])];
  const gallery=(p.gallery||[]).filter(g=>g!==p.image);
  return `<section class="proj ${flip?'proj--flip':''}" id="project-${enc(p.id)}" aria-labelledby="t-${enc(p.id)}">
   <div class="wrap">
    <header class="proj-head">
     <div class="proj-meta"><span class="proj-no">${enc(p.number)}</span><span class="proj-cat">${enc(p.categoryLabel)}</span><span class="proj-year">${enc(pro.context||'')}</span></div>
     <h2 id="t-${enc(p.id)}" class="proj-title">${enc(p.title)}</h2>
     <p class="proj-sub">${enc(p.subtitle||p.intro)}</p>
     ${pro.insight?`<blockquote class="insight insight--head"><span>INSIGHT</span><p>${enc(pro.insight)}</p></blockquote>`:''}
    </header>
    <div class="proj-grid">
     <figure class="proj-hero">${marks}<div class="proj-hero-frame">${thumb(p.image,p.imageAlt||p.title,`${p.title} · 대표 이미지`,'hero-'+p.id,0)}</div><figcaption><span>${enc(p.imageCredit||'')}</span><span>${enc(p.year||'')}</span></figcaption></figure>
     <aside class="proj-side">
      <p class="proj-desc">${enc(p.description)}</p>
      <dl class="facts">
       <div><dt>Role</dt><dd>${enc(p.role)}</dd></div>
       ${pro.context?`<div><dt>Context</dt><dd>${enc(pro.context)}</dd></div>`:''}
       ${pro.tools?`<div><dt>Tools</dt><dd><ul class="chips chips--small">${pro.tools.map(t=>`<li>${enc(t)}</li>`).join('')}</ul></dd></div>`:''}
      </dl>
      ${links.length?`<div class="proj-links">${links.map(linkBtn).join('')}</div>`:''}
          ${pro.deck?`<div class="deck deck--mini"><div class="deck-head"><span class="gallery-label">기획서 · ${String(pro.deck.count).padStart(2,'0')} slides</span><button type="button" class="deck-all" data-more="deck-${enc(p.id)}">전체 보기 ↗</button></div><div class="deck-mini-row">${Array.from({length:pro.deck.count},(_,i)=>`<button type="button" class="thumb dmini" data-src="${enc(pro.deck.dir)}/s_${String(i+1).padStart(2,'0')}.jpg" data-alt="${enc(p.title)} 기획서 ${i+1}" data-caption="${enc(p.title)} 기획서 · ${i+1} / ${pro.deck.count}" data-group="deck-${enc(p.id)}" data-index="${i}" aria-label="${enc(p.title)} 기획서 ${i+1}"><img src="${enc(pro.deck.dir)}/s_${String(i+1).padStart(2,'0')}.jpg" alt="" loading="lazy" decoding="async"></button>`).join('')}</div></div>`:''}
    </aside>
    </div>
    <div class="proj-main">
     
     ${gallery.length?`<div class="proj-gallery ${p.id==='research'?'proj-gallery--sheet':''}"><span class="gallery-label">${enc(pro.galleryLabel||'Gallery')}</span><div class="slider"><div class="gallery-strip slider-track" tabindex="0">${gallery.map((src,i)=>thumb(src,`${p.title} 이미지 ${i+1}`,`${p.title} · ${i+1} / ${gallery.length}`,'gal-'+p.id,i)).join('')}</div><div class="slider-nav"><button type="button" class="slider-btn" data-step="-1" aria-label="이전">←</button><button type="button" class="slider-btn" data-step="1" aria-label="다음">→</button></div></div></div>`:''}
    </div>
   </div>
  </section>`;
 }

 /* ── 카테고리별 렌더 ── */
 let flip=false;
 const credFx=projects.find(p=>p.id==='fashion');
 const credTop=credFx?creditsBlock(credFx,PRO[credFx.id]||{}):'';
 document.getElementById('projectBlocks').innerHTML=credTop+CATS.map(c=>{
  const list=byCat(c.key).filter(p=>p.id!=='fashion');if(!list.length)return '';
  const blocks=list.map(p=>{const pro=PRO[p.id]||{};if(p.id==='fashion')return '';const html=projectBlock(p,pro,flip);flip=!flip;return html;}).join('');
  return `<div class="cat" id="cat-${c.key}"><header class="cat-band"><div class="wrap cat-band-in"><span class="cat-no">${c.no}</span><div class="cat-band-txt"><h2>${enc(c.ko)}</h2><em>${enc(c.en)}</em><p>${enc(c.lead)}</p></div><span class="cat-count">${String(list.length).padStart(2,'0')} ${list.length>1?'projects':'project'}</span></div></header>${blocks}</div>`;
 }).join('');


 /* ── Contact ── */
 document.getElementById('contactRow').innerHTML=(ABOUT.contact||[]).map(c=>`<a class="contact-link" href="${enc(c.url)}" ${/^https?:/.test(c.url)?'target="_blank" rel="noopener noreferrer"':''}><span>${enc(c.label)}</span><i aria-hidden="true">↗</i></a>`).join('');

 /* ── 슬라이더 ── */
 document.addEventListener('click',e=>{const b=e.target.closest('.slider-btn');if(!b)return;const t=b.closest('.slider').querySelector('.slider-track');const f=t.firstElementChild;const w=f?f.getBoundingClientRect().width+12:300;t.scrollBy({left:w*2*(+b.dataset.step),behavior:'smooth'});});
 document.addEventListener('click',e=>{const m=e.target.closest('.deck-more,.deck-all');if(!m)return;const all=[...document.querySelectorAll(`.thumb[data-group="${CSS.escape(m.dataset.more)}"]`)].sort((x,y)=>+x.dataset.index-+y.dataset.index);open(all.map(x=>({src:x.dataset.src,alt:x.dataset.alt,caption:x.dataset.caption})),0);});
 /* ── 라이트박스 ── */
 const lb=document.getElementById('imageLightbox'),lbImg=document.getElementById('lightboxImage'),lbCap=document.getElementById('lightboxCaption'),lbPrev=document.getElementById('lightboxPrev'),lbNext=document.getElementById('lightboxNext'),lbClose=document.getElementById('lightboxClose');
 let items=[],index=0,lastFocus=null;
 const show=()=>{const it=items[index];lbImg.src=it.src;lbImg.alt=it.alt;lbCap.textContent=it.caption;lbPrev.hidden=lbNext.hidden=items.length<2;};
 const open=(list,i)=>{items=list;index=i;lastFocus=document.activeElement;show();lb.hidden=false;document.body.classList.add('is-dialog-open');lbClose.focus();};
 const close=()=>{lb.hidden=true;document.body.classList.remove('is-dialog-open');lbImg.src='';lastFocus?.focus?.();};
 document.addEventListener('click',e=>{const t=e.target.closest('.thumb');if(!t)return;const all=[...document.querySelectorAll(`.thumb[data-group="${CSS.escape(t.dataset.group)}"]`)].sort((a,b)=>+a.dataset.index-+b.dataset.index);open(all.map(b=>({src:b.dataset.src,alt:b.dataset.alt,caption:b.dataset.caption})),all.indexOf(t));});
 lbClose.addEventListener('click',close);lb.addEventListener('click',e=>{if(e.target===lb)close();});
 lbPrev.addEventListener('click',()=>{index=(index-1+items.length)%items.length;show();});
 lbNext.addEventListener('click',()=>{index=(index+1)%items.length;show();});
 document.addEventListener('keydown',e=>{if(!lb.hidden){if(e.key==='Escape')close();if(e.key==='ArrowLeft')lbPrev.click();if(e.key==='ArrowRight')lbNext.click();return;}if(e.key==='Escape'&&!indexPanel.hidden)setIndex(false);});

 /* ── 상단 바 ── */
 const bar=document.getElementById('bar'),prog=document.getElementById('barProgress');
 const indexPanel=document.getElementById('indexPanel'),indexToggle=document.getElementById('indexToggle');
 function setIndex(o){indexPanel.hidden=!o;indexToggle.setAttribute('aria-expanded',String(o));document.body.classList.toggle('is-index-open',o);}
 indexToggle.addEventListener('click',()=>setIndex(indexPanel.hidden));
 indexPanel.addEventListener('click',e=>{if(e.target.closest('a'))setIndex(false);});
 const navLinks=[...document.querySelectorAll('.bar-nav a[data-nav]')];
 const navTargets={about:document.getElementById('about'),projects:document.getElementById('projects'),contact:document.getElementById('contact')};
 function onScroll(){
  const h=document.documentElement;prog.style.transform=`scaleX(${h.scrollTop/((h.scrollHeight-h.clientHeight)||1)})`;
  bar.classList.toggle('is-scrolled',h.scrollTop>30);
  let cur=null;const y=h.scrollTop+140;
  if(navTargets.about&&y>=navTargets.about.offsetTop)cur='about';
  if(navTargets.projects&&y>=navTargets.projects.offsetTop)cur='projects';
  if(navTargets.contact&&y>=navTargets.contact.offsetTop-200)cur='contact';
  navLinks.forEach(a=>a.classList.toggle('is-current',a.dataset.nav===cur));
 }
 document.addEventListener('scroll',onScroll,{passive:true});onScroll();

 /* ── 등장 ── */
 if('IntersectionObserver' in window&&!matchMedia('(prefers-reduced-motion:reduce)').matches){
  const io=new IntersectionObserver(es=>es.forEach(en=>{if(en.isIntersecting){en.target.classList.add('is-in');io.unobserve(en.target);}}),{rootMargin:'0px 0px -6% 0px',threshold:.06});
  document.querySelectorAll('.proj-head,.proj-grid,.credits-grid,.process,.proj-main,.about-grid,.pindex-list,.sec-head,.cat-head').forEach(el=>{el.classList.add('will-in');io.observe(el);});
 }
})();

/* ── BW: 사이드 목차 ── */
(function(){const el=document.getElementById("sideIndex");if(!el)return;const projects=window.SOY_PROJECTS||[];const enc=s=>String(s??"").replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;"}[c]));
 el.innerHTML=projects.map((p,i)=>`<li><a href="#project-${enc(p.id)}" data-side="project-${enc(p.id)}"><span>${String(i+1).padStart(2,'0')}</span>${enc(p.id==='fashion'?'Selected Credits':p.title)}</a></li>`).join('');
 const links=[...el.querySelectorAll('a')];
 const io=new IntersectionObserver(es=>{es.forEach(e=>{if(e.isIntersecting){links.forEach(l=>l.classList.toggle('is-on',l.dataset.side===e.target.id))}})},{rootMargin:'-40% 0px -55% 0px'});
 projects.forEach(p=>{const s=document.getElementById('project-'+p.id);if(s)io.observe(s)});
})();

/* ── BW: 스킬 보드 ── */
(function(){const el=document.getElementById("skillBoard");if(!el)return;const enc=s=>String(s??"").replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;"}[c]));const G=(window.SOY_ABOUT||{}).toolGroups||[];
 el.innerHTML=G.map(([g,ts],i)=>`<section class="hs-col"><h2><span>0${i+1}</span>${enc(g)}</h2><ul>${ts.map(t=>{const m=t.match(/^(.*?)\s*\((.*)\)$/);return `<li><b>${enc(m?m[1]:t)}</b>${m?`<i>${enc(m[2])}</i>`:''}</li>`}).join('')}</ul></section>`).join('');
})();

/* ── BW: 매거진 플립 ── */
(function(){const m=document.getElementById('mag');if(!m)return;const pages=[...m.querySelectorAll('.mag-page')];const dots=[...m.querySelectorAll('.mag-dots i')];let cur=0;
 const go=n=>{cur=(n+pages.length)%pages.length;pages.forEach((p,i)=>p.classList.toggle('is-on',i===cur));dots.forEach((d,i)=>d.classList.toggle('is-on',i===cur))};
 m.addEventListener('click',e=>{const b=e.target.closest('.mag-btn');if(b){go(cur+ +b.dataset.d);return}const d=e.target.closest('.mag-dots i');if(d)go(+d.dataset.i);if(e.target.closest('.mag-pic'))go(cur+1)});
 window.addEventListener('keydown',e=>{const r=m.getBoundingClientRect();if(r.top>window.innerHeight||r.bottom<0)return;if(e.key==='ArrowRight')go(cur+1);if(e.key==='ArrowLeft')go(cur-1)});
})();
