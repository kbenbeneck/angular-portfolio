import { Component } from "@angular/core";

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent {
  scrollToAbout() {
    document.getElementById("about").scrollIntoView({behavior: "smooth"})
  }
}
