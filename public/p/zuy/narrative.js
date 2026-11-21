const chapters=[...document.querySelectorAll('.deck-slide')];
const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
let current=0;
const prev=document.querySelector('[data-prev]'),next=document.querySelector('[data-next]');
function update(){let position=0;chapters.forEach((s,i)=>{if(s.getBoundingClientRect().top<innerHeight*.42)position=i});current=position;document.querySelector('[data-counter]').textContent=String(current+1).padStart(2,'0')+' / '+chapters.length;prev.disabled=current===0;next.disabled=current===chapters.length-1;const max=document.documentElement.scrollHeight-innerHeight;document.querySelector('.deck-progress').style.width=(max?scrollY/max*100:0)+'%'}
function go(delta){chapters[Math.max(0,Math.min(chapters.length-1,current+delta))].scrollIntoView({behavior:reduced?'auto':'smooth'})}
prev.addEventListener('click',()=>go(-1));next.addEventListener('click',()=>go(1));addEventListener('scroll',update,{passive:true});addEventListener('resize',update);update();
addEventListener('keydown',e=>{if(/INPUT|TEXTAREA|SELECT/.test(e.target.tagName))return;if(e.key==='ArrowRight'){e.preventDefault();go(1)}if(e.key==='ArrowLeft'){e.preventDefault();go(-1)}});
const flow=document.querySelector('[data-demand]'),nodes=[...flow.querySelectorAll('[data-node]')],caption=document.querySelector('[data-flow-caption]'),play=document.querySelector('[data-play-flow]');
const lines=['A short LinkedIn post or clip helps the right owner recognize the problem.','The article and case study answer the next question: how does ZUY solve it? Search can bring new readers here.','A useful newsletter and playbook bring people back. They get to know how Mike thinks.','When the need is real, we talk. I check the fit; Mike and I map the work with the client.'];
let timer=null,step=-1;
function show(i){nodes.forEach((n,j)=>n.classList.toggle('active',i===j));caption.textContent=lines[i]}
function stop(){clearInterval(timer);timer=null;play.textContent=step>=3?'Replay the path':'Play the path';play.setAttribute('aria-pressed','false')}
function start(){clearInterval(timer);step=0;show(step);play.textContent='Pause';play.setAttribute('aria-pressed','true');if(reduced){stop();play.textContent='Next step';return}timer=setInterval(()=>{step++;if(step>3){step=3;stop();return}show(step)},4200)}
play.addEventListener('click',()=>{if(reduced){step=(step+1)%4;show(step);play.textContent='Next step';return}if(timer)stop();else start()});
if(!reduced&&'IntersectionObserver'in window){let started=false;new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting&&!started){started=true;start()}else if(!e.isIntersecting&&timer)stop()}),{threshold:.35}).observe(flow)}
document.addEventListener('visibilitychange',()=>{if(document.hidden)stop()});
