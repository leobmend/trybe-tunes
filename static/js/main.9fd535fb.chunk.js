(this.webpackJsonptrybetunes=this.webpackJsonptrybetunes||[]).push([[0],{31:function(e,t,a){},32:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var n=a(1),i=a.n(n),c=a(23),r=a.n(c),s=(a(31),a(13)),o=a(15),l=a(2),u=a(3),d=a(7),h=a(4),j=a(5),b=a(14),m=a(6),O=(a(32),a(0)),p=function(e){Object(h.a)(a,e);var t=Object(j.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){var e=this.props.className;return Object(O.jsx)("div",{className:"".concat(e,"-loading"),children:"Carregando..."})}}]),a}(i.a.Component),f=p,v=a.p+"static/media/earphones.a61e0e4b.svg",g=function(e){Object(h.a)(a,e);var t=Object(j.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){var e=this.props,t=e.userName,a=e.handleChange,n=e.handleClick,i=e.handleEnterKey,c=e.loading,r=t.length<3;return Object(O.jsxs)("main",{className:"login","data-testid":"page-login",children:[Object(O.jsxs)("div",{className:"logo-container",children:[Object(O.jsx)("h1",{children:"trybe"}),Object(O.jsx)("img",{className:"earphone-img",src:v,alt:"Fones de ouvido"}),Object(O.jsx)("h1",{children:"tunes"})]}),Object(O.jsxs)("div",{className:"login-container",children:[Object(O.jsx)("h1",{children:"Login"}),c?Object(O.jsx)(f,{className:"login"}):Object(O.jsxs)("form",{className:"login-form",onSubmit:function(e){return e.preventDefault()},children:[Object(O.jsxs)("label",{htmlFor:"userName",children:["Usu\xe1rio",Object(O.jsx)("input",{type:"text","data-testid":"login-name-input",name:"userName",autoComplete:"off",value:t,onChange:a,onKeyDown:function(e){return i(e,r)}})]}),Object(O.jsx)("button",{type:"button","data-testid":"login-submit-button",disabled:r,onClick:n,children:"Entrar"})]})]})]})}}]),a}(i.a.Component),x=g,k=function(e){Object(h.a)(a,e);var t=Object(j.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){var e=this.props.album,t=e.artistName,a=e.collectionName,n=e.artworkUrl100;return Object(O.jsxs)("div",{className:"album-card",children:[Object(O.jsx)("img",{src:n,alt:"".concat(a," artwork")}),Object(O.jsxs)("div",{className:"album-texts",children:[Object(O.jsx)("h3",{"data-testid":"album-name",children:a}),Object(O.jsx)("p",{"data-testid":"artist-name",children:t})]})]})}}]),a}(i.a.Component),y=k,C=function(e){Object(h.a)(a,e);var t=Object(j.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){var e=this.props,t=e.albums,a=e.artistSearch;return Object(O.jsx)("section",{className:"albums-board",children:t.length?Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("h2",{children:"Resultado de \xe1lbuns de: ".concat(a)}),t.map((function(e){return Object(O.jsx)("div",{children:Object(O.jsx)(b.b,{to:"/album/".concat(e.collectionId),"data-testid":"link-to-album-".concat(e.collectionId),children:Object(O.jsx)(y,{album:e})})},e.collectionId)}))]}):Object(O.jsx)("h2",{children:"Nenhum \xe1lbum foi encontrado"})})}}]),a}(i.a.Component),N=C,S="user",I=function(e){return localStorage.setItem(S,JSON.stringify(e))},F=function(e){return function(t){setTimeout((function(){t(e)}),1500)}},w=function(){return new Promise((function(e){var t=JSON.parse(localStorage.getItem(S));null===t&&(t={}),F(t)(e)}))},E=a.p+"static/media/default-profile.055e3178.svg",K=function(e){Object(h.a)(a,e);var t=Object(j.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).state={userName:"",userImage:"",loading:!0},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this;w().then((function(t){var a=t.name,n=t.image;e.setState({userName:a,userImage:n,loading:!1})}))}},{key:"render",value:function(){var e=this.state,t=e.userName,a=e.userImage,n=e.loading,i=a.length?a:E;return Object(O.jsxs)("header",{"data-testid":"header-component",children:[Object(O.jsxs)("div",{className:"title-container",children:[Object(O.jsx)("h1",{children:"trybe"}),Object(O.jsx)("img",{className:"earphone-img",src:v,alt:"Fones de ouvido"}),Object(O.jsx)("h1",{children:"tunes"})]}),Object(O.jsx)("div",{className:"user-container",children:n?Object(O.jsx)(f,{className:"user"}):Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("h2",{"data-testid":"header-user-name",children:t}),Object(O.jsx)("img",{className:"profile-img",src:i,alt:t})]})}),Object(O.jsxs)("div",{className:"links-container",children:[Object(O.jsx)(b.b,{to:"/search","data-testid":"link-to-search",children:"Pesquisa"}),Object(O.jsx)(b.b,{to:"/favorites","data-testid":"link-to-favorites",children:"Favoritos"}),Object(O.jsx)(b.b,{to:"/profile","data-testid":"link-to-profile",children:"Perfil"})]})]})}}]),a}(i.a.Component),D=a(16),P=a(12),J=a.n(P),M=function(){var e=Object(D.a)(J.a.mark((function e(t){var a,n,i,c,r,s;return J.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=encodeURI(t).replaceAll("%20","+"),n="https://itunes.apple.com/search?entity=album&term=".concat(a,"&attribute=allArtistTerm"),e.next=4,fetch(n);case 4:return i=e.sent,e.next=7,i.json();case 7:return c=e.sent,r=c.results,s=r.map((function(e){return{artistId:e.artistId,artistName:e.artistName,collectionId:e.collectionId,collectionName:e.collectionName,collectionPrice:e.collectionPrice,artworkUrl100:e.artworkUrl100,releaseDate:e.releaseDate,trackCount:e.trackCount}})),e.abrupt("return",s);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),R=M,U=function(e){Object(h.a)(a,e);var t=Object(j.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).state={searchInput:"",artistSearch:"",albumsList:[],loading:!1,showResults:!1},e.handleChange=e.handleChange.bind(Object(d.a)(e)),e.handleClick=e.handleClick.bind(Object(d.a)(e)),e.handleEnterKey=e.handleEnterKey.bind(Object(d.a)(e)),e}return Object(u.a)(a,[{key:"handleChange",value:function(e){var t=e.target,a=t.name,n=t.value;this.setState(Object(o.a)({},a,n))}},{key:"handleClick",value:function(){var e=this,t=this.state.searchInput;R(t),this.setState((function(){return{searchInput:"",artistSearch:t,loading:!0,showResults:!1}}),(function(){return R(t).then((function(t){return e.setState({albumsList:t,loading:!1,showResults:!0})}))}))}},{key:"handleEnterKey",value:function(e,t){"Enter"!==e.key||t||this.handleClick()}},{key:"render",value:function(){var e=this,t=this.state,a=t.searchInput,n=t.artistSearch,i=t.albumsList,c=t.loading,r=t.showResults,s=a.length<2;return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(K,{}),Object(O.jsxs)("main",{className:"search","data-testid":"page-search",children:[Object(O.jsxs)("form",{className:"search-form",onSubmit:function(e){return e.preventDefault()},children:[Object(O.jsx)("label",{htmlFor:"searchInput",children:Object(O.jsx)("input",{type:"text","data-testid":"search-artist-input",placeholder:"Pesquise seu artista",name:"searchInput",autoComplete:"off",value:a,onKeyDown:function(t){return e.handleEnterKey(t,s)},onChange:this.handleChange})}),Object(O.jsx)("button",{className:"search-button",type:"button","data-testid":"search-artist-button",disabled:s,onClick:this.handleClick,children:"Buscar"})]}),c&&Object(O.jsx)(f,{className:"search"}),r&&Object(O.jsx)(N,{albums:i,artistSearch:n})]})]})}}]),a}(i.a.Component),q=function(){var e=Object(D.a)(J.a.mark((function e(t){var a,n;return J.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://itunes.apple.com/lookup?id=".concat(t,"&entity=song"));case 2:return a=e.sent,e.next=5,a.json();case 5:return n=e.sent,e.abrupt("return",n.results);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),L=q,T=a(26),A="favorite_songs";JSON.parse(localStorage.getItem(A))||localStorage.setItem(A,JSON.stringify([]));var B=function(){return JSON.parse(localStorage.getItem(A))},z=function(e){return localStorage.setItem(A,JSON.stringify(e))},$=function(e){return function(t){setTimeout((function(){t(e)}),500)}},_=function(){return new Promise((function(e){var t=B();$(t)(e)}))},G=function(e){return new Promise((function(t){if(e){var a=B();z([].concat(Object(T.a)(a),[e]))}$("OK")(t)}))},H=function(e){return new Promise((function(t){var a=B();z(a.filter((function(t){return t.trackId!==e.trackId}))),$("OK")(t)}))},Q=function(e){Object(h.a)(a,e);var t=Object(j.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).handleChange=e.handleChange.bind(Object(d.a)(e)),e}return Object(u.a)(a,[{key:"handleChange",value:function(e){var t=e.target.checked,a=this.props,n=a.music,i=a.updateFavorites;i(n,t?G:H)}},{key:"render",value:function(){var e=this.props,t=e.music,a=t.trackName,n=t.previewUrl,i=t.trackId,c=e.isFavorite;return Object(O.jsxs)("div",{className:"music-card",children:[Object(O.jsx)("p",{children:a}),Object(O.jsxs)("audio",{"data-testid":"audio-component",src:n,controls:!0,children:[Object(O.jsx)("track",{kind:"captions"}),"O seu navegador n\xe3o suporta o elemento",Object(O.jsx)("code",{children:"audio"}),"."]}),Object(O.jsxs)("label",{htmlFor:i,children:["Favorita",Object(O.jsx)("input",{type:"checkbox",id:i,checked:c,"data-testid":"checkbox-music-".concat(i),onChange:this.handleChange})]})]})}}]),a}(i.a.Component);Q.defaultProps={isFavorite:!0};var V=Q,W=function(e){Object(h.a)(a,e);var t=Object(j.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).state={albumInfo:{},musics:[],loading:!0,favoriteSongs:[]},e.updateFavorites=e.updateFavorites.bind(Object(d.a)(e)),e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.id;L(t).then((function(t){_().then((function(a){e.setState({albumInfo:t[0],musics:t.slice(1),favoriteSongs:a,loading:!1})}))}))}},{key:"updateFavorites",value:function(e,t){var a=this;this.setState({loading:!0},(function(){t(e).then(Object(D.a)(J.a.mark((function e(){var t;return J.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_();case 2:t=e.sent,a.setState({favoriteSongs:t,loading:!1});case 4:case"end":return e.stop()}}),e)}))))}))}},{key:"render",value:function(){var e=this,t=this.state,a=t.albumInfo,n=t.musics,i=t.favoriteSongs,c=t.loading;return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(K,{}),Object(O.jsx)("main",{"data-testid":"page-album",className:"album",children:c?Object(O.jsx)(f,{className:"album"}):Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("div",{className:"album-container",children:Object(O.jsx)(y,{album:a})}),Object(O.jsx)("div",{className:"music-board",children:n.map((function(t){var a=i.some((function(e){return e.trackId===t.trackId}));return Object(O.jsx)(V,{music:t,updateFavorites:e.updateFavorites,isFavorite:a},t.trackId)}))})]})})]})}}]),a}(i.a.Component),X=function(e){Object(h.a)(a,e);var t=Object(j.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).state={favoriteSongs:[],loading:!0},e.updateFavorites=e.updateFavorites.bind(Object(d.a)(e)),e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this;_().then((function(t){e.setState({favoriteSongs:t,loading:!1})}))}},{key:"updateFavorites",value:function(e,t){var a=this;this.setState({loading:!0},(function(){t(e).then(Object(D.a)(J.a.mark((function e(){var t;return J.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_();case 2:t=e.sent,a.setState({favoriteSongs:t,loading:!1});case 4:case"end":return e.stop()}}),e)}))))}))}},{key:"render",value:function(){var e=this,t=this.state,a=t.favoriteSongs,n=t.loading;return Object(O.jsxs)("div",{"data-testid":"page-favorites",children:[Object(O.jsx)(K,{}),Object(O.jsx)("main",{className:"favorites",children:n?Object(O.jsx)(f,{className:"favorites"}):Object(O.jsx)(O.Fragment,{children:a.map((function(t){return Object(O.jsx)(V,{music:t,updateFavorites:e.updateFavorites,isFavorite:!0},t.trackId)}))})})]})}}]),a}(i.a.Component),Y=function(e){Object(h.a)(a,e);var t=Object(j.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){var e=this.props.user,t=e.name,a=e.email,n=e.image,i=e.description,c=n.length?n:E;return Object(O.jsxs)("main",{className:"profile",children:[Object(O.jsxs)("div",{className:"img-container",children:[Object(O.jsx)("img",{className:"profile-img",src:c,alt:t,"data-testid":"profile-image"}),Object(O.jsx)(b.b,{to:"/profile/edit",children:"Editar perfil"})]}),Object(O.jsxs)("div",{className:"profile-item-container",children:[Object(O.jsx)("h3",{children:"Nome"}),Object(O.jsx)("p",{children:t})]}),Object(O.jsxs)("div",{className:"profile-item-container",children:[Object(O.jsx)("h3",{children:"E-mail"}),Object(O.jsx)("p",{children:a})]}),Object(O.jsxs)("div",{className:"profile-item-container",children:[Object(O.jsx)("h3",{children:"Descri\xe7\xe3o"}),Object(O.jsx)("p",{children:i})]})]})}}]),a}(i.a.Component),Z=Y,ee=function(e){Object(h.a)(a,e);var t=Object(j.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).state={user:{},loading:!0},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this;w().then((function(t){e.setState({user:t,loading:!1})}))}},{key:"render",value:function(){var e=this.state,t=e.user,a=e.loading;return Object(O.jsxs)("div",{"data-testid":"page-profile",children:[Object(O.jsx)(K,{}),a?Object(O.jsx)(f,{className:"profile"}):Object(O.jsx)(Z,{user:t})]})}}]),a}(i.a.Component),te=function(e){Object(h.a)(a,e);var t=Object(j.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).state={name:"",email:"",image:"",description:"",loading:!1},e.handleChange=e.handleChange.bind(Object(d.a)(e)),e.handleClick=e.handleClick.bind(Object(d.a)(e)),e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this;w().then((function(t){e.setState(Object(s.a)(Object(s.a)({},t),{},{loading:!1}))}))}},{key:"handleChange",value:function(e){var t=e.target,a=t.name,n=t.value;this.setState(Object(o.a)({},a,n))}},{key:"handleClick",value:function(){var e=this.state,t=e.name,a=e.email,n=e.image,i=e.description,c=this.props.history;this.setState({loading:!0},(function(){var e;(e={name:t,email:a,image:n,description:i},new Promise((function(t){I(Object(s.a)({},e)),F("OK")(t)}))).then((function(){c.push("/profile")}))}))}},{key:"render",value:function(){var e=this.state,t=e.name,a=e.email,n=e.image,i=e.description,c=e.loading,r=!(t.length&&a.length&&n.length&&a.match(/^[\w.-]+[@][\w.]+[.][\w.]+$/)),s=n.length?n:E;return Object(O.jsxs)("div",{"data-testid":"page-profile-edit",children:[Object(O.jsx)(K,{}),c?Object(O.jsx)(f,{className:"profile"}):Object(O.jsxs)("form",{className:"profile",children:[Object(O.jsxs)("div",{className:"img-container",children:[Object(O.jsx)("img",{className:"profile-img",src:s,alt:t}),Object(O.jsx)("label",{htmlFor:"image",children:Object(O.jsx)("input",{type:"text","data-testid":"edit-input-image",name:"image",autoComplete:"off",value:n,onChange:this.handleChange})})]}),Object(O.jsxs)("label",{className:"profile-item-container",htmlFor:"name",children:[Object(O.jsx)("h3",{children:"Nome"}),Object(O.jsx)("p",{children:"Fique a vontade para utilizar seu nome social"}),Object(O.jsx)("input",{type:"text","data-testid":"edit-input-name",name:"name",autoComplete:"off",value:t,onChange:this.handleChange})]}),Object(O.jsxs)("label",{className:"profile-item-container",htmlFor:"text",children:[Object(O.jsx)("h3",{children:"E-mail"}),Object(O.jsx)("p",{children:"Escolha um e-mail que consulte diariamente."}),Object(O.jsx)("input",{type:"email","data-testid":"edit-input-email",name:"email",autoComplete:"off",value:a,onChange:this.handleChange})]}),Object(O.jsxs)("label",{className:"profile-item-container",htmlFor:"description",children:[Object(O.jsx)("h3",{children:"Descri\xe7\xe3o"}),Object(O.jsx)("input",{type:"text","data-testid":"edit-input-description",name:"description",autoComplete:"off",value:i,onChange:this.handleChange})]}),Object(O.jsx)("button",{type:"button","data-testid":"edit-button-save",disabled:r,onClick:this.handleClick,children:"Salvar"})]})]})}}]),a}(i.a.Component),ae=function(e){Object(h.a)(a,e);var t=Object(j.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return Object(O.jsx)("div",{"data-testid":"page-not-found",children:"Not Found"})}}]),a}(i.a.Component),ne=ae,ie=function(e){Object(h.a)(a,e);var t=Object(j.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).state={loggedIn:!1,userName:"",loading:!1},e.handleChange=e.handleChange.bind(Object(d.a)(e)),e.handleClick=e.handleClick.bind(Object(d.a)(e)),e.handleEnterKey=e.handleEnterKey.bind(Object(d.a)(e)),e}return Object(u.a)(a,[{key:"handleClick",value:function(){var e=this,t=this.state.userName;this.setState((function(){return{loading:!0}}),(function(){return(a={name:t},new Promise((function(e){I(Object(s.a)(Object(s.a)({},{name:"",email:"",image:"",description:""}),a)),F("OK")(e)}))).then((function(){return e.setState({loggedIn:!0})}));var a}))}},{key:"handleChange",value:function(e){var t=e.target,a=t.name,n=t.value;this.setState(Object(o.a)({},a,n))}},{key:"handleEnterKey",value:function(e,t){"Enter"!==e.key||t||this.handleClick()}},{key:"render",value:function(){var e=this.state.loggedIn;return Object(O.jsx)(b.a,{basename:"/trybe-tunes",children:Object(O.jsxs)(m.d,{children:[Object(O.jsx)(m.b,{exact:!0,path:"/",children:e?Object(O.jsx)(m.a,{to:"/search"}):Object(O.jsx)(x,Object(s.a)(Object(s.a)({},this.state),{},{handleChange:this.handleChange,handleClick:this.handleClick,handleEnterKey:this.handleEnterKey}))}),Object(O.jsx)(m.b,{exact:!0,path:"/",component:x}),Object(O.jsx)(m.b,{path:"/search",component:U}),Object(O.jsx)(m.b,{path:"/album/:id",render:function(e){return Object(O.jsx)(W,Object(s.a)({},e))}}),Object(O.jsx)(m.b,{path:"/favorites",component:X}),Object(O.jsx)(m.b,{exact:!0,path:"/profile",component:ee}),Object(O.jsx)(m.b,{path:"/profile/edit",component:te}),Object(O.jsx)(m.b,{path:"*",component:ne})]})})}}]),a}(i.a.Component);r.a.render(Object(O.jsx)(i.a.StrictMode,{children:Object(O.jsx)(ie,{})}),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.9fd535fb.chunk.js.map