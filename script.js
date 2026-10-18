"use strict";
const config = window.PORTFOLIO_CONFIG || {};
for (const anchor of document.querySelectorAll("[data-config]")) {
  const name = anchor.dataset.config;
  const value = typeof config[name] === "string" ? config[name].trim() : "";
  if (value) {
    anchor.href = name === "email" ? `mailto:${value}` : value;
    if (name !== "email") { anchor.target = "_blank"; anchor.rel = "noopener noreferrer"; }
  } else {
    anchor.href = "#";
    anchor.title = `Please add your ${name} link to site-config.js before publishing`;
    anchor.addEventListener("click", e => { e.preventDefault(); alert(anchor.title); });
  }
}
const year = document.getElementById("current-year");
if(year) year.textContent = String(new Date().getFullYear());
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.getElementById("primary-nav");
if(menuToggle && nav) {
  menuToggle.addEventListener("click", () => {
    const open = menuToggle.getAttribute("aria-expanded") !== "true";
    menuToggle.setAttribute("aria-expanded",String(open));
    menuToggle.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
    nav.classList.toggle("is-open", open);
  });
  nav.querySelectorAll("a").forEach(link=>link.addEventListener("click",()=>{
    nav.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded","false");
  }));
}
const linksBySection=[...document.querySelectorAll(".nav-link[href^='#']")];
if(linksBySection.length && "IntersectionObserver" in window) {
  const observer = new IntersectionObserver(entries=>{
    const visible=entries.filter(e=>e.isIntersecting).sort((a,b)=>b.intersectionRatio-a.intersectionRatio)[0];
    if(!visible) return;
    linksBySection.forEach(link=>link.classList.toggle("active",link.getAttribute("href")===`#${visible.target.id}`));
  },{rootMargin:"-25% 0px -45% 0px"});
  ["home","experience","projects"].forEach(id=>{const el=document.getElementById(id);if(el)observer.observe(el);});
}
const corner=document.querySelector(".site-corner");
if(corner)corner.addEventListener("click",()=>corner.remove());
for(const anchor of document.querySelectorAll("[data-project-link]")) {
  const [project,kind]=anchor.dataset.projectLink.split(":");
  const dest=config.projects?.[project]?.[kind];
  if(dest){anchor.href=dest; anchor.target="_blank";anchor.rel="noopener noreferrer";}
  else{anchor.href="#";anchor.title=`Add ${project} ${kind} URL in site-config.js`;anchor.addEventListener("click",event=>{event.preventDefault();alert(anchor.title);});}
}
