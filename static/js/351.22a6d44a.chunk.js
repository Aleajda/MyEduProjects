"use strict";(self.webpackChunkreactapp1=self.webpackChunkreactapp1||[]).push([[351],{4351:(e,s,a)=>{a.r(s),a.d(s,{default:()=>x});var n=a(2791);const r="Users_avaImg__7l63Y",l="Users_selectedPage__ZisjQ",t="Users_unselectedPage__OiZHF",i="Users_paginator__agakE",o="Users_paginatorContent__Pp0Fn",c="Users_navBtn__u-+IH";var d=a(2056),g=a(1087),u=(a(3958),a(184));const h=e=>{let s,a,n=Math.ceil(e.totalUsersCount/e.pageSize),h=[];for(let r=1;r<=n;r++)h.push(r);return e.currentPage<=3?(s=1,a=Math.min(5,n)):e.currentPage>=n-2?(a=n,s=Math.max(1,n-4)):(s=e.currentPage-2,a=e.currentPage+2),(0,u.jsxs)("div",{children:[(0,u.jsx)("div",{className:i,children:(0,u.jsxs)("div",{className:o,children:[(0,u.jsxs)("span",{children:[(0,u.jsx)("button",{className:c,disabled:1===e.currentPage,onClick:()=>e.onPageChanged(1),children:"<< \u043f\u0435\u0440\u0432\u0430\u044f"}),(0,u.jsx)("button",{className:c,disabled:1===e.currentPage,onClick:()=>e.onPageChanged(e.currentPage-1),children:"<< \u043d\u0430\u0437\u0430\u0434"})]}),(0,u.jsx)("span",{children:h.slice(s-1,a).map((s=>(0,u.jsx)("span",{onClick:()=>e.onPageChanged(s),className:e.currentPage===s?l:t,children:s})))}),(0,u.jsxs)("span",{children:[(0,u.jsx)("button",{className:c,disabled:e.currentPage===n,onClick:()=>e.onPageChanged(e.currentPage+1),children:"\u0432\u043f\u0435\u0440\u0435\u0434 >>"}),(0,u.jsx)("button",{className:c,disabled:e.currentPage===n,onClick:()=>e.onPageChanged(n),children:"\u043f\u043e\u0441\u043b\u0435\u0434\u043d\u044f\u044f >>"})]})]})}),e.users.map((s=>(0,u.jsxs)("div",{children:[(0,u.jsx)(g.OL,{to:"/profile/".concat(s.id),children:(0,u.jsx)("div",{className:r,children:(0,u.jsx)("img",{src:null!=s.photos.small?s.photos.small:d,alt:""})})}),(0,u.jsx)("div",{children:s.name}),(0,u.jsx)("div",{children:s.status}),(0,u.jsx)("div",{children:s.followed?(0,u.jsx)("button",{disabled:e.isFollowing.some((e=>e===s.id)),onClick:()=>{e.unfollow(s.id)},children:"Unfollow"}):(0,u.jsx)("button",{disabled:e.isFollowing.some((e=>e===s.id)),onClick:()=>{e.follow(s.id)},children:"Follow"})})]},s.id)))]})};var P=a(946),j=a(4420),p=a(9572),U=a(1103);const x=(0,a(1154).qC)((0,j.$j)((e=>({users:e.Users.users,pageSize:e.Users.pageSize,totalUsersCount:e.Users.totalUsersCount,currentPage:e.Users.currentPage,isLoading:e.Users.isLoading,isFollowing:e.Users.isFollowing})),{unfollow:P.fv,follow:P.ZN,setUsers:P.HM,clearUsers:P.B4,setCurrentPage:P.D4,setTotalUsersCount:P.K1,setUsersAreLoading:P.XO,setFollowingInProgress:P.Vb,getUsers:P.Rf}),U.D)((e=>{(0,n.useEffect)((()=>(e.getUsers(e.currentPage,e.pageSize),()=>{e.clearUsers()})),[]);return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(h,{...e,onPageChanged:s=>{e.setCurrentPage(s),e.clearUsers(),e.getUsers(s,e.pageSize)}}),e.isLoading?(0,u.jsx)(p.Z,{}):null]})}))}}]);
//# sourceMappingURL=351.22a6d44a.chunk.js.map