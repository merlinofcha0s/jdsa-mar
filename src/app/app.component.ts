import {Component} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'vinyl-mgt';

  constructor(private router: Router, private activate: ActivatedRoute) {
  }

  onClickUsers(): void {
    this.router.navigate(['/users']);
  }
}
