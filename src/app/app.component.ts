import { Component, OnInit, HostListener, Renderer2 } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  name = 'Angular';

  constructor(private ren: Renderer2) {

  }

  ngOnInit() {

  }

  @HostListener('document:scroll', ['$event'])
  scrollHandler(event) {
    console.log(event);
    // if (this.isScrolledIntoView(document.querySelectorAll('.dv')[7])) {
    //   this.ren.addClass(document.querySelectorAll('.dv')[7], "wow")
    // } else {
    //   this.ren.removeClass(document.querySelectorAll('.dv')[7], "wow")
    // }

    [].forEach.call(document.querySelectorAll('.dv'), (child) => {
      if (this.gambitGalleryIsInView(child)) {
        this.ren.addClass(child, "wow")
      } else {
        this.ren.removeClass(child, "wow")
      }
    });

    // if (this.gambitGalleryIsInView(document.querySelectorAll('.dv')[2])) {
    //   this.ren.addClass(document.querySelectorAll('.dv')[2], "wow")
    // } else {
    //   this.ren.removeClass(document.querySelectorAll('.dv')[2], "wow")
    // }
    // if (this.gambitGalleryIsInView(document.querySelectorAll('.dv')[4])) {
    //   this.ren.addClass(document.querySelectorAll('.dv')[4], "wow")
    // } else {
    //   this.ren.removeClass(document.querySelectorAll('.dv')[4], "wow")
    // }
    // if (this.gambitGalleryIsInView(document.querySelectorAll('.dv')[6])) {
    //   this.ren.addClass(document.querySelectorAll('.dv')[6], "wow")
    // } else {
    //   this.ren.removeClass(document.querySelectorAll('.dv')[6], "wow")
    // }
    // if (this.gambitGalleryIsInView(document.querySelectorAll('.dv')[8])) {
    //   this.ren.addClass(document.querySelectorAll('.dv')[8], "wow")
    // } else {
    //   this.ren.removeClass(document.querySelectorAll('.dv')[8], "wow")
    // }
    // if (this.gambitGalleryIsInView(document.querySelectorAll('.dv')[9])) {
    //   this.ren.addClass(document.querySelectorAll('.dv')[9], "wow")
    // } else {
    //   this.ren.removeClass(document.querySelectorAll('.dv')[9], "wow")
    // }

  }

  isScrolledIntoView(elem) {
    var docViewTop = document.querySelector("#wrapper").scrollTop;
    var docViewBottom = docViewTop + document.querySelector("#wrapper").clientHeight;

    var elemTop = elem.getBoundingClientRect().top;
    var elemBottom = elemTop + elem.clientHeight;

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));

  }

  gambitGalleryIsInView = el => {
    const scroll = window.scrollY || window.pageYOffset
    const boundsTop = el.getBoundingClientRect().top + scroll

    const viewport = {
      top: scroll,
      bottom: scroll + window.innerHeight,
    }

    const bounds = {
      top: boundsTop,
      bottom: boundsTop + el.clientHeight,
    }

    return (bounds.bottom >= viewport.top && bounds.bottom <= viewport.bottom)
      || (bounds.top <= viewport.bottom && bounds.top >= viewport.top);
  }

}
