import { CommonModule } from '@angular/common';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { AddEditBookComponent } from '../app/books/add-edit-book/add-edit-book.component';
import { HttpClientModule } from '@angular/common/http';
import { BooksService } from '../app/core/services/books.service';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { BookEffects } from 'src/app/books/store/effects/books-effects';
import { bookReducer } from 'src/app/books/store/reducers/books-reducer';

const bookList = {
    id: 1,
    title: 'StoryBook',
    author: 'James',
    description: 'Test Book',
    published: '2007'
};

export default {
    title: 'Add Edit component',
    component: AddEditBookComponent,
} as Meta;

const Template: Story<AddEditBookComponent> = (args: AddEditBookComponent) => ({
    component: AddEditBookComponent,
    moduleMetadata: {
        declarations: [AddEditBookComponent],
        imports: [
          CommonModule,
          HttpClientModule,
          FormsModule,
          ReactiveFormsModule,
          RouterTestingModule,
          StoreModule.forRoot({}),
          EffectsModule.forRoot([])
        ],
        providers: [BooksService],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
    },
    props: args
});

export const add = Template.bind({});
add.args = {};

export const edit = Template.bind({});

edit.args = {
    id: '1',
    book: bookList,
    showAdd: false
};



