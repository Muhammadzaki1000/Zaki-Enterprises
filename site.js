const SLUGS=["excel-dashboard-development", "excel-automation", "excel-data-analysis", "google-sheets-automation", "ai-chatbot-development", "predictive-analytics-forecasting", "computer-vision-solutions", "nlp-sentiment-analysis", "ai-crm-support-integration", "custom-machine-learning", "ai-strategy-consulting", "generative-ai-solutions", "ai-receptionist", "n8n-workflow-automation", "ai-business-automation", "api-integration-automation", "document-processing-automation", "ai-agent-development", "social-media-automation", "powerpoint-presentation-design", "presentation-automation"];

const D=new Proxy(function(){},{get:(t,k)=>k===Symbol.toPrimitive?()=>"":D,set:()=>true,apply:()=>D});const $=s=>document.querySelector(s)||D;
const I={a:'<path d="M12 3v3M12 18v3M3 12h3M18 12h3M6 6l2 2M16 16l2 2M6 18l2-2M16 8l2-2"/><circle cx="12" cy="12" r="3"/>',b:'<rect x="4" y="8" width="16" height="11" rx="3"/><path d="M12 4v4M9 13h.01M15 13h.01M9 16h6"/>',c:'<path d="M4 5h16v11H9l-5 4z"/>',d:'<path d="M4 20V10M10 20V4M16 20v-8M22 20H2"/>',e:'<path d="M4 20l4-1 11-11-3-3L5 16zM14 6l3 3"/>',f:'<path d="M10 14a4 4 0 005 0l3-3a4 4 0 00-5-5l-1 1M14 10a4 4 0 00-5 0l-3 3a4 4 0 005 5l1-1"/>',g:'<circle cx="12" cy="12" r="8"/><path d="M12 12V4M12 12l6 4"/>'};
const SV=[["Excel Dashboard Development", "d", "Interactive Excel dashboards that turn raw spreadsheet data into clear KPIs, charts and reports.", ""], ["Excel Automation", "a", "Automate repetitive Excel tasks and recurring reports so your team stops rebuilding the same files by hand.", ""], ["Excel Data Analysis", "g", "Clean, analyze and explain your spreadsheet data to find trends, costs and opportunities.", ""], ["Google Sheets Automation", "db", "Automate Google Sheets reporting, data entry and updates so your sheets stay accurate with less manual work.", ""], ["AI Chatbot Development", "c", "Custom chatbots for your website, lead generation and customer support, built on your approved content.", ""], ["Predictive Analytics & Forecasting", "g", "Use your historical data to forecast demand, sales and costs, so you can plan with more confidence.", ""], ["Computer Vision & Image Recognition", "search", "Detect, classify and count objects in images for inspection, sorting and monitoring tasks.", ""], ["NLP & Sentiment Analysis", "e", "Understand reviews, messages and surveys at scale: topics, sentiment and urgency.", ""], ["AI CRM & Support Integration", "f", "Connect AI to your CRM and help desk to tag, route and draft replies for customer requests.", ""], ["Custom Machine Learning Development", "gear", "Build, test and deploy machine learning models trained on your own data.", ""], ["AI Strategy & Implementation Consulting", "target", "Find the right AI opportunities for your business and turn them into a practical, prioritized plan.", ""], ["Generative AI & LLM Solutions", "b", "Build business tools on large language models, such as assistants that answer from your own documents.", ""], ["AI Receptionist", "c", "An AI receptionist that greets visitors, answers common questions and captures enquiries, with a clear handoff to your team.", ""], ["n8n Workflow Automation", "f", "Build n8n workflows that connect your apps and automate repetitive business processes.", ""], ["AI Business Automation", "a", "Automate repetitive business tasks, administrative work, reporting, and operational processes.", ""], ["API Integration & Automation", "f", "Connect apps, spreadsheets and AI tools through APIs into dependable automated workflows.", ""], ["Document Processing Automation", "doc", "Extract, organize and route information from invoices, forms and documents with less manual entry.", ""], ["AI Agent Development", "b", "Develop AI agents and assistants that answer questions and handle suitable tasks within clear limits.", ""], ["Social Media Automation", "e", "Plan content, streamline scheduling workflows and automate reporting, with review before anything is published.", ""], ["PowerPoint Presentation Design", "e", "Professional business presentations with clear structure, consistent design and data-driven slides.", ""], ["Presentation Automation", "a", "Turn Excel data into updated PowerPoint reports with a repeatable, data-driven workflow.", ""]];
$("#sv").innerHTML=SV.map((s,i)=>`<article class="bc"><div class="ic"><svg viewBox="0 0 24 24" aria-hidden="true">${I[s[1]]}</svg></div><h3>${s[0]}</h3><p>${s[2]}</p><button class="lm" aria-expanded="false" aria-controls="m${i}" data-i="${i}">Learn More →</button><div class="more" id="m${i}">${s[3]} <a href="/contact/?service=${encodeURIComponent(s[0])}">Ask about this service</a></div></article>`).join("");
$("#mq").innerHTML=[...SV.map(s=>s[0]),...SV.map(s=>s[0])].map(x=>`<span>${x}</span>`).join("");
$("#fl").innerHTML=SV.map((s,i)=>`<li><a href="/services/${SLUGS[i]}/">${s[0]}</a></li>`).join("");
const SL=[["Reduce repetitive manual work","Staff repeat the same copy, paste and checking tasks daily.","Automated workflows handle routine steps while people review exceptions.","More time for higher-value work."],
["Automate data entry and reporting","Reports are rebuilt by hand from several files.","Scripts and integrations gather, clean and format data on a schedule.","Fewer errors, faster reporting."],
["Respond to customer inquiries efficiently","Common questions fill inboxes and chat.","A chatbot answers routine questions and hands complex ones to a person.","Quicker first responses."],
["Connect business tools and applications","Data lives in disconnected apps and sheets.","Integrations sync data between the tools you already use.","A clearer view of operations."],
["Generate marketing content efficiently","Content planning and drafting is slow.","AI-assisted drafting and calendars with an approval step.","More consistent publishing."],
["Track performance through dashboards","KPIs are scattered or reviewed late.","One dashboard for key metrics and trends.","Better-informed decisions."],
["Streamline internal workflows","Approvals and handoffs stall in email.","Structured workflows with notifications and follow-ups.","Fewer delays and less chasing."]];
$("#sl").innerHTML=SL.map(s=>`<div class="row"><div><small>Problem</small><h3>${s[0]}</h3><p>${s[1]}</p></div><div><small>Solution</small><p>${s[2]}</p></div><div><small>Potential benefit</small><p>${s[3]}</p></div></div>`).join("");
$("#in").innerHTML=["E-commerce","Professional services","Marketing agencies","Education and training","Real estate","Consulting businesses","Small and medium-sized businesses","Online entrepreneurs"].map(x=>`<span class="chip">${x}</span>`).join("");
$("#pr").innerHTML=[["Discover","Understand the business and its challenges."],["Strategize","Identify suitable AI opportunities."],["Build","Develop the agreed solution."],["Integrate","Connect and test the necessary systems."],["Optimize","Improve the solution based on feedback and results."]].map((s,i)=>`<div class="st"><b>${i+1}</b><h3>${s[0]}</h3><p>${s[1]}</p></div>`).join("");
$("#wy").innerHTML=[["Tailored solutions","built around your needs"],["Practical AI","implementation, not hype"],["Workflow efficiency","less manual effort"],["Clear communication","plain language, honest scoping"],["Scalable technology","that grows with you"],["Existing tools","integration with what you use"],["Measurable outcomes","a focus on results you can track"]].map(x=>`<li><b>${x[0]}</b> ${x[1]}</li>`).join("");
const FQ=[["What services does Zaki Enterprises provide?","AI business automation, AI agents and assistants, chatbots, AI-powered dashboards, content and social media automation, custom integrations, and data analytics.",["service","offer","provide"]],
["Can you work with businesses in different countries?","Yes. We are a global brand and work remotely across time zones.",["countr","global","international","abroad"]],
["Can AI solutions be customized?","Yes. Every solution is shaped around your workflow, data and goals.",["custom","tailor"]],
["Can AI integrate with existing business applications?","In many cases yes, depending on the applications, their APIs and your security needs.",["integrat","tool","connect","app"]],
["How long does an AI project take?","It depends on scope, integrations and data. We provide an estimate after discovery.",["long","time","deliver","week"]],
["Do all projects require paid AI APIs?","No. Some solutions use rules, spreadsheets or free tiers. Costs depend on the project.",["api","paid","cost","price","pricing","budget"]],
["How can a business request a consultation?","Use the contact form and describe your project.",["consult","start","begin","book","contact"]],
["Is ongoing support available?","Support and improvement options can be agreed per project.",["support","maintain","after"]]];
$("#fq").innerHTML=FQ.map(x=>`<details><summary>${x[0]}</summary><p>${x[1]}</p></details>`).join("");
$("#s").innerHTML='<option value="">Select a service</option>'+SV.map(s=>`<option>${s[0]}</option>`).join("")+"<option>Free consultation</option><option>Not sure yet</option>";
$("#yr").textContent=new Date().getFullYear();
// nav + clicks
const mb=$("#mb"),nl=$("#nl");mb.onclick=()=>{mb.setAttribute("aria-expanded",nl.classList.toggle("open"))};
document.addEventListener("click",e=>{const b=e.target.closest(".lm");if(b){const m=$("#m"+b.dataset.i),o=m.classList.toggle("on");b.setAttribute("aria-expanded",o);b.textContent=o?"Show less ↑":"Learn More →";return}
const a=e.target.closest('a[href^="#"]');if(!a)return;const t=document.getElementById(a.getAttribute("href").slice(1));if(!t)return;e.preventDefault();if(a.dataset.svc){const o=[...$("#s").options].find(x=>x.text===a.dataset.svc);if(o)$("#s").value=o.value}nl.classList.remove("open");mb.setAttribute("aria-expanded","false");t.scrollIntoView({behavior:"smooth"})});
// spotlight
document.addEventListener("pointermove",e=>{const c=e.target.closest&&e.target.closest(".bc");if(c){const r=c.getBoundingClientRect();c.style.setProperty("--mx",e.clientX-r.left+"px");c.style.setProperty("--my",e.clientY-r.top+"px")}});
// reveal
const io=new IntersectionObserver(es=>es.forEach(x=>{if(x.isIntersecting){x.target.classList.add("in");io.unobserve(x.target)}}),{threshold:.12});document.querySelectorAll(".rv").forEach(x=>io.observe(x));
// wow layer
const RM=matchMedia("(prefers-reduced-motion:reduce)").matches,FP=matchMedia("(pointer:fine)").matches;
const pg=$("#pg");addEventListener("scroll",()=>{pg.style.transform=`scaleX(${scrollY/((document.documentElement.scrollHeight-innerHeight)||1)})`},{passive:true});
document.querySelectorAll(".bc").forEach((c,i)=>c.style.animationDelay=i*90+"ms");
const io2=new IntersectionObserver(es=>es.forEach(x=>{if(x.isIntersecting){const t=x.target;t.classList.add("in");io2.unobserve(t);setTimeout(()=>{t.style.transitionDelay="";t.classList.add("done")},1500)}}),{threshold:.15});
document.querySelectorAll(".rows>*,.chips>*,.tl>*,.why>*,#fq>*").forEach((el,i)=>{el.classList.add("rv");el.style.transitionDelay=(i%7)*90+"ms";io2.observe(el)});
const RT=["AI consulting agency","Workflow automation","AI agents & assistants","Dashboards & analytics","Custom integrations"];let ri=0;const rt=$("#rt");
if(!RM)setInterval(()=>{rt.style.opacity=0;setTimeout(()=>{rt.textContent=RT[++ri%RT.length];rt.style.opacity=1},300)},2600);
if(FP&&!RM){const cg=$("#cg");let gx=0,gy=0,tx=0,ty=0;addEventListener("pointermove",e=>{tx=e.clientX;ty=e.clientY});(function a(){gx+=(tx-gx)*.12;gy+=(ty-gy)*.12;cg.style.transform=`translate(${gx}px,${gy}px)`;requestAnimationFrame(a)})();
const hero=$(".hero"),orb=$(".orb");hero.addEventListener("pointermove",e=>{const r=hero.getBoundingClientRect();orb.style.setProperty("--ry",((e.clientX-r.left)/r.width-.5)*18+"deg");orb.style.setProperty("--px",(e.clientX-r.left)/r.width-.5);orb.style.setProperty("--py",(e.clientY-r.top)/r.height-.5);orb.style.setProperty("--rx",-((e.clientY-r.top)/r.height-.5)*18+"deg")});hero.addEventListener("pointerleave",()=>{orb.style.setProperty("--rx","0deg");orb.style.setProperty("--ry","0deg")});
document.querySelectorAll(".btn.p,.hero .btn").forEach(b=>{b.addEventListener("pointermove",e=>{const r=b.getBoundingClientRect();b.style.transform=`translate(${(e.clientX-r.left-r.width/2)*.25}px,${(e.clientY-r.top-r.height/2)*.35}px)`});b.addEventListener("pointerleave",()=>b.style.transform="")});
document.addEventListener("pointermove",e=>{const c=e.target.closest&&e.target.closest(".bc");document.querySelectorAll(".bc").forEach(x=>{if(x!==c){x.style.setProperty("--rx","0deg");x.style.setProperty("--ry","0deg")}});if(c){const r=c.getBoundingClientRect();c.style.setProperty("--ry",((e.clientX-r.left)/r.width-.5)*10+"deg");c.style.setProperty("--rx",-((e.clientY-r.top)/r.height-.5)*10+"deg")}})}
// wow 2
let sn=0;try{sn=sessionStorage.getItem("ld");sessionStorage.setItem("ld","1")}catch(e){}
setTimeout(()=>{$("#ld").classList.add("off");document.body.classList.add("go")},(RM||sn)?0:1250);
if(!RM){const hg=$(".hg");addEventListener("scroll",()=>{const y=Math.min(scrollY,800);hg.style.transform=`translateY(${y*.22}px)`;hg.style.opacity=Math.max(0,1-y/750)},{passive:true});
document.addEventListener("click",e=>{const b=document.createElement("i");b.className="bu";b.style.left=e.clientX+"px";b.style.top=e.clientY+"px";document.body.appendChild(b);setTimeout(()=>b.remove(),700)})}
// neural canvas
(function(){const cv=$("#cv"),x=cv.getContext("2d");if(matchMedia("(prefers-reduced-motion:reduce)").matches)return;let W,H,P=[],m={x:-999,y:-999};
function rs(){W=cv.width=innerWidth;H=cv.height=innerHeight;P=Array.from({length:Math.min(70,Math.floor(W*H/22000))},()=>({x:Math.random()*W,y:Math.random()*H,vx:(Math.random()-.5)*.35,vy:(Math.random()-.5)*.35}))}
addEventListener("resize",rs);addEventListener("pointermove",e=>{m.x=e.clientX;m.y=e.clientY});rs();
(function f(){x.clearRect(0,0,W,H);for(const p of P){p.x+=p.vx;p.y+=p.vy;if(p.x<0||p.x>W)p.vx*=-1;if(p.y<0||p.y>H)p.vy*=-1;x.fillStyle="rgba(34,228,255,.7)";x.beginPath();x.arc(p.x,p.y,1.4,0,6.3);x.fill()}
for(let i=0;i<P.length;i++){for(let j=i+1;j<P.length;j++){const d=Math.hypot(P[i].x-P[j].x,P[i].y-P[j].y);if(d<130){x.strokeStyle=`rgba(79,140,255,${.22*(1-d/130)})`;x.beginPath();x.moveTo(P[i].x,P[i].y);x.lineTo(P[j].x,P[j].y);x.stroke()}}
const d=Math.hypot(P[i].x-m.x,P[i].y-m.y);if(d<170){x.strokeStyle=`rgba(245,196,81,${.5*(1-d/170)})`;x.beginPath();x.moveTo(P[i].x,P[i].y);x.lineTo(m.x,m.y);x.stroke()}}
requestAnimationFrame(f)})()})();
// chat preview
const cp=$("#cp");$("#cbt").onclick=()=>cp.classList.toggle("on");
$("#qs").innerHTML=FQ.slice(0,4).map(x=>`<button>${x[0]}</button>`).join("");
function say(t,c){const d=document.createElement("div");d.className="m "+c;d.textContent=t;$("#cl").appendChild(d);$("#cl").scrollTop=1e9}
function ask(q){say(q,"u");const l=q.toLowerCase(),h=FQ.find(x=>x[0]===q||x[2].some(k=>l.includes(k)));setTimeout(()=>say(h?h[1]:"I am a design preview with a limited set of answers. Please use the contact form for anything else.","a"),350)}
$("#qs").onclick=e=>{if(e.target.tagName==="BUTTON")ask(e.target.textContent)};
const snd=()=>{const v=$("#ci").value.trim();if(v){ask(v);$("#ci").value=""}};$("#cs").onclick=snd;$("#ci").onkeydown=e=>{if(e.key==="Enter")snd()};
// form
$("#f").addEventListener("submit",ev=>{ev.preventDefault();const v={n:$("#n").value.trim(),e:$("#e").value.trim(),c:$("#c").value.trim(),s:$("#s").value,d:$("#d").value.trim()};
const er={n:v.n?"":"Please enter your full name.",e:!v.e?"Please enter your business email.":/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.e)?"":"Please enter a valid email address.",c:v.c?"":"Please enter your company name.",s:v.s?"":"Please select a service.",d:v.d.length>=10?"":"Please describe your project (at least 10 characters)."};
let bad=0;for(const k in er){$("#e-"+k).textContent=er[k];if(er[k])bad=1}const f=$("#fs");f.className="wa";
f.textContent=bad?"Please fix the highlighted fields.":"Your details are valid, but this design preview is not connected to a backend yet, so nothing was sent."});

