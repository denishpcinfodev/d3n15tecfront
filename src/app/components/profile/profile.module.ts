import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './components/profile.component';
import { TelefoneModule } from 'src/app/shared/pipes/telefone/telefone.module';
import { CpfModule } from 'src/app/shared/pipes/cpf/cpf.module';
import { FormsModule } from '@angular/forms';
import { CpfPipe } from 'src/app/shared/pipes/cpf/cpf.pipe';
import { UsersEditModule } from '../users-edit/users-edit.module';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    ProfileComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    TelefoneModule,
    CpfModule,
    FormsModule,
    UsersEditModule,
    MatButtonModule
  ],
  exports:[
    ProfileComponent
  ],
  providers: [CpfPipe]
})
export class ProfileModule { }
