/* Pure TaskBell v1.5 data helpers. Shared by the browser and Node regression tests. */
(function(root,factory){const value=factory();if(typeof module==='object'&&module.exports)module.exports=value;root.TaskBellCore=value})(typeof globalThis!=='undefined'?globalThis:this,function(){'use strict';
const tones=['bell','chime','digital','gentle','urgent','arcade'];
const isPlain=o=>o!==null&&typeof o==='object'&&!Array.isArray(o);
const integer=(n,min,max)=>Number.isInteger(n)&&n>=min&&n<=max;
function samePreset(a,b){return a.name===b.name&&a.durationMs===b.durationMs&&a.tone===b.tone&&a.repeat===b.repeat}
function reorder(items,source,target){const list=[...items],i=list.findIndex(t=>t.id===source),j=list.findIndex(t=>t.id===target);if(i<0||j<0||i===j)return list;const [item]=list.splice(i,1);list.splice(j,0,item);return list}
function validateEdit(data){const name=String(data.name||'').trim(),h=Number(data.h),m=Number(data.m),s=Number(data.s);if(!name||name.length>60)return{valid:false,error:'Enter a task name (up to 60 characters).'};if(!integer(h,0,999)||!integer(m,0,59)||!integer(s,0,59))return{valid:false,error:'Enter valid hours, minutes, and seconds.'};const durationMs=((h*60+m)*60+s)*1000;if(durationMs===0)return{valid:false,error:'Duration must be greater than zero.'};if(!tones.includes(data.tone))return{valid:false,error:'Select a valid alarm tone.'};return{valid:true,name,durationMs,tone:data.tone,repeat:data.repeat?1:0}}
function makeBackup({timers,history,pomo,prefs,favorites,theme}){return{format:'taskbell-backup',version:1,exportedAt:new Date().toISOString(),data:JSON.parse(JSON.stringify({timers,history,pomo,prefs,favorites,theme}))}}
function validateBackup(input){const bad=error=>({ok:false,error});if(!isPlain(input)||input.format!=='taskbell-backup'||input.version!==1||!isPlain(input.data))return bad('Not a supported TaskBell backup.');const d=input.data;if(!Array.isArray(d.timers)||d.timers.length>500||!Array.isArray(d.history)||d.history.length>500||!Array.isArray(d.favorites)||d.favorites.length>30||!isPlain(d.pomo)||!isPlain(d.prefs))return bad('Backup collections are invalid or too large.');const validName=n=>typeof n==='string'&&n.length>0&&n.length<=60;
const validTone=t=>tones.includes(t);
const validTimer=t=>isPlain(t)&&typeof t.id==='string'&&t.id.length>0&&t.id.length<=100&&validName(t.name)&&integer(t.durationMs,1000,3600000000)&&integer(t.remainingMs,0,3600000000)&&['running','paused','done'].includes(t.state)&&validTone(t.tone)&&integer(t.repeat,0,99)&&(t.state!=='running'||Number.isFinite(t.endAt));
if(!d.timers.every(validTimer)||new Set(d.timers.map(t=>t.id)).size!==d.timers.length)return bad('Backup timer data is invalid.');
if(!d.history.every(h=>isPlain(h)&&validName(h.name)&&Number.isFinite(h.at)&&integer(h.ms,0,3600000000)&&['timer','focus'].includes(h.type)))return bad('Backup history is invalid.');
if(!d.favorites.every(f=>isPlain(f)&&validName(f.name)&&integer(f.durationMs,1000,3600000000)&&validTone(f.tone)&&integer(f.repeat,0,1)))return bad('Backup favorites are invalid.');
const p=d.pomo;if(!['work','short','long'].includes(p.phase)||!['idle','running','paused'].includes(p.state)||!integer(p.work,1,180)||!integer(p.short,1,180)||!integer(p.long,1,180)||!integer(p.cycles,1,12)||!integer(p.round,0,1000000)||!integer(p.completed,0,1000000)||!Number.isFinite(p.remainingMs)||(p.state==='running'&&!Number.isFinite(p.endAt))||typeof p.auto!=='boolean')return bad('Backup Pomodoro settings are invalid.');
const pref=d.prefs;if(typeof pref.sound!=='boolean'||typeof pref.notifications!=='boolean'||!validTone(pref.tone)||!integer(pref.volume,0,100)||!integer(pref.repeat,1,5))return bad('Backup alarm preferences are invalid.');
if(!['classic','midnight','forest','light'].includes(d.theme))return bad('Backup theme is invalid.');
// Re-evaluate elapsed running countdowns on restore. Do not fire historical alarms.
const now=Date.now(),timers=d.timers.map(t=>{const timer={...t};if(timer.state==='running'&&timer.endAt<=now){timer.state='done';timer.remainingMs=0;timer.endAt=null}return timer});const pomo={...p};if(pomo.state==='running'&&pomo.endAt<=now){pomo.state='paused';pomo.endAt=null;pomo.remainingMs=0}
return{ok:true,data:{timers,history:d.history.map(h=>({...h})),pomo,prefs:{...pref},favorites:d.favorites.map(f=>({...f})),theme:d.theme}}}
return{tones,samePreset,reorder,validateEdit,makeBackup,validateBackup};
});
