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
  {key:'fashion',no:'01',ko:'패션 · 스타일링',en:'Fashion & Styling',lead:'현장에서 시작된 감각.'},
  {key:'character',no:'02',ko:'캐릭터 · 세계관',en:'Character & World',lead:'성격이 먼저, 생김새는 그 다음.'},
  {key:'interactive',no:'03',ko:'인터랙티브 웹',en:'Interactive Web',lead:'읽는 콘텐츠를 만지는 경험으로. 경성야록에서 심묘한 산책으로 이어지는 하나의 세계.'},
  {key:'ai',no:'04',ko:'AI · 데이터',en:'AI × Data',lead:'숫자를 이야기로 번역하기.'}
 ];
 const byCat=k=>projects.filter(p=>p.category===k);

 /* ── Hero 요약 ── */
 document.getElementById('heroStats').innerHTML=[[String(projects.length).padStart(2,'0'),'프로젝트'],[String(CATS.length).padStart(2,'0'),'분야'],['77','크레딧 아카이브 컷'],['∞','진행 중인 실험']].map(([n,l])=>`<li><strong>${enc(n)}</strong><span>${enc(l)}</span></li>`).join('');

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
 document.getElementById('pindexList').innerHTML=indexHtml;
 document.getElementById('indexPanelList').innerHTML=`<ol class="pindex-list pindex-list--panel">${indexHtml}</ol>`;

 /* ── 공통 조각 ── */
 const thumb=(src,alt,cap,group,i,cls='')=>`<button type="button" class="thumb ${cls}" data-src="${enc(src)}" data-alt="${enc(alt)}" data-caption="${enc(cap)}" data-group="${enc(group)}" data-index="${i}" aria-label="${enc(alt)} 확대"><img src="${enc(src)}" alt="${enc(alt)}" loading="lazy" decoding="async"></button>`;
 const linkBtn=l=>{const ext=/^https?:/.test(l.url);const deck=/Deck|기획서/.test(l.label);const cls=l.kind==='site'||l.kind==='video'?'btn btn--dark':deck?'btn btn--deck':'btn';const label=deck?`<i class="deck-ic" aria-hidden="true"></i>${enc(l.label)}`:enc(l.label);return `<a class="${cls}" href="${enc(l.url)}" ${ext?'target="_blank" rel="noopener noreferrer"':''}>${label} <span aria-hidden="true">↗</span></a>`;};
 const marks='<i class="mark mark--tl"></i><i class="mark mark--tr"></i><i class="mark mark--bl"></i><i class="mark mark--br"></i>';

 /* ── SELECTED CREDITS 전용 블록 ── */
 function creditsBlock(p,pro){
  const links=[...(pro.cta?[{label:pro.cta.label,url:pro.cta.url,kind:'site'}]:[]),...(p.links||[])];
  return `<section class="proj proj--credits" id="project-${enc(p.id)}" aria-labelledby="t-${enc(p.id)}">
   <div class="wrap">
    <header class="proj-head">
     <div class="proj-meta"><span class="proj-no">${enc(p.number)}</span><span class="proj-cat">${enc(p.categoryLabel)}</span><span class="proj-year">${enc(pro.context||'')}</span></div>
     <h2 id="t-${enc(p.id)}" class="proj-title">Selected <em>Credits</em></h2>
     <p class="proj-sub">${enc(p.subtitle||p.intro)}</p>
    </header>
    <div class="credits-grid">
     <div class="credits-cover" aria-hidden="true">
      <div class="cc-top"><span>SOY KIM</span><span>Selected Credits</span><span>Fashion / Editorial</span></div>
      <div class="cc-main"><span class="cc-word">Selected</span><em class="cc-word cc-word--i">Credits</em></div>
      <div class="cc-mid"><span class="cc-kicker">Drama · Stage · Campaign · Editorial</span></div>
      <div class="cc-tape"><div class="cc-tape-track">${(pro.media||[]).concat(pro.media||[]).map(m=>`<span>${enc(m)}</span>`).join('<i>·</i>')}</div></div>
      <div class="cc-foot"><span>${String((pro.stats||[]).find(s=>s[1].includes('아카이브'))?.[0]||'')} cuts</span><span>Index 01</span></div>
     </div>
     <div class="credits-copy">
      <p class="credits-statement">${enc(pro.statement||'')}</p>
      <dl class="facts facts--inline">
       <div><dt>Media</dt><dd>${(pro.media||[]).map(enc).join(' · ')}</dd></div>
      </dl>
      <ul class="stats">${(pro.stats||[]).map(([n,l])=>`<li><strong>${enc(n)}</strong><span>${enc(l)}</span></li>`).join('')}</ul>
      <div class="proj-links">${links.map(linkBtn).join('')}</div>
     </div>
    </div>
    <div class="process">
     <div class="process-head"><span class="sec-no">What I do — 06 steps</span><h3>한 컷이 완성되기까지, <em>내가 맡는 여섯 단계</em></h3></div>
     <div class="slider"><ol class="process-list slider-track" tabindex="0">${(pro.process||[]).map((s,i)=>`<li class="process-item process-item--type"><span class="pt-no">${enc(s.no)}</span><span class="pt-en">${enc(s.en)}</span><strong class="pt-ko">${enc(s.title)}</strong><p class="pt-desc">${enc(s.desc)}</p><i class="pt-line" aria-hidden="true"></i></li>`).join('')}</ol><div class="slider-nav"><button type="button" class="slider-btn" data-step="-1" aria-label="이전">←</button><button type="button" class="slider-btn" data-step="1" aria-label="다음">→</button></div></div>
    </div>
    ${pro.insight?`<blockquote class="insight"><span>INSIGHT</span><p>${enc(pro.insight)}</p></blockquote>`:''}
    ${p.note?`<p class="proj-note">${enc(p.note)}</p>`:''}
   </div>
  </section>`;
 }

 /* ── 일반 프로젝트 블록 (좌/우 번갈아) ── */
 function projectBlock(p,pro,flip){
  const links=[...(pro.cta?[{label:pro.cta.label,url:pro.cta.url,kind:'site'}]:[]),...(p.links||[])];
  const gallery=(p.gallery||[]).filter(g=>g!==p.image);
  return `<section class="proj ${flip?'proj--flip':''}" id="project-${enc(p.id)}" aria-labelledby="t-${enc(p.id)}">
   <div class="wrap">
    <header class="proj-head">
     <div class="proj-meta"><span class="proj-no">${enc(p.number)}</span><span class="proj-cat">${enc(p.categoryLabel)}</span><span class="proj-year">${enc(pro.context||'')}</span></div>
     <h2 id="t-${enc(p.id)}" class="proj-title">${enc(p.title)}</h2>
     <p class="proj-sub">${enc(p.subtitle||p.intro)}</p>
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
     </aside>
    </div>
    <div class="proj-main">
     ${pro.stats?`<ul class="stats">${pro.stats.map(([n,l])=>`<li><strong>${enc(n)}</strong><span>${enc(l)}</span></li>`).join('')}</ul>`:''}
     ${(p.steps||[]).length?`<ol class="steps">${p.steps.map(([t,d],i)=>`<li><span>0${i+1}</span><div><strong>${enc(t)}</strong><p>${enc(d)}</p></div></li>`).join('')}</ol>`:''}
     ${pro.insight?`<blockquote class="insight"><span>INSIGHT</span><p>${enc(pro.insight)}</p></blockquote>`:''}
     ${pro.deck?`<div class="deck"><div class="deck-head"><span class="gallery-label">기획서 · ${String(pro.deck.count).padStart(2,'0')} slides</span><span class="deck-hint">슬라이드를 누르면 크게 넘겨볼 수 있어요</span></div><div class="slider"><div class="deck-strip slider-track" tabindex="0">${Array.from({length:pro.deck.count},(_,i)=>thumb(`${pro.deck.dir}/s_${String(i+1).padStart(2,'0')}.jpg`,`${p.title} 기획서 ${i+1}`,`${p.title} 기획서 · ${i+1} / ${pro.deck.count}`,'deck-'+p.id,i,'deck-slide')).join('')}<button type="button" class="deck-more" data-more="deck-${enc(p.id)}"><span>전체 보기</span><i>${String(pro.deck.count).padStart(2,'0')} slides ↗</i></button></div><div class="slider-nav"><button type="button" class="slider-btn" data-step="-1" aria-label="이전">←</button><button type="button" class="slider-btn" data-step="1" aria-label="다음">→</button></div></div></div>`:''}
     ${gallery.length?`<div class="proj-gallery ${p.id==='research'?'proj-gallery--sheet':''}"><span class="gallery-label">${enc(pro.galleryLabel||'Gallery')}</span><div class="slider"><div class="gallery-strip slider-track" tabindex="0">${gallery.map((src,i)=>thumb(src,`${p.title} 이미지 ${i+1}`,`${p.title} · ${i+1} / ${gallery.length}`,'gal-'+p.id,i)).join('')}</div><div class="slider-nav"><button type="button" class="slider-btn" data-step="-1" aria-label="이전">←</button><button type="button" class="slider-btn" data-step="1" aria-label="다음">→</button></div></div></div>`:''}
     ${p.note?`<p class="proj-note">${enc(p.note)}</p>`:''}
    </div>
   </div>
  </section>`;
 }

 /* ── 카테고리별 렌더 ── */
 let flip=false;
 document.getElementById('projectBlocks').innerHTML=CATS.map(c=>{
  const list=byCat(c.key);if(!list.length)return '';
  const blocks=list.map(p=>{const pro=PRO[p.id]||{};if(p.id==='fashion')return creditsBlock(p,pro);const html=projectBlock(p,pro,flip);flip=!flip;return html;}).join('');
  return `<div class="cat" id="cat-${c.key}"><header class="cat-band"><div class="wrap cat-band-in"><span class="cat-no">${c.no}</span><div class="cat-band-txt"><h2>${enc(c.ko)}</h2><em>${enc(c.en)}</em><p>${enc(c.lead)}</p></div><span class="cat-count">${String(list.length).padStart(2,'0')} ${list.length>1?'projects':'project'}</span></div></header>${blocks}</div>`;
 }).join('');


 /* ── Contact ── */
 document.getElementById('contactRow').innerHTML=(ABOUT.contact||[]).map(c=>`<a class="contact-link" href="${enc(c.url)}" ${/^https?:/.test(c.url)?'target="_blank" rel="noopener noreferrer"':''}><span>${enc(c.label)}</span><i aria-hidden="true">↗</i></a>`).join('');

 /* ── 슬라이더 ── */
 document.addEventListener('click',e=>{const b=e.target.closest('.slider-btn');if(!b)return;const t=b.closest('.slider').querySelector('.slider-track');const f=t.firstElementChild;const w=f?f.getBoundingClientRect().width+12:300;t.scrollBy({left:w*2*(+b.dataset.step),behavior:'smooth'});});
 document.addEventListener('click',e=>{const m=e.target.closest('.deck-more');if(!m)return;const all=[...document.querySelectorAll(`.thumb[data-group="${CSS.escape(m.dataset.more)}"]`)].sort((x,y)=>+x.dataset.index-+y.dataset.index);open(all.map(x=>({src:x.dataset.src,alt:x.dataset.alt,caption:x.dataset.caption})),0);});
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
