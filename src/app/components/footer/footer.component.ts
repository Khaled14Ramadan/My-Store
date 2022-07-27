import { Component, OnInit } from '@angular/core';
import { faFacebook , faYoutube, faLinkedin , faGithub } from '@fortawesome/free-brands-svg-icons'

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  facebook=faFacebook;
  youtube=faYoutube;
  linkedin=faLinkedin;
  github=faGithub;

  constructor() { }

  ngOnInit(): void {
  }

}
