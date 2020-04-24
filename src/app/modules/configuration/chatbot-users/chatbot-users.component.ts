import { Component, OnInit } from '@angular/core';
import { UserService } from '@core/services/user.service';
import { BehaviorSubject } from 'rxjs';
import { User } from '@model/user.model';
import { UserRole } from '@enum/user-role.enum';
import { ConfirmDialogComponent } from '../../shared/components/confirm-dialog/confirm-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-chatbot-users',
  templateUrl: './chatbot-users.component.html',
  styleUrls: ['./chatbot-users.component.scss']
})
export class ChatbotUsersComponent implements OnInit {

  users$: BehaviorSubject<User[]>;
  loading$: BehaviorSubject<boolean>;
  displayedColumns = ['firstname' , 'lastname', 'email', 'role', 'createdAt', 'actions'];
  addUser = false;

  constructor(private _userService: UserService,
              private _dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.users$ = this._userService.entities$;
    this.loading$ = this._userService.loading$;
    this._userService.load().subscribe();
  }

  isUserAdmin(user: User) {
    return user.role === UserRole.admin;
  }

  deleteUser(user: User) {
    const dialogRef = this._dialog.open(ConfirmDialogComponent, {
      data: {
        message: `Êtes-vous sûr de vouloir supprimer l'utilsateur <b>${user.firstName} ${user.lastName}</b> ?
<br/>Cette action est irréversible.`
      },
      autoFocus: false
    });

    dialogRef.afterClosed()
      .pipe(filter(r => !!r))
      .subscribe(() => {
        this._userService.delete(user).subscribe();
      });
  }

}
