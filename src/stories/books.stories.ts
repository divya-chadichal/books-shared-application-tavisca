import { CommonModule } from '@angular/common';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { BooksComponent } from '../app/books/books.component';
import { AddEditBookComponent } from '../app/books/add-edit-book/add-edit-book.component';
import { HttpClientModule } from '@angular/common/http';
import { Routes } from '@angular/router';
import { BooksService } from '../app/core/services/books.service';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

const routes: Routes = [
    { path: '', component: BooksComponent },
    { path: 'book-actions', component: AddEditBookComponent }
];

const booksList = [
    {
        id: 1,
        title: 'StoryBook',
        author: 'James',
        description: 'Test Book',
        published: '2007'
    },
    {
        id: 2,
        title: 'StoryBook Test',
        author: 'Ravi',
        description: 'Test Book',
        published: '2019'
    }
];

export default {
    title: 'Books component',
    component: BooksComponent,
} as Meta;

const Template: Story<BooksComponent> = (args: BooksComponent) => ({
    component: BooksComponent,
    templateUrl: '../app/books/books.component.html',
    styleUrls: ['../app/books/books.component.scss'],
    moduleMetadata: {
        declarations: [BooksComponent, AddEditBookComponent],
        imports: [
          CommonModule,
          HttpClientModule,
          FormsModule,
          ReactiveFormsModule,
          RouterTestingModule
        ],
        providers: [BooksService],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
    },
    props: { args, books$: booksList },
});

export const Default = Template.bind({});