(function(){const q=new URLSearchParams(location.search).get("service"),s=document.getElementById("s");if(q&&s){const o=[...s.options].find(x=>x.text===q);if(o)s.value=o.value}})();

;(function(){
const sl=ms=>new Promise(r=>setTimeout(r,ms)),RMd=matchMedia("(prefers-reduced-motion:reduce)").matches;
function type(el,txt,sp){el.textContent="";el.classList.remove("fin");return new Promise(async r=>{if(RMd){el.textContent=txt;el.classList.add("fin");return r()}for(let i=1;i<=txt.length;i++){el.textContent=txt.slice(0,i);await sl(sp||22)}el.classList.add("fin");r()})}
const wait=async el=>{while(el.dataset.vis!=="1")await sl(400)};
const P={
async agent(el){const L=[...el.querySelectorAll(".dm-steps li")],t=el.querySelector(".typed"),b=el.querySelector(".badge");
for(;;){await wait(el);L.forEach(x=>x.className="");b.classList.remove("on");t.textContent="";
for(const x of L){x.className="on";await sl(RMd?0:900);x.className="done"}
await type(t,t.dataset.t);b.classList.add("on");if(RMd)return;await sl(4500)}},
async chat(el){const body=el.querySelector(".cw-body");let run=0;
const S=[["u","Hi, do you work with small businesses?"],["b","Yes. We help small and growing businesses automate work, build chatbots and create dashboards."],["u","How long does a project take?"],["b","It depends on the scope. Share a few details and a team member will suggest a timeline."],["u","Can I book a consultation?"],["b",'Of course. <a href="/contact/?service=Free%20consultation">Request a free consultation</a>']];
const add=(c,h)=>{const d=document.createElement("div");d.className="cm "+c;d.innerHTML=h;body.appendChild(d);body.scrollTop=1e9;return d};
async function play(){const id=++run;body.innerHTML="";for(const [c,h] of S){if(id!==run)return;if(c==="b"&&!RMd){const t=add("b",'<span class="td"><i></i><i></i><i></i></span>');await sl(900);t.remove()}else await sl(RMd?0:700);if(id!==run)return;add(c,h)}}
el.querySelector("[data-replay]").onclick=()=>play();
for(;;){await wait(el);await play();if(RMd)return;await sl(7000)}},
async dash(el){const D={week:{l:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],v:[42,55,48,70,64,38,30],k:[128,"2.4 h",9]},month:{l:["W1","W2","W3","W4"],v:[210,260,240,310],k:[820,"2.1 h",6]},quarter:{l:["Jan","Feb","Mar"],v:[860,940,1020],k:[2820,"1.8 h",4]}};
const bt=[...el.querySelectorAll("[data-k]")],bars=el.querySelector(".dbars"),ks=[...el.querySelectorAll(".dkp b")];let user=0;
function show(k){bt.forEach(b=>b.setAttribute("aria-pressed",b.dataset.k===k));const d=D[k],m=Math.max(...d.v);bars.innerHTML=d.l.map(x=>`<div style="height:4px"><span>${x}</span></div>`).join("");
requestAnimationFrame(()=>requestAnimationFrame(()=>[...bars.children].forEach((c,i)=>c.style.height=(d.v[i]/m*100)+"%")));
ks.forEach((e,i)=>{const t=d.k[i];if(typeof t!=="number"||RMd){e.textContent=t;return}const s=performance.now();(function f(n){const p=Math.min(1,(n-s)/900);e.textContent=Math.round(t*p);if(p<1)requestAnimationFrame(f)})(s)})}
bt.forEach(b=>b.onclick=()=>{user=1;show(b.dataset.k)});show("week");
const order=["week","month","quarter"];let i=0;for(;;){await wait(el);await sl(4500);if(user||RMd)return;i=(i+1)%3;show(order[i])}},
async social(el){const L=[...el.querySelectorAll(".sp>li")],t=el.querySelector(".typed"),bd=el.querySelector(".badge"),cs=[...el.querySelectorAll(".cal i")];
for(;;){await wait(el);L.forEach(x=>x.className="");bd.classList.remove("on");cs.forEach(c=>c.classList.remove("on"));t.textContent="";
for(let s=0;s<4;s++){L[s].className="on";if(s===2)bd.classList.add("on");
if(s===1)await type(t,t.dataset.t,18);else if(s===3){for(const c of cs){c.classList.add("on");await sl(RMd?0:350)}}else await sl(RMd?0:1100);
await sl(RMd?0:500);L[s].className="done"}
if(RMd)return;await sl(4000)}}};
const io=new IntersectionObserver(es=>es.forEach(e=>{e.target.dataset.vis=e.isIntersecting?"1":"0"}),{threshold:.25});
document.querySelectorAll("[data-demo]").forEach(el=>{io.observe(el);P[el.dataset.demo]&&P[el.dataset.demo](el)});
})();

