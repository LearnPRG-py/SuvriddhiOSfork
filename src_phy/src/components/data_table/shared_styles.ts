export const SHARED_STYLE = `
@import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=Chakra+Petch:wght@300;500;700&display=swap');

*{box-sizing:border-box;margin:0;padding:0;}

.pt-wrap{
  font-family:'Space Mono',monospace;
  background:#03030a;
  min-height:100vh;
  color:#eee;
  padding:16px;
  overflow-x:auto;
  display:flex;
  flex-direction:column;
  align-items:center;
}

.modal-bg{position:fixed;inset:0;background:rgba(0,0,0,.75);z-index:100;display:flex;align-items:center;justify-content:center;animation:fi .18s ease;}
.modal{background:#090912;border-radius:14px;padding:28px 32px;width:360px;max-width:95vw;position:relative;animation:su .22s cubic-bezier(.22,.68,0,1.2);}
@keyframes fi{from{opacity:0}to{opacity:1}}
@keyframes su{from{transform:translateY(18px) scale(.97);opacity:0}to{transform:none;opacity:1}}
@keyframes pulse{0%,100%{opacity:.6}50%{opacity:1}}
@keyframes pop{from{opacity:0;transform:scale(.7)}to{opacity:1;transform:none}}

.bar-track{height:4px;background:#111128;border-radius:2px;overflow:hidden;margin-top:3px;}
.bar-fill{height:4px;border-radius:2px;transition:width .7s cubic-bezier(.22,.68,0,1.2);}

.el{cursor:pointer;border-radius:3px;transition:transform .13s ease,box-shadow .13s ease,opacity .15s ease,background .13s ease;position:relative;user-select:none;}
.el:hover{transform:scale(1.18);z-index:20;}
.el.dim{opacity:.15;pointer-events:none;}
.el-anim{animation:pop .4s cubic-bezier(.22,.68,0,1.2) both;}

.chip{cursor:pointer;border-radius:4px;padding:3px 8px;font-size:9px;letter-spacing:.8px;text-transform:uppercase;transition:opacity .15s,transform .1s;font-family:'Space Mono',monospace;white-space:nowrap;}
.chip:hover{transform:scale(1.05);}

.close-btn{position:absolute;top:14px;right:16px;background:none;border:none;color:#555;font-size:18px;cursor:pointer;transition:color .15s;font-family:inherit;line-height:1;}
.close-btn:hover{color:#eee;}

/* shared table — used as chem-table AND phy-table */
.chem-table,.phy-table{
  width:100%;
  border-collapse:collapse;
  font-family:'Space Mono',monospace;
}
.chem-table th,.chem-table td,
.phy-table th,.phy-table td{
  padding:6px 8px;
  border-bottom:1px solid #111;
  font-size:11px;
  color:#bbb;
  text-align:left;
}
.chem-table th,.phy-table th{
  border-bottom:1px solid #222;
  color:#555;
  text-transform:uppercase;
  font-size:9px;
  letter-spacing:.6px;
}

.section-heading{
  font-family:'Chakra Petch',sans-serif;
  font-size:13px;
  font-weight:700;
  color:#eee;
  letter-spacing:1.5px;
  text-transform:uppercase;
  margin-bottom:10px;
}

.data-section{
  width:100%;
  max-width:860px;
  margin-bottom:36px;
}
`;
