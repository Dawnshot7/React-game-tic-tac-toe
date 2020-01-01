(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{10:function(e,t,a){"use strict";a.r(t);var r=a(8),n=a(1),s=a(2),u=a(4),i=a(3),l=a(5),c=a(0),o=a.n(c),h=a(7),m=a.n(h);a(15);function p(e){return o.a.createElement("button",{className:"square",onClick:e.onClick},e.value)}var b=function(e){function t(){return Object(n.a)(this,t),Object(u.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(s.a)(t,[{key:"renderSquare",value:function(e){var t=this;return o.a.createElement(p,{value:this.props.squares[e],onClick:function(){return t.props.onClick(e)}})}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("div",{className:"board-row"},this.renderSquare(0),this.renderSquare(1),this.renderSquare(2)),o.a.createElement("div",{className:"board-row"},this.renderSquare(3),this.renderSquare(4),this.renderSquare(5)),o.a.createElement("div",{className:"board-row"},this.renderSquare(6),this.renderSquare(7),this.renderSquare(8)))}}]),t}(o.a.Component),v=function(e){function t(){return Object(n.a)(this,t),Object(u.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("label",null,this.props.label,o.a.createElement("input",{onChange:this.props.onValueChange,value:this.props.value,type:"text"}))}}]),t}(o.a.Component),d=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(u.a)(this,Object(i.a)(t).call(this,e))).state={history:[{squares:Array(9).fill(null),note:""}],stepNumber:0,xIsNext:!0,currentNote:""},a}return Object(l.a)(t,e),Object(s.a)(t,[{key:"handleClick",value:function(e){var t=this.state.history.slice(0,this.state.stepNumber+1),a=t[t.length-1].squares.slice();f(a)||a[e]||(a[e]=this.state.xIsNext?"X":"O",this.setState({history:t.concat([{squares:a,note:this.state.currentNote}]),currentNote:"",stepNumber:t.length,xIsNext:!this.state.xIsNext}))}},{key:"jumpTo",value:function(e){this.setState({stepNumber:e,xIsNext:e%2===0})}},{key:"onValueChange",value:function(e,t){this.setState({currentNote:t.target.value})}},{key:"render",value:function(){var e,t=this,a=this.state.history,r=a[this.state.stepNumber],n=f(r.squares),s=a.map((function(e,r){var n=r?"Go to move #"+r:"Go to game start",s=a[r].note;return o.a.createElement("li",{key:r},o.a.createElement("button",{onClick:function(){return t.jumpTo(r)}},n),o.a.createElement("h4",null,"Notes: ",s))})),u=a.map((function(e,t){var r=a[t].note;return o.a.createElement("li",{key:t},r)}));return e=n?"Winner: "+n:"Next player: "+(this.state.xIsNext?"X":"O"),o.a.createElement("div",{className:"game"},o.a.createElement("div",{className:"game-board"},o.a.createElement(b,{squares:r.squares,onClick:function(e){return t.handleClick(e)}})),o.a.createElement(v,{label:"Note:",value:this.state.currentNote,onValueChange:this.onValueChange.bind(this,"currentNote")}),o.a.createElement("div",{className:"game-info"},o.a.createElement("div",null,e),o.a.createElement("ol",{start:"0"},s),o.a.createElement("ol",{start:"0"},u)))}}]),t}(o.a.Component);function f(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],a=0;a<t.length;a++){var n=Object(r.a)(t[a],3),s=n[0],u=n[1],i=n[2];if(e[s]&&e[s]===e[u]&&e[s]===e[i])return e[s]}return null}m.a.render(o.a.createElement(d,null),document.getElementById("root"))},15:function(e,t,a){},9:function(e,t,a){e.exports=a(10)}},[[9,1,2]]]);
//# sourceMappingURL=main.1f88a940.chunk.js.map