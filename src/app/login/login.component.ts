import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy{
  images: string[] = ['../../assets/login/bg1.png', '../../assets/login/bg2.png', '../../assets/login/bg.png']; // List of background images
  index: number = 0;
  intervalId: any;

  ngOnInit() {
    this.changeBackground(); // Set initial background image
    this.intervalId = setInterval(() => {
      this.changeBackground(); // Change background every 5 seconds
    }, 5000);
  }

  ngOnDestroy() {
    clearInterval(this.intervalId); // Clean up the interval when the component is destroyed
  }

  changeBackground() {
    document.body.style.backgroundImage = `url("${this.images[this.index]}")`;
    this.index = (this.index + 1) % this.images.length; // Move to the next image or cycle back to the first one
  }
}
