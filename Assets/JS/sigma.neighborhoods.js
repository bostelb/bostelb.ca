;(function(){"use strict";if(typeof sigma==="undefined")throw"sigma is not declared";sigma.classes.graph.addMethod("neighborhood",function(e){var t,n,r,i,s,o,u=e,a=false,f={},l={},c={nodes:[],edges:[]};if(!this.nodes(e))return c;i=this.nodes(e);s={};s.center=true;for(t in i)s[t]=i[t];f[e]=true;c.nodes.push(s);do{if(this.inNeighborsCount[u]==0)a=true;else{for(t in this.inNeighborsIndex[u]){for(n in this.inNeighborsIndex[u][t])if(this.inNeighborsIndex[u][t][n].attributes.Weight=="1.0"){if(f[t])a=true;o=t}if(!f[t]){f[t]=true;c.nodes.push(this.nodesIndex[t])}}}u=o}while(!a);for(t in this.allNeighborsIndex[e]){if(!f[t]){f[t]=true;c.nodes.push(this.nodesIndex[t])}for(n in this.allNeighborsIndex[e][t])if(!l[n]){l[n]=true;c.edges.push(this.edgesIndex[n])}}for(t in f)if(t!==e)for(n in f)if(n!==e&&t!==n&&this.allNeighborsIndex[t][n])for(r in this.allNeighborsIndex[t][n])if(!l[r]){l[r]=true;c.edges.push(this.edgesIndex[r])}return c});sigma.utils.pkg("sigma.plugins");sigma.plugins.neighborhoods=function(){var e=false,t=[],n=new sigma.classes.graph;this.neighborhood=function(e){return n.neighborhood(e)};this.load=function(e,t){var r=function(){if(window.XMLHttpRequest)return new XMLHttpRequest;var e,t;if(window.ActiveXObject){e=["Msxml2.XMLHTTP.6.0","Msxml2.XMLHTTP.3.0","Msxml2.XMLHTTP","Microsoft.XMLHTTP"];for(t in e)try{return new ActiveXObject(e[t])}catch(n){}}return null}();if(!r)throw"XMLHttpRequest not supported, cannot load the data.";r.open("GET",e,true);r.onreadystatechange=function(){if(r.readyState===4){n.clear().read(JSON.parse(r.responseText));if(t)t()}};r.send();return this};this.read=function(e){n.clear().read(e)}}}).call(window)