import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../user.service';
import {ActivatedRoute, Router} from '@angular/router';
import {filter, map, mergeMap, tap} from 'rxjs/operators';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {

  public userFormGroup: FormGroup;

  public nameCtrl: FormControl;
  public usernameCtrl: FormControl;
  public emailCtrl: FormControl;
  public phoneCtrl: FormControl;

  public isEditMode: boolean;

  constructor(private formBuilder: FormBuilder,
              private userService: UserService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.initForm();

    this.activatedRoute.params.pipe(
      filter(params => params.id !== undefined),
      map(params => params.id),
      tap(id => this.isEditMode = true),
      mergeMap(id => this.userService.getOne(id))
    ).subscribe(user => this.userFormGroup.patchValue(user));
  }

  initForm(): void {
    this.nameCtrl = this.formBuilder.control('', {validators: [Validators.required, Validators.min(10)]});
    this.usernameCtrl = this.formBuilder.control('', {validators: [Validators.required]});
    this.emailCtrl = this.formBuilder.control('', {validators: [Validators.required]});
    this.phoneCtrl = this.formBuilder.control('', {validators: [Validators.required]});

    this.userFormGroup = this.formBuilder.group({
      name: this.nameCtrl,
      username: this.usernameCtrl,
      email: this.emailCtrl,
      phone: this.phoneCtrl
    });
  }

  addUser(): void {
    const user = this.userFormGroup.value;
    console.dir(user);
    console.log('submit');
    if (this.isEditMode) {
      this.userService.create(user)
        .subscribe(userSaved => {
          this.router.navigate(['/users']);
        });
    }
  }
}