;(function(){
const sl=ms=>new Promise(r=>setTimeout(r,ms)),RMd=matchMedia("(prefers-reduced-motion:reduce)").matches;
function type(el,txt,sp){el.textContent="";el.classList.remove("fin");return new Promise(async r=>{if(RMd){el.textContent=txt;el.classList.add("fin");return r()}for(let i=1;i<=txt.length;i++){el.textContent=txt.slice(0,i);await sl(sp||22)}el.classList.add("fin");r()})}
const wait=async el=>{while(el.dataset.vis!=="1")await sl(400)};
const P={
async nodes(el){const N=[...el.querySelectorAll(".nd-n")],Ls=[...el.querySelectorAll(".nd-l")],o=el.querySelector(".nd-out");
for(;;){await wait(el);N.forEach(n=>{n.className="nd-n";n.querySelector("small").textContent="Waiting..."});Ls.forEach(l=>l.className="nd-l");o.textContent="";o.classList.remove("fin");
for(let i=0;i<N.length;i++){N[i].className="nd-n on";N[i].querySelector("small").textContent="Running...";await sl(RMd?0:700);N[i].className="nd-n done";N[i].querySelector("small").textContent=N[i].dataset.d;if(Ls[i]){Ls[i].className="nd-l go";await sl(RMd?0:500)}}
await type(o,o.dataset.t);if(RMd)return;await sl(4500)}},
async sheet(el){const R=[...el.querySelectorAll("tbody tr")],m=el.dataset.mode,b=el.querySelector(".badge"),t=el.querySelector(".tot");
for(;;){await wait(el);b.classList.remove("on");if(t)t.textContent="0";
R.forEach(r=>{r.className=m==="clean"?"bad":"hid";r.querySelector(".st").textContent=m==="clean"?"!":"";if(m==="clean")r.querySelectorAll("[data-m]").forEach(c=>c.textContent=c.dataset.m)});
for(const r of R){await sl(RMd?0:750);if(m==="clean")r.querySelectorAll("[data-m]").forEach(c=>c.textContent=c.dataset.c);r.className="ok";r.querySelector(".st").textContent=m==="clean"?"✓":"Synced ✓"}
if(t){const v=+t.dataset.v;for(let i=1;i<=20;i++){t.textContent=Math.round(v*i/20).toLocaleString("en-US");await sl(RMd?0:40)}}
b.classList.add("on");if(RMd)return;await sl(4000)}},
async insight(el){const bars=el.querySelector(".dbars"),t=el.querySelector(".typed"),V=[50,52,76,58,55,54],L=["Jan","Feb","Mar","Apr","May","Jun"];
for(;;){await wait(el);t.textContent="";bars.innerHTML=L.map(x=>`<div style="height:4px"><span>${x}</span></div>`).join("");await sl(RMd?0:300);
[...bars.children].forEach((c,i)=>c.style.height=V[i]+"%");await sl(RMd?0:1100);bars.children[2].classList.add("hot");await sl(RMd?0:500);await type(t,t.dataset.t);if(RMd)return;await sl(4500)}},
async docx(el){const L=[...el.querySelector(".dx-doc").children],F=[...el.querySelectorAll(".dx-f div")],b=el.querySelector(".badge");
for(;;){await wait(el);b.classList.remove("on");L.forEach(x=>x.className="");F.forEach(f=>{f.className="";f.querySelector("span").textContent=""});
for(let i=0;i<4;i++){L[i].className="hl";await sl(RMd?0:600);const s=F[i].querySelector("span");F[i].className="ok";s.textContent=s.dataset.v;await sl(RMd?0:400);L[i].className="done"}
b.classList.add("on");if(RMd)return;await sl(4500)}},
async forecast(el){const bars=el.querySelector(".dbars"),t=el.querySelector(".typed"),H=[40,46,44,52,58,62],F=[66,70,75],L=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep"];
for(;;){await wait(el);t.textContent="";bars.innerHTML=L.map((x,i)=>`<div class="${i>5?"fc":""}" style="height:4px"><span>${x}</span></div>`).join("");await sl(RMd?0:300);
const V=H.concat(F);for(let i=0;i<V.length;i++){bars.children[i].style.height=V[i]+"%";await sl(RMd?0:(i<6?200:450))}
await sl(RMd?0:400);await type(t,t.dataset.t);if(RMd)return;await sl(5000)}},
async vision(el){const B=[...el.querySelectorAll(".vz-b")],sc=el.querySelector(".vz-scan"),bd=el.querySelector(".badge");
for(;;){await wait(el);B.forEach(b=>b.classList.remove("on"));bd.classList.remove("on");sc.classList.remove("go");void sc.offsetWidth;
if(RMd){B.forEach(b=>b.classList.add("on"));bd.classList.add("on");return}
sc.classList.add("go");const T=[500,900,1300];for(let i=0;i<B.length;i++){await sl(i?T[i]-T[i-1]:T[0]);B[i].classList.add("on")}
await sl(500);bd.classList.add("on");await sl(4500)}},
async sentiment(el){const L=[...el.querySelectorAll(".sn li")],bar=[...el.querySelectorAll(".sn-bar i")],W=bar.map(i=>i.style.width),sm=el.querySelector(".sn-sum");
for(;;){await wait(el);L.forEach(l=>l.classList.remove("on"));bar.forEach(i=>i.style.width="0%");sm.classList.remove("on");
for(const l of L){await sl(RMd?0:800);l.classList.add("on")}
bar.forEach((i,k)=>i.style.width=W[k]);await sl(RMd?0:700);sm.classList.add("on");if(RMd)return;await sl(5000)}},
async recept(el){const M=el.querySelectorAll(".rc-msg"),u=M[0],b=M[1],F=[...el.querySelectorAll(".dx-f div")],bd=el.querySelector(".badge");
for(;;){await wait(el);bd.classList.remove("on");u.style.opacity=0;b.style.opacity=0;b.textContent="";F.forEach(f=>{f.className="";f.querySelector("span").textContent=""});
await sl(RMd?0:400);u.style.opacity=1;await sl(RMd?0:900);b.style.opacity=1;await type(b,b.dataset.t);
for(const f of F){await sl(RMd?0:500);const s=f.querySelector("span");f.className="ok";s.textContent=s.dataset.v}
await sl(RMd?0:400);bd.classList.add("on");if(RMd)return;await sl(4500)}},
async slides(el){const S=[...el.querySelectorAll(".sl")],D=[...el.querySelectorAll(".sdots button")];let cur=0,user=0;
const show=i=>{cur=i;S.forEach((s,k)=>s.classList.toggle("on",k===i));D.forEach((d,k)=>d.classList.toggle("on",k===i))};
D.forEach((d,k)=>d.onclick=()=>{user=1;show(k)});show(0);if(RMd)return;
for(;;){await wait(el);await sl(3200);if(user){await sl(6000);user=0}show((cur+1)%S.length)}},
async x2p(el){const V=[...el.querySelectorAll(".v")],B=[...el.querySelectorAll(".mb i")],b=el.querySelector(".badge"),D=[[42,55,48],[58,61,70],[66,52,74]];let k=0;
for(;;){await wait(el);b.classList.remove("on");V.forEach((c,i)=>{c.textContent=D[k][i];c.classList.add("chg")});await sl(RMd?0:500);B.forEach((x,i)=>x.style.height=D[k][i]+"%");V.forEach(c=>c.classList.remove("chg"));await sl(RMd?0:700);b.classList.add("on");if(RMd)return;await sl(3200);k=(k+1)%D.length}}};
const io=new IntersectionObserver(es=>es.forEach(e=>{e.target.dataset.vis=e.isIntersecting?"1":"0"}),{threshold:.2});
document.querySelectorAll("[data-demo]").forEach(el=>{const f=P[el.dataset.demo];if(f){io.observe(el);f(el)}});
})();

;(function(){const cl=()=>document.querySelectorAll(".dd.open").forEach(d=>{d.classList.remove("open");d.querySelector(".ddb").setAttribute("aria-expanded","false")});
document.querySelectorAll(".ddb").forEach(b=>b.addEventListener("click",e=>{e.stopPropagation();const d=b.closest(".dd"),o=!d.classList.contains("open");cl();if(o){d.classList.add("open");b.setAttribute("aria-expanded","true")}}));
addEventListener("keydown",e=>{if(e.key==="Escape")cl()});document.addEventListener("click",e=>{if(!e.target.closest(".dd"))cl()})})();
