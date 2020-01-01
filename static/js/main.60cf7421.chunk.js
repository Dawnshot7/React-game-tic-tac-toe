(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{10:function(e,t,a){"use strict";a.r(t);var n=a(8),r=a(1),s=a(2),u=a(4),i=a(3),l=a(5),c=a(0),o=a.n(c),h=a(7),m=a.n(h);a(15);function p(e){return o.a.createElement("button",{className:"square",onClick:e.onClick},e.value)}var b=function(e){function t(){return Object(r.a)(this,t),Object(u.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(s.a)(t,[{key:"renderSquare",value:function(e){var t=this;return o.a.createElement(p,{value:this.props.squares[e],onClick:function(){return t.props.onClick(e)}})}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("div",{className:"board-row"},this.renderSquare(0),this.renderSquare(1),this.renderSquare(2)),o.a.createElement("div",{className:"board-row"},this.renderSquare(3),this.renderSquare(4),this.renderSquare(5)),o.a.createElement("div",{className:"board-row"},this.renderSquare(6),this.renderSquare(7),this.renderSquare(8)))}}]),t}(o.a.Component),v=function(e){function t(){return Object(r.a)(this,t),Object(u.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("label",null,this.props.label,o.a.createElement("input",{onChange:this.props.onValueChange,value:this.props.value,type:"text"}))}}]),t}(o.a.Component),d=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(u.a)(this,Object(i.a)(t).call(this,e))).state={history:[{squares:Array(9).fill(null),note:""}],stepNumber:0,xIsNext:!0,currentNote:""},a}return Object(l.a)(t,e),Object(s.a)(t,[{key:"handleClick",value:function(e){var t=this.state.history.slice(0,this.state.stepNumber+1),a=t[t.length-1].squares.slice();N(a)||a[e]||(a[e]=this.state.xIsNext?"X":"O",this.setState({history:t.concat([{squares:a,note:this.state.currentNote}]),currentNote:"",stepNumber:t.length,xIsNext:!this.state.xIsNext}))}},{key:"jumpTo",value:function(e){this.setState({stepNumber:e,xIsNext:e%2===0})}},{key:"onValueChange",value:function(e,t){this.setState({currentNote:t.target.value})}},{key:"render",value:function(){var e,t=this,a=this.state.history,n=a[this.state.stepNumber],r=N(n.squares),s=a.map((function(e,n){var r=n?"Go to move #"+n:"Go to game start",s=a[n].note;return o.a.createElement("li",{key:n},o.a.createElement("button",{className:"move-button",onClick:function(){return t.jumpTo(n)}},r),o.a.createElement("span",null,"       ",s))}));return e=r?"Winner: "+r:"Next player: "+(this.state.xIsNext?"X":"O"),o.a.createElement("div",{className:"game"},o.a.createElement("div",{className:"status"},o.a.createElement("h4",null,e)),o.a.createElement("div",{className:"game-board"},o.a.createElement(b,{squares:n.squares,onClick:function(e){return t.handleClick(e)}})),o.a.createElement(v,{label:"Notes:",value:this.state.currentNote,onValueChange:this.onValueChange.bind(this,"currentNote")}),o.a.createElement("div",{className:"game-info"},o.a.createElement("ol",{start:"0"},s)))}}]),t}(o.a.Component);function N(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],a=0;a<t.length;a++){var r=Object(n.a)(t[a],3),s=r[0],u=r[1],i=r[2];if(e[s]&&e[s]===e[u]&&e[s]===e[i])return e[s]}return null}m.a.render(o.a.createElement(d,null),document.getElementById("root"))},15:function(e,t,a){},9:function(e,t,a){e.exports=a(10)}},[[9,1,2]]]);
//# sourceMappingURL=main.60cf7421.chunk.js.map