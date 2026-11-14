const test=require('node:test');
const assert=require('node:assert/strict');
const core=require('../core.js');
const prefs={sound:true,notifications:false,tone:'bell',volume:65,repeat:1};
const pomo={work:25,short:5,long:15,cycles:4,round:0,completed:0,phase:'work',state:'idle',endAt:null,remainingMs:1500000,auto:false};
function fixture(){return {timers:[{id:'a',name:'Meeting',durationMs:60000,remainingMs:30000,state:'paused',endAt:null,tone:'bell',repeat:0}],history:[{id:'h',name:'Focus',ms:1500000,type:'focus',at:Date.now()}],pomo,prefs,favorites:[{name:'Meeting',durationMs:60000,tone:'bell',repeat:0}],theme:'classic'}}
test('edit validation accepts valid inputs',()=>{assert.deepEqual(core.validateEdit({name:' Focus ',h:'1',m:'02',s:'03',tone:'chime',repeat:true}),{valid:true,name:'Focus',durationMs:3723000,tone:'chime',repeat:1})});
test('edit rejects invalid time and names',()=>{assert.equal(core.validateEdit({name:'x',h:0,m:0,s:0,tone:'bell'}).valid,false);assert.equal(core.validateEdit({name:'x',h:1,m:60,s:0,tone:'bell'}).valid,false);assert.equal(core.validateEdit({name:'',h:0,m:1,s:0,tone:'bell'}).valid,false)});
test('reorder moves one timer without mutating original',()=>{const original=[{id:'a'},{id:'b'},{id:'c'}];const next=core.reorder(original,'a','c');assert.deepEqual(next.map(t=>t.id),['b','c','a']);assert.deepEqual(original.map(t=>t.id),['a','b','c']);assert.deepEqual(core.reorder(original,'missing','c'),original)});
test('favorite matching is exact',()=>{const a={name:'Deep work',durationMs:1500000,tone:'bell',repeat:0};assert.equal(core.samePreset(a,{...a}),true);assert.equal(core.samePreset(a,{...a,tone:'urgent'}),false)});
test('backup roundtrip retains all collections',()=>{const data=fixture(),backup=core.makeBackup(data),restored=core.validateBackup(JSON.parse(JSON.stringify(backup)));assert.equal(restored.ok,true);assert.deepEqual(restored.data,data)});
test('backup rejects corrupt, unknown and duplicate timer data',()=>{assert.equal(core.validateBackup({}).ok,false);const backup=core.makeBackup(fixture());backup.data.timers.push({...backup.data.timers[0]});assert.equal(core.validateBackup(backup).ok,false);backup.data.timers.pop();backup.data.prefs.volume=-1;assert.equal(core.validateBackup(backup).ok,false)});
test('expired timers restored as done without ringing',()=>{const backup=core.makeBackup(fixture());backup.data.timers[0].state='running';backup.data.timers[0].endAt=Date.now()-5000;const restored=core.validateBackup(backup);assert.equal(restored.ok,true);assert.equal(restored.data.timers[0].state,'done')});
