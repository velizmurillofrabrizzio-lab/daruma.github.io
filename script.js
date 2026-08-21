document.addEventListener('DOMContentLoaded',function(){
  const toggle=document.getElementById('menuToggle');
  const nav=document.getElementById('nav');
  if(toggle&&nav){
    toggle.addEventListener('click',()=>{
      if(nav.style.display==='flex'){nav.style.display='none';toggle.textContent='☰'}else{nav.style.display='flex';nav.style.flexDirection='column';toggle.textContent='✕'}
    });
  }
  // Simple enhancement: copy email to clipboard when clicked
  const email=document.getElementById('emailLink');
  if(email){
    email.addEventListener('click',(e)=>{
      // allow normal mailto behavior, but also try clipboard
      try{navigator.clipboard?.writeText(email.textContent||'');}catch(e){}
    });
  }
});

// Language toggle and demo
const i18n = {
  es: {
    'nav.about':'Sobre mí',
    'nav.work':'Proyectos',
    'nav.contact':'Contacto',
    'hero.title':'KAMPO — AI Dispatcher',
    'hero.lead':'Diseño e implementación de soluciones AI para orquestación y automatización de procesos.',
    'hero.cta1':'Ver proyectos',
    'hero.cta2':'Contrátame',
    'about.title':'Sobre mí',
    'about.bio':'Soy desarrollador/a e ingeniero/a de machine learning con experiencia en crear sistemas que integran modelos de IA, pipelines y dashboards operativos. Me concentro en soluciones prácticas, robustas y observables.',
    'work.title':'Proyectos destacados',
    'project.kampo.title':'KAMPO AI Dispatcher',
    'project.kampo.desc':'Plataforma para enrutar peticiones a modelos multi-modal, con política de fallback y monitorización.',
    'project.kampo.stack':'Stack: Python, FastAPI, Redis, Docker, Prometheus',
    'project.vis.title':'Visualizer',
    'project.vis.desc':'Dashboard de observabilidad para pipelines de inferencia en tiempo real.',
    'project.vis.stack':'Stack: React, Grafana, Kafka',
    'demo.title':'Demo interactiva',
    'demo.desc':'Prueba una petición simulada al dispatcher.',
    'contact.title':'Contacto',
    'contact.desc':'¿Quieres colaborar o contratarme? Escríbeme a '
  },
  en: {
    'nav.about':'About',
    'nav.work':'Work',
    'nav.contact':'Contact',
    'hero.title':'KAMPO — AI Dispatcher',
    'hero.lead':'Design and implement AI solutions for orchestration and automation.',
    'hero.cta1':'View projects',
    'hero.cta2':'Hire me',
    'about.title':'About me',
    'about.bio':'I am a developer and machine learning engineer experienced in building systems that integrate AI models, pipelines, and operational dashboards. I focus on practical, robust, and observable solutions.',
    'work.title':'Featured projects',
    'project.kampo.title':'KAMPO AI Dispatcher',
    'project.kampo.desc':'Platform to route requests to multi-modal models, with fallback policy and monitoring.',
    'project.kampo.stack':'Stack: Python, FastAPI, Redis, Docker, Prometheus',
    'project.vis.title':'Visualizer',
    'project.vis.desc':'Observability dashboard for real-time inference pipelines.',
    'project.vis.stack':'Stack: React, Grafana, Kafka',
    'demo.title':'Interactive demo',
    'demo.desc':'Try a simulated dispatcher request.',
    'contact.title':'Contact',
    'contact.desc':'Want to collaborate or hire me? Email '
  }
};

function applyLang(lang){
  const nodes = document.querySelectorAll('[data-i18n]');
  nodes.forEach(n=>{
    const key = n.getAttribute('data-i18n');
    if(!key) return;
    const txt = (i18n[lang] && i18n[lang][key]) || '';
    n.textContent = txt;
  });
  // contact email keep link intact
  const contactDesc = document.querySelector('[data-i18n="contact.desc"]');
  if(contactDesc){
    const email = document.getElementById('emailLink');
    contactDesc.innerHTML = (i18n[lang]['contact.desc'] || '') + (email ? email.outerHTML : '');
  }
}

document.addEventListener('DOMContentLoaded',()=>{
  const langSelect = document.getElementById('langSelect');
  if(langSelect){
    applyLang(langSelect.value||'es');
    langSelect.addEventListener('change',(e)=>applyLang(e.target.value));
  }
  const demoBtn = document.getElementById('demoBtn');
  if(demoBtn){
    demoBtn.addEventListener('click',async ()=>{
      const res = document.getElementById('demoResult');
      if(res) res.textContent = (langSelect && langSelect.value==='en') ? 'Dispatching…' : 'Enviando…';
      // simulate async work
      setTimeout(()=>{
        if(res) res.textContent = (langSelect && langSelect.value==='en') ? 'Success — model routed to primary endpoint.' : 'Éxito — petición enviada al endpoint principal.';
      },900);
    });
  }
});
