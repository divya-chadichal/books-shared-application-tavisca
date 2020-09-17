import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { provideMockStore } from '@ngrx/store/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { RegisterUserComponent } from '../app/register/components/register-user/register-user.component';
import { RegisterRoutingModule } from '../app/register/register-routing.module';


export default {
  title: 'Register Component',
  component: RegisterUserComponent,
  decorators: [
    moduleMetadata({
      declarations: [RegisterUserComponent],
      imports: [
        CommonModule,
        RegisterRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        RouterTestingModule
      ],
      providers: [
        provideMockStore()
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }),
  ],
} as Meta;

const Template: Story<RegisterUserComponent> = (args: RegisterUserComponent) => ({
  component: RegisterUserComponent,
  props: args
});

export const register = Template.bind({});

export const RegisterError = Template.bind({});

RegisterError.args = {
    submitted: true
}

